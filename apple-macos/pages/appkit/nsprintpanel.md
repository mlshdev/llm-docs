> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel](https://developer.apple.com/documentation/appkit/nsprintpanel)

# NSPrintPanel (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The Print panel that queries the user for information about a print job.

## Declaration

```swift
@MainActor class NSPrintPanel
```

<a id="overview"></a>

## Overview

A Print panel may let the user select the range of pages to print and the number of copies before executing the Print command. Print panels can display a simplified interface when printing certain types of data. For example, the panel can display a list of print-setting presets, which lets the user enable print settings in groups as opposed to individually. Assigning an appropriate string to the [jobStyleHint](nsprintpanel/jobstylehint-swift.property.md) property activates the simplified interface and identifies which presets to display.

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/macos/system-capabilities/printing/).

## Topics

### Customizing the Panel

- [jobStyleHint](nsprintpanel/jobstylehint-swift.property.md): The type of settings that the print panel displays.
- [NSPrintPanel.JobStyleHint](nsprintpanel/jobstylehint-swift.struct.md): Constants that specify job style hints for activating the simplified Print panel interface and setting the options to display.
- [options](nsprintpanel/options-swift.property.md): The current configuration options for the Print panel.
- [NSPrintPanel.Options](nsprintpanel/options-swift.struct.md): Constants that specify options for configuring the contents of the main Print panel.
- [defaultButtonTitle()](nsprintpanel/defaultbuttontitle%28%29.md): Returns the title of the Print panel’s default button.
- [setDefaultButtonTitle(\_:)](nsprintpanel/setdefaultbuttontitle%28__%29.md): Sets the title of the Print panel’s default button.
- [helpAnchor](nsprintpanel/helpanchor.md): The HTML help anchor associated with the Print panel.

### Managing Accessory Views

- [addAccessoryController(\_:)](nsprintpanel/addaccessorycontroller%28__%29.md): Adds a custom controller to the Print panel to manage an accessory view.
- [removeAccessoryController(\_:)](nsprintpanel/removeaccessorycontroller%28__%29.md): Removes the specified controller and accessory view from the Print panel.
- [NSPrintPanelAccessorizing](nsprintpanelaccessorizing.md): A set of methods that a Print panel object can use to get information from a printing accessory controller.
- [accessoryControllers](nsprintpanel/accessorycontrollers.md): The array of controller objects that manage the Print panel’s accessory views.

### Running the Panel

- [beginSheet(using:on:completionHandler:)](nsprintpanel/beginsheet%28using_on_completionhandler_%29.md)
- [beginSheet(with:modalFor:delegate:didEnd:contextInfo:)](nsprintpanel/beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md): Deprecated. Displays a Print panel sheet and runs it modally for the specified window.
- [runModal()](nsprintpanel/runmodal%28%29.md): Displays the Print panel and begins the modal loop.
- [runModal(with:)](nsprintpanel/runmodal%28with_%29.md): Displays the Print panel and runs the modal loop using the specified printing information.

### Accessing the Printing Information

- [printInfo](nsprintpanel/printinfo.md): The information associated with the running Print panel.
- [NSPrintInfo](nsprintinfo.md): An object that stores information that’s used to generate printed output.
- [NSPrintPanel.Result](nsprintpanel/result.md)

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

- [NSPageLayout](nspagelayout.md): A panel that queries the user for information such as paper type and orientation.

# NSPrintPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The Print panel that queries the user for information about a print job.

## Declaration

```objectivec
@interface NSPrintPanel : NSObject
```

<a id="overview"></a>

## Overview

A Print panel may let the user select the range of pages to print and the number of copies before executing the Print command. Print panels can display a simplified interface when printing certain types of data. For example, the panel can display a list of print-setting presets, which lets the user enable print settings in groups as opposed to individually. Assigning an appropriate string to the [jobStyleHint](nsprintpanel/jobstylehint-swift.property.md) property activates the simplified interface and identifies which presets to display.

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/macos/system-capabilities/printing/).

## Topics

### Creating the Printing Panel

- [printPanel](nsprintpanel/printpanel.md): Returns a new print panel object.

### Customizing the Panel

- [jobStyleHint](nsprintpanel/jobstylehint-swift.property.md): The type of settings that the print panel displays.
- [NSPrintPanelJobStyleHint](nsprintpanel/jobstylehint-swift.struct.md): Constants that specify job style hints for activating the simplified Print panel interface and setting the options to display.
- [options](nsprintpanel/options-swift.property.md): The current configuration options for the Print panel.
- [NSPrintPanelOptions](nsprintpanel/options-swift.struct.md): Constants that specify options for configuring the contents of the main Print panel.
- [defaultButtonTitle](nsprintpanel/defaultbuttontitle%28%29.md): Returns the title of the Print panel’s default button.
- [setDefaultButtonTitle:](nsprintpanel/setdefaultbuttontitle%28__%29.md): Sets the title of the Print panel’s default button.
- [helpAnchor](nsprintpanel/helpanchor.md): The HTML help anchor associated with the Print panel.

### Managing Accessory Views

- [addAccessoryController:](nsprintpanel/addaccessorycontroller%28__%29.md): Adds a custom controller to the Print panel to manage an accessory view.
- [removeAccessoryController:](nsprintpanel/removeaccessorycontroller%28__%29.md): Removes the specified controller and accessory view from the Print panel.
- [NSPrintPanelAccessorizing](nsprintpanelaccessorizing.md): A set of methods that a Print panel object can use to get information from a printing accessory controller.
- [accessoryControllers](nsprintpanel/accessorycontrollers.md): The array of controller objects that manage the Print panel’s accessory views.

### Running the Panel

- [beginSheetUsingPrintInfo:onWindow:completionHandler:](nsprintpanel/beginsheet%28using_on_completionhandler_%29.md)
- [beginSheetWithPrintInfo:modalForWindow:delegate:didEndSelector:contextInfo:](nsprintpanel/beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md): Deprecated. Displays a Print panel sheet and runs it modally for the specified window.
- [runModal](nsprintpanel/runmodal%28%29.md): Displays the Print panel and begins the modal loop.
- [runModalWithPrintInfo:](nsprintpanel/runmodal%28with_%29.md): Displays the Print panel and runs the modal loop using the specified printing information.

### Accessing the Printing Information

- [printInfo](nsprintpanel/printinfo.md): The information associated with the running Print panel.
- [NSPrintInfo](nsprintinfo.md): An object that stores information that’s used to generate printed output.
- [NSPrintPanelResult](nsprintpanel/result.md)

### Deprecated

- [accessoryView](nsprintpanel/accessoryview.md): Deprecated. Returns the accessory view of the Print panel.
- [setAccessoryView:](nsprintpanel/setaccessoryview_.md): Deprecated. Sets the accessory view for the Print panel.
- [updateFromPrintInfo](nsprintpanel/updatefromprintinfo.md): Deprecated. Updates the Print panel with information from the current print operation object.
- [finalWritePrintInfo](nsprintpanel/finalwriteprintinfo.md): Deprecated. Writes the Print panel’s printing attributes to the current print operation object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Print Panels

- [NSPageLayout](nspagelayout.md): A panel that queries the user for information such as paper type and orientation.
