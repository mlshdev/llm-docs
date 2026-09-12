> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalert/delegate](https://developer.apple.com/documentation/appkit/nsalert/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The alert’s delegate.

## Declaration

```swift
weak var delegate: (any NSAlertDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

To set a delegate for the alert, provide an object conforming to the [NSAlertDelegate](../nsalertdelegate.md)protocol to this property. To remove the delegate, set this property’s value to `nil`.

## See Also

### Configuring alerts

- [layout()](layout%28%29.md): Specifies that the alert must do immediate layout instead of lazily just before display.
- [alertStyle](alertstyle.md): Indicates the alert’s severity level.
- [NSAlert.Style](style.md): The set of alert styles to style alerts in your app.
- [accessoryView](accessoryview.md): The alert’s accessory view.
- [showsHelp](showshelp.md): Specifies whether the alert has a help button.
- [helpAnchor](helpanchor.md): The alert’s HTML help anchor.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The alert’s delegate.

## Declaration

```objectivec
@property (weak, nullable) id<NSAlertDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

To set a delegate for the alert, provide an object conforming to the [NSAlertDelegate](../nsalertdelegate.md)protocol to this property. To remove the delegate, set this property’s value to `nil`.

## See Also

### Configuring alerts

- [layout](layout%28%29.md): Specifies that the alert must do immediate layout instead of lazily just before display.
- [alertStyle](alertstyle.md): Indicates the alert’s severity level.
- [NSAlertStyle](style.md): The set of alert styles to style alerts in your app.
- [accessoryView](accessoryview.md): The alert’s accessory view.
- [showsHelp](showshelp.md): Specifies whether the alert has a help button.
- [helpAnchor](helpanchor.md): The alert’s HTML help anchor.
