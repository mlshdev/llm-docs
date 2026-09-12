> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/scanner-configuration](https://developer.apple.com/documentation/imagecapturecore/scanner-configuration)

# Scanner Configuration

**Interface languages:** Swift, Objective-C

**Framework:** ImageCaptureCore  
**Kind:** API Collection

Examine a scanner’s functional units and features.

## Topics

### Band Data

- [ICScannerBandData](icscannerbanddata.md): The options for each band of data that the scanner reads.

### Bit Depth

- [ICScannerBitDepth](icscannerbitdepth.md): The number of bits per channel in the scanned image.

### Color Formats

- [ICScannerColorDataFormatType](icscannercolordataformattype.md): The color data formats relevant to multichannel data.

### Document Sizes

- [ICScannerDocumentType](icscannerdocumenttype.md): The supported document size types.
- [ICScannerMeasurementUnit](icscannermeasurementunit.md): The unit of measurement used by the scanner.

### Features

- [ICScannerFeature](icscannerfeature.md): An abstract class that describes a scanner feature.
- [ICScannerFeatureBoolean](icscannerfeatureboolean.md): A feature with a value of `YES` or `NO`.
- [ICScannerFeatureEnumeration](icscannerfeatureenumeration.md): A feature that can have one of several discrete values, strings or numbers.
- [ICScannerFeatureRange](icscannerfeaturerange.md): A feature with a value that lies within a range.
- [ICScannerFeatureTemplate](icscannerfeaturetemplate.md): A group of one or more rectangular scan areas that can be used with a scanner functional unit.
- [ICScannerFeatureType](icscannerfeaturetype.md): The types of scanner features.

### Functional Units

- [ICScannerFunctionalUnit](icscannerfunctionalunit.md): An abstract class that represents a scanner functional unit.
- [ICScannerFunctionalUnitDocumentFeeder](icscannerfunctionalunitdocumentfeeder.md): An object that represents the document feeder unit on a scanner.
- [ICScannerFunctionalUnitFlatbed](icscannerfunctionalunitflatbed.md): An object that represents the flatbed unit on a scanner.
- [ICScannerFunctionalUnitNegativeTransparency](icscannerfunctionalunitnegativetransparency.md): An object that represents the transparency unit for scanning negatives on the scanner.
- [ICScannerFunctionalUnitPositiveTransparency](icscannerfunctionalunitpositivetransparency.md): An object that represents the transparency unit for scanning positives on the scanner.
- [ICScannerTransferMode](icscannertransfermode.md): The modes for transferring scan data from the scanner functional unit.

### Pixel Data Types

- [ICScannerPixelDataType](icscannerpixeldatatype.md): The pixel data types.

### Scanner States

- [ICScannerStatusRequestsOverviewScan](icscannerstatusrequestsoverviewscan.md): A nonlocalized notification string to indicate that the scanner is requesting an overview scan.
- [ICScannerStatusWarmingUp](icscannerstatuswarmingup.md): A nonlocalized notification string to indicate that the scanner is warming up.
- [ICScannerStatusWarmUpDone](icscannerstatuswarmupdone.md): A nonlocalized notification string to indicate that the scanner has warmed up.

### Buttons

- [ICButtonTypeCopy](icbuttontypecopy.md): A nonlocalized notification string to indicate that the Copy button on the device was pressed.
- [ICButtonTypeMail](icbuttontypemail.md): A nonlocalized notification string to indicate that the Mail button on the device was pressed.
- [ICButtonTypePrint](icbuttontypeprint.md): A nonlocalized notification string to indicate that the Print button on the device was pressed.
- [ICButtonTypeScan](icbuttontypescan.md): A nonlocalized notification string to indicate that the Scan button on the device was pressed.
- [ICButtonTypeTransfer](icbuttontypetransfer.md): A nonlocalized notification string to indicate that the Transfer button on the device was pressed.
- [ICButtonTypeWeb](icbuttontypeweb.md): A nonlocalized notification string to indicate that the Web button on the device was pressed.

## See Also

### Scanners

- [ICScannerDevice](icscannerdevice.md): An object that represents a scanner.
- [ICScannerDeviceDelegate](icscannerdevicedelegate.md): Methods for determining availability, selecting a functional unit, and performing scans on connected scanners.
