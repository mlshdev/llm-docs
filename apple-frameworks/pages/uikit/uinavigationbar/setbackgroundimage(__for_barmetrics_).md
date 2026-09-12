> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/setbackgroundimage(_:for:barmetrics:)](https://developer.apple.com/documentation/uikit/uinavigationbar/setbackgroundimage(_:for:barmetrics:))

# setBackgroundImage(\_:for:barMetrics:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background image to use for a given bar position and set of metrics.

## Declaration

```swift
func setBackgroundImage(_ backgroundImage: UIImage?, for barPosition: UIBarPosition, barMetrics: UIBarMetrics)
```

## Parameters

- `backgroundImage`: The image to use for the specified location and metrics.
- `barPosition`: The location of the navigation bar.
- `barMetrics`: The metrics of the navigation bar.

<a id="Discussion"></a>

## Discussion

Resizable images will be stretched vertically, if necessary, for a position of [UIBarPosition.topAttached](../uibarposition/topattached.md).

## See Also

### Changing the background

- [barTintColor](bartintcolor.md): The tint color to apply to the navigation bar background.
- [backgroundImage(for:)](backgroundimage%28for_%29.md): Returns the background image for given bar metrics.
- [setBackgroundImage(\_:for:)](setbackgroundimage%28__for_%29.md): Sets the background image for given bar metrics.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the background image to use for a given bar position and set of metrics.

# setBackgroundImage:forBarPosition:barMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background image to use for a given bar position and set of metrics.

## Declaration

```objectivec
- (void) setBackgroundImage:(UIImage *) backgroundImage forBarPosition:(UIBarPosition) barPosition barMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `backgroundImage`: The image to use for the specified location and metrics.
- `barPosition`: The location of the navigation bar.
- `barMetrics`: The metrics of the navigation bar.

<a id="Discussion"></a>

## Discussion

Resizable images will be stretched vertically, if necessary, for a position of [UIBarPositionTopAttached](../uibarposition/topattached.md).

## See Also

### Changing the background

- [barTintColor](bartintcolor.md): The tint color to apply to the navigation bar background.
- [backgroundImageForBarMetrics:](backgroundimage%28for_%29.md): Returns the background image for given bar metrics.
- [setBackgroundImage:forBarMetrics:](setbackgroundimage%28__for_%29.md): Sets the background image for given bar metrics.
- [backgroundImageForBarPosition:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the background image to use for a given bar position and set of metrics.
