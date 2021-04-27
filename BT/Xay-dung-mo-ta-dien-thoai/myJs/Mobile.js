class Mobile {
    constructor(name) {
        this.battery = 100;
        this.name = name;
        this.inBox = [];
        this.outBox = [];
        this.status = false;
        this.message = '';
    }
    checkOnOff() {
        if (this.status === true) {
            alert('Máy đang bật');
        } else {
            alert('Chưa mở máy');
        }
        this.battery--;
    }
    turnOn() {
        this.status = true;
        this.battery--;
    }
    turnOff() {
        this.status =false;
        this.battery--;
    }
    chargeBattery() {
        if (this.status !== true) {
            alert(this.name + ' đang tắt máy');
            return;
        }
        this.battery += 1;
    }
    writeMessege(txt) {
        if (this.status !== true) {
            alert(this.name + ' đang tắt máy');
            return;
        }
        this.message = txt;
        this.battery--;
    }
    sendMessage(phone) {
        if (this.status !== true) {
            alert(this.name + ' đang tắt máy');
            return;
        }
        phone.inBox.push(this.message);
        this.outBox.push(this.message);
        this.battery--;
    }
    getInBox() {
        if (this.status !== true) {
            alert(this.name + ' đang tắt máy');
            return ;
        }
        this.battery--;
        return this.inBox;
    }
    getOutInBox() {
        if (this.status !== true) {
            alert(this.name + ' đang tắt máy');
            return ;
        }
        this.battery--;
        return this.outBox;
    }
}