> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/roundedrectanglegenerator()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/roundedrectanglegenerator())

# roundedRectangleGenerator() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a rounded rectangle image.

## Declaration

```swift
class func roundedRectangleGenerator() -> any CIFilter & CIRoundedRectangleGenerator
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates a rounded rectangle image with the specified size, corner radius, and color properties.

The rounded rectangle generator filter uses the following properties:

- **`color`**: A [CIColor](../cicolor.md) representing the color of the rounded rectangle.
- **`extent`**: A [CGRect](../../corefoundation/cgrect.md) representing the size of the rounded rectangle.
- **`radius`**: A `float` representing the curve of the rectangle’s corners.

The following code creates a filter that generates a light blue square with rounded corners:

```swift
func roundedRectangle () -> CIImage {
    let roundedRectangleGenerator = CIFilter.roundedRectangleGenerator()
    roundedRectangleGenerator.color = CIColor(red: 96/255, green: 173/255, blue: 193/255)
    roundedRectangleGenerator.extent = CGRect(x: 0, y: 1, width: 700, height: 700)
    roundedRectangleGenerator.radius = 100
    return roundedRectangleGenerator.outputImage!
}
```

![A light blue square with rounded corners.](https://developer.apple.com/images/com.apple.coreimage/media-3546319@2x.png)

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
- [roundedRectangleStrokeGenerator()](roundedrectanglestrokegenerator%28%29.md): Creates an image containing the outline of a rounded rectangle.
- [starShineGenerator()](starshinegenerator%28%29.md): Generates a star-shine image.
- [stripesGenerator()](stripesgenerator%28%29.md): Generates a line of stripes as an image
- [sunbeamsGenerator()](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.

# roundedRectangleGeneratorFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a rounded rectangle image.

## Declaration

```objectivec
+ (CIFilter<CIRoundedRectangleGenerator> *) roundedRectangleGeneratorFilter;
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates a rounded rectangle image with the specified size, corner radius, and color properties.

The rounded rectangle generator filter uses the following properties:

- **`color`**: A [CIColor](../cicolor.md) representing the color of the rounded rectangle.
- **`extent`**: A [CGRect](../../corefoundation/cgrect.md) representing the size of the rounded rectangle.
- **`radius`**: A `float` representing the curve of the rectangle’s corners.

The following code creates a filter that generates a light blue square with rounded corners:

```swift
func roundedRectangle () -> CIImage {
    let roundedRectangleGenerator = CIFilter.roundedRectangleGenerator()
    roundedRectangleGenerator.color = CIColor(red: 96/255, green: 173/255, blue: 193/255)
    roundedRectangleGenerator.extent = CGRect(x: 0, y: 1, width: 700, height: 700)
    roundedRectangleGenerator.radius = 100
    return roundedRectangleGenerator.outputImage!
}
```

![A light blue square with rounded corners.](https://developer.apple.com/images/com.apple.coreimage/media-3546319@2x.png)

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
- [roundedRectangleStrokeGeneratorFilter](roundedrectanglestrokegenerator%28%29.md): Creates an image containing the outline of a rounded rectangle.
- [starShineGeneratorFilter](starshinegenerator%28%29.md): Generates a star-shine image.
- [stripesGeneratorFilter](stripesgenerator%28%29.md): Generates a line of stripes as an image
- [sunbeamsGeneratorFilter](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.
