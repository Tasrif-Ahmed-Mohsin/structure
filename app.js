// Application Data
const appData = {
  "brand_info": {
    "name": "2Go",
    "tagline": "Fresh Flavors On The Go",
    "logo_font": "K2D",
    "tagline_font": "All Round Gothic Regular",
    "background_color": "#D64C4C",
    "logo_color": "#FFFFFF"
  },
  "fullscreen_sections": [
    {
      "category": "Citrus Collection",
      "title": "CITRUS COLLECTION",
      "description": "Energizing citrus blends to start your day",
      "button_text": "SHOP NOW",
      "background_theme": "citrus_fruits",
      "text_position": "left",
      "products": ["Orange Burst", "Lemon Ginger Zing", "Grapefruit Mint"]
    },
    {
      "category": "Tropical Blend", 
      "title": "TROPICAL BLEND",
      "description": "Exotic tropical fruits for a vacation feeling",
      "button_text": "EXPLORE",
      "background_theme": "tropical_fruits",
      "text_position": "right",
      "products": ["Pineapple Paradise", "Mango Passion"]
    },
    {
      "category": "Berry Power",
      "title": "BERRY POWER", 
      "description": "Antioxidant-rich berry combinations",
      "button_text": "SHOP NOW",
      "background_theme": "mixed_berries",
      "text_position": "center",
      "products": ["Mixed Berry Blast", "Cranberry Apple"]
    },
    {
      "category": "Green Goodness",
      "title": "GREEN GOODNESS",
      "description": "Nutrient-packed green vegetable blends", 
      "button_text": "DISCOVER",
      "background_theme": "green_vegetables",
      "text_position": "left",
      "products": ["Green Goddess", "Cucumber Mint Cooler"]
    },
    {
      "category": "Wellness Shots",
      "title": "WELLNESS SHOTS",
      "description": "Concentrated health boosters",
      "button_text": "SHOP ALL",
      "background_theme": "wellness_ingredients",
      "text_position": "right", 
      "products": ["Carrot Ginger Wellness"]
    }
  ],
  "juice_products": {
    "citrus_collection": [
      {
        "name": "Orange Burst",
        "tagline": "Classic Energy Boost",
        "description": "Start your day with our signature Valencia orange blend, packed with natural vitamin C and vibrant citrus flavor.",
        "ingredients": ["Valencia Oranges", "Natural Citrus Oils", "Filtered Water"],
        "benefits": ["High Vitamin C", "Natural Energy", "Immune Support"],
        "price": "$4.99",
        "size": "16oz",
        "color_theme": "#FF8C00"
      },
      {
        "name": "Lemon Ginger Zing",
        "tagline": "Digestive Power Shot",
        "description": "Refreshing lemon juice meets invigorating fresh ginger for the perfect digestive wellness drink.",
        "ingredients": ["Fresh Lemons", "Organic Ginger Root", "Raw Honey", "Filtered Water"],
        "benefits": ["Digestive Support", "Anti-inflammatory", "Immune Boost"],
        "price": "$5.49",
        "size": "16oz",
        "color_theme": "#FFD700"
      },
      {
        "name": "Grapefruit Mint",
        "tagline": "Metabolism Kickstart", 
        "description": "Tart pink grapefruit balanced with cooling fresh mint creates the perfect metabolism-boosting refresher.",
        "ingredients": ["Pink Grapefruit", "Fresh Mint Leaves", "Filtered Water"],
        "benefits": ["Metabolism Boost", "Hydrating", "Detoxifying"],
        "price": "$4.79",
        "size": "16oz",
        "color_theme": "#FF69B4"
      }
    ],
    "tropical_blend": [
      {
        "name": "Pineapple Paradise",
        "tagline": "Tropical Escape",
        "description": "Transport yourself to the tropics with sweet pineapple and coconut water for natural electrolyte replenishment.",
        "ingredients": ["Fresh Pineapple", "Coconut Water", "Lime Juice", "Filtered Water"],
        "benefits": ["Natural Electrolytes", "Digestive Enzymes", "Tropical Vitamins"],
        "price": "$5.99",
        "size": "16oz",
        "color_theme": "#FFD700"
      },
      {
        "name": "Mango Passion",
        "tagline": "Exotic Indulgence",
        "description": "Rich Alphonso mangoes blended with passion fruit create this exotic, vitamin-rich tropical treat.",
        "ingredients": ["Alphonso Mangoes", "Passion Fruit Pulp", "Filtered Water"],
        "benefits": ["Beta-carotene", "Vitamin A", "Tropical Antioxidants"],
        "price": "$6.29",
        "size": "16oz",
        "color_theme": "#FF8C00"
      }
    ],
    "berry_power": [
      {
        "name": "Mixed Berry Blast",
        "tagline": "Antioxidant Powerhouse",
        "description": "A superfood blend of seasonal berries packed with antioxidants and natural sweetness.",
        "ingredients": ["Strawberries", "Blueberries", "Raspberries", "Blackberries", "Filtered Water"],
        "benefits": ["High Antioxidants", "Anti-inflammatory", "Heart Health"],
        "price": "$6.49",
        "size": "16oz",
        "color_theme": "#8B008B"
      },
      {
        "name": "Cranberry Apple",
        "tagline": "Tart & Sweet Balance",
        "description": "Tart cranberries meet sweet Honeycrisp apples in this perfectly balanced, urinary health-supporting blend.",
        "ingredients": ["Fresh Cranberries", "Honeycrisp Apples", "Filtered Water"],
        "benefits": ["Urinary Health", "Natural Sweetness", "Vitamin C"],
        "price": "$5.29",
        "size": "16oz",
        "color_theme": "#DC143C"
      }
    ],
    "green_goodness": [
      {
        "name": "Green Goddess",
        "tagline": "Detox Champion",
        "description": "Our signature green blend combines nutrient-dense vegetables and fruits for the ultimate detox experience.",
        "ingredients": ["Spinach", "Kale", "Cucumber", "Green Apple", "Celery", "Lemon", "Filtered Water"],
        "benefits": ["Detoxifying", "Nutrient-Dense", "Alkalizing"],
        "price": "$7.99",
        "size": "16oz",
        "color_theme": "#32CD32"
      },
      {
        "name": "Cucumber Mint Cooler",
        "tagline": "Hydration Hero",
        "description": "Ultra-hydrating cucumber with refreshing mint creates the perfect low-calorie, cooling beverage.",
        "ingredients": ["Fresh Cucumber", "Mint Leaves", "Lime Juice", "Filtered Water"],
        "benefits": ["Hydrating", "Low-Calorie", "Cooling"],
        "price": "$4.99",
        "size": "16oz",
        "color_theme": "#98FB98"
      }
    ],
    "wellness_shots": [
      {
        "name": "Carrot Ginger Wellness",
        "tagline": "Immunity Booster",
        "description": "Earthy carrots with warming ginger and turmeric create this anti-inflammatory wellness shot.",
        "ingredients": ["Organic Carrots", "Fresh Ginger", "Turmeric", "Black Pepper", "Filtered Water"],
        "benefits": ["Anti-inflammatory", "Beta-carotene", "Immune Support"],
        "price": "$3.99",
        "size": "4oz",
        "color_theme": "#FF4500"
      }
    ]
  },
  "testimonials": [
    {
      "name": "Sarah Martinez",
      "text": "2Go has completely transformed my morning routine! The Orange Burst gives me the perfect energy boost without the crash.",
      "rating": 5,
      "location": "New York, NY"
    },
    {
      "name": "Mike Chen",
      "text": "As a busy professional, 2Go's convenient packaging and incredible flavors make healthy choices so much easier.",
      "rating": 5,
      "location": "San Francisco, CA"
    },
    {
      "name": "Emma Thompson",
      "text": "The Green Goddess blend is my daily detox ritual. Fresh, nutritious, and absolutely delicious!",
      "rating": 5,
      "location": "Austin, TX"
    },
    {
      "name": "David Rodriguez",
      "text": "Finally found a juice brand that doesn't compromise on taste or quality. The Mango Passion is incredible!",
      "rating": 5,
      "location": "Miami, FL"
    }
  ],
  "health_benefits": [
    {
      "title": "100% Cold-Pressed",
      "description": "Our cold-pressing process preserves maximum nutrients and enzymes for superior health benefits.",
      "icon": "💪"
    },
    {
      "title": "No Added Sugars",
      "description": "Only natural fruit sugars - no artificial sweeteners or added sugars in any of our products.",
      "icon": "🚫"
    },
    {
      "title": "Fresh Daily",
      "description": "Made fresh daily in small batches to ensure peak flavor and nutritional value.",
      "icon": "🌅"
    },
    {
      "title": "Organic Ingredients",
      "description": "We source only the finest organic fruits and vegetables from trusted local farms.",
      "icon": "🌱"
    }
  ],
  "locations": [
    {
      "name": "Downtown Manhattan",
      "address": "123 Broadway, New York, NY 10001",
      "phone": "(212) 555-0123",
      "hours": "Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-6PM"
    },
    {
      "name": "Union Square",
      "address": "456 Union Square West, New York, NY 10003",
      "phone": "(212) 555-0456",
      "hours": "Mon-Fri: 6:30AM-9PM, Sat-Sun: 8AM-7PM"
    },
    {
      "name": "Brooklyn Heights",
      "address": "789 Montague Street, Brooklyn, NY 11201",
      "phone": "(718) 555-0789",
      "hours": "Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-6PM"
    }
  ]
};

