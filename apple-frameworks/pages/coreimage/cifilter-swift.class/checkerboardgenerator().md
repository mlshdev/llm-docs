> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/checkerboardgenerator()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/checkerboardgenerator())

# checkerboardGenerator() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a checkerboard image.

## Declaration

```swift
class func checkerboardGenerator() -> any CIFilter & CICheckerboardGenerator
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates a checkerboard pattern as an image. The effect requires the size, sharpness, and color properties to create the pattern.

The checkerboard generator filter uses the following properties:

- **`center`**: A `vector` representing the center of the image as a [CIVector](../civector.md).
- **`color0`**: A [CIColor](../cicolor.md) representing the first color of the pattern.
- **`color1`**: A [CIColor](../cicolor.md) representing the second color of the pattern.
- **`sharpness`**: A `float` representing the sharpness of the pattern as an [NSNumber](../../foundation/nsnumber.md).
- **`width`**: A `float` representing the width of the checkerboard squares as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that generates a black-and-white checkered pattern:

```swift
func checkerBoard() -> CIImage {
    let checkerBoardGenerator = CIFilter.checkerboardGenerator()
    checkerBoardGenerator.setDefaults()
    checkerBoardGenerator.center = CGPoint(x: 0, y: 0)
    checkerBoardGenerator.color0 = .white
    checkerBoardGenerator.color1 = .black
    checkerBoardGenerator.width = 40
    checkerBoardGenerator.sharpness = 1
    return checkerBoardGenerator.outputImage!
}
```

![An image of small black-and-white squares repeating, creating a checkerboard pattern.](https://developer.apple.com/images/com.apple.coreimage/media-3590970@2x.png)

## See Also

### Filters

- [attributedTextImageGenerator()](attributedtextimagegenerator%28%29.md): Generates an attributed-text image.
- [aztecCodeGenerator()](azteccodegenerator%28%29.md): Generates a low-density barcode.
- [barcodeGenerator()](barcodegenerator%28%29.md): Generates a barcode as an image from the descriptor.
- [blurredRectangleGenerator()](blurredrectanglegenerator%28%29.md): Generates a blurred rectangle.
- [code128BarcodeGenerator()](code128barcodegenerator%28%29.md): Generates a high-density, linear barcode.
- [lenticularHaloGenerator()](lenticularhalogenerator%28%29.md): Generates a lenticular halo image.
- [meshGenerator()](meshgenerator%28%29.md): Generates a pattern made from an array of line segments.
- [pdf417BarcodeGenerator()](pdf417barcodegenerator%28%29.md): Generates a high-density linear barcode.
- [qrCodeGenerator()](qrcodegenerator%28%29.md): Generates a quick response (QR) code image.
- [randomGenerator()](randomgenerator%28%29.md): Generates a random filter image.
- [roundedRectangleGenerator()](roundedrectanglegenerator%28%29.md): Generates a rounded rectangle image.
- [roundedRectangleStrokeGenerator()](roundedrectanglestrokegenerator%28%29.md): Creates an image containing the outline of a rounded rectangle.
- [starShineGenerator()](starshinegenerator%28%29.md): Generates a star-shine image.
- [stripesGenerator()](stripesgenerator%28%29.md): Generates a line of stripes as an image
- [sunbeamsGenerator()](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.

# checkerboardGeneratorFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a checkerboard image.

## Declaration

```objectivec
+ (CIFilter<CICheckerboardGenerator> *) checkerboardGeneratorFilter;
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates a checkerboard pattern as an image. The effect requires the size, sharpness, and color properties to create the pattern.

The checkerboard generator filter uses the following properties:

- **`center`**: A `vector` representing the center of the image as a [CIVector](../civector.md).
- **`color0`**: A [CIColor](../cicolor.md) representing the first color of the pattern.
- **`color1`**: A [CIColor](../cicolor.md) representing the second color of the pattern.
- **`sharpness`**: A `float` representing the sharpness of the pattern as an [NSNumber](../../foundation/nsnumber.md).
- **`width`**: A `float` representing the width of the checkerboard squares as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that generates a black-and-white checkered pattern:

```swift
func checkerBoard() -> CIImage {
    let checkerBoardGenerator = CIFilter.checkerboardGenerator()
    checkerBoardGenerator.setDefaults()
    checkerBoardGenerator.center = CGPoint(x: 0, y: 0)
    checkerBoardGenerator.color0 = .white
    checkerBoardGenerator.color1 = .black
    checkerBoardGenerator.width = 40
    checkerBoardGenerator.sharpness = 1
    return checkerBoardGenerator.outputImage!
}
```

![An image of small black-and-white squares repeating, creating a checkerboard pattern.](https://developer.apple.com/images/com.apple.coreimage/media-3590970@2x.png)

## See Also

### Filters

- [attributedTextImageGeneratorFilter](attributedtextimagegenerator%28%29.md): Generates an attributed-text image.
- [aztecCodeGeneratorFilter](azteccodegenerator%28%29.md): Generates a low-density barcode.
- [barcodeGeneratorFilter](barcodegenerator%28%29.md): Generates a barcode as an image from the descriptor.
- [blurredRectangleGeneratorFilter](blurredrectanglegenerator%28%29.md): Generates a blurred rectangle.
- [code128BarcodeGeneratorFilter](code128barcodegenerator%28%29.md): Generates a high-density, linear barcode.
- [lenticularHaloGeneratorFilter](lenticularhalogenerator%28%29.md): Generates a lenticular halo image.
- [meshGeneratorFilter](meshgenerator%28%29.md): Generates a pattern made from an array of line segments.
- [PDF417BarcodeGenerator](pdf417barcodegenerator%28%29.md): Generates a high-density linear barcode.
- [QRCodeGenerator](qrcodegenerator%28%29.md): Generates a quick response (QR) code image.
- [randomGeneratorFilter](randomgenerator%28%29.md): Generates a random filter image.
- [roundedRectangleGeneratorFilter](roundedrectanglegenerator%28%29.md): Generates a rounded rectangle image.
- [roundedRectangleStrokeGeneratorFilter](roundedrectanglestrokegenerator%28%29.md): Creates an image containing the outline of a rounded rectangle.
- [starShineGeneratorFilter](starshinegenerator%28%29.md): Generates a star-shine image.
- [stripesGeneratorFilter](stripesgenerator%28%29.md): Generates a line of stripes as an image
- [sunbeamsGeneratorFilter](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.
