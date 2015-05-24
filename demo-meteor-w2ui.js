if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.w2ui.rendered = function () {

    $('#grid').w2grid({
      name: 'grid',
      header: 'List of Names',
      columns: [
        {field: 'fname', caption: 'First Name', size: '30%'},
        {field: 'lname', caption: 'Last Name', size: '30%'},
        {field: 'email', caption: 'Email', size: '40%'},
        {field: 'sdate', caption: 'Start Date', size: '120px'}
      ],
      records: [
        {recid: 1, fname: "Peter", lname: "Jeremia", email: 'peter@mail.com', sdate: '2/1/2010'},
        {recid: 2, fname: "Bruce", lname: "Wilkerson", email: 'bruce@mail.com', sdate: '6/1/2010'},
        {recid: 3, fname: "John", lname: "McAlister", email: 'john@mail.com', sdate: '1/16/2010'},
        {recid: 4, fname: "Ravi", lname: "Zacharies", email: 'ravi@mail.com', sdate: '3/13/2007'},
        {recid: 5, fname: "William", lname: "Dembski", email: 'will@mail.com', sdate: '9/30/2011'},
        {recid: 6, fname: "David", lname: "Peterson", email: 'david@mail.com', sdate: '4/5/2010'}
      ]
    });

  }
}
;

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
