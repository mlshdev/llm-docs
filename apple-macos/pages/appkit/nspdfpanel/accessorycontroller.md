> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspdfpanel/accessorycontroller](https://developer.apple.com/documentation/appkit/nspdfpanel/accessorycontroller)

# accessoryController (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A view controller for the accessory view that the panel can present.

## Declaration

```swift
var accessoryController: NSViewController? { get set }
```

<a id="Discussion"></a>

## Discussion

The PDF panel passes an [NSPDFInfo](../nspdfinfo.md) object to the accessory view controller to display the various attributes associated with the PDF file. Unlike a print panel (that is, an [NSPrintPanel](../nsprintpanel.md) object), a PDF panel can have only one accessory view.

## See Also

### Managing the Contents of a PDF Panel

- [options](options-swift.property.md): A set of configuration options that determine the accessory views the PDF panel should display.
- [defaultFileName](defaultfilename.md): The initial value for the user-editable filename shown in the name field of the PDF panel.

# accessoryController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A view controller for the accessory view that the panel can present.

## Declaration

```objectivec
@property (strong, nullable) NSViewController * accessoryController;
```

<a id="Discussion"></a>

## Discussion

The PDF panel passes an [NSPDFInfo](../nspdfinfo.md) object to the accessory view controller to display the various attributes associated with the PDF file. Unlike a print panel (that is, an [NSPrintPanel](../nsprintpanel.md) object), a PDF panel can have only one accessory view.

## See Also

### Managing the Contents of a PDF Panel

- [options](options-swift.property.md): A set of configuration options that determine the accessory views the PDF panel should display.
- [defaultFileName](defaultfilename.md): The initial value for the user-editable filename shown in the name field of the PDF panel.
