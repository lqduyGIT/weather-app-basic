🌤️ Weather App Basic
Ứng dụng cho phép nhập tên thành phố để xem thời tiết theo thời gian thực. Dữ liệu lấy từ OpenWeather API qua Cloudflare Workers.

⚙️ Cách hoạt động
Nhập tên thành phố vào ô tìm kiếm.
Nhấn Enter hoặc nút 🔍 để tìm kiếm.
Kết quả thời tiết sẽ hiển thị bao gồm:
Nhiệt độ hiện tại 🌡️
Độ ẩm 💧
Tốc độ gió 🌬️
Dữ liệu thời tiết được lấy từ OpenWeather API qua Cloudflare Workers.

🔗 Demo: https://lqduygit.github.io/weather-app-basic/

Search interface:
![image](https://github.com/user-attachments/assets/88371cca-e128-443f-8f0a-2471c2135762)

Results interface:
![image](https://github.com/user-attachments/assets/a4b3015b-158d-4dfe-922b-0a238684e6e2)

/structure weather-app
│── index.html     # Giao diện chính  
│── style.css      # Định dạng giao diện  
│── script.js      # Xử lý tìm kiếm thời tiết  

🛠️ Công nghệ
HTML, CSS, JS: Giao diện & logic
Cloudflare Workers: Proxy API
OpenWeather API: Lấy dữ liệu thời tiết
