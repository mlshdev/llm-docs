> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/helpanchor](https://developer.apple.com/documentation/appkit/nsprintpanel/helpanchor)

# helpAnchor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The HTML help anchor associated with the Print panel.

## Declaration

```swift
var helpAnchor: NSHelpManager.AnchorName? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the anchor name in your Apple Help file. The string you assign should contain only the name portion of the HTML anchor element.

## See Also

### Customizing the Panel

- [jobStyleHint](jobstylehint-swift.property.md): The type of settings that the print panel displays.
- [NSPrintPanel.JobStyleHint](jobstylehint-swift.struct.md): Constants that specify job style hints for activating the simplified Print panel interface and setting the options to display.
- [options](options-swift.property.md): The current configuration options for the Print panel.
- [NSPrintPanel.Options](options-swift.struct.md): Constants that specify options for configuring the contents of the main Print panel.
- [defaultButtonTitle()](defaultbuttontitle%28%29.md): Returns the title of the Print panel’s default button.
- [setDefaultButtonTitle(\_:)](setdefaultbuttontitle%28__%29.md): Sets the title of the Print panel’s default button.

# helpAnchor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The HTML help anchor associated with the Print panel.

## Declaration

```objectivec
@property (copy, nullable) NSHelpAnchorName helpAnchor;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the anchor name in your Apple Help file. The string you assign should contain only the name portion of the HTML anchor element.

## See Also

### Customizing the Panel

- [jobStyleHint](jobstylehint-swift.property.md): The type of settings that the print panel displays.
- [NSPrintPanelJobStyleHint](jobstylehint-swift.struct.md): Constants that specify job style hints for activating the simplified Print panel interface and setting the options to display.
- [options](options-swift.property.md): The current configuration options for the Print panel.
- [NSPrintPanelOptions](options-swift.struct.md): Constants that specify options for configuring the contents of the main Print panel.
- [defaultButtonTitle](defaultbuttontitle%28%29.md): Returns the title of the Print panel’s default button.
- [setDefaultButtonTitle:](setdefaultbuttontitle%28__%29.md): Sets the title of the Print panel’s default button.
