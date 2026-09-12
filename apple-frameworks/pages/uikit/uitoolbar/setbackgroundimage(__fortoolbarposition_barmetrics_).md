> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitoolbar/setbackgroundimage(_:fortoolbarposition:barmetrics:)](https://developer.apple.com/documentation/uikit/uitoolbar/setbackgroundimage(_:fortoolbarposition:barmetrics:))

# setBackgroundImage(\_:forToolbarPosition:barMetrics:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the image to use for the background in a given position and with given metrics.

## Declaration

```swift
func setBackgroundImage(_ backgroundImage: UIImage?, forToolbarPosition topOrBottom: UIBarPosition, barMetrics: UIBarMetrics)
```

## Parameters

- `backgroundImage`: The image to use for the toolbar background in the position specified by `topOrBottom` and with the metrics specified by `barMetrics`.
- `topOrBottom`: A toolbar position constant.
- `barMetrics`: A bar metrics constant.

## See Also

### Changing the background

- [barTintColor](bartintcolor.md): The tint color to apply to the toolbar background.
- [backgroundImage(forToolbarPosition:barMetrics:)](backgroundimage%28fortoolbarposition_barmetrics_%29.md): Returns the image to use for the background in a given position and with given metrics.

# setBackgroundImage:forToolbarPosition:barMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the image to use for the background in a given position and with given metrics.

## Declaration

```objectivec
- (void) setBackgroundImage:(UIImage *) backgroundImage forToolbarPosition:(UIBarPosition) topOrBottom barMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `backgroundImage`: The image to use for the toolbar background in the position specified by `topOrBottom` and with the metrics specified by `barMetrics`.
- `topOrBottom`: A toolbar position constant.
- `barMetrics`: A bar metrics constant.

## See Also

### Changing the background

- [barTintColor](bartintcolor.md): The tint color to apply to the toolbar background.
- [backgroundImageForToolbarPosition:barMetrics:](backgroundimage%28fortoolbarposition_barmetrics_%29.md): Returns the image to use for the background in a given position and with given metrics.
