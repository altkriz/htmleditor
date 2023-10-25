 $(document).ready(function() {
        $('#contact-form').submit(function(event) {
          event.preventDefault();
          var name = $('#name').val();
          var email = $('#email').val();
          var message = $('#message').val();
          $.ajax({
            type: 'POST',
            url: 'https://api.mailgun.net/v3/sandboxdb227e2c5c634783ad37592f95706eb1.mailgun.org/messages',
            headers: {
              'Authorization': 'Basic ' + btoa('api:key-3e89447bb457f88de123ec4435aa6583')
            },
            data: {
              'from': email,
              'to': 'k.raza1932000@gmail.com',
              'subject': 'New message from ' + name,
              'html': '<html><head><style>body {font-family: Arial, sans-serif;}</style></head><body> <h1>KrizTech Code Editor</h1><br><div style="background-color: #f2f2f2; padding: 20px;"><h1 style="color: #333333;">New message from ' + name + '</h1><p style="color: #666666;">Name: ' + name + '</p><p style="color: #666666;">Email: ' + email + '</p><p style="color: #666666;">Message: ' + message + '</p></div></body></html>'
            },
            success: function(response) {
              alert('Message sent successfully!');
            },
            error: function(response) {
              alert('Error sending message.');
            }
          });
        });
      });

     
