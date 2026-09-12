> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-swift.struct/imageproperties-swift.struct](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-swift.struct/imageproperties-swift.struct)

# UIListContentConfiguration.ImageProperties

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Properties that affect the list content configuration’s image.

## Declaration

```swift
struct ImageProperties
```

## Topics

### Configuring image properties

- [preferredSymbolConfiguration](imageproperties-swift.struct/preferredsymbolconfiguration.md): The symbol configuration to use.
- [tintColor](imageproperties-swift.struct/tintcolor.md): The tint color to apply to the image view.
- [tintColorTransformer](imageproperties-swift.struct/tintcolortransformer.md): The color transformer for resolving the tint color.
- [resolvedTintColor(for:)](imageproperties-swift.struct/resolvedtintcolor%28for_%29.md): Generates the resolved tint color for the specified tint color, using the tint color and color transformer.
- [cornerRadius](imageproperties-swift.struct/cornerradius.md): The preferred corner radius, using a continuous corner curve, for the image.
- [maximumSize](imageproperties-swift.struct/maximumsize.md): The maximum size for the image.
- [reservedLayoutSize](imageproperties-swift.struct/reservedlayoutsize.md): The layout size that the system reserves for the image, and then centers the image within.
- [standardDimension](imageproperties-swift.struct/standarddimension.md): The system standard layout dimension for reserved layout size.
- [accessibilityIgnoresInvertColors](imageproperties-swift.struct/accessibilityignoresinvertcolors.md): A Boolean value that determines whether the image inverts its colors when the user turns on the Invert Colors accessibility setting.

### Instance Properties

- [strokeColor](imageproperties-swift.struct/strokecolor.md)
- [strokeColorTransformer](imageproperties-swift.struct/strokecolortransformer.md)
- [strokeWidth](imageproperties-swift.struct/strokewidth.md)

### Instance Methods

- [resolvedStrokeColor(for:)](imageproperties-swift.struct/resolvedstrokecolor%28for_%29.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Customizing appearance

- [imageProperties](imageproperties-swift.property.md): Properties for configuring the image.
- [textProperties](textproperties-swift.property.md): Properties for configuring the primary text.
- [secondaryTextProperties](secondarytextproperties.md): Properties for configuring the secondary text.
- [UIListContentConfiguration.TextProperties](textproperties-swift.struct.md): Properties that affect the list content configuration’s text.
