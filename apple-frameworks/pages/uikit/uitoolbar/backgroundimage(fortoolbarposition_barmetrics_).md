> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitoolbar/backgroundimage(fortoolbarposition:barmetrics:)](https://developer.apple.com/documentation/uikit/uitoolbar/backgroundimage(fortoolbarposition:barmetrics:))

# backgroundImage(forToolbarPosition:barMetrics:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the image to use for the background in a given position and with given metrics.

## Declaration

```swift
func backgroundImage(forToolbarPosition topOrBottom: UIBarPosition, barMetrics: UIBarMetrics) -> UIImage?
```

## Parameters

- `topOrBottom`: The location the bar is being drawn in.
- `barMetrics`: The metrics being used to draw the bar.

<a id="return-value"></a>

## Return Value

The image to use for the toolbar background in the position specified by `topOrBottom` and with the metrics specified by `barMetrics`.

<a id="Discussion"></a>

## Discussion

The default value is `nil`. When non-`nil` the image will be used instead of the system image for toolbars in the specified position.

## See Also

### Changing the background

- [barTintColor](bartintcolor.md): The tint color to apply to the toolbar background.
- [setBackgroundImage(\_:forToolbarPosition:barMetrics:)](setbackgroundimage%28__fortoolbarposition_barmetrics_%29.md): Sets the image to use for the background in a given position and with given metrics.

# backgroundImageForToolbarPosition:barMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the image to use for the background in a given position and with given metrics.

## Declaration

```objectivec
- (UIImage *) backgroundImageForToolbarPosition:(UIBarPosition) topOrBottom barMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `topOrBottom`: The location the bar is being drawn in.
- `barMetrics`: The metrics being used to draw the bar.

<a id="return-value"></a>

## Return Value

The image to use for the toolbar background in the position specified by `topOrBottom` and with the metrics specified by `barMetrics`.

<a id="Discussion"></a>

## Discussion

The default value is `nil`. When non-`nil` the image will be used instead of the system image for toolbars in the specified position.

## See Also

### Changing the background

- [barTintColor](bartintcolor.md): The tint color to apply to the toolbar background.
- [setBackgroundImage:forToolbarPosition:barMetrics:](setbackgroundimage%28__fortoolbarposition_barmetrics_%29.md): Sets the image to use for the background in a given position and with given metrics.
