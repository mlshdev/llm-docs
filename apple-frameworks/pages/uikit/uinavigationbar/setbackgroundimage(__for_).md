> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/setbackgroundimage(_:for:)](https://developer.apple.com/documentation/uikit/uinavigationbar/setbackgroundimage(_:for:))

# setBackgroundImage(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background image for given bar metrics.

## Declaration

```swift
func setBackgroundImage(_ backgroundImage: UIImage?, for barMetrics: UIBarMetrics)
```

## Parameters

- `backgroundImage`: The background image to use for `barMetrics`.
- `barMetrics`: A bar metrics constant.

<a id="Discussion"></a>

## Discussion

Equivalent to using [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md) with a position of [UIBarPosition.any](../uibarposition/any.md).

## See Also

### Changing the background

- [barTintColor](bartintcolor.md): The tint color to apply to the navigation bar background.
- [backgroundImage(for:)](backgroundimage%28for_%29.md): Returns the background image for given bar metrics.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the background image to use for a given bar position and set of metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image to use for a given bar position and set of metrics.

# setBackgroundImage:forBarMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background image for given bar metrics.

## Declaration

```objectivec
- (void) setBackgroundImage:(UIImage *) backgroundImage forBarMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `backgroundImage`: The background image to use for `barMetrics`.
- `barMetrics`: A bar metrics constant.

<a id="Discussion"></a>

## Discussion

Equivalent to using [setBackgroundImage:forBarPosition:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md) with a position of [UIBarPositionAny](../uibarposition/any.md).

## See Also

### Changing the background

- [barTintColor](bartintcolor.md): The tint color to apply to the navigation bar background.
- [backgroundImageForBarMetrics:](backgroundimage%28for_%29.md): Returns the background image for given bar metrics.
- [backgroundImageForBarPosition:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the background image to use for a given bar position and set of metrics.
- [setBackgroundImage:forBarPosition:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image to use for a given bar position and set of metrics.
