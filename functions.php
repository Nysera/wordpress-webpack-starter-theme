<?php
/** 
 * Functions and definitions
*/

/** 
 * Dynamic script enqueue with cache busting
*/
$script_manifest = json_decode(file_get_contents(dirname(__FILE__)."/dist/manifest.json"), true);

function dynamic_script_enqueue($manifest) {
    foreach($manifest as $key => $value) {
        switch($key) {
            case "main.css":
                $get_script_name = end(explode("/", $value));
                wp_enqueue_style("main", get_template_directory_uri() . "/dist/styles/$get_script_name", array(), false);
            break;
            case "main.js":
                wp_enqueue_script("main", get_template_directory_uri() . "/dist/scripts/$value", array(), false, true);
            break;
            default:
            return;
        };
    };
};
add_action("wp_enqueue_scripts", function() use ($script_manifest) { dynamic_script_enqueue($script_manifest); });

/** 
 * Remove version from CSS and JS
*/
function remove_wordpress_version_css_js($src) {
    if ( strpos( $src, 'ver=' ) )
        $src = remove_query_arg( 'ver', $src );
    return $src;
};
add_filter( 'style_loader_src', 'remove_wordpress_version_css_js', 9999 );
add_filter( 'script_loader_src', 'remove_wordpress_version_css_js', 9999 );