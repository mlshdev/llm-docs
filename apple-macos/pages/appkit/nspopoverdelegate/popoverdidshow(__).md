> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopoverdelegate/popoverdidshow(_:)](https://developer.apple.com/documentation/appkit/nspopoverdelegate/popoverdidshow(_:))

# popoverDidShow(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Invoked when the popover has been shown.

## Declaration

```swift
@MainActor optional func popoverDidShow(_ notification: Notification)
```

<a id="Discussion"></a>

## Discussion

Invoked on the delegate when the [didShowNotification](../nspopover/didshownotification.md) notification is sent.

This method will also be invoked on the delegate’s popover, if the method has been implemented.

## See Also

### Popover Visibility

- [popoverShouldClose(\_:)](popovershouldclose%28__%29.md): Allows a delegate to override a close request.
- [popoverWillShow(\_:)](popoverwillshow%28__%29.md): Invoked when the popover will show.
- [popoverWillClose(\_:)](popoverwillclose%28__%29.md): Invoked when the popover is about to close.
- [popoverDidClose(\_:)](popoverdidclose%28__%29.md): Invoked when the popover did close.
- [popoverDidDetach(\_:)](popoverdiddetach%28__%29.md): Indicates that a popover has been released while it’s in an implicitly detached state.
- [popoverShouldDetach(\_:)](popovershoulddetach%28__%29.md): Returns a Boolean value that indicates whether a popover should detach from its positioning view and become a separate window.

# popoverDidShow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the popover has been shown.

## Declaration

```objectivec
- (void) popoverDidShow:(NSNotification *) notification;
```

<a id="Discussion"></a>

## Discussion

Invoked on the delegate when the [NSPopoverDidShowNotification](../nspopover/didshownotification.md) notification is sent.

This method will also be invoked on the delegate’s popover, if the method has been implemented.

## See Also

### Popover Visibility

- [popoverShouldClose:](popovershouldclose%28__%29.md): Allows a delegate to override a close request.
- [popoverWillShow:](popoverwillshow%28__%29.md): Invoked when the popover will show.
- [popoverWillClose:](popoverwillclose%28__%29.md): Invoked when the popover is about to close.
- [popoverDidClose:](popoverdidclose%28__%29.md): Invoked when the popover did close.
- [popoverDidDetach:](popoverdiddetach%28__%29.md): Indicates that a popover has been released while it’s in an implicitly detached state.
- [popoverShouldDetach:](popovershoulddetach%28__%29.md): Returns a Boolean value that indicates whether a popover should detach from its positioning view and become a separate window.
