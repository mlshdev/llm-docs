> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopoverdelegate/popovershoulddetach(_:)](https://developer.apple.com/documentation/appkit/nspopoverdelegate/popovershoulddetach(_:))

# popoverShouldDetach(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns a Boolean value that indicates whether a popover should detach from its positioning view and become a separate window.

## Declaration

```swift
@MainActor optional func popoverShouldDetach(_ popover: NSPopover) -> Bool
```

## Parameters

- `popover`: The popover that may be detached.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, it returns [false](https://developer.apple.com/documentation/swift/false) by default. If you return [true](https://developer.apple.com/documentation/swift/true) from this method, but you don’t implement [detachableWindow(for:)](detachablewindow%28for_%29.md) or you implement it to return `nil`, a detachable window is created with the popover’s [contentViewController](../nspopover/contentviewcontroller.md).

An automatically created window has the same appearance as the detached popover. For example, if the popover’s [contentViewController](../nspopover/contentviewcontroller.md) has a title, it will be bound to and displayed as the title of the detached window. When a popover is released in a detached state, it calls [popoverDidDetach(\_:)](popoverdiddetach%28__%29.md) on the delegate. When a detached popover is closed, calls to [popoverShouldClose(\_:)](popovershouldclose%28__%29.md), [popoverWillClose(\_:)](popoverwillclose%28__%29.md), and [popoverDidClose(\_:)](popoverdidclose%28__%29.md), in addition to the related notifications, specify the reason [standard](../nspopover/closereason/standard.md).

## See Also

### Popover Visibility

- [popoverShouldClose(\_:)](popovershouldclose%28__%29.md): Allows a delegate to override a close request.
- [popoverWillShow(\_:)](popoverwillshow%28__%29.md): Invoked when the popover will show.
- [popoverDidShow(\_:)](popoverdidshow%28__%29.md): Invoked when the popover has been shown.
- [popoverWillClose(\_:)](popoverwillclose%28__%29.md): Invoked when the popover is about to close.
- [popoverDidClose(\_:)](popoverdidclose%28__%29.md): Invoked when the popover did close.
- [popoverDidDetach(\_:)](popoverdiddetach%28__%29.md): Indicates that a popover has been released while it’s in an implicitly detached state.

# popoverShouldDetach: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns a Boolean value that indicates whether a popover should detach from its positioning view and become a separate window.

## Declaration

```objectivec
- (BOOL) popoverShouldDetach:(NSPopover *) popover;
```

## Parameters

- `popover`: The popover that may be detached.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, it returns [false](https://developer.apple.com/documentation/swift/false) by default. If you return [true](https://developer.apple.com/documentation/swift/true) from this method, but you don’t implement [detachableWindowForPopover:](detachablewindow%28for_%29.md) or you implement it to return `nil`, a detachable window is created with the popover’s [contentViewController](../nspopover/contentviewcontroller.md).

An automatically created window has the same appearance as the detached popover. For example, if the popover’s [contentViewController](../nspopover/contentviewcontroller.md) has a title, it will be bound to and displayed as the title of the detached window. When a popover is released in a detached state, it calls [popoverDidDetach:](popoverdiddetach%28__%29.md) on the delegate. When a detached popover is closed, calls to [popoverShouldClose:](popovershouldclose%28__%29.md), [popoverWillClose:](popoverwillclose%28__%29.md), and [popoverDidClose:](popoverdidclose%28__%29.md), in addition to the related notifications, specify the reason [NSPopoverCloseReasonStandard](../nspopover/closereason/standard.md).

## See Also

### Popover Visibility

- [popoverShouldClose:](popovershouldclose%28__%29.md): Allows a delegate to override a close request.
- [popoverWillShow:](popoverwillshow%28__%29.md): Invoked when the popover will show.
- [popoverDidShow:](popoverdidshow%28__%29.md): Invoked when the popover has been shown.
- [popoverWillClose:](popoverwillclose%28__%29.md): Invoked when the popover is about to close.
- [popoverDidClose:](popoverdidclose%28__%29.md): Invoked when the popover did close.
- [popoverDidDetach:](popoverdiddetach%28__%29.md): Indicates that a popover has been released while it’s in an implicitly detached state.
