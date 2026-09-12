> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopoverdelegate/popovershouldclose(_:)](https://developer.apple.com/documentation/appkit/nspopoverdelegate/popovershouldclose(_:))

# popoverShouldClose(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Allows a delegate to override a close request.

## Declaration

```swift
@MainActor optional func popoverShouldClose(_ popover: NSPopover) -> Bool
```

## Parameters

- `popover`: The popover.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the popover should close, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The popover invokes this method on its delegate whenever it is about to close. This gives the delegate a chance to override the close.

If there is no delegate or the delegate does not implement this method the default behavior is that the popover will close.

## See Also

### Popover Visibility

- [popoverWillShow(\_:)](popoverwillshow%28__%29.md): Invoked when the popover will show.
- [popoverDidShow(\_:)](popoverdidshow%28__%29.md): Invoked when the popover has been shown.
- [popoverWillClose(\_:)](popoverwillclose%28__%29.md): Invoked when the popover is about to close.
- [popoverDidClose(\_:)](popoverdidclose%28__%29.md): Invoked when the popover did close.
- [popoverDidDetach(\_:)](popoverdiddetach%28__%29.md): Indicates that a popover has been released while it’s in an implicitly detached state.
- [popoverShouldDetach(\_:)](popovershoulddetach%28__%29.md): Returns a Boolean value that indicates whether a popover should detach from its positioning view and become a separate window.

# popoverShouldClose: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows a delegate to override a close request.

## Declaration

```objectivec
- (BOOL) popoverShouldClose:(NSPopover *) popover;
```

## Parameters

- `popover`: The popover.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the popover should close, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The popover invokes this method on its delegate whenever it is about to close. This gives the delegate a chance to override the close.

If there is no delegate or the delegate does not implement this method the default behavior is that the popover will close.

## See Also

### Popover Visibility

- [popoverWillShow:](popoverwillshow%28__%29.md): Invoked when the popover will show.
- [popoverDidShow:](popoverdidshow%28__%29.md): Invoked when the popover has been shown.
- [popoverWillClose:](popoverwillclose%28__%29.md): Invoked when the popover is about to close.
- [popoverDidClose:](popoverdidclose%28__%29.md): Invoked when the popover did close.
- [popoverDidDetach:](popoverdiddetach%28__%29.md): Indicates that a popover has been released while it’s in an implicitly detached state.
- [popoverShouldDetach:](popovershoulddetach%28__%29.md): Returns a Boolean value that indicates whether a popover should detach from its positioning view and become a separate window.
