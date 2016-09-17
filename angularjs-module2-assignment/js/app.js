(function () {
  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyShoppingController.$injector = ["ShoppingListCheckOffService"];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var buyCtrl = this;
    console.log(ShoppingListCheckOffService);
    buyCtrl.list = ShoppingListCheckOffService.getToBuyList();
    buyCtrl.buyItem = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    }
  }

  AlreadyBoughtShoppingController.$injector = ["ShoppingListCheckOffService"];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var boughtCtrl = this;
    boughtCtrl.list = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var listData = [
      { name: "Milk", quantity: 2 },
      { name: "Butter", quantity: 3 },
      { name: "Cookies", quantity: 12 },
      { name: "Cheese", quantity: 1 },
      { name: "Meat", quantity: 0.5 },
      { name: "Juice", quantity: 2 },
      { name: "Tea", quantity: 2 },
      { name: "Sugar", quantity: 3 }
    ];

    var toBuyList = listData.slice(0);
    var boughtList = [];

    service.getToBuyList = function() {
      return toBuyList;
    }

    service.getBoughtList = function() {
      return boughtList;
    }

    service.buyItem = function(index) {
      boughtList.push(toBuyList.splice(index, 1)[0]);
    }
  }

})();
