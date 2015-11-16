var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var customers = [];
var Vehicle = (function () {
    function Vehicle(engineModel, power, capacity, addParameter) {
        this.engineModel = engineModel;
        this.power = power;
        this.capacity = capacity;
        this.addParameter = addParameter;
    }
    return Vehicle;
})();
var Dozer = (function (_super) {
    __extends(Dozer, _super);
    function Dozer(engineModel, power, capacity, addParameter) {
        _super.call(this, engineModel, power, capacity, addParameter);
    }
    Dozer.addParameterName = "blade width, in";
    return Dozer;
})(Vehicle);
var Excavator = (function (_super) {
    __extends(Excavator, _super);
    function Excavator(engineModel, power, capacity, addParameter) {
        _super.call(this, engineModel, power, capacity, addParameter);
    }
    Excavator.addParameterName = "digging depth, ft";
    return Excavator;
})(Vehicle);
var Pipelayer = (function (_super) {
    __extends(Pipelayer, _super);
    function Pipelayer(engineModel, power, capacity, addParameter) {
        _super.call(this, engineModel, power, capacity, addParameter);
    }
    Pipelayer.addParameterName = "counter weight, lb";
    return Pipelayer;
})(Vehicle);
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(engineModel, power, capacity, addParameter) {
        _super.call(this, engineModel, power, capacity, addParameter);
    }
    Truck.addParameterName = "maximum speed, mph";
    return Truck;
})(Vehicle);
var dozers = [
    new Dozer('CAT C4.4 ACERT', 80, 17465, 104.2),
    new Dozer('CAT C6.6 ACERT', 130, 29346, 144),
    new Dozer('CAT C9.3 ACERT', 207, 46263, 164.4)
];
var excavators = [
    new Excavator('Yanmar 31NV70', 13, 2061, 5.68),
    new Excavator('CAT C3.3B', 65, 18519, 13.62),
    new Excavator('CAT C7.1 ACERT', 239, 68209, 25.9)
];
var pipelayers = [
    new Pipelayer('CAT C6.6 ACERT', 125, 40000, 6290),
    new Pipelayer('CAT C9.3 ACERT', 212, 90000, 6570),
    new Pipelayer('CAT C15 ACERT', 319, 170000, 6888)
];
var trucks = [
    new Truck('CAT 3512B-EUI', 1450, 150, 34),
    new Truck('CAT 3516B HD EUI', 2415, 240, 33.7),
    new Truck('CAT C175-20', 4000, 400, 42)
];
var span = '<span class="caret"></span>';
var h2 = '</a></li>';
$(document).ready(function () {
    $('#dozers').on('click', function () {
        $('#vehicleb').html($(this).html() + span);
        for (var key in dozers[0]) {
            $('#' + key).html('');
            $('#' + key + 'b').html('Select' + span);
        }
        for (var i = 0; i < dozers.length; i++) {
            var _loop_1 = function(key) {
                var h1 = '<li><a id=' + key + i.toString() + '>';
                $('#' + key).append(h1 + dozers[i][key] + h2);
                $('#' + key + i.toString()).on('click', function () {
                    $('#' + key + 'b').html($(this).html() + span);
                });
            };
            for (var key in dozers[i]) {
                _loop_1(key);
            }
        }
        $('#addProperty').text(Dozer.addParameterName);
    });
    $('#excavators').on('click', function () {
        $('#vehicleb').html($(this).html() + span);
        for (var key in excavators[0]) {
            $('#' + key).html('');
            $('#' + key + 'b').html('Select' + span);
        }
        for (var i = 0; i < excavators.length; i++) {
            var _loop_2 = function(key) {
                var h1 = '<li><a id=' + key + i.toString() + '>';
                $('#' + key).append(h1 + excavators[i][key] + h2);
                $('#' + key + i.toString()).on('click', function () {
                    $('#' + key + 'b').html($(this).html() + span);
                });
            };
            for (var key in dozers[i]) {
                _loop_2(key);
            }
        }
        $('#addProperty').text(Excavator.addParameterName);
    });
    $('#pipelayers').on('click', function () {
        $('#vehicleb').html($(this).html() + span);
        for (var key in pipelayers[0]) {
            $('#' + key).html('');
            $('#' + key + 'b').html('Select' + span);
        }
        for (var i = 0; i < pipelayers.length; i++) {
            var _loop_3 = function(key) {
                var h1 = '<li><a id=' + key + i.toString() + '>';
                $('#' + key).append(h1 + pipelayers[i][key] + h2);
                $('#' + key + i.toString()).on('click', function () {
                    $('#' + key + 'b').html($(this).html() + span);
                });
            };
            for (var key in dozers[i]) {
                _loop_3(key);
            }
        }
        $('#addProperty').text(Pipelayer.addParameterName);
    });
    $('#trucks').on('click', function () {
        $('#vehicleb').html($(this).html() + span);
        for (var key in trucks[0]) {
            $('#' + key).html('');
            $('#' + key + 'b').html('Select' + span);
        }
        for (var i = 0; i < dozers.length; i++) {
            var _loop_4 = function(key) {
                var h1 = '<li><a id=' + key + i.toString() + '>';
                $('#' + key).append(h1 + trucks[i][key] + h2);
                $('#' + key + i.toString()).on('click', function () {
                    $('#' + key + 'b').html($(this).html() + span);
                });
            };
            for (var key in dozers[i]) {
                _loop_4(key);
            }
        }
        $('#addProperty').text(Truck.addParameterName);
    });
    $('#placeOrder').on('click', function () {
        var order;
        switch ($('#vehicleb').text()) {
            case 'Dozers':
                var order1 = new Dozer($('#engineModelb').text(), $('#powerb').text(), $('#capacityb').text(), $('#addParameterb').text());
                order = order1;
                break;
            case 'Excavators':
                var order2 = new Excavator($('#engineModelb').text(), $('#powerb').text(), $('#capacityb').text(), $('#addParameterb').text());
                order = order2;
                break;
            case 'Pipelayers':
                var order3 = new Pipelayer($('#engineModelb').text(), $('#powerb').text(), $('#capacityb').text(), $('#addParameterb').text());
                order = order3;
                break;
            case 'Trucks':
                var order4 = new Truck($('#engineModelb').text(), $('#powerb').text(), $('#capacityb').text(), $('#addParameterb').text());
                order = order4;
                break;
        }
        var customer = {
            firstName: $('#first').val(),
            lastName: $('#last').val(),
            email: $('#email').val(),
            order: order
        };
        customers.push(customer);
        var h = '';
        for (var i = 0; i < customers.length; i++) {
            h += '<blockquote>';
            h += '<h5>First Name: ' + customers[i].firstName + '</h5>';
            h += '<h5>Last Name: ' + customers[i].lastName + '</h5>';
            h += '<h5>Email: ' + customers[i].email + '</h5>';
            h += '<h4>Order details:</h4>';
            h += '<h5>Vehicle type: ' + (customers[i].order).constructor.name + '</h5>';
            h += '<h5>Engine model: ' + customers[i].order.engineModel + '</h5>';
            h += '<h5>Power, hp: ' + customers[i].order.power + '</h5>';
            h += '<h5>Operating capacity, lb' + customers[i].order.capacity + '</h5>';
            h += '<h5>' + $('#addProperty').text() + ': ' + customers[i].order.addParameter + '</h5>';
            h += '</blockquote>';
        }
        $('#orderDisplay').html(h);
    });
});
