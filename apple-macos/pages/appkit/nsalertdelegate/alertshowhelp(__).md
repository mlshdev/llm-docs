> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalertdelegate/alertshowhelp(_:)](https://developer.apple.com/documentation/appkit/nsalertdelegate/alertshowhelp(_:))

# alertShowHelp(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate when the user clicks the alert’s help button. The delegate causes help to be displayed for an alert, directly or indirectly.

## Declaration

```swift
@MainActor optional func alertShowHelp(_ alert: NSAlert) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the delegate displayed help directly, [false](https://developer.apple.com/documentation/swift/false) otherwise. When [false](https://developer.apple.com/documentation/swift/false) and the alert has a help anchor ([helpAnchor](../nsalert/helpanchor.md)), the application’s help manager displays help using the help anchor.

<a id="Discussion"></a>

## Discussion

The delegate implements this method only to override the help-anchor lookup behavior.

## See Also

### Related Documentation

- [showsHelp](../nsalert/showshelp.md): Specifies whether the alert has a help button.
- [Dialogs and Special Panels](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Dialog/Dialog.html#//apple_ref/doc/uid/10000071i)

# alertShowHelp: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate when the user clicks the alert’s help button. The delegate causes help to be displayed for an alert, directly or indirectly.

## Declaration

```objectivec
- (BOOL) alertShowHelp:(NSAlert *) alert;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the delegate displayed help directly, [false](https://developer.apple.com/documentation/swift/false) otherwise. When [false](https://developer.apple.com/documentation/swift/false) and the alert has a help anchor ([helpAnchor](../nsalert/helpanchor.md)), the application’s help manager displays help using the help anchor.

<a id="Discussion"></a>

## Discussion

The delegate implements this method only to override the help-anchor lookup behavior.

## See Also

### Related Documentation

- [showsHelp](../nsalert/showshelp.md): Specifies whether the alert has a help button.
- [Dialogs and Special Panels](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Dialog/Dialog.html#//apple_ref/doc/uid/10000071i)
