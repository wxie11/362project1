$('#info-form').on("submit",
  function(e) {
    var email = $('#email').val();
    var name = $('#name').val();
    var phone = $('#phone').val();
    var birthday = $('#birthday').val();
    var valid_name = /^[a-zA-Z\s]+$/;
    var valid_email = /^[^\s@]+@[^\s@]+$/;
    var valid_phone = /^(\d{10})*\d{10}$/;
    e.preventDefault();

    if(!valid_name.test(name))
    {
      console.log('invalid name');
      $('.invalid').remove();
      $('#name-list').append('<p class="invalid">Please enter your first name and last name with only letters.</p>');
      return false;
    }

    if(birthday == "")
    {
      console.log('invalid date');
      $('.invalid').remove();
      $('#birthday-list').append('<p class="invalid">Please enter your birthday.</p>');
      return false;
    }

    if(!valid_email.test(email))
    {
      console.log('invalid email');
      $('.invalid').remove();
      $('#email-list').append('<p class="invalid">Please enter a valid email address.</p>');
      return false;
    }

    if(!valid_phone.test(phone))
    {
      console.log('invalid phone number');
      $('.invalid').remove();
      $('#phone-list').append('<p class="invalid">Please enter a valid phone number.</p>');
      return false;
    }
    else
    {
      $(this).remove();
      $('#form-heading').remove();
      $('#form-area').append('<h1>Thank you!</h1>')
      $('#form-area').append('<h1>'+ name +'</h1>');
      $('#form-area').append('<li>Your email: '+ email +'</li>');
      $('#form-area').append('<li>Your phone: '+ phone +'</li>');
      $('#form-area').append('<li>Your form has been submitted successfully!</li>');
    }
  }
);
