> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/insetslayoutmarginsfromsafearea](https://developer.apple.com/documentation/uikit/uiview/insetslayoutmarginsfromsafearea)

# insetsLayoutMarginsFromSafeArea (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value indicating whether the view’s layout margins are updated automatically to reflect the safe area.

## Declaration

```swift
var insetsLayoutMarginsFromSafeArea: Bool { get set }
```

## Mentioned In

- [Positioning content within layout margins](../positioning-content-within-layout-margins.md)

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), any margins that are outside the safe area are automatically modified to fall within the safe area boundary. The default value of this property is [true](https://developer.apple.com/documentation/swift/true). Changing the value to [false](https://developer.apple.com/documentation/swift/false) allows your margins to remain at their original locations, even when they are outside the safe area.

## See Also

### Getting the safe area

- [Positioning content relative to the safe area](../positioning-content-relative-to-the-safe-area.md): Position views so that they aren’t obstructed by other content.
- [safeAreaInsets](safeareainsets.md): The insets that you use to determine the safe area for this view.
- [safeAreaLayoutGuide](safearealayoutguide.md): The layout guide representing the portion of your view that is unobscured by bars and other content.
- [safeAreaInsetsDidChange()](safeareainsetsdidchange%28%29.md): Called when the safe area of the view changes.

# insetsLayoutMarginsFromSafeArea (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value indicating whether the view’s layout margins are updated automatically to reflect the safe area.

## Declaration

```objectivec
@property (nonatomic) BOOL insetsLayoutMarginsFromSafeArea;
```

## Mentioned In

- [Positioning content within layout margins](../positioning-content-within-layout-margins.md)

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), any margins that are outside the safe area are automatically modified to fall within the safe area boundary. The default value of this property is [true](https://developer.apple.com/documentation/swift/true). Changing the value to [false](https://developer.apple.com/documentation/swift/false) allows your margins to remain at their original locations, even when they are outside the safe area.

## See Also

### Getting the safe area

- [Positioning content relative to the safe area](../positioning-content-relative-to-the-safe-area.md): Position views so that they aren’t obstructed by other content.
- [safeAreaInsets](safeareainsets.md): The insets that you use to determine the safe area for this view.
- [safeAreaLayoutGuide](safearealayoutguide.md): The layout guide representing the portion of your view that is unobscured by bars and other content.
- [safeAreaInsetsDidChange](safeareainsetsdidchange%28%29.md): Called when the safe area of the view changes.
