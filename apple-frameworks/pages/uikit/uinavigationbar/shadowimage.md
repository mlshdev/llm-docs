> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/shadowimage](https://developer.apple.com/documentation/uikit/uinavigationbar/shadowimage)

# shadowImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The shadow image to be used for the navigation bar.

## Declaration

```swift
var shadowImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which corresponds to the default shadow image. When non-`nil`, this property represents a custom shadow image to show instead of the default. To show a custom shadow image, you must also set a custom background image with the [setBackgroundImage(\_:for:)](setbackgroundimage%28__for_%29.md) method. If the default background image is used, then the default shadow image is used regardless of the value of this property.

# shadowImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The shadow image to be used for the navigation bar.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * shadowImage;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which corresponds to the default shadow image. When non-`nil`, this property represents a custom shadow image to show instead of the default. To show a custom shadow image, you must also set a custom background image with the [setBackgroundImage:forBarMetrics:](setbackgroundimage%28__for_%29.md) method. If the default background image is used, then the default shadow image is used regardless of the value of this property.
