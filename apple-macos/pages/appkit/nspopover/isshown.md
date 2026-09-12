> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/isshown](https://developer.apple.com/documentation/appkit/nspopover/isshown)

# isShown (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The display state of the popover.

## Declaration

```swift
var isShown: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value is [true](https://developer.apple.com/documentation/swift/true) if the popover is being shown, [false](https://developer.apple.com/documentation/swift/false) otherwise.

The popover is considered to be shown from the point when [show(relativeTo:of:preferredEdge:)](show%28relativeto_of_preferrededge_%29.md) is invoked. A popover is considered closed in response to an invocation of either [close()](close%28%29.md) or [performClose(\_:)](performclose%28__%29.md).

## See Also

### Managing a Popover’s Appearance

- [appearance](appearance-swift.property.md): The appearance of the popover.
- [effectiveAppearance](effectiveappearance.md): The appearance that will be used when the popover is displayed onscreen.
- [animates](animates.md): Specifies if the popover is to be animated.
- [contentSize](contentsize.md): The content size of the popover.
- [isDetached](isdetached.md): A Boolean value that indicates whether the window created by a popover’s detachment is automatically created.

# shown (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The display state of the popover.

## Declaration

```objectivec
@property (readonly, getter=isShown) BOOL shown;
```

<a id="Discussion"></a>

## Discussion

The value is [true](https://developer.apple.com/documentation/swift/true) if the popover is being shown, [false](https://developer.apple.com/documentation/swift/false) otherwise.

The popover is considered to be shown from the point when [showRelativeToRect:ofView:preferredEdge:](show%28relativeto_of_preferrededge_%29.md) is invoked. A popover is considered closed in response to an invocation of either [close](close%28%29.md) or [performClose:](performclose%28__%29.md).

## See Also

### Managing a Popover’s Appearance

- [appearance](appearance-swift.property.md): The appearance of the popover.
- [effectiveAppearance](effectiveappearance.md): The appearance that will be used when the popover is displayed onscreen.
- [animates](animates.md): Specifies if the popover is to be animated.
- [contentSize](contentsize.md): The content size of the popover.
- [detached](isdetached.md): A Boolean value that indicates whether the window created by a popover’s detachment is automatically created.
