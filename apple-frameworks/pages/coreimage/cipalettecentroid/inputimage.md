> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cipalettecentroid/inputimage](https://developer.apple.com/documentation/coreimage/cipalettecentroid/inputimage)

# inputImage (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The image to use as an input image.

## Declaration

```swift
var inputImage: CIImage? { get set }
```

## See Also

### Instance Properties

- [paletteImage](paletteimage.md): The input color palette, obtained by using a k-means clustering filter.
- [perceptual](perceptual.md): A Boolean value that specifies whether the filter applies the color palette in a perceptual color space.

# inputImage (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The image to use as an input image.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CIImage * inputImage;
```

## See Also

### Instance Properties

- [paletteImage](paletteimage.md): The input color palette, obtained by using a k-means clustering filter.
- [perceptual](perceptual.md): A Boolean value that specifies whether the filter applies the color palette in a perceptual color space.
