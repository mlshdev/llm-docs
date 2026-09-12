> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/backgroundimage(for:barmetrics:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/backgroundimage(for:barmetrics:))

# backgroundImage(for:barMetrics:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the background image for a specified state and bar metrics.

## Declaration

```swift
func backgroundImage(for state: UIControl.State, barMetrics: UIBarMetrics) -> UIImage?
```

## Parameters

- `state`: A control state.
- `barMetrics`: Bar metrics.

<a id="return-value"></a>

## Return Value

The background image for the button given state and metrics.

## See Also

### Customizing the background

- [backgroundVerticalPositionAdjustment(for:)](backgroundverticalpositionadjustment%28for_%29.md): Returns the background vertical position offset for specified bar metrics.
- [setBackgroundVerticalPositionAdjustment(\_:for:)](setbackgroundverticalpositionadjustment%28__for_%29.md): Sets the background vertical position offset for specified bar metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for a specified state and bar metrics.
- [backgroundImage(for:style:barMetrics:)](backgroundimage%28for_style_barmetrics_%29.md): Returns the background image for the specified state, style, and metrics.
- [setBackgroundImage(\_:for:style:barMetrics:)](setbackgroundimage%28__for_style_barmetrics_%29.md): Sets the background image for the specified state, style, and metrics.

# backgroundImageForState:barMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the background image for a specified state and bar metrics.

## Declaration

```objectivec
- (UIImage *) backgroundImageForState:(UIControlState) state barMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `state`: A control state.
- `barMetrics`: Bar metrics.

<a id="return-value"></a>

## Return Value

The background image for the button given state and metrics.

## See Also

### Customizing the background

- [backgroundVerticalPositionAdjustmentForBarMetrics:](backgroundverticalpositionadjustment%28for_%29.md): Returns the background vertical position offset for specified bar metrics.
- [setBackgroundVerticalPositionAdjustment:forBarMetrics:](setbackgroundverticalpositionadjustment%28__for_%29.md): Sets the background vertical position offset for specified bar metrics.
- [setBackgroundImage:forState:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for a specified state and bar metrics.
- [backgroundImageForState:style:barMetrics:](backgroundimage%28for_style_barmetrics_%29.md): Returns the background image for the specified state, style, and metrics.
- [setBackgroundImage:forState:style:barMetrics:](setbackgroundimage%28__for_style_barmetrics_%29.md): Sets the background image for the specified state, style, and metrics.
