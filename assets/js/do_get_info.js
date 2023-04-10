// Get the input field
// Execute a function when the user releases a key on the keyboard
const form = document.forms['submit-to-google-sheet'];
form.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        form.submit();
    }
});

function stepSetKhachHang() {
    var Ho = $.trim($("input[name='txtHo']").val());
    if (Ho == "") {
        alert("Vui lòng nhập Họ của bạn");
        return false;
    }
    var Ten = $.trim($("input[name='txtTen']").val());
    if (Ten == "") {
        alert("Vui lòng nhập tên của bạn");
        return false;
    }
    var email = $.trim($("input[name='txtEmail']").val());
    if (email == "") {
        alert("Vui lòng nhập E-mail");
        return false;
    }
    var pass = $.trim($("input[name='pass']").val());
    if (pass == "") {
        alert("Bạn còn thiếu PassWord!");
        return false;
    }
    var gioitinh = $.trim($("select[name='txtGioiTinh']").val());
    if (gioitinh == "") {
        alert("Bạn chưa chọn giới tính");
        return false;
    }
    var gioitinh = $.trim($("select[name='txtGioiTinh']").val());
    if (gioitinh !== "") {
        alert("BẠN ĐÃ ĐĂNG KÝ THÀNH CÔNG!");
        return true;
    }
    
    doLoading()
        .then(doSetSinhVien)
        .then(doComplete);
}

function doLoading() {
    return new Promise(function(resolve, reject) {

        resolve();
    });
}

function doSetSinhVien() {
    return new Promise(function(resolve, reject) {
        resolve();
    });
}

function doComplete() {
    return new Promise(function(resolve, reject) {
       
        resolve();
    });
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbylJxpwqsAFBgvqrMmsA2ej9V97nVwcJJX_rTKr_ya73A_axFs4CG5FLG77r2U6cHc5/exec';


form.addEventListener('submit', e => {
    e.preventDefault();
  
    showLoadingIndicator();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error));
})

function showLoadingIndicator() {
   
}

function showSuccessMessage(response) {
    console.log('Success!', response);
   
}

function showErrorMessage(error) {
    console.error('Error!', error.message);
    
}