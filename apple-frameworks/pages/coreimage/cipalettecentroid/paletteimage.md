> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/cipalettecentroid/paletteimage

# paletteImage (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The input color palette, obtained by using a k-means clustering filter.

## Declaration

```swift
var paletteImage: CIImage? { get set }
```

## See Also

### Instance Properties

- [inputImage](inputimage.md): The image to use as an input image.
- [perceptual](perceptual.md): A Boolean value that specifies whether the filter applies the color palette in a perceptual color space.

# paletteImage (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The input color palette, obtained by using a k-means clustering filter.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CIImage * paletteImage;
```

## See Also

### Instance Properties

- [inputImage](inputimage.md): The image to use as an input image.
- [perceptual](perceptual.md): A Boolean value that specifies whether the filter applies the color palette in a perceptual color space.
