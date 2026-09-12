> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/setbackgroundimage(_:for:barmetrics:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/setbackgroundimage(_:for:barmetrics:))

# setBackgroundImage(\_:for:barMetrics:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background image for a specified state and bar metrics.

## Declaration

```swift
func setBackgroundImage(_ backgroundImage: UIImage?, for state: UIControl.State, barMetrics: UIBarMetrics)
```

## Parameters

- `backgroundImage`: The background image for the specified state and metrics.
- `state`: A control state.
- `barMetrics`: Bar metrics.

<a id="Discussion"></a>

## Discussion

For good results, `backgroundImage` must be a stretchable image.

## See Also

### Customizing the background

- [backgroundVerticalPositionAdjustment(for:)](backgroundverticalpositionadjustment%28for_%29.md): Returns the background vertical position offset for specified bar metrics.
- [setBackgroundVerticalPositionAdjustment(\_:for:)](setbackgroundverticalpositionadjustment%28__for_%29.md): Sets the background vertical position offset for specified bar metrics.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a specified state and bar metrics.
- [backgroundImage(for:style:barMetrics:)](backgroundimage%28for_style_barmetrics_%29.md): Returns the background image for the specified state, style, and metrics.
- [setBackgroundImage(\_:for:style:barMetrics:)](setbackgroundimage%28__for_style_barmetrics_%29.md): Sets the background image for the specified state, style, and metrics.

# setBackgroundImage:forState:barMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background image for a specified state and bar metrics.

## Declaration

```objectivec
- (void) setBackgroundImage:(UIImage *) backgroundImage forState:(UIControlState) state barMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `backgroundImage`: The background image for the specified state and metrics.
- `state`: A control state.
- `barMetrics`: Bar metrics.

<a id="Discussion"></a>

## Discussion

For good results, `backgroundImage` must be a stretchable image.

## See Also

### Customizing the background

- [backgroundVerticalPositionAdjustmentForBarMetrics:](backgroundverticalpositionadjustment%28for_%29.md): Returns the background vertical position offset for specified bar metrics.
- [setBackgroundVerticalPositionAdjustment:forBarMetrics:](setbackgroundverticalpositionadjustment%28__for_%29.md): Sets the background vertical position offset for specified bar metrics.
- [backgroundImageForState:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a specified state and bar metrics.
- [backgroundImageForState:style:barMetrics:](backgroundimage%28for_style_barmetrics_%29.md): Returns the background image for the specified state, style, and metrics.
- [setBackgroundImage:forState:style:barMetrics:](setbackgroundimage%28__for_style_barmetrics_%29.md): Sets the background image for the specified state, style, and metrics.
