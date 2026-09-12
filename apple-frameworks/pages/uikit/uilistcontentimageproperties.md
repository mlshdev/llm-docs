> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentimageproperties](https://developer.apple.com/documentation/uikit/uilistcontentimageproperties)

# UIListContentImageProperties

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Properties that affect the list content configuration’s image.

## Declaration

```objectivec
@interface UIListContentImageProperties : NSObject
```

## Topics

### Configuring image properties

- [preferredSymbolConfiguration](uilistcontentimageproperties/preferredsymbolconfiguration.md): The symbol configuration to use.
- [tintColor](uilistcontentimageproperties/tintcolor.md): The tint color to apply to the image view.
- [tintColorTransformer](uilistcontentimageproperties/tintcolortransformer.md): The color transformer for resolving the tint color.
- [resolvedTintColorForTintColor:](uilistcontentimageproperties/resolvedtintcolorfortintcolor_.md): Generates the resolved tint color for the specified tint color, using the tint color and color transformer.
- [cornerRadius](uilistcontentimageproperties/cornerradius.md): The preferred corner radius, using a continuous corner curve, for the image.
- [maximumSize](uilistcontentimageproperties/maximumsize.md): The maximum size for the image.
- [reservedLayoutSize](uilistcontentimageproperties/reservedlayoutsize.md): The layout size that the system reserves for the image, and then centers the image within.
- [UIListContentImageStandardDimension](uilistcontentimagestandarddimension.md): The system standard layout dimension for reserved layout size.
- [accessibilityIgnoresInvertColors](uilistcontentimageproperties/accessibilityignoresinvertcolors.md): A Boolean value that determines whether the image inverts its colors when the user turns on the Invert Colors accessibility setting.

### Instance Properties

- [strokeColor](uilistcontentimageproperties/strokecolor.md): Configures the color of the stroke. A nil value uses the view’s tint color; use `clearColor` for no color (transparent).
- [strokeColorTransformer](uilistcontentimageproperties/strokecolortransformer.md): Optional color transformer that is used to resolve the stroke color. A nil value means the `strokeColor` is used as-is.
- [strokeWidth](uilistcontentimageproperties/strokewidth.md): The width of the stroke to draw around the image. Default is `0.0`.

### Instance Methods

- [resolvedStrokeColorForTintColor:](uilistcontentimageproperties/resolvedstrokecolorfortintcolor_.md): Returns the resolved stroke color for the specified tint color, based on the `strokeColor` and `strokeColorTransformer`.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Customizing appearance

- [imageProperties](uilistcontentconfiguration-c.class/imageproperties.md): Properties for configuring the image.
- [textProperties](uilistcontentconfiguration-c.class/textproperties.md): Properties for configuring the primary text.
- [secondaryTextProperties](uilistcontentconfiguration-c.class/secondarytextproperties.md): Properties for configuring the secondary text.
- [UIListContentTextProperties](uilistcontenttextproperties.md): Properties that affect the list content configuration’s text.
