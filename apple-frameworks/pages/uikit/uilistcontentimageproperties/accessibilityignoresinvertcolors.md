> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentimageproperties/accessibilityignoresinvertcolors](https://developer.apple.com/documentation/uikit/uilistcontentimageproperties/accessibilityignoresinvertcolors)

# accessibilityIgnoresInvertColors

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that determines whether the image inverts its colors when the user turns on the Invert Colors accessibility setting.

## Declaration

```objectivec
@property (nonatomic) BOOL accessibilityIgnoresInvertColors;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the image doesn’t invert its colors when the user turns on Invert Colors. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring image properties

- [preferredSymbolConfiguration](preferredsymbolconfiguration.md): The symbol configuration to use.
- [tintColor](tintcolor.md): The tint color to apply to the image view.
- [tintColorTransformer](tintcolortransformer.md): The color transformer for resolving the tint color.
- [resolvedTintColorForTintColor:](resolvedtintcolorfortintcolor_.md): Generates the resolved tint color for the specified tint color, using the tint color and color transformer.
- [cornerRadius](cornerradius.md): The preferred corner radius, using a continuous corner curve, for the image.
- [maximumSize](maximumsize.md): The maximum size for the image.
- [reservedLayoutSize](reservedlayoutsize.md): The layout size that the system reserves for the image, and then centers the image within.
- [UIListContentImageStandardDimension](../uilistcontentimagestandarddimension.md): The system standard layout dimension for reserved layout size.
