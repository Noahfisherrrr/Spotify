/project-root
│
├── /dist               # FOLDER: Where the browser-ready files go (Compiled)
│   ├── /css            # Final compiled styles (main.css)
│   ├── /js             # Final scripts
│   └── /assets         # Final images/fonts
│
├── /src                # FOLDER: Where you actually work (Source)
│   ├── /scss           # The "7-1" SCSS architecture
│   │   ├── /base       # _reset.scss, _typography.scss
│   │   ├── /components # _buttons.scss, _navbar.scss, _card.scss
│   │   ├── /layout     # _homepage.scss , _search.scss 
│   │   ├── /abstracts  # _variables.scss, _mixins.scss
│   │   ├── /pages      # homepage.html , search.html 
│   │   └── main.scss   # The "1" that @imports everything else
│   │
│   ├── /assets         # Raw images and SVGs
│   └── /js             # Raw JavaScript files
│
├── index.html          # Main Page
└── dashboard.html      # SaaS App Page

Dev keywords: 
    add: New files added;
    fix: Buggs fixed;
    
Noah: 
    Navigation bar(Mobile);
    Footer Player(Mobile);
    Homepage (Mobile);


Sandro:
    Library(Mobile);


Giorgi:
    Search Page(Mobile);