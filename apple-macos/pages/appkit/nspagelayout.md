> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagelayout](https://developer.apple.com/documentation/appkit/nspagelayout)

# NSPageLayout (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A panel that queries the user for information such as paper type and orientation.

## Declaration

```swift
@MainActor class NSPageLayout
```

<a id="overview"></a>

## Overview

A page layout panel is typically displayed in response to the user selecting the Page Setup menu item. You obtain an instance with the [pageLayout](nspagelayout/pagelayout.md) class method. The pane can then be run as a sheet using [beginSheet(with:modalFor:delegate:didEnd:contextInfo:)](nspagelayout/beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md) or modally using [runModal()](nspagelayout/runmodal%28%29.md) or [runModal(with:)](nspagelayout/runmodal%28with_%29.md).

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/macos/system-capabilities/printing#page-setup-dialogs).

## Topics

### Running the page setup dialog

- [beginSheet(using:on:completionHandler:)](nspagelayout/beginsheet%28using_on_completionhandler_%29.md)
- [beginSheet(with:modalFor:delegate:didEnd:contextInfo:)](nspagelayout/beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md): Deprecated. Presents a page setup sheet for the specified print info object, document-modal relative to the specified window.
- [runModal()](nspagelayout/runmodal%28%29.md): Displays the page layout panel and begins the modal loop using the shared print info object.
- [runModal(with:)](nspagelayout/runmodal%28with_%29.md): Displays the page layout panel and begins the modal loop using the specified print info object.

### Customizing the page setup dialog

- [addAccessoryController(\_:)](nspagelayout/addaccessorycontroller%28__%29.md): Adds the specified controller of an accessory view to be presented in the page setup panel.
- [removeAccessoryController(\_:)](nspagelayout/removeaccessorycontroller%28__%29.md): Removes the specified controller of an accessory view.
- [accessoryControllers](nspagelayout/accessorycontrollers.md): An array of accessory view controllers belonging to the page layout panel.

### Accessing the printing information

- [printInfo](nspagelayout/printinfo.md): The printing information object used when the page layout panel is run.
- [NSPrintInfo](nsprintinfo.md): An object that stores information that’s used to generate printed output.
- [NSPageLayout.Result](nspagelayout/result.md)

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

### Print Panels

- [NSPrintPanel](nsprintpanel.md): The Print panel that queries the user for information about a print job.

# NSPageLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A panel that queries the user for information such as paper type and orientation.

## Declaration

```objectivec
@interface NSPageLayout : NSObject
```

<a id="overview"></a>

## Overview

A page layout panel is typically displayed in response to the user selecting the Page Setup menu item. You obtain an instance with the [pageLayout](nspagelayout/pagelayout.md) class method. The pane can then be run as a sheet using [beginSheetWithPrintInfo:modalForWindow:delegate:didEndSelector:contextInfo:](nspagelayout/beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md) or modally using [runModal](nspagelayout/runmodal%28%29.md) or [runModalWithPrintInfo:](nspagelayout/runmodal%28with_%29.md).

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/macos/system-capabilities/printing#page-setup-dialogs).

## Topics

### Creating the page layout object

- [pageLayout](nspagelayout/pagelayout.md): Returns a newly created page layout object.

### Running the page setup dialog

- [beginSheetUsingPrintInfo:onWindow:completionHandler:](nspagelayout/beginsheet%28using_on_completionhandler_%29.md)
- [beginSheetWithPrintInfo:modalForWindow:delegate:didEndSelector:contextInfo:](nspagelayout/beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md): Deprecated. Presents a page setup sheet for the specified print info object, document-modal relative to the specified window.
- [runModal](nspagelayout/runmodal%28%29.md): Displays the page layout panel and begins the modal loop using the shared print info object.
- [runModalWithPrintInfo:](nspagelayout/runmodal%28with_%29.md): Displays the page layout panel and begins the modal loop using the specified print info object.

### Customizing the page setup dialog

- [addAccessoryController:](nspagelayout/addaccessorycontroller%28__%29.md): Adds the specified controller of an accessory view to be presented in the page setup panel.
- [removeAccessoryController:](nspagelayout/removeaccessorycontroller%28__%29.md): Removes the specified controller of an accessory view.
- [accessoryControllers](nspagelayout/accessorycontrollers.md): An array of accessory view controllers belonging to the page layout panel.

### Accessing the printing information

- [printInfo](nspagelayout/printinfo.md): The printing information object used when the page layout panel is run.
- [NSPrintInfo](nsprintinfo.md): An object that stores information that’s used to generate printed output.
- [NSPageLayoutResult](nspagelayout/result.md)

### Deprecated

- [accessoryView](nspagelayout/accessoryview.md): Deprecated. Returns the page layout panel’s accessory view.
- [setAccessoryView:](nspagelayout/setaccessoryview_.md): Deprecated. Adds a view object to the page layout panel.
- [readPrintInfo](nspagelayout/readprintinfo.md): Deprecated. Sets the page layout’s values to those stored in the print info object used when the page layout panel is run.
- [writePrintInfo](nspagelayout/writeprintinfo.md): Deprecated. Writes the page layout’s values to the print info object used when the page layout panel is run.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Print Panels

- [NSPrintPanel](nsprintpanel.md): The Print panel that queries the user for information about a print job.
