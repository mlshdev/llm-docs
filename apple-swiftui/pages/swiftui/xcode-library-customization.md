> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/xcode-library-customization](https://developer.apple.com/documentation/swiftui/xcode-library-customization)

# Xcode library customization

**Framework:** SwiftUI

Expose custom views and modifiers in the Xcode library.

<a id="Overview"></a>

## Overview

You can add your custom SwiftUI views and view modifiers to Xcode’s library. This allows anyone developing your app or adopting your framework to access them by clicking the Library button (+) in Xcode’s toolbar. You can select and drag the custom library items into code, just like you would for system-provided items.

![](https://developer.apple.com/images/com.apple.SwiftUI/xcode-library-customization-hero@2x.png)

To add items to the library, create a structure that conforms to the [LibraryContentProvider](https://developer.apple.com/documentation/developertoolssupport/librarycontentprovider) protocol and encapsulate any items you want to add as [LibraryItem](https://developer.apple.com/documentation/developertoolssupport/libraryitem) instances. Implement the [views](https://developer.apple.com/documentation/developertoolssupport/librarycontentprovider/views) computed property to add library items containing views. Implement the [modifiers(base:)](https://developer.apple.com/documentation/developertoolssupport/librarycontentprovider/modifiers%28base:%29) method to add items containing view modifiers. Xcode harvests items from all of the library content providers in your project as you work, and makes them available to you in its library.

## Topics

### Creating library items

- [LibraryContentProvider](https://developer.apple.com/documentation/developertoolssupport/librarycontentprovider): A source of Xcode library and code completion content.
- [LibraryItem](https://developer.apple.com/documentation/developertoolssupport/libraryitem): A single item to add to the Xcode library.

## See Also

### Tool support

- [Previews in Xcode](previews-in-xcode.md): Generate dynamic, interactive previews of your custom views.
- [Performance analysis](performance-analysis.md): Measure and improve your app’s responsiveness.
