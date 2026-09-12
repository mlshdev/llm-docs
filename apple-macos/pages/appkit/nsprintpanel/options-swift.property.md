> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/options-swift.property](https://developer.apple.com/documentation/appkit/nsprintpanel/options-swift.property)

# options (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The current configuration options for the Print panel.

## Declaration

```swift
var options: NSPrintPanel.Options { get set }
```

<a id="Discussion"></a>

## Discussion

You can specify multiple options by adding them together. For a list of supported options, see [NSPrintPanel.Options](options-swift.struct.md).

## See Also

### Customizing the Panel

- [jobStyleHint](jobstylehint-swift.property.md): The type of settings that the print panel displays.
- [NSPrintPanel.JobStyleHint](jobstylehint-swift.struct.md): Constants that specify job style hints for activating the simplified Print panel interface and setting the options to display.
- [NSPrintPanel.Options](options-swift.struct.md): Constants that specify options for configuring the contents of the main Print panel.
- [defaultButtonTitle()](defaultbuttontitle%28%29.md): Returns the title of the Print panel’s default button.
- [setDefaultButtonTitle(\_:)](setdefaultbuttontitle%28__%29.md): Sets the title of the Print panel’s default button.
- [helpAnchor](helpanchor.md): The HTML help anchor associated with the Print panel.

# options (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The current configuration options for the Print panel.

## Declaration

```objectivec
@property NSPrintPanelOptions options;
```

<a id="Discussion"></a>

## Discussion

You can specify multiple options by adding them together. For a list of supported options, see [NSPrintPanelOptions](options-swift.struct.md).

## See Also

### Customizing the Panel

- [jobStyleHint](jobstylehint-swift.property.md): The type of settings that the print panel displays.
- [NSPrintPanelJobStyleHint](jobstylehint-swift.struct.md): Constants that specify job style hints for activating the simplified Print panel interface and setting the options to display.
- [NSPrintPanelOptions](options-swift.struct.md): Constants that specify options for configuring the contents of the main Print panel.
- [defaultButtonTitle](defaultbuttontitle%28%29.md): Returns the title of the Print panel’s default button.
- [setDefaultButtonTitle:](setdefaultbuttontitle%28__%29.md): Sets the title of the Print panel’s default button.
- [helpAnchor](helpanchor.md): The HTML help anchor associated with the Print panel.
