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

function stepSetSinhVien() {
    var DN = $.trim($("select[name='txtHo']").val());
    if (DN == '') {
        alert("Vui lòng nhập Họ của bạn");
        return false;
    }
    var DN = $.trim($("select[name='txtTen']").val());
    if (DN == '') {
        alert("Vui lòng nhập tên của bạn");
        return false;
    }
    var DN = $.trim($("input[name='txtEmail']").val());
    if (DN == '') {
        alert("Vui lòng nhập E-mail");
        return false;
    }
    var masv = $.trim($("input[name='pass']").val());
    if (masv == '') {
        alert("Bạn còn thiếu PassWord!");
        return false;
    }
    var hoten = $.trim($("input[name='txtGioiTinh']").val());
    if (hoten == '') {
        alert("Bạn chưa chọn giới tính");
        return false;
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