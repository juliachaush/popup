const modal = $.modal({
    title: 'Vladilen Modal',
    closable: true,
    content: 
        `<h4>modal is working</h4>
        <p>Lorem ipsum dolor sit. </p>`,
    width: `400px`,
    footerButtons: [
        {text: 'Ок', type:'primary', handler() {
            console.log('Primary btn clicked')
            modal.close()
        }},
        {text: 'Cancel', type:'primary', handler() {
            console.log('Danger btn clicked')
            modal.close()
        }}
    ]    
}) 