// Categories data for navigation
const categories = [
  {
    name: "Citrus Collection",
    key: "citrus_collection"
  },
  {
    name: "Tropical Blend",
    key: "tropical_blend"
  },
  {
    name: "Berry Power",
    key: "berry_power"
  },
  {
    name: "Green Goodness",
    key: "green_goodness"
  },
  {
    name: "Wellness Shots",
    key: "wellness_shots"
  }
];

// Current page state
let currentPage = 'home';
let currentFilter = 'all';

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  
  // Render content first
  renderTestimonials();
  renderProducts();
  renderBenefits();
  renderLocations();
  initForms();
  
  // Then initialize navigation
  initNavigation();
  
  // Show home page
  showPage('home');
  
  // Initialize animations and parallax
  setTimeout(() => {
    initScrollAnimations();
    initParallaxEffect();
  }, 100);
});

// Show specific page
function showPage(pageId) {
  console.log('Switching to page:', pageId);
  
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });
  
  // Show selected page
  const targetPage = document.getElementById(`${pageId}-page`);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = pageId;
    console.log('Successfully switched to page:', pageId);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update active nav link
    updateActiveNavLink(pageId);
  } else {
    console.error('Page not found:', `${pageId}-page`);
  }
}

// Update active navigation link
function updateActiveNavLink(pageId) {
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    }
  });
}

