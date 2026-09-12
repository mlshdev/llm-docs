> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspdfpanel/options-swift.property](https://developer.apple.com/documentation/appkit/nspdfpanel/options-swift.property)

# options (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A set of configuration options that determine the accessory views the PDF panel should display.

## Declaration

```swift
var options: NSPDFPanel.Options { get set }
```

<a id="Discussion"></a>

## Discussion

You specify a set of options by combining the appropriate constants defined in [NSPDFPanel.Options](options-swift.struct.md).

## See Also

### Managing the Contents of a PDF Panel

- [accessoryController](accessorycontroller.md): A view controller for the accessory view that the panel can present.
- [defaultFileName](defaultfilename.md): The initial value for the user-editable filename shown in the name field of the PDF panel.

# options (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A set of configuration options that determine the accessory views the PDF panel should display.

## Declaration

```objectivec
@property NSPDFPanelOptions options;
```

<a id="Discussion"></a>

## Discussion

You specify a set of options by combining the appropriate constants defined in [NSPDFPanelOptions](options-swift.struct.md).

## See Also

### Managing the Contents of a PDF Panel

- [accessoryController](accessorycontroller.md): A view controller for the accessory view that the panel can present.
- [defaultFileName](defaultfilename.md): The initial value for the user-editable filename shown in the name field of the PDF panel.
