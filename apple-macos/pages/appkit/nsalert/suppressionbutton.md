> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalert/suppressionbutton](https://developer.apple.com/documentation/appkit/nsalert/suppressionbutton)

# suppressionButton (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The alert’s suppression checkbox.

## Declaration

```swift
var suppressionButton: NSButton? { get }
```

<a id="Discussion"></a>

## Discussion

If you want to customize an alert’s suppression checkbox, access it via this property and then use the methods of the [NSButton](../nsbutton.md) class. For example, you can do this to change the suppression checkbox’s default message, or to change its initial selection state (which is “unselected” by default). For a code example, see the [showsSuppressionButton](showssuppressionbutton.md) property.

## See Also

### Displaying alerts

- [runModal()](runmodal%28%29.md): Runs the alert as an app-modal dialog and returns the constant that identifies the button clicked.
- [beginSheetModal(for:completionHandler:)](beginsheetmodal%28for_completionhandler_%29.md): Runs the alert modally as a sheet attached to the specified window.
- [showsSuppressionButton](showssuppressionbutton.md): Specifies whether the alert includes a suppression checkbox, which you can employ to allow a user to opt out of seeing the alert again.

# suppressionButton (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The alert’s suppression checkbox.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSButton * suppressionButton;
```

<a id="Discussion"></a>

## Discussion

If you want to customize an alert’s suppression checkbox, access it via this property and then use the methods of the [NSButton](../nsbutton.md) class. For example, you can do this to change the suppression checkbox’s default message, or to change its initial selection state (which is “unselected” by default). For a code example, see the [showsSuppressionButton](showssuppressionbutton.md) property.

## See Also

### Displaying alerts

- [runModal](runmodal%28%29.md): Runs the alert as an app-modal dialog and returns the constant that identifies the button clicked.
- [beginSheetModalForWindow:completionHandler:](beginsheetmodal%28for_completionhandler_%29.md): Runs the alert modally as a sheet attached to the specified window.
- [showsSuppressionButton](showssuppressionbutton.md): Specifies whether the alert includes a suppression checkbox, which you can employ to allow a user to opt out of seeing the alert again.
