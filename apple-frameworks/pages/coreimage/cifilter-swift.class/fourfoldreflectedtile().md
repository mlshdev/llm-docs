> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/fourfoldreflectedtile()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/fourfoldreflectedtile())

# fourfoldReflectedTile() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a four-way reflected pattern.

## Declaration

```swift
class func fourfoldReflectedTile() -> any CIFilter & CIFourfoldReflectedTile
```

<a id="return-value"></a>

## Return Value

The tiled image.

<a id="Discussion"></a>

## Discussion

This method applies the four-fold reflected tile filter to an image. The effect produces a four-way reflected tile image.

The four-fold reflected tile filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`angle`**: A `float` representing the direction of distortion, in radians as an [NSNumber](../../foundation/nsnumber.md).
- **`width`**: A `float` representing the set width of each tile as an [NSNumber](../../foundation/nsnumber.md).
- **`acute angle`**: A `float` representing the primary angle for the repeating parallelogram tile as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a four-fold pattern:

```swift
func fourFoldReflected(inputImage: CIImage) -> CIImage {
    let fourFoldReflectedTile = CIFilter.fourfoldReflectedTile()
    fourFoldReflectedTile.inputImage = inputImage
    fourFoldReflectedTile.center = CGPoint(x: 150, y: 150)
    fourFoldReflectedTile.width = 10
    fourFoldReflectedTile.angle = 7
    fourFoldReflectedTile.acuteAngle = 1
    return fourFoldReflectedTile.outputImage!
}
```

![Two photographs. The photo on the left is of a bouquet of colorful flowers up close with good lighting and focus. In the photo on the right, a four-fold reflected tile filter is applied, resulting in the red petals and yellow flower center becoming a hexagon pattern that is repeated throughout the image.](https://developer.apple.com/images/com.apple.coreimage/media-3599880@2x.png)

## See Also

### Filters

- [affineClamp()](affineclamp%28%29.md): Performs a transform on the image and extends the image edges to infinity.
- [affineTile()](affinetile%28%29.md): Performs a transform on the image and tiles the result.
- [eightfoldReflectedTile()](eightfoldreflectedtile%28%29.md): Creates an eight-way reflected pattern.
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

# fourfoldReflectedTileFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a four-way reflected pattern.

## Declaration

```objectivec
+ (CIFilter<CIFourfoldReflectedTile> *) fourfoldReflectedTileFilter;
```

<a id="return-value"></a>

## Return Value

The tiled image.

<a id="Discussion"></a>

## Discussion

This method applies the four-fold reflected tile filter to an image. The effect produces a four-way reflected tile image.

The four-fold reflected tile filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`angle`**: A `float` representing the direction of distortion, in radians as an [NSNumber](../../foundation/nsnumber.md).
- **`width`**: A `float` representing the set width of each tile as an [NSNumber](../../foundation/nsnumber.md).
- **`acute angle`**: A `float` representing the primary angle for the repeating parallelogram tile as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a four-fold pattern:

```swift
func fourFoldReflected(inputImage: CIImage) -> CIImage {
    let fourFoldReflectedTile = CIFilter.fourfoldReflectedTile()
    fourFoldReflectedTile.inputImage = inputImage
    fourFoldReflectedTile.center = CGPoint(x: 150, y: 150)
    fourFoldReflectedTile.width = 10
    fourFoldReflectedTile.angle = 7
    fourFoldReflectedTile.acuteAngle = 1
    return fourFoldReflectedTile.outputImage!
}
```

![Two photographs. The photo on the left is of a bouquet of colorful flowers up close with good lighting and focus. In the photo on the right, a four-fold reflected tile filter is applied, resulting in the red petals and yellow flower center becoming a hexagon pattern that is repeated throughout the image.](https://developer.apple.com/images/com.apple.coreimage/media-3599880@2x.png)

## See Also

### Filters

- [affineClampFilter](affineclamp%28%29.md): Performs a transform on the image and extends the image edges to infinity.
- [affineTileFilter](affinetile%28%29.md): Performs a transform on the image and tiles the result.
- [eightfoldReflectedTileFilter](eightfoldreflectedtile%28%29.md): Creates an eight-way reflected pattern.
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
