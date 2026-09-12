> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalert/helpanchor](https://developer.apple.com/documentation/appkit/nsalert/helpanchor)

# helpAnchor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The alert’s HTML help anchor.

## Declaration

```swift
var helpAnchor: NSHelpManager.AnchorName? { get set }
```

<a id="Discussion"></a>

## Discussion

To provide a help anchor for the alert, set this property to the appropriate string value. To remove the help anchor, set this property’s value to `nil`.

## See Also

### Configuring alerts

- [layout()](layout%28%29.md): Specifies that the alert must do immediate layout instead of lazily just before display.
- [alertStyle](alertstyle.md): Indicates the alert’s severity level.
- [NSAlert.Style](style.md): The set of alert styles to style alerts in your app.
- [accessoryView](accessoryview.md): The alert’s accessory view.
- [showsHelp](showshelp.md): Specifies whether the alert has a help button.
- [delegate](delegate.md): The alert’s delegate.

# helpAnchor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The alert’s HTML help anchor.

## Declaration

```objectivec
@property (copy, nullable) NSHelpAnchorName helpAnchor;
```

<a id="Discussion"></a>

## Discussion

To provide a help anchor for the alert, set this property to the appropriate string value. To remove the help anchor, set this property’s value to `nil`.

## See Also

### Configuring alerts

- [layout](layout%28%29.md): Specifies that the alert must do immediate layout instead of lazily just before display.
- [alertStyle](alertstyle.md): Indicates the alert’s severity level.
- [NSAlertStyle](style.md): The set of alert styles to style alerts in your app.
- [accessoryView](accessoryview.md): The alert’s accessory view.
- [showsHelp](showshelp.md): Specifies whether the alert has a help button.
- [delegate](delegate.md): The alert’s delegate.
