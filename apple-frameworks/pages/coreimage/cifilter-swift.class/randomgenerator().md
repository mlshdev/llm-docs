> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/randomgenerator()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/randomgenerator())

# randomGenerator() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a random filter image.

## Declaration

```swift
class func randomGenerator() -> any CIFilter & CIRandomGenerator
```

<a id="return-value"></a>

## Return Value

The generated image.

## Mentioned In

- [Simulating Scratchy Analog Film](../simulating-scratchy-analog-film.md)

<a id="Discussion"></a>

## Discussion

This method generates an image with infinite extent. The image pixels values are from one of four independent, uniformly distributed random colors.

The following code creates a filter that generates a random color image:

```swift
func random() -> CIImage {
   let randomGenerator = CIFilter.randomGenerator()
   return randomGenerator.outputImage!
}
```

![A random generator that displays random colors in each pixel.](https://developer.apple.com/images/com.apple.coreimage/media-3590973@2x.png)

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
- [roundedRectangleGenerator()](roundedrectanglegenerator%28%29.md): Generates a rounded rectangle image.
- [roundedRectangleStrokeGenerator()](roundedrectanglestrokegenerator%28%29.md): Creates an image containing the outline of a rounded rectangle.
- [starShineGenerator()](starshinegenerator%28%29.md): Generates a star-shine image.
- [stripesGenerator()](stripesgenerator%28%29.md): Generates a line of stripes as an image
- [sunbeamsGenerator()](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.

# randomGeneratorFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a random filter image.

## Declaration

```objectivec
+ (CIFilter<CIRandomGenerator> *) randomGeneratorFilter;
```

<a id="return-value"></a>

## Return Value

The generated image.

## Mentioned In

- [Simulating Scratchy Analog Film](../simulating-scratchy-analog-film.md)

<a id="Discussion"></a>

## Discussion

This method generates an image with infinite extent. The image pixels values are from one of four independent, uniformly distributed random colors.

The following code creates a filter that generates a random color image:

```swift
func random() -> CIImage {
   let randomGenerator = CIFilter.randomGenerator()
   return randomGenerator.outputImage!
}
```

![A random generator that displays random colors in each pixel.](https://developer.apple.com/images/com.apple.coreimage/media-3590973@2x.png)

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
- [roundedRectangleGeneratorFilter](roundedrectanglegenerator%28%29.md): Generates a rounded rectangle image.
- [roundedRectangleStrokeGeneratorFilter](roundedrectanglestrokegenerator%28%29.md): Creates an image containing the outline of a rounded rectangle.
- [starShineGeneratorFilter](starshinegenerator%28%29.md): Generates a star-shine image.
- [stripesGeneratorFilter](stripesgenerator%28%29.md): Generates a line of stripes as an image
- [sunbeamsGeneratorFilter](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.
