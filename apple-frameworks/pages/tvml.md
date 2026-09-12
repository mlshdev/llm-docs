> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml](https://developer.apple.com/documentation/tvml)

# TVML

Use Apple TV Markup Language to create individual pages inside of a client-server app.

> **Deprecated**

> TVML is deprecated in tvOS 18 and later. Instead, develop apps for tvOS with [SwiftUI](https://developer.apple.com/documentation/swiftui) or [UIKit](uikit.md).

<a id="Overview"></a>

## Overview

Every page in a client-server app is built on an Apple TV Markup Language (TVML) template. TVML templates define what elements can be used and in what order. Each template is designed to display information in a specific way. For example, `loadingTemplate` shows a spinner and a quick description of what is happening, while `ratingTemplate` shows the rating for a product. You create a new TVML file that contains a single template for each page in a client-server app. Each template page occupies the entire TV screen.

Each template page uses compound and simple elements. Compound elements contain other elements, while simple elements are single lines of TVML. Elements contain the information and images that are displayed on the screen.

Every template has a default presentation theme associated with it. You can set a specific theme for your app setting [UIUserInterfaceStyle](uikit/uiuserinterfacestyle.md) in the `info.plist` file. Themes provide a consistent look inside of a template.

You control the flow of a client-server app through a JavaScript file that is called by your binary app. Your JavaScript file needs to be able to load TVML pages and respond to user input. For more information on available JavaScript APIs, see [TVMLKit JS](tvmljs.md).

## Topics

### Full-Page Templates

- [alertTemplate](tvml/alerttemplate.md): Displays important information to the user.
- [catalogTemplate](tvml/catalogtemplate.md): Displays groups of items along one side of a page and images of a group’s contents on the other side.
- [compilationTemplate](tvml/compilationtemplate.md): Displays information about a single media item and its components.
- [descriptiveAlertTemplate](tvml/descriptivealerttemplate.md): Displays large amounts of important information to the user.
- [divTemplate](tvml/divtemplate.md): Provides the ability to create pages that don’t conform to a layout defined by another template.
- [formTemplate](tvml/formtemplate.md): Provides the ability to gather information from the user.
- [listTemplate](tvml/listtemplate.md): Displays a list of items along one side of a page and the corresponding image on the other side.
- [loadingTemplate](tvml/loadingtemplate.md): Displays a spinner and description on the screen.
- [mainTemplate](tvml/maintemplate.md): Displays user options for a media item.
- [menuBarTemplate](tvml/menubartemplate.md): Creates a page with items along the top and related information below.
- [oneupTemplate](tvml/oneuptemplate.md): Creates a page that allows users to navigate between full-screen images.
- [paradeTemplate](tvml/paradetemplate.md): Displays a groups of items along one side of a page and scrolling images on the other side.
- [productBundleTemplate](tvml/productbundletemplate.md): Displays information for a group of related media items.
- [productTemplate](tvml/producttemplate.md): Displays detailed information about a single product.
- [ratingTemplate](tvml/ratingtemplate.md): Displays a rating for an item.
- [searchTemplate](tvml/searchtemplate.md): Searches for a media item based on user input.
- [showcaseTemplate](tvml/showcasetemplate.md): Displays images the user can navigate between.
- [stackTemplate](tvml/stacktemplate.md): Displays groups of products.
- [Displaying a Product or Bundle in a Full-Page Template](tvml/displaying-a-product-or-bundle-in-a-full-page-template.md): Specify scrollable and fixed regions in a product page.

### Compound Elements

Compound elements are multiple-line TVML elements that encapsulate other compound or simple TVML elements.

- [Background Elements](tvml/background-elements.md): Control background images and media items that play in the background.
- [Banner and Header Elements](tvml/banner-and-header-elements.md): Provide initial descriptive information for other elements.
- [Information Elements](tvml/information-elements.md): Group and display content in the form best suited for the information.
- [Layout Elements](tvml/layout-elements.md): Organize and display multiple elements in a structured layout.
- [Lockup Elements](tvml/lockup-elements.md): Combine several elements so that they can be treated as a single element.

### Simple Elements

Simple elements often don’t contain other elements and typically fit on one line.

- [Display Elements](tvml/display-elements.md): Display a visual element, such as an image, badge, or progress overlay.
- [Multimedia Elements](tvml/multimedia-elements.md): Provide the user the ability to stream audio and search for information stored on a server.
- [Text Elements](tvml/text-elements.md): Display text onscreen.

### Styles

Customize TVML elements using the TVML styles provided by Apple. Usage of these styles is optional, and you can create great client-server apps without ever changing the default look of an element.

- [Color Styles](tvml/color-styles.md): Provide the ability to customize an element’s color.
- [Text Styles](tvml/text-styles.md): Change the text characteristics for an element.
- [Element Shaping](tvml/element-shaping.md): Modify the size and shape of an element.
- [Element Alignment and Spacing](tvml/element-alignment-and-spacing.md): Modify the alignment and spacing between elements.
- [tv-placeholder](tvml/tv-placeholder.md): Sets a default image for an `img` or `monogram` element.
- [tv-rating-style](tvml/tv-rating-style.md): Sets the displayed image for rating a product.
- [tv-transition](tvml/tv-transition.md): Specifies how an element transitions on and off the screen.
- [tv-text-highlight-style](tvml/tv-text-highlight-style.md): Specifies how an element looks when it comes into focus.
- [tv-scrollable-bounds-inset](tvml/tv-scrollable-bounds-inset.md): Creates an unscrollable region of a specified size at the top and bottom of the stack template.

### Attributes

Customize how TVML elements look and respond to user inputs by using attributes. Except where noted, attributes override the styles set for an element.

- [Image Attributes](tvml/image-attributes.md): Retrieve images from a server and specify how they fit into an element.
- [Text Attributes](tvml/text-attributes.md): Modify how text is displayed, entered, and laid out.
- [Focus Attributes](tvml/focus-attributes.md): Define how an element acts when it comes into focus.
- [Binding and DOM Manipulation](tvml/binding-and-dom-manipulation.md): Implement binding and impove DOM manipulation options.
- [Inline Playback](tvml/inline-playback.md): Set when and how inline playback is initiated.
- [Alignment, Scrolling, and Coloring](tvml/alignment-scrolling-and-coloring.md): Align elements within a shelf, set how your app reacts to scrolling, and set the overall color scheme for your app.

### Queries

Use queries inside of a `style` element to define different values for the same style in a single class.

- [Media Queries](tvml/media-queries.md): Change the look and layout of a page based on the user’s preferences.
- [Data Binding Queries](tvml/data-binding-queries.md): Compare a value from a JSON file to another value.

### Resource Icons

Access Apple-provided icons for buttons, media item ratings, and general usage.

- [Adding Resource Icons](tvml/adding-resource-icons.md): Add Apple-provided icons to buttons and as independent images.
- [Button Icons](tvml/button-icons.md): Icons that indicate the function of a button.
- [Movie Rating Icons (United States)](tvml/movie-rating-icons-united-states.md): Icons that pertain to United States movie ratings.
- [Television Rating Icons (United States)](tvml/television-rating-icons-united-states.md): Icons that pertain to United States television ratings.
- [Rating Icons (New Zealand)](tvml/rating-icons-new-zealand.md): Icons that pertain to New Zealand movie ratings.
- [Rating Icons (United Kingdom)](tvml/rating-icons-united-kingdom.md): Icons that pertain to United Kingdom movie ratings.
- [Rating Icons (Brazil)](tvml/rating-icons-brazil.md): Icons that pertain to Brazil movie ratings.
- [Rotten Tomatoes Rating Icons](tvml/rotten-tomatoes-rating-icons.md): Icons pertaining to the Rotten Tomatoes rating system.
- [Miscellaneous Icons](tvml/miscellaneous-icons.md): Miscellaneous icons that don’t fall into a specific category.
