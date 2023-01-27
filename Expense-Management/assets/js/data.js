$(document).ready(function () {


  $('#expenseList').dxDataGrid({
    dataSource: customers,
    keyExpr: 'ID',
    columns: ['ExpenseName', 'Amount', 'ExpenseCategory', 'CreatedDate', 'UpdatedDate',
      {
        caption: 'Actions',
        type: "buttons",
        width: 100,
        fixed: true,
        fixedPosition: "right",
        buttons: [

          {
            hint: "Edit",
            icon: "bx bx-edit",
            onClick: function (e) {
              openverifyModal();
              e.component.refresh(true);
              e.event.preventDefault();

            }


          },
          {
            hint: "Delete",
            icon: "bx bx-trash",


          },
        ],
      }




    ]


    ,
    showBorders: true,
  });

});

const customers = [{
  ID: 1,
  ExpenseName: 'Super Mart of the West',
  Amount: '101',
  ExpenseCategory: 'Bentonville',
  CreatedDate: 'Arkansas',
  UpdatedDate: 72716,

}, {
  ID: 2,
  ExpenseName: 'Super Mart of the West',
  Amount: '101',
  ExpenseCategory: 'Bentonville',
  CreatedDate: 'Arkansas',
  UpdatedDate: 72716,

}, {
  ID: 3,
  ExpenseName: 'Super Mart of the West',
  Amount: '101',
  ExpenseCategory: 'Bentonville',
  CreatedDate: 'Arkansas',
  UpdatedDate: 72716,
}, {
  ID: 4,
  ExpenseName: 'Super Mart of the West',
  Amount: '101',
  ExpenseCategory: 'Bentonville',
  CreatedDate: 'Arkansas',
  UpdatedDate: 72716,
}, {
  ID: 5,
  ExpenseName: 'Super Mart of the West',
  Amount: '101',
  ExpenseCategory: 'Bentonville',
  CreatedDate: 'Arkansas',
  UpdatedDate: 72716,
}, {
  ID: 6,
  ExpenseName: 'Super Mart of the West',
  Amount: '101',
  ExpenseCategory: 'Bentonville',
  CreatedDate: 'Arkansas',
  UpdatedDate: 72716,
}, {
  ID: 7,
  ExpenseName: 'Super Mart of the West',
  Amount: '101',
  ExpenseCategory: 'Bentonville',
  CreatedDate: 'Arkansas',
  UpdatedDate: 72716,
}, {
  ID: 8,
  ExpenseName: 'Super Mart of the West',
  Amount: '101',
  ExpenseCategory: 'Bentonville',
  CreatedDate: 'Arkansas',
  UpdatedDate: 72716,
}, {
  ID: 9,
  ExpenseName: 'Super Mart of the West',
  Amount: '101',
  ExpenseCategory: 'Bentonville',
  CreatedDate: 'Arkansas',
  UpdatedDate: 72716,
}, {
  ID: 10,
  ExpenseName: 'Super Mart of the West',
  Amount: '101',
  ExpenseCategory: 'Bentonville',
  CreatedDate: 'Arkansas',
  UpdatedDate: 72716,
}, {
  ID: 11,
  ExpenseName: 'Super Mart of the West',
  Amount: '101',
  ExpenseCategory: 'Bentonville',
  CreatedDate: 'Arkansas',
  UpdatedDate: 72716,
}, {
  ID: 12,
  ExpenseName: 'Super Mart of the West',
  Amount: '101',
  ExpenseCategory: 'Bentonville',
  CreatedDate: 'Arkansas',
  UpdatedDate: 72716,
}];
