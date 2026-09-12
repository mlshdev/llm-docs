> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/barcodegenerator()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/barcodegenerator())

# barcodeGenerator() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a barcode as an image from the descriptor.

## Declaration

```swift
class func barcodeGenerator() -> any CIFilter & CIBarcodeGenerator
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates a custom barcode as an image. The effect uses barcode descriptors to specify properties of the generated barcode.

The barcode generator uses the following property:

- **`barcodeDescriptor`**: An instance of [CIBarcodeDescriptor](../cibarcodedescriptor.md) with the input parameters supplied.

The following code creates a filter that generates a QR code containing the text *Johnny Appleseed.*

```swift
func barcode(inputMessage: Data) -> CIImage {
   let barcodeGenerator = CIFilter.barcodeGenerator()
    barcodeGenerator.barcodeDescriptor = CIQRCodeDescriptor(payload: inputMessage, symbolVersion: 1, maskPattern: 4, errorCorrectionLevel: .levelL)!
    return barcodeGenerator.outputImage!
}

let johnnyAppleseed: [UInt8] = [0x41, 0x04, 0xA6, 0xF6, 0x86, 0xE6, 0xE7, 0x92, 0x04, 0x17, 0x07, 0x06, 0xC6, 0x57, 0x36, 0x56, 0x56, 0x40, 0xEC]
let data = Data(johnnyAppleseed)

let bImage = barcode(inputMessage: data)
```

![A QR code containing the text Johnny Appleseed.](https://developer.apple.com/images/com.apple.coreimage/media-4327881@2x.png)

## See Also

### Related Documentation

- [CIAztecCodeDescriptor](../ciazteccodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Aztec code symbol.
- [CIDataMatrixCodeDescriptor](../cidatamatrixcodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Data Matrix code symbol.
- [CIPDF417CodeDescriptor](../cipdf417codedescriptor.md): A concrete subclass of Core Image Barcode Descriptor that represents a PDF417 symbol.
- [CIQRCodeDescriptor](../ciqrcodedescriptor.md): A concrete subclass of the Core Image Barcode Descriptor that represents a square QR code symbol.

### Filters

- [attributedTextImageGenerator()](attributedtextimagegenerator%28%29.md): Generates an attributed-text image.
- [aztecCodeGenerator()](azteccodegenerator%28%29.md): Generates a low-density barcode.
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

# barcodeGeneratorFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a barcode as an image from the descriptor.

## Declaration

```objectivec
+ (CIFilter<CIBarcodeGenerator> *) barcodeGeneratorFilter;
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates a custom barcode as an image. The effect uses barcode descriptors to specify properties of the generated barcode.

The barcode generator uses the following property:

- **`barcodeDescriptor`**: An instance of [CIBarcodeDescriptor](../cibarcodedescriptor.md) with the input parameters supplied.

The following code creates a filter that generates a QR code containing the text *Johnny Appleseed.*

```swift
func barcode(inputMessage: Data) -> CIImage {
   let barcodeGenerator = CIFilter.barcodeGenerator()
    barcodeGenerator.barcodeDescriptor = CIQRCodeDescriptor(payload: inputMessage, symbolVersion: 1, maskPattern: 4, errorCorrectionLevel: .levelL)!
    return barcodeGenerator.outputImage!
}

let johnnyAppleseed: [UInt8] = [0x41, 0x04, 0xA6, 0xF6, 0x86, 0xE6, 0xE7, 0x92, 0x04, 0x17, 0x07, 0x06, 0xC6, 0x57, 0x36, 0x56, 0x56, 0x40, 0xEC]
let data = Data(johnnyAppleseed)

let bImage = barcode(inputMessage: data)
```

![A QR code containing the text Johnny Appleseed.](https://developer.apple.com/images/com.apple.coreimage/media-4327881@2x.png)

## See Also

### Related Documentation

- [CIAztecCodeDescriptor](../ciazteccodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Aztec code symbol.
- [CIDataMatrixCodeDescriptor](../cidatamatrixcodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Data Matrix code symbol.
- [CIPDF417CodeDescriptor](../cipdf417codedescriptor.md): A concrete subclass of Core Image Barcode Descriptor that represents a PDF417 symbol.
- [CIQRCodeDescriptor](../ciqrcodedescriptor.md): A concrete subclass of the Core Image Barcode Descriptor that represents a square QR code symbol.

### Filters

- [attributedTextImageGeneratorFilter](attributedtextimagegenerator%28%29.md): Generates an attributed-text image.
- [aztecCodeGeneratorFilter](azteccodegenerator%28%29.md): Generates a low-density barcode.
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
