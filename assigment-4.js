// Function to populate subcategories based on selected category
function populateSubcategories() {
    const category = document.getElementById('category');
    const subcategory = document.getElementById('subcategory');

    // Clear existing options
    subcategory.innerHTML = '';

    // Populate options based on selected category
    switch (category.value) {
        case 'tech':
            subcategory.options.add(new Option('Web Development', 'web_dev'));
            subcategory.options.add(new Option('Mobile App Development', 'mobile_app'));
            subcategory.options.add(new Option('UI/UX Design', 'ui_ux'));
            break;
        case 'design':
            subcategory.options.add(new Option('Graphic Design', 'graphic_design'));
            subcategory.options.add(new Option('Illustration', 'illustration'));
            subcategory.options.add(new Option('Motion Graphics', 'motion_graphics'));
            break;
        case 'marketing':
            subcategory.options.add(new Option('Digital Marketing', 'digital_marketing'));
            subcategory.options.add(new Option('Content Strategy', 'content_strategy'));
            subcategory.options.add(new Option('SEO', 'seo'));
            break;
        default:
            subcategory.options.add(new Option('Select subcategory', ''));
            break;
    }
}

// Function to preview uploaded image
function previewImage() {
    const fileInput = document.getElementById('image');
    const imagePreview = document.getElementById('imagePreview');

    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                imagePreview.src = reader.result;
            }
            reader.readAsDataURL(file);
        } else {
            imagePreview.src = '#';
        }
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Populate subcategories when category changes
    const category = document.getElementById('category');
    category.addEventListener('change', populateSubcategories);

    // Preview image when selected
    previewImage();
});

// Optional: Validate form submission
document.getElementById('serviceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demo purpose

    // Implement form submission logic here (e.g., validation, AJAX request)
    // Example validation:
    const serviceName = document.getElementById('serviceName').value;
    const category = document.getElementById('category').value;
    const subcategory = document.getElementById('subcategory').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;

    if (serviceName && category && subcategory && image && description) {
        alert('Form submitted successfully!');
        // Clear form fields or redirect to another page
    } else {
        alert('Please fill out all fields.');
    }
});