// Navigation handling
function initNavigation() {
  console.log('Initializing navigation...');
  
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });
  }

  // Navigation links
  document.querySelectorAll('[data-page]').forEach(element => {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const page = this.getAttribute('data-page');
      if (page) {
        console.log('Navigation clicked:', page);
        showPage(page);
        
        // Close mobile menu
        if (navMenu) navMenu.classList.remove('active');
      }
    });
  });

  // Category section buttons
  document.querySelectorAll('[data-category]').forEach(element => {
    if (element.classList.contains('fullscreen-section__btn')) {
      element.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const category = this.getAttribute('data-category');
        if (category) {
          console.log('Category button clicked:', category);
          showPage('juices');
          setProductFilter(category);
        }
      });
    }
  });

  // Scroll buttons
  document.querySelectorAll('[data-scroll]').forEach(element => {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const target = this.getAttribute('data-scroll');
      if (target === 'fullscreen-sections') {
        const firstSection = document.querySelector('.fullscreen-section');
        if (firstSection) {
          firstSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Action buttons
  document.querySelectorAll('[data-action]').forEach(element => {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const action = this.getAttribute('data-action');
      if (action) {
        console.log('Action button clicked:', action);
        handleAction(action);
      }
    });
  });

  // Filter buttons (will be added dynamically)
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-btn')) {
      e.preventDefault();
      e.stopPropagation();
      
      const filter = e.target.getAttribute('data-filter');
      if (filter) {
        console.log('Filter clicked:', filter);
        setProductFilter(filter);
      }
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (navToggle && navMenu && 
        !navToggle.contains(e.target) && 
        !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });
}

// Render all products
function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  const productFilters = document.getElementById('productFilters');
  
  if (!productsGrid || !productFilters) {
    console.error('Products grid or filters not found');
    return;
  }
  
  // Render filters
  const filterButtons = ['all', ...categories.map(cat => cat.key)];
  productFilters.innerHTML = filterButtons.map(filter => `
    <button class="filter-btn ${filter === 'all' ? 'active' : ''}" data-filter="${filter}">
      ${filter === 'all' ? 'All Juices' : categories.find(cat => cat.key === filter)?.name || filter}
    </button>
  `).join('');
  
  // Render products
  renderProductsGrid();
  
  console.log('Products rendered');
}

