> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitoolbar/bartintcolor](https://developer.apple.com/documentation/uikit/uitoolbar/bartintcolor)

# barTintColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The tint color to apply to the toolbar background.

## Declaration

```swift
var barTintColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

This color is made translucent by default unless you set the [isTranslucent](istranslucent.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Changing the background

- [backgroundImage(forToolbarPosition:barMetrics:)](backgroundimage%28fortoolbarposition_barmetrics_%29.md): Returns the image to use for the background in a given position and with given metrics.
- [setBackgroundImage(\_:forToolbarPosition:barMetrics:)](setbackgroundimage%28__fortoolbarposition_barmetrics_%29.md): Sets the image to use for the background in a given position and with given metrics.

# barTintColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The tint color to apply to the toolbar background.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIColor * barTintColor;
```

<a id="Discussion"></a>

## Discussion

This color is made translucent by default unless you set the [translucent](istranslucent.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Changing the background

- [backgroundImageForToolbarPosition:barMetrics:](backgroundimage%28fortoolbarposition_barmetrics_%29.md): Returns the image to use for the background in a given position and with given metrics.
- [setBackgroundImage:forToolbarPosition:barMetrics:](setbackgroundimage%28__fortoolbarposition_barmetrics_%29.md): Sets the image to use for the background in a given position and with given metrics.
