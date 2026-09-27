let orderCode = "";
let isValidOrder = false;
let isRunning = true;

do {
    let menu = "--- HỆ THỐNG QUẢN LÝ BÁN LẺ PHỤ KIỆN GYM ---\n" +
               "1: Nhập và chuẩn hóa mã đơn hàng\n" +
               "2: Tính tiền và in hóa đơn phụ kiện\n" +
               "3: Thoát chương trình\n" +
               "Vui lòng nhập lựa chọn của bạn (1-3):";
               
    let choice = prompt(menu);

    switch (choice) {
        case '1':
            let inputCode = prompt("Nhập mã đơn hàng (Ví dụ: VIP-SHAKER-GLOVES):");
            if (inputCode !== null) {
                orderCode = inputCode.trim().toUpperCase();
                
                if (orderCode.length >= 8) {
                    isValidOrder = true;
                    console.log("Đã cập nhật và chuẩn hóa mã đơn hàng thành công: " + orderCode);
                    alert("Cập nhật mã đơn hàng thành công!");
                } else {
                    isValidOrder = false;
                    console.log("Lỗi: Mã đơn hàng không hợp lệ (tối thiểu 8 ký tự)!");
                    alert("Lỗi: Mã đơn hàng không hợp lệ (tối thiểu 8 ký tự)!");
                }
            }
            break;

        case '2':
            if (!isValidOrder) {
                console.log("Yêu cầu: Vui lòng nhập mã đơn hàng hợp lệ (Chức năng 1) trước khi in hóa đơn!");
                alert("Vui lòng nhập mã đơn hợp lệ ở chức năng 1!");
                break;
            }

            let isVip = orderCode.startsWith("VIP-");
            let itemsString = isVip ? orderCode.slice(4) : orderCode;
            
            let total = 0;
            let receiptDetails = "";
            let startIndex = 0;

            for (let i = 0; i <= itemsString.length; i++) {
                if (itemsString[i] === '-' || i === itemsString.length) {
                    let itemCode = itemsString.slice(startIndex, i);
                    
                    let price = 0;
                    let itemName = "";
                    
                    if (itemCode === "SHAKER") {
                        price = 120000;
                        itemName = "Binh lac";
                    } else if (itemCode === "GLOVES") {
                        price = 180000;
                        itemName = "Gang tay";
                    } else if (itemCode === "STRAP") {
                        price = 150000;
                        itemName = "Day keo lung";
                    }

                    if (price > 0) {
                        total += price;
                        let priceStr = price.toLocaleString("vi-VN") + " VND";
                        let paddingNeeded = 40 - itemName.length;
                        receiptDetails += itemName + priceStr.padStart(paddingNeeded, ".") + "\n";
                    }

                    startIndex = i + 1;
                }
            }

            let discount = isVip ? total * 0.1 : 0;
            let finalTotal = total - discount;

            console.log("-".repeat(40));
            console.log("HOA DON BAN LE PHU KIEN GYM".padStart(33, " "));
            console.log("-".repeat(40));
            console.log("Ma don hang: " + orderCode);
            console.log("-".repeat(40));
            console.log(receiptDetails.replace(/\n$/, ""));
            console.log("-".repeat(40));
            
            let totalStr = total.toLocaleString("vi-VN") + " VND";
            console.log("Tong cong:" + totalStr.padStart(40 - "Tong cong:".length, "."));
            
            if (isVip) {
                let discountStr = "-" + discount.toLocaleString("vi-VN") + " VND";
                console.log("Uu dai VIP (10%):" + discountStr.padStart(40 - "Uu dai VIP (10%):".length, "."));
            }
            
            let finalTotalStr = finalTotal.toLocaleString("vi-VN") + " VND";
            console.log("Thanh tien:" + finalTotalStr.padStart(40 - "Thanh tien:".length, "."));
            console.log("-".repeat(40));

            alert("Hóa đơn đã được in ra cửa sổ Console (F12 để xem)!");
            break;

        case '3':
            console.log("Đã thoát chương trình. Cảm ơn quý khách!");
            alert("Thoát chương trình!");
            isRunning = false;
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn 1, 2 hoặc 3.");
            alert("Lựa chọn không hợp lệ! Vui lòng chọn 1, 2 hoặc 3.");
            break;
    }

} while (isRunning);
