> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalert/layout()](https://developer.apple.com/documentation/appkit/nsalert/layout())

# layout() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Specifies that the alert must do immediate layout instead of lazily just before display.

## Declaration

```swift
func layout()
```

<a id="Discussion"></a>

## Discussion

You need to call this method only when you need to customize the alert’s layout. Call this method after all the alert’s attributes have been customized, including the suppression checkbox and the accessory layout. After the method returns, you can make the necessary layout changes; for example, adjusting the frame of the accessory view.

> **Note**

>  The standard alert layout is subject to change in future system software versions. Therefore, if you rely on custom alert layout, you should make sure your layouts work as expected in future releases of  macOS.

## See Also

### Configuring alerts

- [alertStyle](alertstyle.md): Indicates the alert’s severity level.
- [NSAlert.Style](style.md): The set of alert styles to style alerts in your app.
- [accessoryView](accessoryview.md): The alert’s accessory view.
- [showsHelp](showshelp.md): Specifies whether the alert has a help button.
- [helpAnchor](helpanchor.md): The alert’s HTML help anchor.
- [delegate](delegate.md): The alert’s delegate.

# layout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Specifies that the alert must do immediate layout instead of lazily just before display.

## Declaration

```objectivec
- (void) layout;
```

<a id="Discussion"></a>

## Discussion

You need to call this method only when you need to customize the alert’s layout. Call this method after all the alert’s attributes have been customized, including the suppression checkbox and the accessory layout. After the method returns, you can make the necessary layout changes; for example, adjusting the frame of the accessory view.

> **Note**

>  The standard alert layout is subject to change in future system software versions. Therefore, if you rely on custom alert layout, you should make sure your layouts work as expected in future releases of  macOS.

## See Also

### Configuring alerts

- [alertStyle](alertstyle.md): Indicates the alert’s severity level.
- [NSAlertStyle](style.md): The set of alert styles to style alerts in your app.
- [accessoryView](accessoryview.md): The alert’s accessory view.
- [showsHelp](showshelp.md): Specifies whether the alert has a help button.
- [helpAnchor](helpanchor.md): The alert’s HTML help anchor.
- [delegate](delegate.md): The alert’s delegate.
