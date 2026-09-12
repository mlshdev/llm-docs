> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarappearance/backgroundeffect](https://developer.apple.com/documentation/uikit/uibarappearance/backgroundeffect)

# backgroundEffect (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The blur effect to apply to the bar’s background.

## Declaration

```swift
@NSCopying var backgroundEffect: UIBlurEffect? { get set }
```

<a id="Discussion"></a>

## Discussion

The blur effect provides the base layer for the bar’s appearance, and it determines how much of the underlying content is visible. UIKit applies the [backgroundColor](backgroundcolor.md) and [backgroundImage](backgroundimage.md) on top of this effect.

## See Also

### Configuring the background appearance

- [backgroundColor](backgroundcolor.md): The background color of the bar.
- [backgroundImage](backgroundimage.md): The image to display on top of the bar’s background color.
- [backgroundImageContentMode](backgroundimagecontentmode.md): The content mode to use when displaying the bar’s background image.

# backgroundEffect (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The blur effect to apply to the bar’s background.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIBlurEffect * backgroundEffect;
```

<a id="Discussion"></a>

## Discussion

The blur effect provides the base layer for the bar’s appearance, and it determines how much of the underlying content is visible. UIKit applies the [backgroundColor](backgroundcolor.md) and [backgroundImage](backgroundimage.md) on top of this effect.

## See Also

### Configuring the background appearance

- [backgroundColor](backgroundcolor.md): The background color of the bar.
- [backgroundImage](backgroundimage.md): The image to display on top of the bar’s background color.
- [backgroundImageContentMode](backgroundimagecontentmode.md): The content mode to use when displaying the bar’s background image.
