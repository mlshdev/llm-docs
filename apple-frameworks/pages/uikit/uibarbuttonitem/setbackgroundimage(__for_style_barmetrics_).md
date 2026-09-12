> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/setbackgroundimage(_:for:style:barmetrics:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/setbackgroundimage(_:for:style:barmetrics:))

# setBackgroundImage(\_:for:style:barMetrics:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background image for the specified state, style, and metrics.

## Declaration

```swift
func setBackgroundImage(_ backgroundImage: UIImage?, for state: UIControl.State, style: UIBarButtonItem.Style, barMetrics: UIBarMetrics)
```

## Parameters

- `backgroundImage`: The background image to use for the specified state, style, and metrics.
- `state`: The bar button state.
- `style`: The bar button style.
- `barMetrics`: The bar button metrics.

<a id="Discussion"></a>

## Discussion

For good results, `backgroundImage` must be a stretchable image.

## See Also

### Customizing the background

- [backgroundVerticalPositionAdjustment(for:)](backgroundverticalpositionadjustment%28for_%29.md): Returns the background vertical position offset for specified bar metrics.
- [setBackgroundVerticalPositionAdjustment(\_:for:)](setbackgroundverticalpositionadjustment%28__for_%29.md): Sets the background vertical position offset for specified bar metrics.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a specified state and bar metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for a specified state and bar metrics.
- [backgroundImage(for:style:barMetrics:)](backgroundimage%28for_style_barmetrics_%29.md): Returns the background image for the specified state, style, and metrics.

# setBackgroundImage:forState:style:barMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background image for the specified state, style, and metrics.

## Declaration

```objectivec
- (void) setBackgroundImage:(UIImage *) backgroundImage forState:(UIControlState) state style:(UIBarButtonItemStyle) style barMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `backgroundImage`: The background image to use for the specified state, style, and metrics.
- `state`: The bar button state.
- `style`: The bar button style.
- `barMetrics`: The bar button metrics.

<a id="Discussion"></a>

## Discussion

For good results, `backgroundImage` must be a stretchable image.

## See Also

### Customizing the background

- [backgroundVerticalPositionAdjustmentForBarMetrics:](backgroundverticalpositionadjustment%28for_%29.md): Returns the background vertical position offset for specified bar metrics.
- [setBackgroundVerticalPositionAdjustment:forBarMetrics:](setbackgroundverticalpositionadjustment%28__for_%29.md): Sets the background vertical position offset for specified bar metrics.
- [backgroundImageForState:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a specified state and bar metrics.
- [setBackgroundImage:forState:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for a specified state and bar metrics.
- [backgroundImageForState:style:barMetrics:](backgroundimage%28for_style_barmetrics_%29.md): Returns the background image for the specified state, style, and metrics.
