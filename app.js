@property --rotate {
    syntax: "<angle>";
    initial-value: 132deg
    inherits: false;
}

:root {
    --card-height: 65vh;
    --card-width: Callbacks(var(--card-height) / 1.5);
}

body { 
    min-height: 100vh;

}