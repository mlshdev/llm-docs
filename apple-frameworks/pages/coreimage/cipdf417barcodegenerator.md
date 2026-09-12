> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cipdf417barcodegenerator](https://developer.apple.com/documentation/coreimage/cipdf417barcodegenerator)

# CIPDF417BarcodeGenerator (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a PDF417 barcode generator filter.

## Declaration

```swift
protocol CIPDF417BarcodeGenerator : CIFilterProtocol
```

## Topics

### Instance Properties

- [alwaysSpecifyCompaction](cipdf417barcodegenerator/alwaysspecifycompaction.md): A Boolean value specifying whether to force compaction style.
- [compactStyle](cipdf417barcodegenerator/compactstyle.md): A Boolean value specifying whether to force compact style Aztec code.
- [compactionMode](cipdf417barcodegenerator/compactionmode.md): The compaction mode of the generated barcode.
- [correctionLevel](cipdf417barcodegenerator/correctionlevel.md): The correction level ratio of the generated barcode.
- [dataColumns](cipdf417barcodegenerator/datacolumns.md): The number of data columns in the generated barcode.
- [maxHeight](cipdf417barcodegenerator/maxheight.md): The maximum height, in pixels, of the generated barcode.
- [maxWidth](cipdf417barcodegenerator/maxwidth.md): The maximum width, in pixels, of the generated barcode.
- [message](cipdf417barcodegenerator/message.md): The message to encode in the PDF417 barcode.
- [minHeight](cipdf417barcodegenerator/minheight.md): The minimum height, in pixels, of the generated barcode.
- [minWidth](cipdf417barcodegenerator/minwidth.md): The minimum width, in pixels, of the generated barcode.
- [preferredAspectRatio](cipdf417barcodegenerator/preferredaspectratio.md): The preferred aspect ratio of the generated barcode.
- [rows](cipdf417barcodegenerator/rows.md): The number of rows in the generated barcode.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [pdf417BarcodeGenerator()](cifilter-swift.class/pdf417barcodegenerator%28%29.md): Generates a high-density linear barcode.

### Protocols

- [CICode128BarcodeGenerator](cicode128barcodegenerator.md): The properties you use to configure a Code 128 barcode generator filter.
- [CIAttributedTextImageGenerator](ciattributedtextimagegenerator.md): The properties you use to configure an attributed-text image generator filter.
- [CIAztecCodeGenerator](ciazteccodegenerator.md): The properties you use to configure an Aztec code generator filter.
- [CIBarcodeGenerator](cibarcodegenerator.md): The properties you use to configure a barcode generator filter.
- [CIBlurredRectangleGenerator](ciblurredrectanglegenerator.md)
- [CIRoundedRectangleStrokeGenerator](ciroundedrectanglestrokegenerator.md)
- [CICheckerboardGenerator](cicheckerboardgenerator.md): The properties you use to configure a checkerboard generator filter.
- [CILenticularHaloGenerator](cilenticularhalogenerator.md): The properties you use to configure a lenticular halo generator filter.
- [CIMeshGenerator](cimeshgenerator.md): The properties you use to configure a mesh generator filter.
- [CIQRCodeGenerator](ciqrcodegenerator.md): The properties you use to configure a QR code generator filter.
- [CIRandomGenerator](cirandomgenerator.md): The properties you use to configure a random generator filter.
- [CIRoundedRectangleGenerator](ciroundedrectanglegenerator.md): The properties you use to configure a rounded rectangle generator filter.
- [CIRoundedRectangleStrokeGenerator](ciroundedrectanglestrokegenerator.md)
- [CIStarShineGenerator](cistarshinegenerator.md): The properties you use to configure a star-shine generator filter.
- [CIStripesGenerator](cistripesgenerator.md): The properties you use to configure a stripes generator filter.

# CIPDF417BarcodeGenerator (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a PDF417 barcode generator filter.

## Declaration

```objectivec
@protocol CIPDF417BarcodeGenerator <CIFilter>
```

## Topics

### Instance Properties

- [alwaysSpecifyCompaction](cipdf417barcodegenerator/alwaysspecifycompaction.md): A Boolean value specifying whether to force compaction style.
- [compactStyle](cipdf417barcodegenerator/compactstyle.md): A Boolean value specifying whether to force compact style Aztec code.
- [compactionMode](cipdf417barcodegenerator/compactionmode.md): The compaction mode of the generated barcode.
- [correctionLevel](cipdf417barcodegenerator/correctionlevel.md): The correction level ratio of the generated barcode.
- [dataColumns](cipdf417barcodegenerator/datacolumns.md): The number of data columns in the generated barcode.
- [maxHeight](cipdf417barcodegenerator/maxheight.md): The maximum height, in pixels, of the generated barcode.
- [maxWidth](cipdf417barcodegenerator/maxwidth.md): The maximum width, in pixels, of the generated barcode.
- [message](cipdf417barcodegenerator/message.md): The message to encode in the PDF417 barcode.
- [minHeight](cipdf417barcodegenerator/minheight.md): The minimum height, in pixels, of the generated barcode.
- [minWidth](cipdf417barcodegenerator/minwidth.md): The minimum width, in pixels, of the generated barcode.
- [preferredAspectRatio](cipdf417barcodegenerator/preferredaspectratio.md): The preferred aspect ratio of the generated barcode.
- [rows](cipdf417barcodegenerator/rows.md): The number of rows in the generated barcode.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [PDF417BarcodeGenerator](cifilter-swift.class/pdf417barcodegenerator%28%29.md): Generates a high-density linear barcode.

### Protocols

- [CICode128BarcodeGenerator](cicode128barcodegenerator.md): The properties you use to configure a Code 128 barcode generator filter.
- [CIAttributedTextImageGenerator](ciattributedtextimagegenerator.md): The properties you use to configure an attributed-text image generator filter.
- [CIAztecCodeGenerator](ciazteccodegenerator.md): The properties you use to configure an Aztec code generator filter.
- [CIBarcodeGenerator](cibarcodegenerator.md): The properties you use to configure a barcode generator filter.
- [CIBlurredRectangleGenerator](ciblurredrectanglegenerator.md)
- [CIRoundedRectangleStrokeGenerator](ciroundedrectanglestrokegenerator.md)
- [CICheckerboardGenerator](cicheckerboardgenerator.md): The properties you use to configure a checkerboard generator filter.
- [CILenticularHaloGenerator](cilenticularhalogenerator.md): The properties you use to configure a lenticular halo generator filter.
- [CIMeshGenerator](cimeshgenerator.md): The properties you use to configure a mesh generator filter.
- [CIQRCodeGenerator](ciqrcodegenerator.md): The properties you use to configure a QR code generator filter.
- [CIRandomGenerator](cirandomgenerator.md): The properties you use to configure a random generator filter.
- [CIRoundedRectangleGenerator](ciroundedrectanglegenerator.md): The properties you use to configure a rounded rectangle generator filter.
- [CIRoundedRectangleStrokeGenerator](ciroundedrectanglestrokegenerator.md)
- [CIStarShineGenerator](cistarshinegenerator.md): The properties you use to configure a star-shine generator filter.
- [CIStripesGenerator](cistripesgenerator.md): The properties you use to configure a stripes generator filter.
