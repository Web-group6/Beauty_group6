// Get the input field
// Execute a function when the user releases a key on the keyboard
const form = document.forms['form-contact'];
form.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        form.submit();
    }
});

function  stepSetKhachHangFeedback() {
    var ten = $.trim($("input[name='txtHoTen']").val());
    if (ten == "") {
        alert("VUI LÒNG NHẬP HỌ TÊN CỦA BẠN");
        return false;
    }
    var email = $.trim($("input[name='txtEmail']").val());
    if (email == "") {
        alert("VUI LÒNG NHẬP EMAIL");
        return false;
    } 
    var phone = $.trim($("input[name='txtPhone']").val());
    if (phone == "") {
        alert("VUI LÒNG NHẬP SỐ ĐIỆN THOẠI");
        return false;
    }
    var birthday = $.trim($("input[name='txtNgaySinh']").val());
    if (birthday == "") {
        alert("VUI LÒNG NHẬP NGÀY SINH");
        return false;
    }
    var titel = $.trim($("input[name='txtTieude']").val());
    if (titel == "") {
        alert("VUI LÒNG NHẬP CHỦ ĐỀ BẠN MUỐN ĐỀ CẬP");
        return false;
    }
    var feedback = $.trim($("input[name='txtVande']").val());
    if (feedback == "") {
        alert("VUI LÒNG CHO TÔI BIẾT BẠN GẶP VẤN ĐỀ GÌ?");
        return false;
    }
    var input = $.trim($("input[name='txtVande']").val());
    if (input !== "") {
        alert("FORM CỦA BẠN ĐÃ ĐƯỢC GỬI");
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


const scriptURL = 'https://script.google.com/macros/s/AKfycbyx7x-osMCPj3n8QEBv0Zwookh8mmswHlnQgA_uw6Yc7dWiR4LRn6wFIqFRq2nMY4xn/exec';

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