> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/optile()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/optile())

# opTile() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Produces an effect that mimics a style of visual art that uses optical illusions.

## Declaration

```swift
class func opTile() -> any CIFilter & CIOpTile
```

<a id="return-value"></a>

## Return Value

The tiled image.

<a id="Discussion"></a>

## Discussion

This filter extracts a tile from the image, applies any specified scaling and rotation, and then assembles the image again to give an optical illusion effect.

The optical illusion tile filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`angle`**: A `float` representing the direction of distortion, in radians as an [NSNumber](../../foundation/nsnumber.md).
- **`width`**: A `float` representing the set width of each tile as an [NSNumber](../../foundation/nsnumber.md).
- **`scale`**: A `float` representing the scale of numbers of tiles in the output image as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a distorted image with less detail:

```swift
func op(inputImage: CIImage) -> CIImage {
    let opTile = CIFilter.opTile()
    opTile.inputImage = inputImage
    opTile.center = CGPoint(x: 150, y: 150)
    opTile.scale = 2.80
    opTile.angle = 0
    opTile.width = 65
    return opTile.outputImage!
}
```

![Two photographs. The one on the left is of a bouquet of colorful flowers up close with good lighting and focus. In the photo on the right, an op tile filter is applied, resulting in the image becoming a set of square tiles that contain slightly different portions of the image to create the illusion of movement.](https://developer.apple.com/images/com.apple.coreimage/media-3599881@2x.png)

## See Also

### Filters

- [affineClamp()](affineclamp%28%29.md): Performs a transform on the image and extends the image edges to infinity.
- [affineTile()](affinetile%28%29.md): Performs a transform on the image and tiles the result.
- [eightfoldReflectedTile()](eightfoldreflectedtile%28%29.md): Creates an eight-way reflected pattern.
- [fourfoldReflectedTile()](fourfoldreflectedtile%28%29.md): Creates a four-way reflected pattern.
- [fourfoldRotatedTile()](fourfoldrotatedtile%28%29.md): Creates a tiled image by rotating a tile in increments of 90 degrees.
- [fourfoldTranslatedTile()](fourfoldtranslatedtile%28%29.md): Creates a tiled image by applying four translation operations.
- [glideReflectedTile()](glidereflectedtile%28%29.md): Tiles an image by rotating and reflecting a tile from the image.
- [kaleidoscope()](kaleidoscope%28%29.md): Creates a 12-way kaleidoscopic image from an image.
- [parallelogramTile()](parallelogramtile%28%29.md): Warps the image to create a parallelogram and tiles the result.
- [perspectiveTile()](perspectivetile%28%29.md): Tiles an image by adjusting the perspective of the image.
- [sixfoldReflectedTile()](sixfoldreflectedtile%28%29.md): Produces a tiled image from a source image by applying a six-way reflected symmetry.
- [sixfoldRotatedTile()](sixfoldrotatedtile%28%29.md): Creates a tiled image by rotating in increments of 60 degrees.
- [triangleKaleidoscope()](trianglekaleidoscope%28%29.md): Create a triangular kaleidoscope effect and then tiles the result.
- [triangleTile()](triangletile%28%29.md): Tiles a triangular area of an image.
- [twelvefoldReflectedTile()](twelvefoldreflectedtile%28%29.md): Creates a tiled image by rotating in increments of 30 degrees.

# opTileFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Produces an effect that mimics a style of visual art that uses optical illusions.

## Declaration

```objectivec
+ (CIFilter<CIOpTile> *) opTileFilter;
```

<a id="return-value"></a>

## Return Value

The tiled image.

<a id="Discussion"></a>

## Discussion

This filter extracts a tile from the image, applies any specified scaling and rotation, and then assembles the image again to give an optical illusion effect.

The optical illusion tile filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`angle`**: A `float` representing the direction of distortion, in radians as an [NSNumber](../../foundation/nsnumber.md).
- **`width`**: A `float` representing the set width of each tile as an [NSNumber](../../foundation/nsnumber.md).
- **`scale`**: A `float` representing the scale of numbers of tiles in the output image as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a distorted image with less detail:

```swift
func op(inputImage: CIImage) -> CIImage {
    let opTile = CIFilter.opTile()
    opTile.inputImage = inputImage
    opTile.center = CGPoint(x: 150, y: 150)
    opTile.scale = 2.80
    opTile.angle = 0
    opTile.width = 65
    return opTile.outputImage!
}
```

![Two photographs. The one on the left is of a bouquet of colorful flowers up close with good lighting and focus. In the photo on the right, an op tile filter is applied, resulting in the image becoming a set of square tiles that contain slightly different portions of the image to create the illusion of movement.](https://developer.apple.com/images/com.apple.coreimage/media-3599881@2x.png)

## See Also

### Filters

- [affineClampFilter](affineclamp%28%29.md): Performs a transform on the image and extends the image edges to infinity.
- [affineTileFilter](affinetile%28%29.md): Performs a transform on the image and tiles the result.
- [eightfoldReflectedTileFilter](eightfoldreflectedtile%28%29.md): Creates an eight-way reflected pattern.
- [fourfoldReflectedTileFilter](fourfoldreflectedtile%28%29.md): Creates a four-way reflected pattern.
- [fourfoldRotatedTileFilter](fourfoldrotatedtile%28%29.md): Creates a tiled image by rotating a tile in increments of 90 degrees.
- [fourfoldTranslatedTileFilter](fourfoldtranslatedtile%28%29.md): Creates a tiled image by applying four translation operations.
- [glideReflectedTileFilter](glidereflectedtile%28%29.md): Tiles an image by rotating and reflecting a tile from the image.
- [kaleidoscopeFilter](kaleidoscope%28%29.md): Creates a 12-way kaleidoscopic image from an image.
- [parallelogramTileFilter](parallelogramtile%28%29.md): Warps the image to create a parallelogram and tiles the result.
- [perspectiveTileFilter](perspectivetile%28%29.md): Tiles an image by adjusting the perspective of the image.
- [sixfoldReflectedTileFilter](sixfoldreflectedtile%28%29.md): Produces a tiled image from a source image by applying a six-way reflected symmetry.
- [sixfoldRotatedTileFilter](sixfoldrotatedtile%28%29.md): Creates a tiled image by rotating in increments of 60 degrees.
- [triangleKaleidoscopeFilter](trianglekaleidoscope%28%29.md): Create a triangular kaleidoscope effect and then tiles the result.
- [triangleTileFilter](triangletile%28%29.md): Tiles a triangular area of an image.
- [twelvefoldReflectedTileFilter](twelvefoldreflectedtile%28%29.md): Creates a tiled image by rotating in increments of 30 degrees.
