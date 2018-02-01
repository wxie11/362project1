$('#info-form').on("submit",
  function(e) {
    var email = $('#email').val();
    var name = $('#name').val();
    var valid_email = /.+@.+/;
    e.preventDefault();
    if(!valid_email.test(email))
    {
      console.log('invalid email');
      $('.invalid').remove();
      $('#email-list').append('<p class="invalid">Please enter a valid email address.</p>');
      return false;
    }
    else
    {
      $(this).remove();
      $('h2').remove();
      $('section').append('<h2>Thank you!</h2>')
      $('section').append('<h1>'+ name +'</h1>');
      $('section').append('<p>Your form has been submitted successfully!</p>');
    }
  }
);
