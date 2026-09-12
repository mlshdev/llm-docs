> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/machine-readable-object-types](https://developer.apple.com/documentation/avfoundation/machine-readable-object-types)

# Machine-readable object types (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Constants used to specify the type of barcode to scan.

<a id="overview"></a>

## Overview

These constants are used in conjunction with the [AVCaptureMetadataOutput](avcapturemetadataoutput.md) class’s [metadataObjectTypes](avcapturemetadataoutput/metadataobjecttypes.md) property to specify the type (“symbology”) of barcode to scan. When a barcode is detected, the type property of `AVMetadataMachineReadableCodeObject` reflects the constant for the detected barcode’s symbology.

## Topics

### Constants

- [upce](avmetadataobject/objecttype/upce.md): A constant that identifies the UPC-E symbology.
- [code39](avmetadataobject/objecttype/code39.md): A constant that identifies the Code 39 symbology.
- [code39Mod43](avmetadataobject/objecttype/code39mod43.md): A constant that identifies the Code 39 mod 43 symbology.
- [ean13](avmetadataobject/objecttype/ean13.md): A constant that identifies the EAN-13 symbology.
- [ean8](avmetadataobject/objecttype/ean8.md): A constant that identifies the EAN-8 symbology.
- [code93](avmetadataobject/objecttype/code93.md): A constant that identifies the Code 93 symbology.
- [code128](avmetadataobject/objecttype/code128.md): A constant that identifies the Code 128 symbology.
- [pdf417](avmetadataobject/objecttype/pdf417.md): A constant that identifies the PDF417 symbology.
- [qr](avmetadataobject/objecttype/qr.md): A constant that identifies the QR symbology.
- [aztec](avmetadataobject/objecttype/aztec.md): A constant that identifies the Aztec symbology.
- [interleaved2of5](avmetadataobject/objecttype/interleaved2of5.md): A constant that identifies the Interleaved 2 of 5 symbology.
- [itf14](avmetadataobject/objecttype/itf14.md): A constant that identifies the ITF14 symbology.
- [dataMatrix](avmetadataobject/objecttype/datamatrix.md): A constant that identifies the DataMatrix symbology.

# Machine-readable object types (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Constants used to specify the type of barcode to scan.

<a id="overview"></a>

## Overview

These constants are used in conjunction with the [AVCaptureMetadataOutput](avcapturemetadataoutput.md) class’s [metadataObjectTypes](avcapturemetadataoutput/metadataobjecttypes.md) property to specify the type (“symbology”) of barcode to scan. When a barcode is detected, the type property of `AVMetadataMachineReadableCodeObject` reflects the constant for the detected barcode’s symbology.

## Topics

### Constants

- [AVMetadataObjectTypeUPCECode](avmetadataobject/objecttype/upce.md): A constant that identifies the UPC-E symbology.
- [AVMetadataObjectTypeCode39Code](avmetadataobject/objecttype/code39.md): A constant that identifies the Code 39 symbology.
- [AVMetadataObjectTypeCode39Mod43Code](avmetadataobject/objecttype/code39mod43.md): A constant that identifies the Code 39 mod 43 symbology.
- [AVMetadataObjectTypeEAN13Code](avmetadataobject/objecttype/ean13.md): A constant that identifies the EAN-13 symbology.
- [AVMetadataObjectTypeEAN8Code](avmetadataobject/objecttype/ean8.md): A constant that identifies the EAN-8 symbology.
- [AVMetadataObjectTypeCode93Code](avmetadataobject/objecttype/code93.md): A constant that identifies the Code 93 symbology.
- [AVMetadataObjectTypeCode128Code](avmetadataobject/objecttype/code128.md): A constant that identifies the Code 128 symbology.
- [AVMetadataObjectTypePDF417Code](avmetadataobject/objecttype/pdf417.md): A constant that identifies the PDF417 symbology.
- [AVMetadataObjectTypeQRCode](avmetadataobject/objecttype/qr.md): A constant that identifies the QR symbology.
- [AVMetadataObjectTypeAztecCode](avmetadataobject/objecttype/aztec.md): A constant that identifies the Aztec symbology.
- [AVMetadataObjectTypeInterleaved2of5Code](avmetadataobject/objecttype/interleaved2of5.md): A constant that identifies the Interleaved 2 of 5 symbology.
- [AVMetadataObjectTypeITF14Code](avmetadataobject/objecttype/itf14.md): A constant that identifies the ITF14 symbology.
- [AVMetadataObjectTypeDataMatrixCode](avmetadataobject/objecttype/datamatrix.md): A constant that identifies the DataMatrix symbology.
