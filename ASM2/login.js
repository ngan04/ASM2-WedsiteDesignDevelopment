document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn việc submit form

  // Lấy giá trị từ input
  const username = document.getElementById('usernameInput').value;
  const password = document.getElementById('passwordInput').value;

  // Thực hiện kiểm tra thông tin đăng nhập (ở đây là kiểm tra mẫu đơn giản)
  if (username === '1' && password === '1') {
      // Nếu thông tin đúng, chuyển hướng đến trang khác (ví dụ: welcome.html)
      window.location.href = '1.html';
  } else {
      // Nếu thông tin sai, hiển thị thông báo
      alert('Thông tin đăng nhập không đúng. Vui lòng thử lại.');
  }
});

document.getElementById('forgotPassword').addEventListener('click', function(event) {
  event.preventDefault(); // Ngăn chặn mặc định hành động của thẻ a

  // Lấy thông tin tài khoản từ input (đã định nghĩa ở trên)
  const username = document.getElementById('usernameInput').value;
  const password = document.getElementById('passwordInput').value;

  // Kiểm tra xem đã có thông tin tài khoản hay không
  if (username !== '' && password !== '') {
      // Nếu có thông tin, chuyển hướng đến trang tạo tài khoản (1.html)
      window.location.href = '1.html';
  } else {
      // Nếu chưa có thông tin, thông báo người dùng nhập thông tin đăng nhập trước
      alert('Vui lòng nhập thông tin đăng nhập trước khi thực hiện quên mật khẩu.');
  }
});
