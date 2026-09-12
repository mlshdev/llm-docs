> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/backgroundimage(for:barmetrics:)](https://developer.apple.com/documentation/uikit/uinavigationbar/backgroundimage(for:barmetrics:))

# backgroundImage(for:barMetrics:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the background image to use for a given bar position and set of metrics.

## Declaration

```swift
func backgroundImage(for barPosition: UIBarPosition, barMetrics: UIBarMetrics) -> UIImage?
```

## Parameters

- `barPosition`: The location of the navigation bar.
- `barMetrics`: The metrics of the navigation bar.

<a id="return-value"></a>

## Return Value

The image to use for the specified location and metrics.

<a id="Discussion"></a>

## Discussion

Resizable images will be stretched vertically, if necessary, for a position of [UIBarPosition.topAttached](../uibarposition/topattached.md).

## See Also

### Changing the background

- [barTintColor](bartintcolor.md): The tint color to apply to the navigation bar background.
- [backgroundImage(for:)](backgroundimage%28for_%29.md): Returns the background image for given bar metrics.
- [setBackgroundImage(\_:for:)](setbackgroundimage%28__for_%29.md): Sets the background image for given bar metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image to use for a given bar position and set of metrics.

# backgroundImageForBarPosition:barMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the background image to use for a given bar position and set of metrics.

## Declaration

```objectivec
- (UIImage *) backgroundImageForBarPosition:(UIBarPosition) barPosition barMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `barPosition`: The location of the navigation bar.
- `barMetrics`: The metrics of the navigation bar.

<a id="return-value"></a>

## Return Value

The image to use for the specified location and metrics.

<a id="Discussion"></a>

## Discussion

Resizable images will be stretched vertically, if necessary, for a position of [UIBarPositionTopAttached](../uibarposition/topattached.md).

## See Also

### Changing the background

- [barTintColor](bartintcolor.md): The tint color to apply to the navigation bar background.
- [backgroundImageForBarMetrics:](backgroundimage%28for_%29.md): Returns the background image for given bar metrics.
- [setBackgroundImage:forBarMetrics:](setbackgroundimage%28__for_%29.md): Sets the background image for given bar metrics.
- [setBackgroundImage:forBarPosition:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image to use for a given bar position and set of metrics.