// Render products grid based on current filter
function renderProductsGrid() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;
  
  let products = [];
  
  if (currentFilter === 'all') {
    // Get all products from all categories
    Object.values(appData.juice_products).forEach(category => {
      products.push(...category);
    });
  } else {
    // Get products from specific category
    products = appData.juice_products[currentFilter] || [];
  }
  
  productsGrid.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="product-card__image" style="background: ${product.color_theme}">
        <span style="color: white; font-weight: bold; font-size: 80px;">${product.name.charAt(0)}</span>
      </div>
      <div class="product-card__content">
        <h3 class="product-card__title">${product.name}</h3>
        <p class="product-card__tagline">${product.tagline}</p>
        <p class="product-card__description">${product.description}</p>
        <div class="product-card__details">
          <span class="product-card__price">${product.price}</span>
          <span class="product-card__size">${product.size}</span>
        </div>
        <div class="product-card__benefits">
          ${product.benefits.map(benefit => `<span class="benefit-tag">${benefit}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Set product filter
function setProductFilter(filter) {
  currentFilter = filter;
  
  // Update active filter button
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-filter') === filter) {
      btn.classList.add('active');
    }
  });
  
  // Re-render products
  renderProductsGrid();
  
  console.log('Filter set to:', filter);
}

// Render testimonials
function renderTestimonials() {
  const testimonialsCarousel = document.getElementById('testimonialsCarousel');
  if (!testimonialsCarousel) {
    console.error('Testimonials carousel not found');
    return;
  }
  
  testimonialsCarousel.innerHTML = appData.testimonials.map(testimonial => `
    <div class="testimonial-card">
      <div class="testimonial-card__text">"${testimonial.text}"</div>
      <div class="testimonial-card__author">${testimonial.name}</div>
      <div class="testimonial-card__location">${testimonial.location}</div>
      <div class="testimonial-card__rating">${'★'.repeat(testimonial.rating)}</div>
    </div>
  `).join('');
  
  console.log('Testimonials rendered');
}

// Render health benefits
function renderBenefits() {
  const benefitsGrid = document.getElementById('benefitsGrid');
  if (!benefitsGrid) {
    console.error('Benefits grid not found');
    return;
  }
  
  benefitsGrid.innerHTML = appData.health_benefits.map(benefit => `
    <div class="benefit-card">
      <div class="benefit-card__icon">${benefit.icon}</div>
      <h3 class="benefit-card__title">${benefit.title}</h3>
      <p>${benefit.description}</p>
    </div>
  `).join('');
  
  console.log('Benefits rendered');
}

// Render locations
function renderLocations() {
  const locationsGrid = document.getElementById('locationsGrid');
  if (!locationsGrid) {
    console.error('Locations grid not found');
    return;
  }
  
  locationsGrid.innerHTML = appData.locations.map(location => `
    <div class="location-card">
      <h3 class="location-card__name">${location.name}</h3>
      <div class="location-card__detail">
        <span>📍</span>
        <div>
          <strong>Address:</strong><br>
          ${location.address}
        </div>
      </div>
      <div class="location-card__detail">
        <span>📞</span>
        <div>
          <strong>Phone:</strong><br>
          ${location.phone}
        </div>
      </div>
      <div class="location-card__detail">
        <span>🕒</span>
        <div>
          <strong>Hours:</strong><br>
          ${location.hours}
        </div>
      </div>
    </div>
  `).join('');
  
  console.log('Locations rendered');
}

// Initialize forms
function initForms() {
  // Newsletter form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        alert(`Thank you for subscribing! We'll send updates to ${email}`);
        emailInput.value = '';
      }
    });
  }
  
  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      
      alert(`Thank you ${name}! We've received your message and will respond to ${email} within 24 hours.`);
      this.reset();
    });
  }
  
  console.log('Forms initialized');
}

// Handle action buttons
function handleAction(action) {
  switch(action) {
    case 'order':
      alert('Thank you for your interest! Our online ordering system is coming soon. Please visit one of our locations or call (555) 2GO-JUICE to place an order.');
      break;
    case 'faq':
      alert('FAQ: Our most common questions and answers are coming to the website soon! For immediate assistance, please contact us at hello@2gojuice.com');
      break;
    case 'shipping':
      alert('Shipping Information: We currently offer local delivery in NYC. Nationwide shipping is coming soon! Contact us for current delivery areas.');
      break;
    default:
      console.log('Action not handled:', action);
  }
}

// Add smooth scrolling animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  // Observe cards for animation
  const cards = document.querySelectorAll('.product-card, .testimonial-card, .benefit-card, .location-card, .mission__card');
  cards.forEach(function(card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
  
  console.log('Scroll animations initialized');
}

// Initialize parallax effect for fullscreen sections
function initParallaxEffect() {
  const fullscreenSections = document.querySelectorAll('.fullscreen-section');
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    
    fullscreenSections.forEach((section, index) => {
      const background = section.querySelector('.fullscreen-section__background');
      if (background) {
        const rate = scrolled * -0.5;
        background.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    });
  }
  
  // Throttle scroll events for performance
  let ticking = false;
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }
  
  function handleScroll() {
    ticking = false;
    requestTick();
  }
  
  // Only add parallax on desktop to avoid mobile performance issues
  if (window.innerWidth > 768) {
    window.addEventListener('scroll', handleScroll);
  }
  
  console.log('Parallax effect initialized');
}

// Handle window resize
window.addEventListener('resize', function() {
  const navMenu = document.getElementById('navMenu');
  if (window.innerWidth > 768 && navMenu) {
    navMenu.classList.remove('active');
  }
});

// Smooth scroll behavior for all anchor links
document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});