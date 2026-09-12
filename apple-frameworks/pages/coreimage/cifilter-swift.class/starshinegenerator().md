> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/starshinegenerator()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/starshinegenerator())

# starShineGenerator() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a star-shine image.

## Declaration

```swift
class func starShineGenerator() -> any CIFilter & CIStarShineGenerator
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates a star-shine image. The effect is similar to a supernova effect. You can use this filter to simulate a lens flare.

The star-shine generator filter uses the following properties:

- **`center`**: A `vector` representing the center of the flare as a [CGPoint](../../corefoundation/cgpoint.md).
- **`color`**: A color representing the color of the flare as a [cgColor](../../uikit/uicolor/cgcolor.md).
- **`radius`**: A `float` representing the radius of the flare as an [NSNumber](../../foundation/nsnumber.md).
- **`crossScale`**: A `float` representing the cross flare size relative to the round central flare as an [NSNumber](../../foundation/nsnumber.md).
- **`crossAngle`**: A `float` representing the angle of the flare as an [NSNumber](../../foundation/nsnumber.md).
- **`crossOpacity`**: A `float` representing the thickness of the cross opacity as an [NSNumber](../../foundation/nsnumber.md).
- **`crossWidth`**: A `float` representing the cross width as an [NSNumber](../../foundation/nsnumber.md).
- **`epsilon`**: A `float` representing the epsilon as an [NSNumber](../../foundation/nsnumber.md).

The following code generates a star-shaped silhouette with a black background.

```swift
func starShine() -> CIImage {
    let starShineGenerator = CIFilter.starShineGenerator()
    starShineGenerator.center = CGPoint(x: 150, y: 150)
    starShineGenerator.color = .green
    starShineGenerator.radius = 50
    starShineGenerator.crossScale = 15
    starShineGenerator.crossAngle = 0.60
    starShineGenerator.crossOpacity = -2
    starShineGenerator.crossWidth = 2.5
    starShineGenerator.epsilon = -2.0
    return starShineGenerator.outputImage!
}
```

![A picture of an object that is similar to a square with the corners stretched farther out from the body and a green gradient behind the star shine.](https://developer.apple.com/images/com.apple.coreimage/media-3590972@2x.png)

## See Also

### Filters

- [attributedTextImageGenerator()](attributedtextimagegenerator%28%29.md): Generates an attributed-text image.
- [aztecCodeGenerator()](azteccodegenerator%28%29.md): Generates a low-density barcode.
- [barcodeGenerator()](barcodegenerator%28%29.md): Generates a barcode as an image from the descriptor.
- [blurredRectangleGenerator()](blurredrectanglegenerator%28%29.md): Generates a blurred rectangle.
- [checkerboardGenerator()](checkerboardgenerator%28%29.md): Generates a checkerboard image.
- [code128BarcodeGenerator()](code128barcodegenerator%28%29.md): Generates a high-density, linear barcode.
- [lenticularHaloGenerator()](lenticularhalogenerator%28%29.md): Generates a lenticular halo image.
- [meshGenerator()](meshgenerator%28%29.md): Generates a pattern made from an array of line segments.
- [pdf417BarcodeGenerator()](pdf417barcodegenerator%28%29.md): Generates a high-density linear barcode.
- [qrCodeGenerator()](qrcodegenerator%28%29.md): Generates a quick response (QR) code image.
- [randomGenerator()](randomgenerator%28%29.md): Generates a random filter image.
- [roundedRectangleGenerator()](roundedrectanglegenerator%28%29.md): Generates a rounded rectangle image.
- [roundedRectangleStrokeGenerator()](roundedrectanglestrokegenerator%28%29.md): Creates an image containing the outline of a rounded rectangle.
- [stripesGenerator()](stripesgenerator%28%29.md): Generates a line of stripes as an image
- [sunbeamsGenerator()](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.

# starShineGeneratorFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a star-shine image.

## Declaration

```objectivec
+ (CIFilter<CIStarShineGenerator> *) starShineGeneratorFilter;
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates a star-shine image. The effect is similar to a supernova effect. You can use this filter to simulate a lens flare.

The star-shine generator filter uses the following properties:

- **`center`**: A `vector` representing the center of the flare as a [CGPoint](../../corefoundation/cgpoint.md).
- **`color`**: A color representing the color of the flare as a [CGColor](../../uikit/uicolor/cgcolor.md).
- **`radius`**: A `float` representing the radius of the flare as an [NSNumber](../../foundation/nsnumber.md).
- **`crossScale`**: A `float` representing the cross flare size relative to the round central flare as an [NSNumber](../../foundation/nsnumber.md).
- **`crossAngle`**: A `float` representing the angle of the flare as an [NSNumber](../../foundation/nsnumber.md).
- **`crossOpacity`**: A `float` representing the thickness of the cross opacity as an [NSNumber](../../foundation/nsnumber.md).
- **`crossWidth`**: A `float` representing the cross width as an [NSNumber](../../foundation/nsnumber.md).
- **`epsilon`**: A `float` representing the epsilon as an [NSNumber](../../foundation/nsnumber.md).

The following code generates a star-shaped silhouette with a black background.

```swift
func starShine() -> CIImage {
    let starShineGenerator = CIFilter.starShineGenerator()
    starShineGenerator.center = CGPoint(x: 150, y: 150)
    starShineGenerator.color = .green
    starShineGenerator.radius = 50
    starShineGenerator.crossScale = 15
    starShineGenerator.crossAngle = 0.60
    starShineGenerator.crossOpacity = -2
    starShineGenerator.crossWidth = 2.5
    starShineGenerator.epsilon = -2.0
    return starShineGenerator.outputImage!
}
```

![A picture of an object that is similar to a square with the corners stretched farther out from the body and a green gradient behind the star shine.](https://developer.apple.com/images/com.apple.coreimage/media-3590972@2x.png)

## See Also

### Filters

- [attributedTextImageGeneratorFilter](attributedtextimagegenerator%28%29.md): Generates an attributed-text image.
- [aztecCodeGeneratorFilter](azteccodegenerator%28%29.md): Generates a low-density barcode.
- [barcodeGeneratorFilter](barcodegenerator%28%29.md): Generates a barcode as an image from the descriptor.
- [blurredRectangleGeneratorFilter](blurredrectanglegenerator%28%29.md): Generates a blurred rectangle.
- [checkerboardGeneratorFilter](checkerboardgenerator%28%29.md): Generates a checkerboard image.
- [code128BarcodeGeneratorFilter](code128barcodegenerator%28%29.md): Generates a high-density, linear barcode.
- [lenticularHaloGeneratorFilter](lenticularhalogenerator%28%29.md): Generates a lenticular halo image.
- [meshGeneratorFilter](meshgenerator%28%29.md): Generates a pattern made from an array of line segments.
- [PDF417BarcodeGenerator](pdf417barcodegenerator%28%29.md): Generates a high-density linear barcode.
- [QRCodeGenerator](qrcodegenerator%28%29.md): Generates a quick response (QR) code image.
- [randomGeneratorFilter](randomgenerator%28%29.md): Generates a random filter image.
- [roundedRectangleGeneratorFilter](roundedrectanglegenerator%28%29.md): Generates a rounded rectangle image.
- [roundedRectangleStrokeGeneratorFilter](roundedrectanglestrokegenerator%28%29.md): Creates an image containing the outline of a rounded rectangle.
- [stripesGeneratorFilter](stripesgenerator%28%29.md): Generates a line of stripes as an image
- [sunbeamsGeneratorFilter](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.
