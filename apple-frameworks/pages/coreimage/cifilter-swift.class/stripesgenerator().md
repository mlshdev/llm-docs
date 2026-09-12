> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/stripesgenerator()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/stripesgenerator())

# stripesGenerator() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a line of stripes as an image

## Declaration

```swift
class func stripesGenerator() -> any CIFilter & CIStripesGenerator
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates a vertical stripped line pattern as an image.

The stripes generator filter uses the following properties:

- **`center`**: A [CIVector](../civector.md) representing the center of the image.
- **`color0`**: A [CIColor](../cicolor.md) representing the stripes color.
- **`color1`**: A [CIColor](../cicolor.md) representing the background color.
- **`width`**: A `float` representing the width of the lines as an [NSNumber](../../foundation/nsnumber.md).
- **`sharpness`**: A `float` representing the sharpness of the lines as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that generates a black and white vertical striped image:

```swift
func stripes() -> CIImage {
    let stripesGenerator = CIFilter.stripesGenerator()
    stripesGenerator.center = CGPoint(x: 150, y: 150)
    stripesGenerator.color0 = .white
    stripesGenerator.color1 = .black
    stripesGenerator.width = 80
    stripesGenerator.sharpness = 1
    return stripesGenerator.outputImage!
}
```

![A series of vertical black and white lines repeating the entire image.](https://developer.apple.com/images/com.apple.coreimage/media-3590971@2x.png)

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
- [starShineGenerator()](starshinegenerator%28%29.md): Generates a star-shine image.
- [sunbeamsGenerator()](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.

# stripesGeneratorFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a line of stripes as an image

## Declaration

```objectivec
+ (CIFilter<CIStripesGenerator> *) stripesGeneratorFilter;
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates a vertical stripped line pattern as an image.

The stripes generator filter uses the following properties:

- **`center`**: A [CIVector](../civector.md) representing the center of the image.
- **`color0`**: A [CIColor](../cicolor.md) representing the stripes color.
- **`color1`**: A [CIColor](../cicolor.md) representing the background color.
- **`width`**: A `float` representing the width of the lines as an [NSNumber](../../foundation/nsnumber.md).
- **`sharpness`**: A `float` representing the sharpness of the lines as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that generates a black and white vertical striped image:

```swift
func stripes() -> CIImage {
    let stripesGenerator = CIFilter.stripesGenerator()
    stripesGenerator.center = CGPoint(x: 150, y: 150)
    stripesGenerator.color0 = .white
    stripesGenerator.color1 = .black
    stripesGenerator.width = 80
    stripesGenerator.sharpness = 1
    return stripesGenerator.outputImage!
}
```

![A series of vertical black and white lines repeating the entire image.](https://developer.apple.com/images/com.apple.coreimage/media-3590971@2x.png)

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
- [starShineGeneratorFilter](starshinegenerator%28%29.md): Generates a star-shine image.
- [sunbeamsGeneratorFilter](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.
