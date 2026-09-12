> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconfigurationcolortransformer-swift.struct/preferredtint](https://developer.apple.com/documentation/uikit/uiconfigurationcolortransformer-swift.struct/preferredtint)

# preferredTint

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A color transformer that returns the preferred system accent color.

## Declaration

```swift
static let preferredTint: UIConfigurationColorTransformer
```

<a id="Discussion"></a>

## Discussion

This color transformer returns the original color on platforms without a system accent color, or when the system accent color is set to Multicolor. When the system accent color is set to any other color, this color transformer returns that system accent color.

## See Also

### Creating a color transformer

- [init(\_:)](init%28__%29.md): Creates a color transformer with the specified closure.
- [grayscale](grayscale.md): Creates a color transformer that generates a grayscale version of the color.
- [monochromeTint](monochrometint.md): A color transformer that returns the color with a monochrome tint.
