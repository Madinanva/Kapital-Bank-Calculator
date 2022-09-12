function Calculate() {
    var mebleg = document.getElementById("mebleg").value;
    var muddet = document.getElementById("muddet").value;
    var faiz = document.getElementById("faiz").value;

    if(30.000 >= mebleg >= 300 && 60 >= muddet >=3) {
        var mebleg = (mebleg * (faiz * 0.01)) / muddet + (mebleg / muddet);
        alert('Nağd pul krediti üçün ayliq ödəniş : ${mebleg}')
    }

    else{
        alert('error')
    }
}