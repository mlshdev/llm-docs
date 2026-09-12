> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/bartintcolor](https://developer.apple.com/documentation/uikit/uinavigationbar/bartintcolor)

# barTintColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tint color to apply to the navigation bar background.

## Declaration

```swift
var barTintColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

This color is made translucent by default unless you set the [isTranslucent](istranslucent.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Changing the background

- [backgroundImage(for:)](backgroundimage%28for_%29.md): Returns the background image for given bar metrics.
- [setBackgroundImage(\_:for:)](setbackgroundimage%28__for_%29.md): Sets the background image for given bar metrics.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the background image to use for a given bar position and set of metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image to use for a given bar position and set of metrics.

# barTintColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tint color to apply to the navigation bar background.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIColor * barTintColor;
```

<a id="Discussion"></a>

## Discussion

This color is made translucent by default unless you set the [translucent](istranslucent.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Changing the background

- [backgroundImageForBarMetrics:](backgroundimage%28for_%29.md): Returns the background image for given bar metrics.
- [setBackgroundImage:forBarMetrics:](setbackgroundimage%28__for_%29.md): Sets the background image for given bar metrics.
- [backgroundImageForBarPosition:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the background image to use for a given bar position and set of metrics.
- [setBackgroundImage:forBarPosition:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image to use for a given bar position and set of metrics.
