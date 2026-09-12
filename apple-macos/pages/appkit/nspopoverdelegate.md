> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopoverdelegate](https://developer.apple.com/documentation/appkit/nspopoverdelegate)

# NSPopoverDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods that a popover delegate can implement to provide additional or custom functionality.

## Declaration

```swift
protocol NSPopoverDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

See [NSPopover](nspopover.md) for more information on popovers in general.

## Topics

### Popover Window

- [detachableWindow(for:)](nspopoverdelegate/detachablewindow%28for_%29.md): Detaches the popover creating a window containing the content.

### Popover Visibility

- [popoverShouldClose(\_:)](nspopoverdelegate/popovershouldclose%28__%29.md): Allows a delegate to override a close request.
- [popoverWillShow(\_:)](nspopoverdelegate/popoverwillshow%28__%29.md): Invoked when the popover will show.
- [popoverDidShow(\_:)](nspopoverdelegate/popoverdidshow%28__%29.md): Invoked when the popover has been shown.
- [popoverWillClose(\_:)](nspopoverdelegate/popoverwillclose%28__%29.md): Invoked when the popover is about to close.
- [popoverDidClose(\_:)](nspopoverdelegate/popoverdidclose%28__%29.md): Invoked when the popover did close.
- [popoverDidDetach(\_:)](nspopoverdelegate/popoverdiddetach%28__%29.md): Indicates that a popover has been released while it’s in an implicitly detached state.
- [popoverShouldDetach(\_:)](nspopoverdelegate/popovershoulddetach%28__%29.md): Returns a Boolean value that indicates whether a popover should detach from its positioning view and become a separate window.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Popovers

- [NSPopover](nspopover.md): A means to display additional content related to existing content on the screen.

# NSPopoverDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods that a popover delegate can implement to provide additional or custom functionality.

## Declaration

```objectivec
@protocol NSPopoverDelegate <NSObject>
```

<a id="overview"></a>

## Overview

See [NSPopover](nspopover.md) for more information on popovers in general.

## Topics

### Popover Window

- [detachableWindowForPopover:](nspopoverdelegate/detachablewindow%28for_%29.md): Detaches the popover creating a window containing the content.

### Popover Visibility

- [popoverShouldClose:](nspopoverdelegate/popovershouldclose%28__%29.md): Allows a delegate to override a close request.
- [popoverWillShow:](nspopoverdelegate/popoverwillshow%28__%29.md): Invoked when the popover will show.
- [popoverDidShow:](nspopoverdelegate/popoverdidshow%28__%29.md): Invoked when the popover has been shown.
- [popoverWillClose:](nspopoverdelegate/popoverwillclose%28__%29.md): Invoked when the popover is about to close.
- [popoverDidClose:](nspopoverdelegate/popoverdidclose%28__%29.md): Invoked when the popover did close.
- [popoverDidDetach:](nspopoverdelegate/popoverdiddetach%28__%29.md): Indicates that a popover has been released while it’s in an implicitly detached state.
- [popoverShouldDetach:](nspopoverdelegate/popovershoulddetach%28__%29.md): Returns a Boolean value that indicates whether a popover should detach from its positioning view and become a separate window.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Popovers

- [NSPopover](nspopover.md): A means to display additional content related to existing content on the screen.
