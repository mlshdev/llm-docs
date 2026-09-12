> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/isdetached](https://developer.apple.com/documentation/appkit/nspopover/isdetached)

# isDetached (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the window created by a popover’s detachment is automatically created.

## Declaration

```swift
var isDetached: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When [isDetached](isdetached.md) is [true](https://developer.apple.com/documentation/swift/true), the detached window is automatically created. This property does not apply when detaching a popover results in a window returned by [detachableWindow(for:)](../nspopoverdelegate/detachablewindow%28for_%29.md).

## See Also

### Managing a Popover’s Appearance

- [appearance](appearance-swift.property.md): The appearance of the popover.
- [effectiveAppearance](effectiveappearance.md): The appearance that will be used when the popover is displayed onscreen.
- [animates](animates.md): Specifies if the popover is to be animated.
- [contentSize](contentsize.md): The content size of the popover.
- [isShown](isshown.md): The display state of the popover.

# detached (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the window created by a popover’s detachment is automatically created.

## Declaration

```objectivec
@property (readonly, getter=isDetached) BOOL detached;
```

<a id="Discussion"></a>

## Discussion

When [detached](isdetached.md) is [true](https://developer.apple.com/documentation/swift/true), the detached window is automatically created. This property does not apply when detaching a popover results in a window returned by [detachableWindowForPopover:](../nspopoverdelegate/detachablewindow%28for_%29.md).

## See Also

### Managing a Popover’s Appearance

- [appearance](appearance-swift.property.md): The appearance of the popover.
- [effectiveAppearance](effectiveappearance.md): The appearance that will be used when the popover is displayed onscreen.
- [animates](animates.md): Specifies if the popover is to be animated.
- [contentSize](contentsize.md): The content size of the popover.
- [shown](isshown.md): The display state of the popover.
