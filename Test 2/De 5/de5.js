function myFunction() {
    let str = document.getElementById('sentence').value;

    console.log(str);

    if (str == '') {
        alert('Vui lòng nhập chuỗi!');
        return 0;
    }

    str = str.trim();
    str = str.replace(/\s+/g, ' ');

    str = str.split(' ');
    document.getElementById('result').value = str.length;
}
