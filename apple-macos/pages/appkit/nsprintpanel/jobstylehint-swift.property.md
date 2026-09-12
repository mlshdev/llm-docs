> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/jobstylehint-swift.property](https://developer.apple.com/documentation/appkit/nsprintpanel/jobstylehint-swift.property)

# jobStyleHint (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The type of settings that the print panel displays.

## Declaration

```swift
var jobStyleHint: NSPrintPanel.JobStyleHint? { get set }
```

<a id="Discussion"></a>

## Discussion

This property controls the set of items that appear in the Presets menu of the simplified Print panel interface. For a list of supported job style hints, see `Job Style Hints`. Set this property to `nil` to deactivate the simplified Print panel interface and use the standard interface instead (the equivalent of Core Printing’s `kPMPresetGraphicsTypeGeneral`).

## See Also

### Customizing the Panel

- [NSPrintPanel.JobStyleHint](jobstylehint-swift.struct.md): Constants that specify job style hints for activating the simplified Print panel interface and setting the options to display.
- [options](options-swift.property.md): The current configuration options for the Print panel.
- [NSPrintPanel.Options](options-swift.struct.md): Constants that specify options for configuring the contents of the main Print panel.
- [defaultButtonTitle()](defaultbuttontitle%28%29.md): Returns the title of the Print panel’s default button.
- [setDefaultButtonTitle(\_:)](setdefaultbuttontitle%28__%29.md): Sets the title of the Print panel’s default button.
- [helpAnchor](helpanchor.md): The HTML help anchor associated with the Print panel.

# jobStyleHint (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The type of settings that the print panel displays.

## Declaration

```objectivec
@property (copy, nullable) NSPrintPanelJobStyleHint jobStyleHint;
```

<a id="Discussion"></a>

## Discussion

This property controls the set of items that appear in the Presets menu of the simplified Print panel interface. For a list of supported job style hints, see `Job Style Hints`. Set this property to `nil` to deactivate the simplified Print panel interface and use the standard interface instead (the equivalent of Core Printing’s `kPMPresetGraphicsTypeGeneral`).

## See Also

### Customizing the Panel

- [NSPrintPanelJobStyleHint](jobstylehint-swift.struct.md): Constants that specify job style hints for activating the simplified Print panel interface and setting the options to display.
- [options](options-swift.property.md): The current configuration options for the Print panel.
- [NSPrintPanelOptions](options-swift.struct.md): Constants that specify options for configuring the contents of the main Print panel.
- [defaultButtonTitle](defaultbuttontitle%28%29.md): Returns the title of the Print panel’s default button.
- [setDefaultButtonTitle:](setdefaultbuttontitle%28__%29.md): Sets the title of the Print panel’s default button.
- [helpAnchor](helpanchor.md): The HTML help anchor associated with the Print panel.
