$(document).ready(function(){
    $(".bi-bell").ready(function(){
        $(".bell-menu").hide();
    })

    $(".bi-bell").click(function(){
        $(".bell-menu").slideToggle(1);
    })

    $(".bi-bell").click(function(){
        $(".profile").hide();
    })

    $(".bi-bell").click(function(){
        $(".social-app").hide();
    })
})

$(document).ready(function(){
    $(".bi-menu").ready(function(){
        $(".social-app").hide();
    })

    $(".bi-menu").click(function(){
        $(".bell-menu").hide();
    })

    $(".bi-menu").click(function(){
        $(".profile").hide();
    })

    $(".bi-menu").click(function(){
        $(".social-app").slideToggle(1);
    })
})

$(document).ready(function(){
    $(".user-img").ready(function(){
        $(".profile").hide();
    })

    $(".user-img").click(function(){
        $(".social-app").hide();
    })
    $(".user-img").click(function(){
        $(".bell-menu").hide();
    })

    $(".user-img").click(function(){
        $(".profile").slideToggle(1);
    })
})




  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const cty = document.getElementById('myChart-1');

  new Chart(cty, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  
  const ctz = document.getElementById('myChart-2');

  new Chart(ctz, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const cta = document.getElementById('myChart-3');

  new Chart(cta, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctb = document.getElementById('myChart-4');

  new Chart(ctb, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctc = document.getElementById('myChart-5');

  new Chart(ctc, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctd = document.getElementById('myChart-6');

  new Chart(ctd, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });