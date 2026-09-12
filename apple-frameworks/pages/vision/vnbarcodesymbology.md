> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnbarcodesymbology](https://developer.apple.com/documentation/vision/vnbarcodesymbology)

# VNBarcodeSymbology (Swift)

**Framework:** Vision  
**Kind:** Structure

The barcode symbologies that the framework detects.

## Declaration

```swift
struct VNBarcodeSymbology
```

<a id="Discussion"></a>

## Discussion

Use [supportedSymbologies()](vndetectbarcodesrequest/supportedsymbologies%28%29.md) to get the specific symbologies the request supports.

## Topics

### Supported Symbologies

- [aztec](vnbarcodesymbology/aztec-s3va.md): A constant that indicates Aztec symbology.
- [codabar](vnbarcodesymbology/codabar.md): A constant that indicates Codabar symbology.
- [code39](vnbarcodesymbology/code39-2ggrb.md): A constant that indicates Code 39 symbology.
- [code39Checksum](vnbarcodesymbology/code39checksum-3jdl6.md): A constant that indicates Code 39 symbology with a checksum.
- [code39FullASCII](vnbarcodesymbology/code39fullascii-942jj.md): A constant that indicates Code 39 Full ASCII symbology.
- [code39FullASCIIChecksum](vnbarcodesymbology/code39fullasciichecksum-6700.md): A constant that indicates Code 39 Full ASCII symbology with a checksum.
- [code93](vnbarcodesymbology/code93-2geph.md): A constant that indicates Code 93 symbology.
- [code93i](vnbarcodesymbology/code93i-t5q5.md): A constant that indicates Code 93i symbology.
- [code128](vnbarcodesymbology/code128-1lkm2.md): A constant that indicates Code 128 symbology.
- [dataMatrix](vnbarcodesymbology/datamatrix-6tg7m.md): A constant that indicates Data Matrix symbology.
- [ean8](vnbarcodesymbology/ean8-9qg0n.md): A constant that indicates EAN-8 symbology.
- [ean13](vnbarcodesymbology/ean13-7gb2d.md): A constant that indicates EAN-13 symbology.
- [gs1DataBar](vnbarcodesymbology/gs1databar.md): A constant that indicates GS1 DataBar symbology.
- [gs1DataBarExpanded](vnbarcodesymbology/gs1databarexpanded.md): A constant that indicates GS1 DataBar Expanded symbology.
- [gs1DataBarLimited](vnbarcodesymbology/gs1databarlimited.md): A constant that indicates GS1 DataBar Limited symbology.
- [i2of5](vnbarcodesymbology/i2of5-cyk4.md): A constant that indicates Interleaved 2 of 5 (ITF) symbology.
- [i2of5Checksum](vnbarcodesymbology/i2of5checksum-999jm.md): A constant that indicates Interleaved 2 of 5 (ITF) symbology with a checksum.
- [itf14](vnbarcodesymbology/itf14-9mbkq.md): A constant that indicates ITF-14 symbology.
- [microPDF417](vnbarcodesymbology/micropdf417.md): A constant that indicates MicroPDF417 symbology.
- [microQR](vnbarcodesymbology/microqr.md): A constant that indicates MicroQR symbology.
- [msiPlessey](vnbarcodesymbology/msiplessey.md): A constant that indicates Modified Plessey symbology.
- [pdf417](vnbarcodesymbology/pdf417-8n3oh.md): A constant that indicates PDF417 symbology.
- [qr](vnbarcodesymbology/qr-2l1ve.md): A constant that indicates Quick Response (QR) symbology.
- [upce](vnbarcodesymbology/upce-1jtoc.md): A constant that indicates UPC-E symbology.

### Deprecated Symbols

- [Aztec](vnbarcodesymbology/aztec-6g0vi.md): Deprecated. A constant that indicates Aztec symbology.
- [Code128](vnbarcodesymbology/code128-7spp7.md): Deprecated.
- [Code39](vnbarcodesymbology/code39-34358.md): Deprecated. A constant that indicates Code 39 symbology.
- [Code39Checksum](vnbarcodesymbology/code39checksum-2jrn.md): Deprecated. A constant that indicates Code 39 symbology with a checksum.
- [Code39FullASCII](vnbarcodesymbology/code39fullascii-m5wd.md): Deprecated. A constant that indicates Code 39 Full ASCII symbology.
- [Code39FullASCIIChecksum](vnbarcodesymbology/code39fullasciichecksum-5xnfs.md): Deprecated. A constant that indicates Code 39 Full ASCII symbology with a checksum.
- [Code93](vnbarcodesymbology/code93-67nn0.md): Deprecated. A constant that indicates Code 93 symbology.
- [Code93i](vnbarcodesymbology/code93i-84cmv.md): Deprecated. A constant that indicates Code 93i symbology.
- [DataMatrix](vnbarcodesymbology/datamatrix-2fgc9.md): Deprecated. A constant that indicates Data Matrix symbology.
- [EAN8](vnbarcodesymbology/ean8-4rzbb.md): Deprecated. A constant that indicates EAN-8 symbology.
- [EAN13](vnbarcodesymbology/ean13-8ir8e.md): Deprecated. A constant that indicates EAN-13 symbology.
- [I2of5](vnbarcodesymbology/i2of5-1r8e7.md): Deprecated. A constant that indicates Interleaved 2 of 5 (ITF) symbology.
- [I2of5Checksum](vnbarcodesymbology/i2of5checksum-832s5.md): Deprecated. A constant that indicates Interleaved 2 of 5 (ITF) symbology with a checksum.
- [ITF14](vnbarcodesymbology/itf14-1wp9s.md): Deprecated. A constant that indicates ITF-14 symbology.
- [PDF417](vnbarcodesymbology/pdf417-56ney.md): Deprecated. A constant that indicates PDF417 symbology.
- [QR](vnbarcodesymbology/qr-2zqax.md): Deprecated. A constant that indicates Quick Response (QR) symbology.
- [UPCE](vnbarcodesymbology/upce-7qps5.md): Deprecated. A constant that indicates UPC-E symbology.

### Initializers

- [init(rawValue:)](vnbarcodesymbology/init%28rawvalue_%29.md): Creates a symbology with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying Symbologies

- [supportedSymbologies()](vndetectbarcodesrequest/supportedsymbologies%28%29.md): Returns the barcode symbologies that the request supports.
- [symbologies](vndetectbarcodesrequest/symbologies.md): The barcode symbologies that the request detects in an image.
- [coalesceCompositeSymbologies](vndetectbarcodesrequest/coalescecompositesymbologies.md): A Boolean value that indicates whether to coalesce multiple codes based on the symbology.
- [supportedSymbologies](vndetectbarcodesrequest/supportedsymbologies.md): Deprecated. The array of barcode symbologies that the request supports.

# VNBarcodeSymbology (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias

The barcode symbologies that the framework detects.

## Declaration

```objectivec
typedef NSString * VNBarcodeSymbology;
```

<a id="Discussion"></a>

## Discussion

Use [supportedSymbologiesAndReturnError:](vndetectbarcodesrequest/supportedsymbologies%28%29.md) to get the specific symbologies the request supports.

## Topics

### Supported Symbologies

- [VNBarcodeSymbologyAztec](vnbarcodesymbology/aztec-s3va.md): A constant that indicates Aztec symbology.
- [VNBarcodeSymbologyCodabar](vnbarcodesymbology/codabar.md): A constant that indicates Codabar symbology.
- [VNBarcodeSymbologyCode39](vnbarcodesymbology/code39-2ggrb.md): A constant that indicates Code 39 symbology.
- [VNBarcodeSymbologyCode39Checksum](vnbarcodesymbology/code39checksum-3jdl6.md): A constant that indicates Code 39 symbology with a checksum.
- [VNBarcodeSymbologyCode39FullASCII](vnbarcodesymbology/code39fullascii-942jj.md): A constant that indicates Code 39 Full ASCII symbology.
- [VNBarcodeSymbologyCode39FullASCIIChecksum](vnbarcodesymbology/code39fullasciichecksum-6700.md): A constant that indicates Code 39 Full ASCII symbology with a checksum.
- [VNBarcodeSymbologyCode93](vnbarcodesymbology/code93-2geph.md): A constant that indicates Code 93 symbology.
- [VNBarcodeSymbologyCode93i](vnbarcodesymbology/code93i-t5q5.md): A constant that indicates Code 93i symbology.
- [VNBarcodeSymbologyCode128](vnbarcodesymbology/code128-1lkm2.md): A constant that indicates Code 128 symbology.
- [VNBarcodeSymbologyDataMatrix](vnbarcodesymbology/datamatrix-6tg7m.md): A constant that indicates Data Matrix symbology.
- [VNBarcodeSymbologyEAN8](vnbarcodesymbology/ean8-9qg0n.md): A constant that indicates EAN-8 symbology.
- [VNBarcodeSymbologyEAN13](vnbarcodesymbology/ean13-7gb2d.md): A constant that indicates EAN-13 symbology.
- [VNBarcodeSymbologyGS1DataBar](vnbarcodesymbology/gs1databar.md): A constant that indicates GS1 DataBar symbology.
- [VNBarcodeSymbologyGS1DataBarExpanded](vnbarcodesymbology/gs1databarexpanded.md): A constant that indicates GS1 DataBar Expanded symbology.
- [VNBarcodeSymbologyGS1DataBarLimited](vnbarcodesymbology/gs1databarlimited.md): A constant that indicates GS1 DataBar Limited symbology.
- [VNBarcodeSymbologyI2of5](vnbarcodesymbology/i2of5-cyk4.md): A constant that indicates Interleaved 2 of 5 (ITF) symbology.
- [VNBarcodeSymbologyI2of5Checksum](vnbarcodesymbology/i2of5checksum-999jm.md): A constant that indicates Interleaved 2 of 5 (ITF) symbology with a checksum.
- [VNBarcodeSymbologyITF14](vnbarcodesymbology/itf14-9mbkq.md): A constant that indicates ITF-14 symbology.
- [VNBarcodeSymbologyMicroPDF417](vnbarcodesymbology/micropdf417.md): A constant that indicates MicroPDF417 symbology.
- [VNBarcodeSymbologyMicroQR](vnbarcodesymbology/microqr.md): A constant that indicates MicroQR symbology.
- [VNBarcodeSymbologyMSIPlessey](vnbarcodesymbology/msiplessey.md): A constant that indicates Modified Plessey symbology.
- [VNBarcodeSymbologyPDF417](vnbarcodesymbology/pdf417-8n3oh.md): A constant that indicates PDF417 symbology.
- [VNBarcodeSymbologyQR](vnbarcodesymbology/qr-2l1ve.md): A constant that indicates Quick Response (QR) symbology.
- [VNBarcodeSymbologyUPCE](vnbarcodesymbology/upce-1jtoc.md): A constant that indicates UPC-E symbology.

## See Also

### Specifying Symbologies

- [supportedSymbologiesAndReturnError:](vndetectbarcodesrequest/supportedsymbologies%28%29.md): Returns the barcode symbologies that the request supports.
- [symbologies](vndetectbarcodesrequest/symbologies.md): The barcode symbologies that the request detects in an image.
- [coalesceCompositeSymbologies](vndetectbarcodesrequest/coalescecompositesymbologies.md): A Boolean value that indicates whether to coalesce multiple codes based on the symbology.
- [supportedSymbologies](vndetectbarcodesrequest/supportedsymbologies.md): Deprecated. The array of barcode symbologies that the request supports.
