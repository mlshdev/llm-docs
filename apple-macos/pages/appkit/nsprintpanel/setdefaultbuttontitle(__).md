> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/setdefaultbuttontitle(_:)](https://developer.apple.com/documentation/appkit/nsprintpanel/setdefaultbuttontitle(_:))

# setDefaultButtonTitle(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the title of the Print panel’s default button.

## Declaration

```swift
func setDefaultButtonTitle(_ defaultButtonTitle: String?)
```

## Parameters

- `defaultButtonTitle`: The string to use for the button title.

<a id="Discussion"></a>

## Discussion

You can use this method to change the default button title from “Print” to something more appropriate for your usage of the panel. For example, if you are using the Print panel to save a representation of the document to a file, you might change the title to “Save”.

## See Also

### Customizing the Panel

- [jobStyleHint](jobstylehint-swift.property.md): The type of settings that the print panel displays.
- [NSPrintPanel.JobStyleHint](jobstylehint-swift.struct.md): Constants that specify job style hints for activating the simplified Print panel interface and setting the options to display.
- [options](options-swift.property.md): The current configuration options for the Print panel.
- [NSPrintPanel.Options](options-swift.struct.md): Constants that specify options for configuring the contents of the main Print panel.
- [defaultButtonTitle()](defaultbuttontitle%28%29.md): Returns the title of the Print panel’s default button.
- [helpAnchor](helpanchor.md): The HTML help anchor associated with the Print panel.

# setDefaultButtonTitle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the title of the Print panel’s default button.

## Declaration

```objectivec
- (void) setDefaultButtonTitle:(NSString *) defaultButtonTitle;
```

## Parameters

- `defaultButtonTitle`: The string to use for the button title.

<a id="Discussion"></a>

## Discussion

You can use this method to change the default button title from “Print” to something more appropriate for your usage of the panel. For example, if you are using the Print panel to save a representation of the document to a file, you might change the title to “Save”.

## See Also

### Customizing the Panel

- [jobStyleHint](jobstylehint-swift.property.md): The type of settings that the print panel displays.
- [NSPrintPanelJobStyleHint](jobstylehint-swift.struct.md): Constants that specify job style hints for activating the simplified Print panel interface and setting the options to display.
- [options](options-swift.property.md): The current configuration options for the Print panel.
- [NSPrintPanelOptions](options-swift.struct.md): Constants that specify options for configuring the contents of the main Print panel.
- [defaultButtonTitle](defaultbuttontitle%28%29.md): Returns the title of the Print panel’s default button.
- [helpAnchor](helpanchor.md): The HTML help anchor associated with the Print panel.
