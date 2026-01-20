import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { API_URL, ZALO_GROUP_URL } from '../constants';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const validatePhone = (phone: string) => {
    const regex = /^(0|84)(3|5|7|8|9)([0-9]{8})$/;
    return regex.test(phone) || (phone.length >= 10 && phone.length <= 11 && !isNaN(Number(phone)));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError('Số điện thoại không hợp lệ (10-11 số).');
      return;
    }

    setLoading(true);

    try {
      // Create FormData to send as POST
      const data = new URLSearchParams();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('timestamp', new Date().toISOString());

      // We use no-cors because Apps Script web apps often have CORS restrictions
      // when called from client-side JS without a proxy. 
      // 'no-cors' allows the request to reach the server, but we can't read the response.
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data
      });

      // Assuming success if fetch didn't throw network error (due to no-cors opacity)
      window.location.href = ZALO_GROUP_URL;
      
    } catch (err) {
      console.error(err);
      setError('Có lỗi kết nối. Vui lòng thử lại.');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-md bg-oriental-dark border-2 border-oriental-gold rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.3)] overflow-hidden animate-fade-in-up">
        
        {/* Header decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-oriental-gold to-transparent"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-oriental-gold/70 hover:text-oriental-gold transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-serif text-center text-oriental-gold mb-2">Đăng Ký Tư Vấn</h2>
          <p className="text-center text-gray-300 text-sm mb-6 font-sans">
            Để lại thông tin để nhận tư vấn chuyên môn miễn phí từ chuyên gia.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 font-sans">
            <div>
              <label className="block text-oriental-gold text-sm font-bold mb-2">Họ và Tên</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#3d2516] border border-oriental-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-oriental-gold focus:ring-1 focus:ring-oriental-gold transition-all"
                placeholder="Nguyễn Văn A"
              />
            </div>

            <div>
              <label className="block text-oriental-gold text-sm font-bold mb-2">Số Điện Thoại</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#3d2516] border border-oriental-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-oriental-gold focus:ring-1 focus:ring-oriental-gold transition-all"
                placeholder="0912345678"
              />
            </div>

            <div>
              <label className="block text-oriental-gold text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#3d2516] border border-oriental-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-oriental-gold focus:ring-1 focus:ring-oriental-gold transition-all"
                placeholder="example@gmail.com"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <div className="bg-[#4a2c1a]/50 p-3 rounded border border-oriental-gold/20 text-xs text-gray-300 italic">
              <span className="text-oriental-gold font-bold">*Lưu ý:</span> Sau khi đăng ký, bạn sẽ được mời tham gia nhóm Zalo để theo dõi các phản hồi thực tế.
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-oriental-gold to-[#b8952b] text-oriental-brown font-bold text-lg py-3 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transform hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : 'Đăng Ký Ngay'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;