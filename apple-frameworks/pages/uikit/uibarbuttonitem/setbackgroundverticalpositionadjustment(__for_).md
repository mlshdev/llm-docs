> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/setbackgroundverticalpositionadjustment(_:for:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/setbackgroundverticalpositionadjustment(_:for:))

# setBackgroundVerticalPositionAdjustment(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background vertical position offset for specified bar metrics.

## Declaration

```swift
func setBackgroundVerticalPositionAdjustment(_ adjustment: CGFloat, for barMetrics: UIBarMetrics)
```

## Parameters

- `adjustment`: The background vertical position offset for `barMetrics`.
- `barMetrics`: Bar metrics.

<a id="Discussion"></a>

## Discussion

This offset is used to adjust the vertical centering of bordered bar buttons within the bar.

## See Also

### Customizing the background

- [backgroundVerticalPositionAdjustment(for:)](backgroundverticalpositionadjustment%28for_%29.md): Returns the background vertical position offset for specified bar metrics.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a specified state and bar metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for a specified state and bar metrics.
- [backgroundImage(for:style:barMetrics:)](backgroundimage%28for_style_barmetrics_%29.md): Returns the background image for the specified state, style, and metrics.
- [setBackgroundImage(\_:for:style:barMetrics:)](setbackgroundimage%28__for_style_barmetrics_%29.md): Sets the background image for the specified state, style, and metrics.

# setBackgroundVerticalPositionAdjustment:forBarMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background vertical position offset for specified bar metrics.

## Declaration

```objectivec
- (void) setBackgroundVerticalPositionAdjustment:(CGFloat) adjustment forBarMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `adjustment`: The background vertical position offset for `barMetrics`.
- `barMetrics`: Bar metrics.

<a id="Discussion"></a>

## Discussion

This offset is used to adjust the vertical centering of bordered bar buttons within the bar.

## See Also

### Customizing the background

- [backgroundVerticalPositionAdjustmentForBarMetrics:](backgroundverticalpositionadjustment%28for_%29.md): Returns the background vertical position offset for specified bar metrics.
- [backgroundImageForState:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a specified state and bar metrics.
- [setBackgroundImage:forState:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for a specified state and bar metrics.
- [backgroundImageForState:style:barMetrics:](backgroundimage%28for_style_barmetrics_%29.md): Returns the background image for the specified state, style, and metrics.
- [setBackgroundImage:forState:style:barMetrics:](setbackgroundimage%28__for_style_barmetrics_%29.md): Sets the background image for the specified state, style, and metrics.
