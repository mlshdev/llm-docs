> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalert/showshelp](https://developer.apple.com/documentation/appkit/nsalert/showshelp)

# showsHelp (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Specifies whether the alert has a help button.

## Declaration

```swift
var showsHelp: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property’s value to [true](https://developer.apple.com/documentation/swift/true) to specify that the alert has a help button, or [false](https://developer.apple.com/documentation/swift/false) to specify it does not.

When a user clicks an alert’s help button, the alert delegate ([delegate](delegate.md)) receives an [alertShowHelp(\_:)](../nsalertdelegate/alertshowhelp%28__%29.md) message. The delegate is responsible for displaying the help information related to this particular alert.

Clicking an alert’s help button can alternately cause the [openHelpAnchor(\_:inBook:)](../nshelpmanager/openhelpanchor%28__inbook_%29.md) message to be sent to the app’s help manager with a `nil` book and the anchor specified by the [helpAnchor](helpanchor.md) property, if any of the following conditions are true:

- There is no alert delegate.
- The alert delegate does not implement [alertShowHelp(\_:)](../nsalertdelegate/alertshowhelp%28__%29.md).
- The alert delegate implements [alertShowHelp(\_:)](../nsalertdelegate/alertshowhelp%28__%29.md) but returns [false](https://developer.apple.com/documentation/swift/false). When this is the case, an exception is raised if no help anchor is set.

## See Also

### Configuring alerts

- [layout()](layout%28%29.md): Specifies that the alert must do immediate layout instead of lazily just before display.
- [alertStyle](alertstyle.md): Indicates the alert’s severity level.
- [NSAlert.Style](style.md): The set of alert styles to style alerts in your app.
- [accessoryView](accessoryview.md): The alert’s accessory view.
- [helpAnchor](helpanchor.md): The alert’s HTML help anchor.
- [delegate](delegate.md): The alert’s delegate.

# showsHelp (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Specifies whether the alert has a help button.

## Declaration

```objectivec
@property BOOL showsHelp;
```

<a id="Discussion"></a>

## Discussion

Set this property’s value to [true](https://developer.apple.com/documentation/swift/true) to specify that the alert has a help button, or [false](https://developer.apple.com/documentation/swift/false) to specify it does not.

When a user clicks an alert’s help button, the alert delegate ([delegate](delegate.md)) receives an [alertShowHelp:](../nsalertdelegate/alertshowhelp%28__%29.md) message. The delegate is responsible for displaying the help information related to this particular alert.

Clicking an alert’s help button can alternately cause the [openHelpAnchor:inBook:](../nshelpmanager/openhelpanchor%28__inbook_%29.md) message to be sent to the app’s help manager with a `nil` book and the anchor specified by the [helpAnchor](helpanchor.md) property, if any of the following conditions are true:

- There is no alert delegate.
- The alert delegate does not implement [alertShowHelp:](../nsalertdelegate/alertshowhelp%28__%29.md).
- The alert delegate implements [alertShowHelp:](../nsalertdelegate/alertshowhelp%28__%29.md) but returns [false](https://developer.apple.com/documentation/swift/false). When this is the case, an exception is raised if no help anchor is set.

## See Also

### Configuring alerts

- [layout](layout%28%29.md): Specifies that the alert must do immediate layout instead of lazily just before display.
- [alertStyle](alertstyle.md): Indicates the alert’s severity level.
- [NSAlertStyle](style.md): The set of alert styles to style alerts in your app.
- [accessoryView](accessoryview.md): The alert’s accessory view.
- [helpAnchor](helpanchor.md): The alert’s HTML help anchor.
- [delegate](delegate.md): The alert’s delegate.
