> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/appearance-swift.property](https://developer.apple.com/documentation/appkit/nspopover/appearance-swift.property)

# appearance (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The appearance of the popover.

## Declaration

```swift
var appearance: NSAppearance? { get set }
```

<a id="Discussion"></a>

## Discussion

If no appearance is specified, the popover’s effective appearance defaults to [vibrantLight](../nsappearance/name-swift.struct/vibrantlight.md).

In apps that run in macOS 10.10 and later, the previous property type of [NSPopover.Appearance](appearance-swift.enum.md) is deprecated. In apps that run in OS X v10.9 and earlier, the [aqua](../nsappearance/name-swift.struct/aqua.md) appearance is automatically set on popover content.

## See Also

### Managing a Popover’s Appearance

- [effectiveAppearance](effectiveappearance.md): The appearance that will be used when the popover is displayed onscreen.
- [animates](animates.md): Specifies if the popover is to be animated.
- [contentSize](contentsize.md): The content size of the popover.
- [isShown](isshown.md): The display state of the popover.
- [isDetached](isdetached.md): A Boolean value that indicates whether the window created by a popover’s detachment is automatically created.

# appearance (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The appearance of the popover.

## Declaration

```objectivec
@property NSPopoverAppearance appearance;
```

```objectivec
@property (strong, nullable) NSAppearance * appearance;
```

<a id="Discussion"></a>

## Discussion

If no appearance is specified, the popover’s effective appearance defaults to [NSAppearanceNameVibrantLight](../nsappearance/name-swift.struct/vibrantlight.md).

In apps that run in macOS 10.10 and later, the previous property type of [NSPopoverAppearance](appearance-swift.enum.md) is deprecated. In apps that run in OS X v10.9 and earlier, the [NSAppearanceNameAqua](../nsappearance/name-swift.struct/aqua.md) appearance is automatically set on popover content.

## See Also

### Managing a Popover’s Appearance

- [effectiveAppearance](effectiveappearance.md): The appearance that will be used when the popover is displayed onscreen.
- [animates](animates.md): Specifies if the popover is to be animated.
- [contentSize](contentsize.md): The content size of the popover.
- [shown](isshown.md): The display state of the popover.
- [detached](isdetached.md): A Boolean value that indicates whether the window created by a popover’s detachment is automatically created.
