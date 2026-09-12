> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingcontroller](https://developer.apple.com/documentation/swiftui/nshostingcontroller)

# NSHostingController

**Framework:** SwiftUI  
**Kind:** Class  
**Availability:** macOS 10.15+

An AppKit view controller that hosts SwiftUI view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency class NSHostingController<Content> where Content : View
```

<a id="overview"></a>

## Overview

Create an `NSHostingController` object when you want to integrate SwiftUI views into an AppKit view hierarchy. At creation time, specify the SwiftUI view you want to use as the root view for this view controller; you can change that view later using the [rootView](nshostingcontroller/rootview.md) property. Use the hosting controller like you would any other view controller, by presenting it or embedding it as a child view controller in your interface.

## Topics

### Creating a hosting controller object

- [init(rootView:)](nshostingcontroller/init%28rootview_%29.md): Creates a hosting controller object that wraps the specified SwiftUI view.
- [init(coder:rootView:)](nshostingcontroller/init%28coder_rootview_%29.md): Creates a hosting controller object from an archive and the specified SwiftUI view.
- [init(coder:)](nshostingcontroller/init%28coder_%29.md): Creates a hosting controller object from the contents of the specified archive.

### Getting the root view

- [rootView](nshostingcontroller/rootview.md): The root view of the SwiftUI view hierarchy managed by this view controller.
- [identifier](nshostingcontroller/identifier.md)

### Configuring the controller

- [sizeThatFits(in:)](nshostingcontroller/sizethatfits%28in_%29.md): Calculates and returns the most appropriate size for the current view.
- [preferredContentSize](nshostingcontroller/preferredcontentsize.md)
- [sizingOptions](nshostingcontroller/sizingoptions.md): The options for how the hosting controller’s view creates and updates constraints based on the size of its SwiftUI content.
- [safeAreaRegions](nshostingcontroller/safearearegions.md): The safe area regions that this view controller adds to its view.
- [sceneBridgingOptions](nshostingcontroller/scenebridgingoptions.md): The options for which aspects of the window will be managed by this controller’s hosting view.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)

## See Also

### Displaying SwiftUI views in AppKit

- [Unifying your app’s animations](unifying-your-app-s-animations.md): Create a consistent UI animation experience across SwiftUI, UIKit, and AppKit.
- [NSHostingView](nshostingview.md): An AppKit view that hosts a SwiftUI view hierarchy.
- [NSHostingMenu](nshostingmenu.md): An AppKit menu with menu items that are defined by a SwiftUI View.
- [NSHostingSizingOptions](nshostingsizingoptions.md): Options for how hosting views and controllers reflect their content’s size into Auto Layout constraints.
- [NSHostingSceneRepresentation](nshostingscenerepresentation.md): An AppKit type that hosts and can present SwiftUI scenes
- [NSHostingSceneBridgingOptions](nshostingscenebridgingoptions.md): Options for how hosting views and controllers manage aspects of the associated window.
