> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/backgroundimage(for:)](https://developer.apple.com/documentation/uikit/uinavigationbar/backgroundimage(for:))

# backgroundImage(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the background image for given bar metrics.

## Declaration

```swift
func backgroundImage(for barMetrics: UIBarMetrics) -> UIImage?
```

## Parameters

- `barMetrics`: A bar metrics constant.

<a id="return-value"></a>

## Return Value

The background image for `barMetrics`.

<a id="Discussion"></a>

## Discussion

Equivalent to using [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md) with a position of [UIBarPosition.any](../uibarposition/any.md).

## See Also

### Changing the background

- [barTintColor](bartintcolor.md): The tint color to apply to the navigation bar background.
- [setBackgroundImage(\_:for:)](setbackgroundimage%28__for_%29.md): Sets the background image for given bar metrics.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the background image to use for a given bar position and set of metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image to use for a given bar position and set of metrics.

# backgroundImageForBarMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the background image for given bar metrics.

## Declaration

```objectivec
- (UIImage *) backgroundImageForBarMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `barMetrics`: A bar metrics constant.

<a id="return-value"></a>

## Return Value

The background image for `barMetrics`.

<a id="Discussion"></a>

## Discussion

Equivalent to using [backgroundImageForBarPosition:barMetrics:](backgroundimage%28for_barmetrics_%29.md) with a position of [UIBarPositionAny](../uibarposition/any.md).

## See Also

### Changing the background

- [barTintColor](bartintcolor.md): The tint color to apply to the navigation bar background.
- [setBackgroundImage:forBarMetrics:](setbackgroundimage%28__for_%29.md): Sets the background image for given bar metrics.
- [backgroundImageForBarPosition:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the background image to use for a given bar position and set of metrics.
- [setBackgroundImage:forBarPosition:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image to use for a given bar position and set of metrics.
