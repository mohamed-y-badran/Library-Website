
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl =>
new bootstrap.Tooltip(tooltipTriggerEl))


let tooltip = bootstrap.Tooltip.getInstance("#gfg"); 

function restoreTitle() {
    tooltip.hide();
    tooltip._config.title = "Make Booking!";
    tooltip.update();
}

function showAlert() {
    tooltip._config.title = 'Booked'; 
    tooltip.update();
    tooltip.show();
    setTimeout(function() {
        alert("Booking Done Successfully!");
    }, 100);
  }


let tooltip2 = bootstrap.Tooltip.getInstance("#gfgf"); 

function restoreTitle2() {
    tooltip2.hide();
    tooltip2._config.title = "Submit";
    tooltip2.update();
}

function showAlert2() {
    tooltip2._config.title = 'Submitted'; 
    tooltip2.update();
    tooltip2.show();
    setTimeout(function() {
        alert("Submission Successful!");
    }, 100);
  }

  let tooltip3 = bootstrap.Tooltip.getInstance("#gfgf3"); 

function restoreTitle3() {
    tooltip3.hide();
    tooltip3._config.title = "Submit Suggestions";
    tooltip3.update();
}

function showAlert3() {
    tooltip3._config.title = 'Submitted'; 
    tooltip3.update();
    tooltip3.show();
    setTimeout(function() {
        alert("Submission Successful!");
    }, 100);
  }

  let tooltip4 = bootstrap.Tooltip.getInstance("#gfgf4"); 

  function restoreTitle4() {
      tooltip4.hide();
      tooltip4._config.title = "Submit Resources";
      tooltip4.update();
  }
  
  function showAlert4() {
      tooltip4._config.title = 'Submitted'; 
      tooltip4.update();
      tooltip4.show();
      setTimeout(function() {
          alert("Submission Successful!");
      }, 100);
    }