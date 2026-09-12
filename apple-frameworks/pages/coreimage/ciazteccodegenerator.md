> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciazteccodegenerator](https://developer.apple.com/documentation/coreimage/ciazteccodegenerator)

# CIAztecCodeGenerator (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure an Aztec code generator filter.

## Declaration

```swift
protocol CIAztecCodeGenerator : CIFilterProtocol
```

## Topics

### Instance Properties

- [compactStyle](ciazteccodegenerator/compactstyle.md): A Boolean that specifies whether to force a compact style Aztec code.
- [correctionLevel](ciazteccodegenerator/correctionlevel.md): The Aztec error correction, a value from 5 to 95.
- [layers](ciazteccodegenerator/layers.md): The number of Aztec layers, a value from 1 to 32.
- [message](ciazteccodegenerator/message.md): The message to encode in the Aztec barcode.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [aztecCodeGenerator()](cifilter-swift.class/azteccodegenerator%28%29.md): Generates a low-density barcode.

### Protocols

- [CICode128BarcodeGenerator](cicode128barcodegenerator.md): The properties you use to configure a Code 128 barcode generator filter.
- [CIAttributedTextImageGenerator](ciattributedtextimagegenerator.md): The properties you use to configure an attributed-text image generator filter.
- [CIBarcodeGenerator](cibarcodegenerator.md): The properties you use to configure a barcode generator filter.
- [CIBlurredRectangleGenerator](ciblurredrectanglegenerator.md)
- [CIRoundedRectangleStrokeGenerator](ciroundedrectanglestrokegenerator.md)
- [CICheckerboardGenerator](cicheckerboardgenerator.md): The properties you use to configure a checkerboard generator filter.
- [CILenticularHaloGenerator](cilenticularhalogenerator.md): The properties you use to configure a lenticular halo generator filter.
- [CIMeshGenerator](cimeshgenerator.md): The properties you use to configure a mesh generator filter.
- [CIPDF417BarcodeGenerator](cipdf417barcodegenerator.md): The properties you use to configure a PDF417 barcode generator filter.
- [CIQRCodeGenerator](ciqrcodegenerator.md): The properties you use to configure a QR code generator filter.
- [CIRandomGenerator](cirandomgenerator.md): The properties you use to configure a random generator filter.
- [CIRoundedRectangleGenerator](ciroundedrectanglegenerator.md): The properties you use to configure a rounded rectangle generator filter.
- [CIRoundedRectangleStrokeGenerator](ciroundedrectanglestrokegenerator.md)
- [CIStarShineGenerator](cistarshinegenerator.md): The properties you use to configure a star-shine generator filter.
- [CIStripesGenerator](cistripesgenerator.md): The properties you use to configure a stripes generator filter.

# CIAztecCodeGenerator (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure an Aztec code generator filter.

## Declaration

```objectivec
@protocol CIAztecCodeGenerator <CIFilter>
```

## Topics

### Instance Properties

- [compactStyle](ciazteccodegenerator/compactstyle.md): A Boolean that specifies whether to force a compact style Aztec code.
- [correctionLevel](ciazteccodegenerator/correctionlevel.md): The Aztec error correction, a value from 5 to 95.
- [layers](ciazteccodegenerator/layers.md): The number of Aztec layers, a value from 1 to 32.
- [message](ciazteccodegenerator/message.md): The message to encode in the Aztec barcode.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [aztecCodeGeneratorFilter](cifilter-swift.class/azteccodegenerator%28%29.md): Generates a low-density barcode.

### Protocols

- [CICode128BarcodeGenerator](cicode128barcodegenerator.md): The properties you use to configure a Code 128 barcode generator filter.
- [CIAttributedTextImageGenerator](ciattributedtextimagegenerator.md): The properties you use to configure an attributed-text image generator filter.
- [CIBarcodeGenerator](cibarcodegenerator.md): The properties you use to configure a barcode generator filter.
- [CIBlurredRectangleGenerator](ciblurredrectanglegenerator.md)
- [CIRoundedRectangleStrokeGenerator](ciroundedrectanglestrokegenerator.md)
- [CICheckerboardGenerator](cicheckerboardgenerator.md): The properties you use to configure a checkerboard generator filter.
- [CILenticularHaloGenerator](cilenticularhalogenerator.md): The properties you use to configure a lenticular halo generator filter.
- [CIMeshGenerator](cimeshgenerator.md): The properties you use to configure a mesh generator filter.
- [CIPDF417BarcodeGenerator](cipdf417barcodegenerator.md): The properties you use to configure a PDF417 barcode generator filter.
- [CIQRCodeGenerator](ciqrcodegenerator.md): The properties you use to configure a QR code generator filter.
- [CIRandomGenerator](cirandomgenerator.md): The properties you use to configure a random generator filter.
- [CIRoundedRectangleGenerator](ciroundedrectanglegenerator.md): The properties you use to configure a rounded rectangle generator filter.
- [CIRoundedRectangleStrokeGenerator](ciroundedrectanglestrokegenerator.md)
- [CIStarShineGenerator](cistarshinegenerator.md): The properties you use to configure a star-shine generator filter.
- [CIStripesGenerator](cistripesgenerator.md): The properties you use to configure a stripes generator filter.
