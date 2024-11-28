$(document).ready(function () {
    $(window).on("scroll", function () {
        let $header = $("header");
        if ($(this).scrollTop() > 50) {
            $header.addClass("scrolled");
        } else {
            $header.removeClass("scrolled");
        }
    });

    $(".menu-icon").on("click", function () {
        $(this).toggleClass("active");
        $(".nav-links").toggleClass("active");
    });

    let $dropdownButton = $(".dropdown-button");
    let $dropdownContentWrapper = $(".dropdown-content-wrapper");

    if ($dropdownButton.length) {
        $dropdownButton.on("click", function (e) {
            e.stopPropagation();
            $dropdownContentWrapper.toggleClass("active");
        });

        $(document).on("click", function () {
            $dropdownContentWrapper.removeClass("active");
        });
    }

    function navigateToHash() {
        if (window.location.hash) {
            const targetId = window.location.hash.substring(1);
            const $element = $('#' + targetId);
            if ($element.length) {
                console.log("Navigating to:", targetId); // Debugging line
                exerciseSlideIndex = $element.closest('.Exercises-slider').index();
                showExerciseSlide(exerciseSlideIndex);
                $('html, body').animate({
                    scrollTop: $element.offset().top
                }, 1000);
            } else {
                console.log("Element not found for ID:", targetId); // Debugging line
            }
        }
    }

    let currentSlide = 0;
    let $slides = $('.header');
    let slideInterval = 3000; // 3 seconds

    function showSlide(index) {
        $slides.each(function (i) {
            $(this).toggleClass('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % $slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, slideInterval);

    let $exercises = $(".Exercises-slider");
    let totalExerciseSlides = $exercises.length;
    let exerciseSlideIndex = 0;

    function showExerciseSlide(index) {
        let $exerciseSlides = $exercises.eq(index).find('.exercise');

        $exercises.hide().eq(index).show();

        let $currentExercise = $exerciseSlides.first();
        if ($currentExercise.length) {
            $('html, body').stop(true).animate({
                scrollTop: $currentExercise.closest('.exercise').find(".upper-part").offset().top
            }, 1000);
        }
    }

    $(".btn").on("click", function (e) {
        e.preventDefault();
        showExerciseSlide(exerciseSlideIndex);
        exerciseSlideIndex = (exerciseSlideIndex + 1) % totalExerciseSlides;
    });

    $('#nextbtn').click(function () {
        exerciseSlideIndex = (exerciseSlideIndex + 1) % totalExerciseSlides;
        showExerciseSlide(exerciseSlideIndex);
    });

    $('#previousbtn').click(function () {
        exerciseSlideIndex = (exerciseSlideIndex - 1 + totalExerciseSlides) % totalExerciseSlides;
        showExerciseSlide(exerciseSlideIndex);
    });

    showExerciseSlide(exerciseSlideIndex);

    console.log('jQuery is loaded and working!');
});