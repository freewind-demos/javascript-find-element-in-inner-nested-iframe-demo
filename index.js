$(window).on('load', function () {
    const $childFrame = $('iframe#child-frame')
    const $innerFrame = $childFrame.contents().find('iframe#inner-frame')
    const $inner = $innerFrame.contents().find('#inner')
    $inner.css('background-color', 'red')
})
