> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/meshgenerator()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/meshgenerator())

# meshGenerator() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a pattern made from an array of line segments.

## Declaration

```swift
class func meshGenerator() -> any CIFilter & CIMeshGenerator
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates a mesh generator image. The effect uses an array of line segments to create the resulting image.

The mesh generator filter uses the following properties:

- **`inputMesh`**: An `array` of line segments stored as an array of [CIVector](../civector.md), each containing a start point and end point.
- **`color`**: A [CIColor](../cicolor.md) representing the color used to make the mesh.
- **`width`**: A `float` representing the width of the line segments as an [NSNumber](../../foundation/nsnumber.md)

The following code creates a filter that generates a green star made from mesh segments:

```swift
func mesh(mesh: NSdata) -> CIImage {
    let meshGenerator = CIFilter.meshGenerator()
    meshGenerator.color = CIColor.green
    meshGenerator.width = 3
    meshGenerator.inputmesh = mesh
    return meshGenerator.outputImage!
}
```

![A set of green mesh line segments connected together to draw a five-point star pattern.](https://developer.apple.com/images/com.apple.coreimage/media-3590974@2x.png)

## See Also

### Filters

- [attributedTextImageGenerator()](attributedtextimagegenerator%28%29.md): Generates an attributed-text image.
- [aztecCodeGenerator()](azteccodegenerator%28%29.md): Generates a low-density barcode.
- [barcodeGenerator()](barcodegenerator%28%29.md): Generates a barcode as an image from the descriptor.
- [blurredRectangleGenerator()](blurredrectanglegenerator%28%29.md): Generates a blurred rectangle.
- [checkerboardGenerator()](checkerboardgenerator%28%29.md): Generates a checkerboard image.
- [code128BarcodeGenerator()](code128barcodegenerator%28%29.md): Generates a high-density, linear barcode.
- [lenticularHaloGenerator()](lenticularhalogenerator%28%29.md): Generates a lenticular halo image.
- [pdf417BarcodeGenerator()](pdf417barcodegenerator%28%29.md): Generates a high-density linear barcode.
- [qrCodeGenerator()](qrcodegenerator%28%29.md): Generates a quick response (QR) code image.
- [randomGenerator()](randomgenerator%28%29.md): Generates a random filter image.
- [roundedRectangleGenerator()](roundedrectanglegenerator%28%29.md): Generates a rounded rectangle image.
- [roundedRectangleStrokeGenerator()](roundedrectanglestrokegenerator%28%29.md): Creates an image containing the outline of a rounded rectangle.
- [starShineGenerator()](starshinegenerator%28%29.md): Generates a star-shine image.
- [stripesGenerator()](stripesgenerator%28%29.md): Generates a line of stripes as an image
- [sunbeamsGenerator()](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.

# meshGeneratorFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a pattern made from an array of line segments.

## Declaration

```objectivec
+ (CIFilter<CIMeshGenerator> *) meshGeneratorFilter;
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates a mesh generator image. The effect uses an array of line segments to create the resulting image.

The mesh generator filter uses the following properties:

- **`inputMesh`**: An `array` of line segments stored as an array of [CIVector](../civector.md), each containing a start point and end point.
- **`color`**: A [CIColor](../cicolor.md) representing the color used to make the mesh.
- **`width`**: A `float` representing the width of the line segments as an [NSNumber](../../foundation/nsnumber.md)

The following code creates a filter that generates a green star made from mesh segments:

```swift
func mesh(mesh: NSdata) -> CIImage {
    let meshGenerator = CIFilter.meshGenerator()
    meshGenerator.color = CIColor.green
    meshGenerator.width = 3
    meshGenerator.inputmesh = mesh
    return meshGenerator.outputImage!
}
```

![A set of green mesh line segments connected together to draw a five-point star pattern.](https://developer.apple.com/images/com.apple.coreimage/media-3590974@2x.png)

## See Also

### Filters

- [attributedTextImageGeneratorFilter](attributedtextimagegenerator%28%29.md): Generates an attributed-text image.
- [aztecCodeGeneratorFilter](azteccodegenerator%28%29.md): Generates a low-density barcode.
- [barcodeGeneratorFilter](barcodegenerator%28%29.md): Generates a barcode as an image from the descriptor.
- [blurredRectangleGeneratorFilter](blurredrectanglegenerator%28%29.md): Generates a blurred rectangle.
- [checkerboardGeneratorFilter](checkerboardgenerator%28%29.md): Generates a checkerboard image.
- [code128BarcodeGeneratorFilter](code128barcodegenerator%28%29.md): Generates a high-density, linear barcode.
- [lenticularHaloGeneratorFilter](lenticularhalogenerator%28%29.md): Generates a lenticular halo image.
- [PDF417BarcodeGenerator](pdf417barcodegenerator%28%29.md): Generates a high-density linear barcode.
- [QRCodeGenerator](qrcodegenerator%28%29.md): Generates a quick response (QR) code image.
- [randomGeneratorFilter](randomgenerator%28%29.md): Generates a random filter image.
- [roundedRectangleGeneratorFilter](roundedrectanglegenerator%28%29.md): Generates a rounded rectangle image.
- [roundedRectangleStrokeGeneratorFilter](roundedrectanglestrokegenerator%28%29.md): Creates an image containing the outline of a rounded rectangle.
- [starShineGeneratorFilter](starshinegenerator%28%29.md): Generates a star-shine image.
- [stripesGeneratorFilter](stripesgenerator%28%29.md): Generates a line of stripes as an image
- [sunbeamsGeneratorFilter](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.
