

let customers = [];

interface Customer {
    firstName: string;
    lastName: string;
    email: string;
    order: any;
}

abstract class Vehicle {
    engineModel: string;
    power: number;
    capacity: number;
    addParameter: number;
    constructor(engineModel,power,capacity, addParameter) {
        this.engineModel = engineModel;
        this.power = power;
        this.capacity = capacity;
        this.addParameter = addParameter;
        }
    }

class Dozer extends Vehicle {
    static addParameterName = "blade width, in";
    constructor(engineModel,power,capacity,addParameter) {
        super(engineModel,power,capacity, addParameter);
    }
}

class Excavator extends Vehicle {
    static addParameterName = "digging depth, ft";
    constructor(engineModel,power,capacity,addParameter) {
        super(engineModel,power,capacity,addParameter);
    }
}

class Pipelayer extends Vehicle {
    static addParameterName = "counter weight, lb";
    constructor(engineModel,power,capacity,addParameter) {
        super(engineModel,power,capacity,addParameter);

    }
}

class Truck extends Vehicle {
    static addParameterName = "maximum speed, mph";
    constructor(engineModel,power,capacity,addParameter) {
        super(engineModel,power,capacity,addParameter);

    }
}

let dozers = [
    new Dozer('CAT C4.4 ACERT',80,17465,104.2),
    new Dozer('CAT C6.6 ACERT',130,29346,144),
    new Dozer('CAT C9.3 ACERT',207,46263,164.4)
]

let excavators = [
    new Excavator('Yanmar 31NV70',13,2061,5.68),
    new Excavator('CAT C3.3B',65,18519,13.62),
    new Excavator('CAT C7.1 ACERT',239,68209,25.9)
]

let pipelayers = [
    new Pipelayer('CAT C6.6 ACERT',125,40000,6290),
    new Pipelayer('CAT C9.3 ACERT',212,90000,6570),
    new Pipelayer('CAT C15 ACERT',319,170000,6888)
]

let trucks = [
    new Truck('CAT 3512B-EUI',1450,150,34),
    new Truck('CAT 3516B HD EUI',2415,240,33.7),
    new Truck('CAT C175-20',4000,400,42)
]

let span: string = '<span class="caret"></span>';
let h2: string = '</a></li>';

$(document).ready(function () {
    $('#dozers').on('click',function() {
        $('#vehicleb').html($(this).html()+span)
        for (let key in dozers[0]) {
            $('#'+key).html('');
            $('#'+key+'b').html('Select'+span);
        }
        for (let i=0;i<dozers.length;i++) {
            for (let key in dozers[i]) {
                let h1 = '<li><a id='+key+i.toString()+'>'
                $('#'+key).append(h1+dozers[i][key]+h2);
                $('#'+key+i.toString()).on('click', function() {
                    $('#'+key+'b').html($(this).html()+span);
                });
            }
        }
        $('#addProperty').text(Dozer.addParameterName);
    });

    $('#excavators').on('click',function() {
        $('#vehicleb').html($(this).html() + span);
        for (let key in excavators[0]) {
            $('#'+key).html('');
            $('#'+key+'b').html('Select'+span);
        }
        for (let i=0;i<excavators.length;i++) {
            for (let key in dozers[i]) {
                let h1 = '<li><a id='+key+i.toString()+'>'
                $('#'+key).append(h1+excavators[i][key]+h2);
                $('#'+key+i.toString()).on('click', function() {
                    $('#'+key+'b').html($(this).html() + span);
                });

            }
        }
        $('#addProperty').text(Excavator.addParameterName);
    });

    $('#pipelayers').on('click',function() {
        $('#vehicleb').html($(this).html() + span);
        for (let key in pipelayers[0]) {
            $('#'+key).html('');
            $('#'+key+'b').html('Select'+span);
        }
        for (let i=0;i<pipelayers.length;i++) {
            for (let key in dozers[i]) {
                let h1 = '<li><a id='+key+i.toString()+'>'
                $('#'+key).append(h1+pipelayers[i][key]+h2);
                $('#'+key+i.toString()).on('click', function() {
                    $('#'+key+'b').html($(this).html() + span);
                });

            }
        }
        $('#addProperty').text(Pipelayer.addParameterName);
    });

    $('#trucks').on('click',function() {
        $('#vehicleb').html($(this).html() + span);
        for (let key in trucks[0]) {
            $('#'+key).html('');
            $('#'+key+'b').html('Select'+span);
        }
        for (let i=0;i<dozers.length;i++) {
            for (let key in dozers[i]) {
                let h1 = '<li><a id='+key+i.toString()+'>'
                $('#'+key).append(h1+trucks[i][key]+h2);
                $('#'+key+i.toString()).on('click', function() {
                    $('#'+key+'b').html($(this).html() + span);
                });

            }
        }
        $('#addProperty').text(Truck.addParameterName);
    });

    $('#placeOrder').on('click', function () {
        let order:any;
        switch ($('#vehicleb').text()) {
            case 'Dozers':
                let order1 = new Dozer($('#engineModelb').text(),$('#powerb').text(),$('#capacityb').text(),$('#addParameterb').text());
                order = order1;
                break;
            case 'Excavators':
                let order2 = new Excavator($('#engineModelb').text(),$('#powerb').text(),$('#capacityb').text(),$('#addParameterb').text());
                order = order2;
                break;
            case 'Pipelayers':
                let order3 = new Pipelayer($('#engineModelb').text(),$('#powerb').text(),$('#capacityb').text(),$('#addParameterb').text());
                order = order3;
                break;
            case 'Trucks':
                let order4 = new Truck($('#engineModelb').text(),$('#powerb').text(),$('#capacityb').text(),$('#addParameterb').text());
                order = order4;
                break;
        }
        let customer = {
            firstName: $('#first').val(),
            lastName:$('#last').val(),
            email:$('#email').val(),
            order: order
        }

        customers.push(customer);

        let h:string = '';
        for (let i=0;i<customers.length;i++) {
            h += '<blockquote>';
            h += '<h5>First Name: ' + customers[i].firstName + '</h5>';
            h += '<h5>Last Name: ' + customers[i].lastName + '</h5>'
            h += '<h5>Email: ' + customers[i].email + '</h5>'
            h += '<h4>Order details:</h4>'
            h += '<h5>Vehicle type: ' + (customers[i].order).constructor.name +'</h5>'
            h += '<h5>Engine model: '+ customers[i].order.engineModel+'</h5>'
            h += '<h5>Power, hp: '+customers[i].order.power+'</h5>'
            h += '<h5>Operating capacity, lb'+customers[i].order.capacity+'</h5>'
            h += '<h5>'+$('#addProperty').text()+': '+customers[i].order.addParameter+'</h5>'
            h += '</blockquote>'
        }
        $('#orderDisplay').html(h);
    })

});
