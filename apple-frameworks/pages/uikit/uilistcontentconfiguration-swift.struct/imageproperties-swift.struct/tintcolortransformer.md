> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-swift.struct/imageproperties-swift.struct/tintcolortransformer](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-swift.struct/imageproperties-swift.struct/tintcolortransformer)

# tintColorTransformer

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The color transformer for resolving the tint color.

## Declaration

```swift
var tintColorTransformer: UIConfigurationColorTransformer? { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is `nil`, the configuration uses [tintColor](tintcolor.md) without any transformations.

## See Also

### Configuring image properties

- [preferredSymbolConfiguration](preferredsymbolconfiguration.md): The symbol configuration to use.
- [tintColor](tintcolor.md): The tint color to apply to the image view.
- [resolvedTintColor(for:)](resolvedtintcolor%28for_%29.md): Generates the resolved tint color for the specified tint color, using the tint color and color transformer.
- [cornerRadius](cornerradius.md): The preferred corner radius, using a continuous corner curve, for the image.
- [maximumSize](maximumsize.md): The maximum size for the image.
- [reservedLayoutSize](reservedlayoutsize.md): The layout size that the system reserves for the image, and then centers the image within.
- [standardDimension](standarddimension.md): The system standard layout dimension for reserved layout size.
- [accessibilityIgnoresInvertColors](accessibilityignoresinvertcolors.md): A Boolean value that determines whether the image inverts its colors when the user turns on the Invert Colors accessibility setting.
