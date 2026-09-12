> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/backgroundverticalpositionadjustment(for:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/backgroundverticalpositionadjustment(for:))

# backgroundVerticalPositionAdjustment(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the background vertical position offset for specified bar metrics.

## Declaration

```swift
func backgroundVerticalPositionAdjustment(for barMetrics: UIBarMetrics) -> CGFloat
```

## Parameters

- `barMetrics`: Bar metrics.

<a id="return-value"></a>

## Return Value

The background vertical position offset for `barMetrics`.

<a id="Discussion"></a>

## Discussion

This offset is used to adjust the vertical centering of bordered bar buttons within the bar.

## See Also

### Customizing the background

- [setBackgroundVerticalPositionAdjustment(\_:for:)](setbackgroundverticalpositionadjustment%28__for_%29.md): Sets the background vertical position offset for specified bar metrics.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a specified state and bar metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for a specified state and bar metrics.
- [backgroundImage(for:style:barMetrics:)](backgroundimage%28for_style_barmetrics_%29.md): Returns the background image for the specified state, style, and metrics.
- [setBackgroundImage(\_:for:style:barMetrics:)](setbackgroundimage%28__for_style_barmetrics_%29.md): Sets the background image for the specified state, style, and metrics.

# backgroundVerticalPositionAdjustmentForBarMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the background vertical position offset for specified bar metrics.

## Declaration

```objectivec
- (CGFloat) backgroundVerticalPositionAdjustmentForBarMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `barMetrics`: Bar metrics.

<a id="return-value"></a>

## Return Value

The background vertical position offset for `barMetrics`.

<a id="Discussion"></a>

## Discussion

This offset is used to adjust the vertical centering of bordered bar buttons within the bar.

## See Also

### Customizing the background

- [setBackgroundVerticalPositionAdjustment:forBarMetrics:](setbackgroundverticalpositionadjustment%28__for_%29.md): Sets the background vertical position offset for specified bar metrics.
- [backgroundImageForState:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a specified state and bar metrics.
- [setBackgroundImage:forState:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for a specified state and bar metrics.
- [backgroundImageForState:style:barMetrics:](backgroundimage%28for_style_barmetrics_%29.md): Returns the background image for the specified state, style, and metrics.
- [setBackgroundImage:forState:style:barMetrics:](setbackgroundimage%28__for_style_barmetrics_%29.md): Sets the background image for the specified state, style, and metrics.
