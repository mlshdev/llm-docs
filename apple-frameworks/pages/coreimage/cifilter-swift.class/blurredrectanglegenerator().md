> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/blurredrectanglegenerator()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/blurredrectanglegenerator())

# blurredRectangleGenerator() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Generates a blurred rectangle.

## Declaration

```swift
class func blurredRectangleGenerator() -> any CIFilter & CIBlurredRectangleGenerator
```

<a id="return-value"></a>

## Return Value

A [CIImage](../ciimage.md) containing a blurred rectangle.

<a id="Discussion"></a>

## Discussion

Creates a [CIImage](../ciimage.md) containing a blurred rectangle. The resulting image size is the extent of the rectangle plus any additional space required for the blur effect.

The blurred rectangle filter uses the following properties:

- **`extent`**: A [CGRect](../../corefoundation/cgrect.md) that defines the extent of the effect.
- **`color`**: A [CIColor](../cicolor.md) specifying the color of the rectangle.
- **`sigma`**: A `float` specifying the sigma for the Gaussian blur.

The following code creates a filter that generates a blurred red rectangle with a width of 200 x 100 pixels.

```swift
func blurredRectangle() -> CIImage {
    let filter = CIFilter.blurredRectangleGenerator()
    filter.extent = CGRect(x: 0, y: 0, width: 200, height: 100)
    filter.color = CIColor.red
    filter.sigma = 10.0
    return filter.outputImage!
}
```

![An image of a blurred rectangle with an aspect ratio of 2 to 1.](https://developer.apple.com/images/com.apple.coreimage/media-4407302@2x.png)

## See Also

### Filters

- [attributedTextImageGenerator()](attributedtextimagegenerator%28%29.md): Generates an attributed-text image.
- [aztecCodeGenerator()](azteccodegenerator%28%29.md): Generates a low-density barcode.
- [barcodeGenerator()](barcodegenerator%28%29.md): Generates a barcode as an image from the descriptor.
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
- [stripesGenerator()](stripesgenerator%28%29.md): Generates a line of stripes as an image
- [sunbeamsGenerator()](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.

# blurredRectangleGeneratorFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Generates a blurred rectangle.

## Declaration

```objectivec
+ (CIFilter<CIBlurredRectangleGenerator> *) blurredRectangleGeneratorFilter;
```

<a id="return-value"></a>

## Return Value

A [CIImage](../ciimage.md) containing a blurred rectangle.

<a id="Discussion"></a>

## Discussion

Creates a [CIImage](../ciimage.md) containing a blurred rectangle. The resulting image size is the extent of the rectangle plus any additional space required for the blur effect.

The blurred rectangle filter uses the following properties:

- **`extent`**: A [CGRect](../../corefoundation/cgrect.md) that defines the extent of the effect.
- **`color`**: A [CIColor](../cicolor.md) specifying the color of the rectangle.
- **`sigma`**: A `float` specifying the sigma for the Gaussian blur.

The following code creates a filter that generates a blurred red rectangle with a width of 200 x 100 pixels.

```swift
func blurredRectangle() -> CIImage {
    let filter = CIFilter.blurredRectangleGenerator()
    filter.extent = CGRect(x: 0, y: 0, width: 200, height: 100)
    filter.color = CIColor.red
    filter.sigma = 10.0
    return filter.outputImage!
}
```

![An image of a blurred rectangle with an aspect ratio of 2 to 1.](https://developer.apple.com/images/com.apple.coreimage/media-4407302@2x.png)

## See Also

### Filters

- [attributedTextImageGeneratorFilter](attributedtextimagegenerator%28%29.md): Generates an attributed-text image.
- [aztecCodeGeneratorFilter](azteccodegenerator%28%29.md): Generates a low-density barcode.
- [barcodeGeneratorFilter](barcodegenerator%28%29.md): Generates a barcode as an image from the descriptor.
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
- [stripesGeneratorFilter](stripesgenerator%28%29.md): Generates a line of stripes as an image
- [sunbeamsGeneratorFilter](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.
