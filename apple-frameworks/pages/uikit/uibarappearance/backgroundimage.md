> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarappearance/backgroundimage](https://developer.apple.com/documentation/uikit/uibarappearance/backgroundimage)

# backgroundImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The image to display on top of the bar’s background color.

## Declaration

```swift
var backgroundImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The bar layers the specified image on top of the content in the [backgroundEffect](backgroundeffect.md) and [backgroundColor](backgroundcolor.md) properties. UIKit sizes the image according to the value in the [backgroundImageContentMode](backgroundimagecontentmode.md) property.

## See Also

### Configuring the background appearance

- [backgroundEffect](backgroundeffect.md): The blur effect to apply to the bar’s background.
- [backgroundColor](backgroundcolor.md): The background color of the bar.
- [backgroundImageContentMode](backgroundimagecontentmode.md): The content mode to use when displaying the bar’s background image.

# backgroundImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The image to display on top of the bar’s background color.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) UIImage * backgroundImage;
```

<a id="Discussion"></a>

## Discussion

The bar layers the specified image on top of the content in the [backgroundEffect](backgroundeffect.md) and [backgroundColor](backgroundcolor.md) properties. UIKit sizes the image according to the value in the [backgroundImageContentMode](backgroundimagecontentmode.md) property.

## See Also

### Configuring the background appearance

- [backgroundEffect](backgroundeffect.md): The blur effect to apply to the bar’s background.
- [backgroundColor](backgroundcolor.md): The background color of the bar.
- [backgroundImageContentMode](backgroundimagecontentmode.md): The content mode to use when displaying the bar’s background image.
