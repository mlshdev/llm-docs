> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspdfpanel](https://developer.apple.com/documentation/appkit/nspdfpanel)

# NSPDFPanel (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.9+

A Save or Export as PDF panel that’s consistent with the macOS user interface.

## Declaration

```swift
@MainActor class NSPDFPanel
```

<a id="overview"></a>

## Overview

A PDF panel has a variety of built-in customization controls, such as page orientation, paper size, and tags. It also supports the use of a custom accessory view controller that allows an app to specify how a PDF file should be created.

## Topics

### Managing the Contents of a PDF Panel

- [accessoryController](nspdfpanel/accessorycontroller.md): A view controller for the accessory view that the panel can present.
- [options](nspdfpanel/options-swift.property.md): A set of configuration options that determine the accessory views the PDF panel should display.
- [defaultFileName](nspdfpanel/defaultfilename.md): The initial value for the user-editable filename shown in the name field of the PDF panel.

### Displaying a PDF Panel

- [beginSheet(with:modalFor:completionHandler:)](nspdfpanel/beginsheet%28with_modalfor_completionhandler_%29.md): Presents a document-modal PDF panel.

### Constants

- [NSPDFPanel.Options](nspdfpanel/options-swift.struct.md): Constants used to configure the contents of a PDF panel.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Print and PDF Panels

- [NSPrintPanelAccessorizing](nsprintpanelaccessorizing.md): A set of methods that a Print panel object can use to get information from a printing accessory controller.

# NSPDFPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.9+

A Save or Export as PDF panel that’s consistent with the macOS user interface.

## Declaration

```objectivec
@interface NSPDFPanel : NSObject
```

<a id="overview"></a>

## Overview

A PDF panel has a variety of built-in customization controls, such as page orientation, paper size, and tags. It also supports the use of a custom accessory view controller that allows an app to specify how a PDF file should be created.

## Topics

### Creating a PDF Panel

- [panel](nspdfpanel/panel.md): Returns a new `NSPDFPanel` object.

### Managing the Contents of a PDF Panel

- [accessoryController](nspdfpanel/accessorycontroller.md): A view controller for the accessory view that the panel can present.
- [options](nspdfpanel/options-swift.property.md): A set of configuration options that determine the accessory views the PDF panel should display.
- [defaultFileName](nspdfpanel/defaultfilename.md): The initial value for the user-editable filename shown in the name field of the PDF panel.

### Displaying a PDF Panel

- [beginSheetWithPDFInfo:modalForWindow:completionHandler:](nspdfpanel/beginsheet%28with_modalfor_completionhandler_%29.md): Presents a document-modal PDF panel.

### Constants

- [NSPDFPanelOptions](nspdfpanel/options-swift.struct.md): Constants used to configure the contents of a PDF panel.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Print and PDF Panels

- [NSPrintPanelAccessorizing](nsprintpanelaccessorizing.md): A set of methods that a Print panel object can use to get information from a printing accessory controller.
