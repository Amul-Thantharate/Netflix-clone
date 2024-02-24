// document.addEventListener('DOMContentLoaded', function() {
//     var faqBoxes = document.querySelectorAll('.faqbox');

//     // Loop through each FAQ box
//     faqBoxes.forEach(function(faqbox) {
//         // Add click event listener to each FAQ box
//         faqbox.addEventListener('click', function() {
//             // Toggle the display of the next sibling element with the class 'ans'
//             var ans = faqbox.nextElementSibling;
//             if (window.getComputedStyle(ans).display === 'none') {
//                 ans.style.display = 'block';
//             } else {
//                 ans.style.display = 'none';
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    var faqBoxes = document.querySelectorAll('.faqbox');

    // Loop through each FAQ box
    faqBoxes.forEach(function(faqbox) {
        // Add click event listener to each FAQ box
        faqbox.addEventListener('click', function() {
            // Toggle the display of the next sibling element with the class 'ans' after 1 second
            var ans = faqbox.nextElementSibling;
            setTimeout(function() {
                ans.style.display = (ans.style.display === 'block') ? 'none' : 'block';
            }, 100); // Delay appearance by 1 second (1000 milliseconds)
        });
    });
});
