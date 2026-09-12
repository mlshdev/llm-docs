> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopoverdelegate/popoverdiddetach(_:)](https://developer.apple.com/documentation/appkit/nspopoverdelegate/popoverdiddetach(_:))

# popoverDidDetach(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Indicates that a popover has been released while it’s in an implicitly detached state.

## Declaration

```swift
@MainActor optional func popoverDidDetach(_ popover: NSPopover)
```

## Parameters

- `popover`: The popover that detached from its anchor view and is not closing.

<a id="Discussion"></a>

## Discussion

This method is not called when the popover’s detached window is returned by [detachableWindow(for:)](detachablewindow%28for_%29.md).

## See Also

### Popover Visibility

- [popoverShouldClose(\_:)](popovershouldclose%28__%29.md): Allows a delegate to override a close request.
- [popoverWillShow(\_:)](popoverwillshow%28__%29.md): Invoked when the popover will show.
- [popoverDidShow(\_:)](popoverdidshow%28__%29.md): Invoked when the popover has been shown.
- [popoverWillClose(\_:)](popoverwillclose%28__%29.md): Invoked when the popover is about to close.
- [popoverDidClose(\_:)](popoverdidclose%28__%29.md): Invoked when the popover did close.
- [popoverShouldDetach(\_:)](popovershoulddetach%28__%29.md): Returns a Boolean value that indicates whether a popover should detach from its positioning view and become a separate window.

# popoverDidDetach: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Indicates that a popover has been released while it’s in an implicitly detached state.

## Declaration

```objectivec
- (void) popoverDidDetach:(NSPopover *) popover;
```

## Parameters

- `popover`: The popover that detached from its anchor view and is not closing.

<a id="Discussion"></a>

## Discussion

This method is not called when the popover’s detached window is returned by [detachableWindowForPopover:](detachablewindow%28for_%29.md).

## See Also

### Popover Visibility

- [popoverShouldClose:](popovershouldclose%28__%29.md): Allows a delegate to override a close request.
- [popoverWillShow:](popoverwillshow%28__%29.md): Invoked when the popover will show.
- [popoverDidShow:](popoverdidshow%28__%29.md): Invoked when the popover has been shown.
- [popoverWillClose:](popoverwillclose%28__%29.md): Invoked when the popover is about to close.
- [popoverDidClose:](popoverdidclose%28__%29.md): Invoked when the popover did close.
- [popoverShouldDetach:](popovershoulddetach%28__%29.md): Returns a Boolean value that indicates whether a popover should detach from its positioning view and become a separate window.
