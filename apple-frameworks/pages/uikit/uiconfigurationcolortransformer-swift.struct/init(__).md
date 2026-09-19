> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiconfigurationcolortransformer-swift.struct/init(_:)

# init(\_:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates a color transformer with the specified closure.

## Declaration

```swift
init(_ transform: @escaping (UIColor) -> UIColor)
```

## See Also

### Creating a color transformer

- [grayscale](grayscale.md): Creates a color transformer that generates a grayscale version of the color.
- [preferredTint](preferredtint.md): A color transformer that returns the preferred system accent color.
- [monochromeTint](monochrometint.md): A color transformer that returns the color with a monochrome tint.
