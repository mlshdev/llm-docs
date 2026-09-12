> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/affinetile()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/affinetile())

# affineTile() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Performs a transform on the image and tiles the result.

## Declaration

```swift
class func affineTile() -> any CIFilter & CIAffineTile
```

<a id="return-value"></a>

## Return Value

The tiled image.

<a id="Discussion"></a>

## Discussion

This method applies the affine tile filter to an image. This effect performs an [CGAffineTransform](../../corefoundation/cgaffinetransform.md) and then tiles the transformed image.

The affine tile filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`transform`**: A [CGAffineTransform](../../corefoundation/cgaffinetransform.md) to apply to the image.

The following code creates a filter that results in the image becoming tiled:

```swift
func affineTile(inputImage: CIImage) -> CIImage {
    let affineTileEffect = CIFilter.affineTile()
    affineTileEffect.inputImage = inputImage
    affineTileEffect.transform = CGAffineTransform(a: 1, b: 2, c: 2, d: 3, tx: 4, ty: 4)
    return affineTileEffect.outputImage!
}
```

![Two photographs. The photo on the left shows multiple sets of small purple flowers close up with good lighting, and the background has a slight blur. In the photograph on the right, an affine tile filter is applied, resulting in the flower image tiled to fill the extent of the image.](https://developer.apple.com/images/com.apple.coreimage/media-3624744@2x.png)

## See Also

### Filters

- [affineClamp()](affineclamp%28%29.md): Performs a transform on the image and extends the image edges to infinity.
- [eightfoldReflectedTile()](eightfoldreflectedtile%28%29.md): Creates an eight-way reflected pattern.
- [fourfoldReflectedTile()](fourfoldreflectedtile%28%29.md): Creates a four-way reflected pattern.
- [fourfoldRotatedTile()](fourfoldrotatedtile%28%29.md): Creates a tiled image by rotating a tile in increments of 90 degrees.
- [fourfoldTranslatedTile()](fourfoldtranslatedtile%28%29.md): Creates a tiled image by applying four translation operations.
- [glideReflectedTile()](glidereflectedtile%28%29.md): Tiles an image by rotating and reflecting a tile from the image.
- [kaleidoscope()](kaleidoscope%28%29.md): Creates a 12-way kaleidoscopic image from an image.
- [opTile()](optile%28%29.md): Produces an effect that mimics a style of visual art that uses optical illusions.
- [parallelogramTile()](parallelogramtile%28%29.md): Warps the image to create a parallelogram and tiles the result.
- [perspectiveTile()](perspectivetile%28%29.md): Tiles an image by adjusting the perspective of the image.
- [sixfoldReflectedTile()](sixfoldreflectedtile%28%29.md): Produces a tiled image from a source image by applying a six-way reflected symmetry.
- [sixfoldRotatedTile()](sixfoldrotatedtile%28%29.md): Creates a tiled image by rotating in increments of 60 degrees.
- [triangleKaleidoscope()](trianglekaleidoscope%28%29.md): Create a triangular kaleidoscope effect and then tiles the result.
- [triangleTile()](triangletile%28%29.md): Tiles a triangular area of an image.
- [twelvefoldReflectedTile()](twelvefoldreflectedtile%28%29.md): Creates a tiled image by rotating in increments of 30 degrees.

# affineTileFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Performs a transform on the image and tiles the result.

## Declaration

```objectivec
+ (CIFilter<CIAffineTile> *) affineTileFilter;
```

<a id="return-value"></a>

## Return Value

The tiled image.

<a id="Discussion"></a>

## Discussion

This method applies the affine tile filter to an image. This effect performs an [CGAffineTransform](../../corefoundation/cgaffinetransform.md) and then tiles the transformed image.

The affine tile filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`transform`**: A [CGAffineTransform](../../corefoundation/cgaffinetransform.md) to apply to the image.

The following code creates a filter that results in the image becoming tiled:

```swift
func affineTile(inputImage: CIImage) -> CIImage {
    let affineTileEffect = CIFilter.affineTile()
    affineTileEffect.inputImage = inputImage
    affineTileEffect.transform = CGAffineTransform(a: 1, b: 2, c: 2, d: 3, tx: 4, ty: 4)
    return affineTileEffect.outputImage!
}
```

![Two photographs. The photo on the left shows multiple sets of small purple flowers close up with good lighting, and the background has a slight blur. In the photograph on the right, an affine tile filter is applied, resulting in the flower image tiled to fill the extent of the image.](https://developer.apple.com/images/com.apple.coreimage/media-3624744@2x.png)

## See Also

### Filters

- [affineClampFilter](affineclamp%28%29.md): Performs a transform on the image and extends the image edges to infinity.
- [eightfoldReflectedTileFilter](eightfoldreflectedtile%28%29.md): Creates an eight-way reflected pattern.
- [fourfoldReflectedTileFilter](fourfoldreflectedtile%28%29.md): Creates a four-way reflected pattern.
- [fourfoldRotatedTileFilter](fourfoldrotatedtile%28%29.md): Creates a tiled image by rotating a tile in increments of 90 degrees.
- [fourfoldTranslatedTileFilter](fourfoldtranslatedtile%28%29.md): Creates a tiled image by applying four translation operations.
- [glideReflectedTileFilter](glidereflectedtile%28%29.md): Tiles an image by rotating and reflecting a tile from the image.
- [kaleidoscopeFilter](kaleidoscope%28%29.md): Creates a 12-way kaleidoscopic image from an image.
- [opTileFilter](optile%28%29.md): Produces an effect that mimics a style of visual art that uses optical illusions.
- [parallelogramTileFilter](parallelogramtile%28%29.md): Warps the image to create a parallelogram and tiles the result.
- [perspectiveTileFilter](perspectivetile%28%29.md): Tiles an image by adjusting the perspective of the image.
- [sixfoldReflectedTileFilter](sixfoldreflectedtile%28%29.md): Produces a tiled image from a source image by applying a six-way reflected symmetry.
- [sixfoldRotatedTileFilter](sixfoldrotatedtile%28%29.md): Creates a tiled image by rotating in increments of 60 degrees.
- [triangleKaleidoscopeFilter](trianglekaleidoscope%28%29.md): Create a triangular kaleidoscope effect and then tiles the result.
- [triangleTileFilter](triangletile%28%29.md): Tiles a triangular area of an image.
- [twelvefoldReflectedTileFilter](twelvefoldreflectedtile%28%29.md): Creates a tiled image by rotating in increments of 30 degrees.
