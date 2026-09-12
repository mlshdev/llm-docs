> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarappearance/backgroundcolor](https://developer.apple.com/documentation/uikit/uibarappearance/backgroundcolor)

# backgroundColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The background color of the bar.

## Declaration

```swift
@NSCopying var backgroundColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

The bar layers the specified color on top of any blur effects you specified in the [backgroundEffect](backgroundeffect.md) property, and below the image in the [backgroundImage](backgroundimage.md) property.

## See Also

### Configuring the background appearance

- [backgroundEffect](backgroundeffect.md): The blur effect to apply to the bar’s background.
- [backgroundImage](backgroundimage.md): The image to display on top of the bar’s background color.
- [backgroundImageContentMode](backgroundimagecontentmode.md): The content mode to use when displaying the bar’s background image.

# backgroundColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The background color of the bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

The bar layers the specified color on top of any blur effects you specified in the [backgroundEffect](backgroundeffect.md) property, and below the image in the [backgroundImage](backgroundimage.md) property.

## See Also

### Configuring the background appearance

- [backgroundEffect](backgroundeffect.md): The blur effect to apply to the bar’s background.
- [backgroundImage](backgroundimage.md): The image to display on top of the bar’s background color.
- [backgroundImageContentMode](backgroundimagecontentmode.md): The content mode to use when displaying the bar’s background image.
