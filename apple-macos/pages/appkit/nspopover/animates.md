> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/animates](https://developer.apple.com/documentation/appkit/nspopover/animates)

# animates (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Specifies if the popover is to be animated.

## Declaration

```swift
var animates: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A popover may be animated when it shows, closes, moves, or appears to transition to a detachable window. This property also controls whether the popover animates when the content view or content size changes.

The system does not guarantee which behaviors will be animated or that this property will be respected; it is regarded as a hint.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing a Popover’s Appearance

- [appearance](appearance-swift.property.md): The appearance of the popover.
- [effectiveAppearance](effectiveappearance.md): The appearance that will be used when the popover is displayed onscreen.
- [contentSize](contentsize.md): The content size of the popover.
- [isShown](isshown.md): The display state of the popover.
- [isDetached](isdetached.md): A Boolean value that indicates whether the window created by a popover’s detachment is automatically created.

# animates (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Specifies if the popover is to be animated.

## Declaration

```objectivec
@property BOOL animates;
```

<a id="Discussion"></a>

## Discussion

A popover may be animated when it shows, closes, moves, or appears to transition to a detachable window. This property also controls whether the popover animates when the content view or content size changes.

The system does not guarantee which behaviors will be animated or that this property will be respected; it is regarded as a hint.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing a Popover’s Appearance

- [appearance](appearance-swift.property.md): The appearance of the popover.
- [effectiveAppearance](effectiveappearance.md): The appearance that will be used when the popover is displayed onscreen.
- [contentSize](contentsize.md): The content size of the popover.
- [shown](isshown.md): The display state of the popover.
- [detached](isdetached.md): A Boolean value that indicates whether the window created by a popover’s detachment is automatically created.
