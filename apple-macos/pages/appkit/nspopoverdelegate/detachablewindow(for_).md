> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopoverdelegate/detachablewindow(for:)](https://developer.apple.com/documentation/appkit/nspopoverdelegate/detachablewindow(for:))

# detachableWindow(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Detaches the popover creating a window containing the content.

## Declaration

```swift
@MainActor optional func detachableWindow(for popover: NSPopover) -> NSWindow?
```

## Parameters

- `popover`: The popover.

<a id="return-value"></a>

## Return Value

Returns a window instance to which the popover should be detached.

<a id="Discussion"></a>

## Discussion

You should not remove the popover’s content view as part of your implementation of this method.

The popover and the detachable window may be shown at the same time and therefore cannot share a content view or content view controller.

If the popover and the detachable window should have the same content, you should define the content in a separate nib file and use a view controller to instantiate separate copies of the content for the popover and the detachable window.

The popover will animate to appear as though it morphs into the detachable window (unless the popover’s  [animates](../nspopover/animates.md) property is set to [false](https://developer.apple.com/documentation/swift/false)). The exact animation used is not guaranteed.

If there is no delegate, the delegate does not implement this method, or the delegate returns nil, the popup will not be displayed detached.

# detachableWindowForPopover: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Detaches the popover creating a window containing the content.

## Declaration

```objectivec
- (NSWindow *) detachableWindowForPopover:(NSPopover *) popover;
```

## Parameters

- `popover`: The popover.

<a id="return-value"></a>

## Return Value

Returns a window instance to which the popover should be detached.

<a id="Discussion"></a>

## Discussion

You should not remove the popover’s content view as part of your implementation of this method.

The popover and the detachable window may be shown at the same time and therefore cannot share a content view or content view controller.

If the popover and the detachable window should have the same content, you should define the content in a separate nib file and use a view controller to instantiate separate copies of the content for the popover and the detachable window.

The popover will animate to appear as though it morphs into the detachable window (unless the popover’s  [animates](../nspopover/animates.md) property is set to [false](https://developer.apple.com/documentation/swift/false)). The exact animation used is not guaranteed.

If there is no delegate, the delegate does not implement this method, or the delegate returns nil, the popup will not be displayed detached.
