> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/backgroundimage(for:style:barmetrics:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/backgroundimage(for:style:barmetrics:))

# backgroundImage(for:style:barMetrics:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the background image for the specified state, style, and metrics.

## Declaration

```swift
func backgroundImage(for state: UIControl.State, style: UIBarButtonItem.Style, barMetrics: UIBarMetrics) -> UIImage?
```

## Parameters

- `state`: The bar button state.
- `style`: The bar button style.
- `barMetrics`: The bar button metrics.

<a id="return-value"></a>

## Return Value

The background image associated with the specified state, style, and metrics.

## See Also

### Customizing the background

- [backgroundVerticalPositionAdjustment(for:)](backgroundverticalpositionadjustment%28for_%29.md): Returns the background vertical position offset for specified bar metrics.
- [setBackgroundVerticalPositionAdjustment(\_:for:)](setbackgroundverticalpositionadjustment%28__for_%29.md): Sets the background vertical position offset for specified bar metrics.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a specified state and bar metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for a specified state and bar metrics.
- [setBackgroundImage(\_:for:style:barMetrics:)](setbackgroundimage%28__for_style_barmetrics_%29.md): Sets the background image for the specified state, style, and metrics.

# backgroundImageForState:style:barMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the background image for the specified state, style, and metrics.

## Declaration

```objectivec
- (UIImage *) backgroundImageForState:(UIControlState) state style:(UIBarButtonItemStyle) style barMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `state`: The bar button state.
- `style`: The bar button style.
- `barMetrics`: The bar button metrics.

<a id="return-value"></a>

## Return Value

The background image associated with the specified state, style, and metrics.

## See Also

### Customizing the background

- [backgroundVerticalPositionAdjustmentForBarMetrics:](backgroundverticalpositionadjustment%28for_%29.md): Returns the background vertical position offset for specified bar metrics.
- [setBackgroundVerticalPositionAdjustment:forBarMetrics:](setbackgroundverticalpositionadjustment%28__for_%29.md): Sets the background vertical position offset for specified bar metrics.
- [backgroundImageForState:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the background image for a specified state and bar metrics.
- [setBackgroundImage:forState:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for a specified state and bar metrics.
- [setBackgroundImage:forState:style:barMetrics:](setbackgroundimage%28__for_style_barmetrics_%29.md): Sets the background image for the specified state, style, and metrics.
