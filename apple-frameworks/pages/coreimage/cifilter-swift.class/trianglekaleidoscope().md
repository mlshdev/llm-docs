> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/trianglekaleidoscope()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/trianglekaleidoscope())

# triangleKaleidoscope() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Create a triangular kaleidoscope effect and then tiles the result.

## Declaration

```swift
class func triangleKaleidoscope() -> any CIFilter & CITriangleKaleidoscope
```

<a id="return-value"></a>

## Return Value

The tiled image.

<a id="Discussion"></a>

## Discussion

This method applies the triangle kaleidoscope filter to an image. The effect produces a complex tiled pattern from a triangular area input image.

The triangle kaleidoscope tile filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`decay`**: A `float` representing the intensity of the color fade from the center of the triangle as an [NSNumber](../../foundation/nsnumber.md).
- **`point`**: A set of coordinates marking the center of the triangular area of the input image as a [CIVector](../civector.md).
- **`rotation`**: A `float` representing the angle of rotation of the triangle as an [NSNumber](../../foundation/nsnumber.md).
- **`size`**: A `float` representing the size in pixels of the triangle as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that produces a triangle tile of the input image, creating an optical illusion:

```swift
func triangleKaleidoscope(inputImage: CIImage) -> CIImage {
    let triangleKaleidoscopeTile = CIFilter.triangleKaleidoscope()
    triangleKaleidoscopeTile.inputImage = inputImage
    triangleKaleidoscopeTile.point = CGPoint(x: 150, y: 150)
    triangleKaleidoscopeTile.size = 700
    triangleKaleidoscopeTile.rotation = -0.36
    triangleKaleidoscopeTile.decay = 0.85
    return triangleKaleidoscopeTile.outputImage!
}
```

![Two photographs of a bouquet of multiple colorful flowers. The photo on the left is up close with good lighting and focus. In the photo on the right, a triangle kaleidoscope filter is applied, resulting in a triangular portion of the image being angled and repeated throughout the entire image.](https://developer.apple.com/images/com.apple.coreimage/media-3599889@2x.png)

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
- [opTile()](optile%28%29.md): Produces an effect that mimics a style of visual art that uses optical illusions.
- [parallelogramTile()](parallelogramtile%28%29.md): Warps the image to create a parallelogram and tiles the result.
- [perspectiveTile()](perspectivetile%28%29.md): Tiles an image by adjusting the perspective of the image.
- [sixfoldReflectedTile()](sixfoldreflectedtile%28%29.md): Produces a tiled image from a source image by applying a six-way reflected symmetry.
- [sixfoldRotatedTile()](sixfoldrotatedtile%28%29.md): Creates a tiled image by rotating in increments of 60 degrees.
- [triangleTile()](triangletile%28%29.md): Tiles a triangular area of an image.
- [twelvefoldReflectedTile()](twelvefoldreflectedtile%28%29.md): Creates a tiled image by rotating in increments of 30 degrees.

# triangleKaleidoscopeFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Create a triangular kaleidoscope effect and then tiles the result.

## Declaration

```objectivec
+ (CIFilter<CITriangleKaleidoscope> *) triangleKaleidoscopeFilter;
```

<a id="return-value"></a>

## Return Value

The tiled image.

<a id="Discussion"></a>

## Discussion

This method applies the triangle kaleidoscope filter to an image. The effect produces a complex tiled pattern from a triangular area input image.

The triangle kaleidoscope tile filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`decay`**: A `float` representing the intensity of the color fade from the center of the triangle as an [NSNumber](../../foundation/nsnumber.md).
- **`point`**: A set of coordinates marking the center of the triangular area of the input image as a [CIVector](../civector.md).
- **`rotation`**: A `float` representing the angle of rotation of the triangle as an [NSNumber](../../foundation/nsnumber.md).
- **`size`**: A `float` representing the size in pixels of the triangle as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that produces a triangle tile of the input image, creating an optical illusion:

```swift
func triangleKaleidoscope(inputImage: CIImage) -> CIImage {
    let triangleKaleidoscopeTile = CIFilter.triangleKaleidoscope()
    triangleKaleidoscopeTile.inputImage = inputImage
    triangleKaleidoscopeTile.point = CGPoint(x: 150, y: 150)
    triangleKaleidoscopeTile.size = 700
    triangleKaleidoscopeTile.rotation = -0.36
    triangleKaleidoscopeTile.decay = 0.85
    return triangleKaleidoscopeTile.outputImage!
}
```

![Two photographs of a bouquet of multiple colorful flowers. The photo on the left is up close with good lighting and focus. In the photo on the right, a triangle kaleidoscope filter is applied, resulting in a triangular portion of the image being angled and repeated throughout the entire image.](https://developer.apple.com/images/com.apple.coreimage/media-3599889@2x.png)

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
- [opTileFilter](optile%28%29.md): Produces an effect that mimics a style of visual art that uses optical illusions.
- [parallelogramTileFilter](parallelogramtile%28%29.md): Warps the image to create a parallelogram and tiles the result.
- [perspectiveTileFilter](perspectivetile%28%29.md): Tiles an image by adjusting the perspective of the image.
- [sixfoldReflectedTileFilter](sixfoldreflectedtile%28%29.md): Produces a tiled image from a source image by applying a six-way reflected symmetry.
- [sixfoldRotatedTileFilter](sixfoldrotatedtile%28%29.md): Creates a tiled image by rotating in increments of 60 degrees.
- [triangleTileFilter](triangletile%28%29.md): Tiles a triangular area of an image.
- [twelvefoldReflectedTileFilter](twelvefoldreflectedtile%28%29.md): Creates a tiled image by rotating in increments of 30 degrees.
