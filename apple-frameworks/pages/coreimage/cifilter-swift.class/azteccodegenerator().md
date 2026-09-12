> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/azteccodegenerator()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/azteccodegenerator())

# aztecCodeGenerator() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a low-density barcode.

## Declaration

```swift
class func aztecCodeGenerator() -> any CIFilter & CIAztecCodeGenerator
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates an Aztec code as an image. The Aztec barcode code is a low-density barcode defined in the ISO/IEC 24778:2008 standard. This code is commonly used for transport ticketing or boarding passes.

The Aztec code generator filter uses the following properties:

- **`message`**: The data to be encoded as an Aztec code. An [NSData](../../foundation/nsdata.md) object whose display name is Message.
- **`correctionLevel`**: A `float` representing the percentage of redundancy to add to the message data. A higher correction level allows the barcode to be correctly read even when partially damaged.
- **`layers`**: A `float` representing the number of concentric squares encoding the barcode data. When the value is zero, Core Image automatically determines the appropriate number of layers to encode the message data at the specified correction level.
- **`compactStyle`**: A `float` determining the use of compact or full-size Aztec barcode format. The compact format can store up to 44 bytes of message data in up to 4 layers. The full-size format can store up to 1914 bytes of message data in up to 32 layers. Leave unset, or set to 0 for automatic.

The following code creates a filter that generates an Aztec barcode:

```swift
func aztecCode(inputMessage: String) -> CIImage {
    let aztecCodeGenerator = CIFilter.aztecCodeGenerator()
    aztecCodeGenerator.correctionLevel = 15
    aztecCodeGenerator.compactStyle = 0
    aztecCodeGenerator.message = inputMessage.data(using: .ascii)!
    aztecCodeGenerator.layers = 10
    return aztecCodeGenerator.outputImage!
}
```

![An image of a black and white Aztec code made of small squares representing the encoded data of: Filter an image, generate a barcode, what else can CoreImage do?](https://developer.apple.com/images/com.apple.coreimage/media-3546310@2x.png)

## See Also

### Filters

- [attributedTextImageGenerator()](attributedtextimagegenerator%28%29.md): Generates an attributed-text image.
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
- [stripesGenerator()](stripesgenerator%28%29.md): Generates a line of stripes as an image
- [sunbeamsGenerator()](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.

# aztecCodeGeneratorFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a low-density barcode.

## Declaration

```objectivec
+ (CIFilter<CIAztecCodeGenerator> *) aztecCodeGeneratorFilter;
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates an Aztec code as an image. The Aztec barcode code is a low-density barcode defined in the ISO/IEC 24778:2008 standard. This code is commonly used for transport ticketing or boarding passes.

The Aztec code generator filter uses the following properties:

- **`message`**: The data to be encoded as an Aztec code. An [NSData](../../foundation/nsdata.md) object whose display name is Message.
- **`correctionLevel`**: A `float` representing the percentage of redundancy to add to the message data. A higher correction level allows the barcode to be correctly read even when partially damaged.
- **`layers`**: A `float` representing the number of concentric squares encoding the barcode data. When the value is zero, Core Image automatically determines the appropriate number of layers to encode the message data at the specified correction level.
- **`compactStyle`**: A `float` determining the use of compact or full-size Aztec barcode format. The compact format can store up to 44 bytes of message data in up to 4 layers. The full-size format can store up to 1914 bytes of message data in up to 32 layers. Leave unset, or set to 0 for automatic.

The following code creates a filter that generates an Aztec barcode:

```swift
func aztecCode(inputMessage: String) -> CIImage {
    let aztecCodeGenerator = CIFilter.aztecCodeGenerator()
    aztecCodeGenerator.correctionLevel = 15
    aztecCodeGenerator.compactStyle = 0
    aztecCodeGenerator.message = inputMessage.data(using: .ascii)!
    aztecCodeGenerator.layers = 10
    return aztecCodeGenerator.outputImage!
}
```

![An image of a black and white Aztec code made of small squares representing the encoded data of: Filter an image, generate a barcode, what else can CoreImage do?](https://developer.apple.com/images/com.apple.coreimage/media-3546310@2x.png)

## See Also

### Filters

- [attributedTextImageGeneratorFilter](attributedtextimagegenerator%28%29.md): Generates an attributed-text image.
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
- [stripesGeneratorFilter](stripesgenerator%28%29.md): Generates a line of stripes as an image
- [sunbeamsGeneratorFilter](sunbeamsgenerator%28%29.md): Generates an image resembling the sun.
