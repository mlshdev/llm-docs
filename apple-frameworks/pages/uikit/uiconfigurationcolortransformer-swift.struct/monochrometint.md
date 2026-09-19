> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiconfigurationcolortransformer-swift.struct/monochrometint

# monochromeTint

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A color transformer that returns the color with a monochrome tint.

## Declaration

```swift
static let monochromeTint: UIConfigurationColorTransformer
```

<a id="Discussion"></a>

## Discussion

Use this color transformer to deemphasize a tinted item. The tinted item remains monochrome regardless of the system accent color.

## See Also

### Creating a color transformer

- [init(\_:)](init%28__%29.md): Creates a color transformer with the specified closure.
- [grayscale](grayscale.md): Creates a color transformer that generates a grayscale version of the color.
- [preferredTint](preferredtint.md): A color transformer that returns the preferred system accent color.
