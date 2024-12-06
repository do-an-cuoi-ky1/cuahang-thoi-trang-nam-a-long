function calculateSize() {
    // Lấy giá trị từ các input
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const chest = parseFloat(document.getElementById("chest").value);
    const waist = parseFloat(document.getElementById("waist").value);
    const legLength = parseFloat(document.getElementById("legLength").value);

    let shirtSize = "";
    let pantsSize = "";

    // Tính size áo
    if (height >= 160 && height <= 167 && weight >= 50 && weight <= 60 && chest >= 92 && chest <= 100) {
        shirtSize = "S";
    } else if (height >= 163 && height <= 170 && weight >= 55 && weight <= 65 && chest >= 96 && chest <= 104) {
        shirtSize = "M";
    } else if (height >= 165 && height <= 172 && weight >= 65 && weight <= 75 && chest >= 100 && chest <= 108) {
        shirtSize = "L";
    } else if (height >= 170 && height <= 180 && weight >= 75 && weight <= 90 && chest >= 104 && chest <= 112) {
        shirtSize = "XL";
    } else if (height >= 170 && height <= 190 && weight >= 85 && weight <= 100 && chest >= 106 && chest <= 114) {
        shirtSize = "XLL";
    } else {
        shirtSize = "Không tìm thấy size áo phù hợp";
    }

    // Tính size quần
    if (waist >= 70 && waist <= 75 && legLength >= 70 && legLength <= 75) {
        pantsSize = "S";
    } else if (waist >= 75 && waist <= 80 && legLength >= 75 && legLength <= 80) {
        pantsSize = "M";
    } else if (waist >= 80 && waist <= 85 && legLength >= 80 && legLength <= 85) {
        pantsSize = "L";
    } else if (waist >= 85 && waist <= 90 && legLength >= 85 && legLength <= 90) {
        pantsSize = "XL";
    } else if (waist >= 90 && waist <= 95 && legLength >= 90 && legLength <= 95) {
        pantsSize = "XLL";
    } else {
        pantsSize = "Không tìm thấy size quần phù hợp";
    }

    // Hiển thị kết quả
    document.getElementById("shirtResult").innerText = "Size áo: " + shirtSize;
    document.getElementById("pantsResult").innerText = "Size quần: " + pantsSize;
}
