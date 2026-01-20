import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Activity, 
  Award, 
  UserCheck, 
  Building2, 
  ArrowRight, 
  Phone,
  Facebook,
  MapPin
} from 'lucide-react';
import { YinYangIcon } from './components/Icons';
import RegistrationModal from './components/RegistrationModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const benefits = [
    {
      icon: <Activity size={32} />,
      title: "Điều Trị Chính Xác",
      desc: "Tác động chính xác vào các huyệt đạo, khơi thông kinh lạc, trị liệu tận gốc vấn đề sức khỏe."
    },
    {
      icon: <Zap size={32} />,
      title: "Phục Hồi Năng Lượng",
      desc: "Cân bằng âm dương, phục hồi nguyên khí, giúp cơ thể khỏe mạnh từ sâu bên trong."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Không Tác Dụng Phụ",
      desc: "Phương pháp tự nhiên, không dùng thuốc, an toàn tuyệt đối cho mọi lứa tuổi."
    },
    {
      icon: <UserCheck size={32} />,
      title: "Chuyên Gia Kinh Nghiệm",
      desc: "Đội ngũ lương y, bác sĩ hơn 20 năm kinh nghiệm trong lĩnh vực y học cổ truyền."
    },
    {
      icon: <Award size={32} />,
      title: "Giảm Căng Thẳng",
      desc: "Thư giãn tinh thần, giảm stress hiệu quả ngay sau liệu trình đầu tiên."
    },
    {
      icon: <Building2 size={32} />,
      title: "Cơ Sở Hiện Đại",
      desc: "Không gian tĩnh tại đậm chất Á Đông kết hợp trang thiết bị hỗ trợ hiện đại."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-oriental-brown to-oriental-dark text-oriental-cream font-sans overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <header className="fixed w-full top-0 z-40 bg-oriental-brown/90 backdrop-blur-md border-b border-oriental-gold/20 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-oriental-gold animate-spin-slow">
              <YinYangIcon width={40} height={40} />
            </div>
            <div>
              <h1 className="font-serif text-xl md:text-2xl font-bold text-oriental-gold tracking-wide">
                ĐÔNG Y TÂM PHÁP
              </h1>
              <p className="text-xs text-gray-300 tracking-wider uppercase">Tinh hoa y học cổ truyền</p>
            </div>
          </div>
          <button 
            onClick={openModal}
            className="hidden md:block px-6 py-2 border border-oriental-gold text-oriental-gold hover:bg-oriental-gold hover:text-oriental-brown transition-colors rounded-full font-bold uppercase text-sm tracking-wider"
          >
            Đặt Lịch Ngay
          </button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-oriental-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-oriental-gold/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-1 border border-oriental-gold/50 rounded-full bg-[#2d1b10]/50 backdrop-blur-sm">
              <span className="text-oriental-gold text-sm font-bold uppercase tracking-widest">Phục hồi tự nhiên</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-white">
              Châm Cứu <br/>
              <span className="text-oriental-gold gold-glow">Truyền Thống</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0">
              Khơi thông dòng chảy năng lượng, cân bằng Âm Dương và đánh thức khả năng tự chữa lành của cơ thể với liệu pháp ngàn năm tuổi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button 
                onClick={openModal}
                className="px-8 py-4 bg-gradient-to-r from-oriental-gold to-[#b8952b] text-oriental-brown font-bold rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Đăng Ký Tư Vấn <ArrowRight size={20} />
              </button>
              <a href="#benefits" className="px-8 py-4 border border-oriental-gold/40 text-oriental-gold rounded-lg hover:bg-oriental-gold/10 transition-colors flex items-center justify-center">
                Tìm Hiểu Thêm
              </a>
            </div>
          </div>
          
          <div className="relative group">
             {/* Image Frame with Golden Border */}
            <div className="absolute inset-0 border-2 border-oriental-gold transform translate-x-4 translate-y-4 rounded-lg opacity-60 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/acupuncture/800/600" 
                alt="Châm cứu trị liệu" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oriental-dark/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-oriental-gold font-serif text-xl italic">"Thông bất thống, thống bất thông"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section id="benefits" className="py-20 bg-[#3d2516] relative">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-oriental-gold text-lg font-bold uppercase tracking-widest mb-2">Tại sao chọn chúng tôi</h3>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Lợi Ích Sức Khỏe Vượt Trội</h2>
              <div className="w-24 h-1 bg-oriental-gold mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((item, index) => (
                <div 
                  key={index}
                  className="group bg-oriental-brown border border-oriental-gold/20 p-8 rounded-xl hover:border-oriental-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-oriental-dark rounded-full flex items-center justify-center text-oriental-gold mb-6 group-hover:scale-110 transition-transform border border-oriental-gold/30">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-serif font-bold text-oriental-gold mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/meditation/1920/1080" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-oriental-dark via-oriental-dark/80 to-oriental-dark"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-block p-4 rounded-full border border-oriental-gold/30 bg-oriental-brown/30 backdrop-blur">
               <YinYangIcon className="w-12 h-12 text-oriental-gold mx-auto animate-spin-slow" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Bắt Đầu Hành Trình <br/> 
              <span className="text-oriental-gold">Chữa Lành</span> Của Bạn
            </h2>
            
            <p className="text-xl text-gray-300">
              Đừng để cơn đau cản trở cuộc sống của bạn. Hãy để chúng tôi giúp bạn tìm lại sự cân bằng và an yên.
            </p>

            <button 
              onClick={openModal}
              className="px-10 py-5 bg-oriental-gold text-oriental-brown text-xl font-bold rounded-full shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:bg-white hover:text-oriental-brown hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transform hover:scale-105 transition-all duration-300"
            >
              Đăng Ký Tư Vấn Miễn Phí
            </button>
            
            <p className="text-sm text-gray-400 mt-4">
              * Ưu đãi đặc biệt cho 10 khách hàng đăng ký sớm nhất hôm nay.
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1a1008] border-t border-oriental-gold/20 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <YinYangIcon className="text-oriental-gold w-8 h-8" />
                <span className="text-2xl font-serif font-bold text-white">ĐÔNG Y TÂM PHÁP</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Nơi hội tụ tinh hoa y học cổ truyền và tâm huyết của người thầy thuốc. Chúng tôi cam kết mang lại sức khỏe và bình an cho mọi khách hàng.
              </p>
            </div>
            
            <div>
              <h4 className="text-oriental-gold font-bold uppercase tracking-wider mb-6">Liên Hệ</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <MapPin size={20} className="text-oriental-gold" />
                  <span>123 Đường Y Học, Quận 1, TP.HCM</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-oriental-gold" />
                  <span>0909 123 456</span>
                </li>
                <li className="flex items-center gap-3">
                  <Facebook size={20} className="text-oriental-gold" />
                  <span>facebook.com/dongytamphap</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-oriental-gold font-bold uppercase tracking-wider mb-6">Giờ Làm Việc</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Thứ 2 - Thứ 6</span>
                  <span>08:00 - 20:00</span>
                </li>
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Thứ 7 - Chủ Nhật</span>
                  <span>08:00 - 17:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center border-t border-gray-800 pt-8 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Đông Y Tâm Pháp. Bảo lưu mọi quyền.
          </div>
        </div>
      </footer>

      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;