> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/textimagegenerator()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/textimagegenerator())

# textImageGenerator() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a text image.

## Declaration

```swift
class func textImageGenerator() -> any CIFilter & CITextImageGenerator
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates a text image. The effect takes the input string property and the scale factor to scale up the text. You commonly combine this filter with other filters to create a watermark on images.

The text image generator filter uses the following properties:

- **`text`**: The `string` to render. The string can contain non-ASCII characters.
- **`fontName`**: A `string` representing the name of the font to be used to generate the image.
- **`fontSize`**: A `float` representing the size of the font as an [NSNumber](../../foundation/nsnumber.md).
- **`scaleFactor`**: A `float` representing the scale of the font for the generated text as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that generates a string of text as a grayscale image:

```swift
func textImage(inputText: String) -> CIImage {
    let textImageGenerator = CIFilter.textImageGenerator()
    textImageGenerator.text = inputText
    textImageGenerator.fontName = "Helvetica"
    textImageGenerator.fontSize = 25
    textImageGenerator.scaleFactor = 4
    return textImageGenerator.outputImage!
}
```

![An image with the text Hello World! in black and a hand wave emoticon in gray.](https://developer.apple.com/images/com.apple.coreimage/media-3546321@2x.png)

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
- [stripesGenerator()](stripesgenerator%28%29.md): Generates a line of stripes as an image

# textImageGeneratorFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Generates a text image.

## Declaration

```objectivec
+ (CIFilter<CITextImageGenerator> *) textImageGeneratorFilter;
```

<a id="return-value"></a>

## Return Value

The generated image.

<a id="Discussion"></a>

## Discussion

This method generates a text image. The effect takes the input string property and the scale factor to scale up the text. You commonly combine this filter with other filters to create a watermark on images.

The text image generator filter uses the following properties:

- **`text`**: The `string` to render. The string can contain non-ASCII characters.
- **`fontName`**: A `string` representing the name of the font to be used to generate the image.
- **`fontSize`**: A `float` representing the size of the font as an [NSNumber](../../foundation/nsnumber.md).
- **`scaleFactor`**: A `float` representing the scale of the font for the generated text as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that generates a string of text as a grayscale image:

```swift
func textImage(inputText: String) -> CIImage {
    let textImageGenerator = CIFilter.textImageGenerator()
    textImageGenerator.text = inputText
    textImageGenerator.fontName = "Helvetica"
    textImageGenerator.fontSize = 25
    textImageGenerator.scaleFactor = 4
    return textImageGenerator.outputImage!
}
```

![An image with the text Hello World! in black and a hand wave emoticon in gray.](https://developer.apple.com/images/com.apple.coreimage/media-3546321@2x.png)

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
- [stripesGeneratorFilter](stripesgenerator%28%29.md): Generates a line of stripes as an image
