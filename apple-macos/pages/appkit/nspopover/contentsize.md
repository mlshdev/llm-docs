> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/contentsize](https://developer.apple.com/documentation/appkit/nspopover/contentsize)

# contentSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The content size of the popover.

## Declaration

```swift
var contentSize: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

The popover’s content size is set to match the size of the content view when the content view controller is set.

Changes to the content size of the popover will cause the popover to animate while it is shown if the [animates](animates.md) property is [true](https://developer.apple.com/documentation/swift/true).

This property is exposed as a read-only binding.

## See Also

### Managing a Popover’s Appearance

- [appearance](appearance-swift.property.md): The appearance of the popover.
- [effectiveAppearance](effectiveappearance.md): The appearance that will be used when the popover is displayed onscreen.
- [animates](animates.md): Specifies if the popover is to be animated.
- [isShown](isshown.md): The display state of the popover.
- [isDetached](isdetached.md): A Boolean value that indicates whether the window created by a popover’s detachment is automatically created.

# contentSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The content size of the popover.

## Declaration

```objectivec
@property NSSize contentSize;
```

<a id="Discussion"></a>

## Discussion

The popover’s content size is set to match the size of the content view when the content view controller is set.

Changes to the content size of the popover will cause the popover to animate while it is shown if the [animates](animates.md) property is [true](https://developer.apple.com/documentation/swift/true).

This property is exposed as a read-only binding.

## See Also

### Managing a Popover’s Appearance

- [appearance](appearance-swift.property.md): The appearance of the popover.
- [effectiveAppearance](effectiveappearance.md): The appearance that will be used when the popover is displayed onscreen.
- [animates](animates.md): Specifies if the popover is to be animated.
- [shown](isshown.md): The display state of the popover.
- [detached](isdetached.md): A Boolean value that indicates whether the window created by a popover’s detachment is automatically created.
