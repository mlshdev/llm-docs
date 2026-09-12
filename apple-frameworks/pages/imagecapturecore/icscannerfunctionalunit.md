> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerfunctionalunit](https://developer.apple.com/documentation/imagecapturecore/icscannerfunctionalunit)

# ICScannerFunctionalUnit (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** macOS 10.4+

An abstract class that represents a scanner functional unit.

## Declaration

```swift
class ICScannerFunctionalUnit
```

<a id="overview"></a>

## Overview

The ImageCaptureCore framework defines four concrete subclasses of functional units:

- [ICScannerFunctionalUnitDocumentFeeder](icscannerfunctionalunitdocumentfeeder.md)
- [ICScannerFunctionalUnitFlatbed](icscannerfunctionalunitflatbed.md)
- [ICScannerFunctionalUnitPositiveTransparency](icscannerfunctionalunitpositivetransparency.md)
- [ICScannerFunctionalUnitNegativeTransparency](icscannerfunctionalunitnegativetransparency.md)

[ICScannerDevice](icscannerdevice.md) creates instances of these subclasses.

## Topics

### Instance Properties

- [acceptsThresholdForBlackAndWhiteScanning](icscannerfunctionalunit/acceptsthresholdforblackandwhitescanning.md)
- [bitDepth](icscannerfunctionalunit/bitdepth.md)
- [canPerformOverviewScan](icscannerfunctionalunit/canperformoverviewscan.md)
- [defaultThresholdForBlackAndWhiteScanning](icscannerfunctionalunit/defaultthresholdforblackandwhitescanning.md)
- [measurementUnit](icscannerfunctionalunit/measurementunit.md)
- [nativeXResolution](icscannerfunctionalunit/nativexresolution.md)
- [nativeYResolution](icscannerfunctionalunit/nativeyresolution.md)
- [overviewImage](icscannerfunctionalunit/overviewimage.md)
- [overviewResolution](icscannerfunctionalunit/overviewresolution.md)
- [overviewScanInProgress](icscannerfunctionalunit/overviewscaninprogress.md)
- [physicalSize](icscannerfunctionalunit/physicalsize.md)
- [pixelDataType](icscannerfunctionalunit/pixeldatatype.md)
- [preferredResolutions](icscannerfunctionalunit/preferredresolutions.md)
- [preferredScaleFactors](icscannerfunctionalunit/preferredscalefactors.md)
- [resolution](icscannerfunctionalunit/resolution.md)
- [scaleFactor](icscannerfunctionalunit/scalefactor.md)
- [scanArea](icscannerfunctionalunit/scanarea.md)
- [scanAreaOrientation](icscannerfunctionalunit/scanareaorientation.md)
- [scanInProgress](icscannerfunctionalunit/scaninprogress.md)
- [scanProgressPercentDone](icscannerfunctionalunit/scanprogresspercentdone.md)
- [state](icscannerfunctionalunit/state.md)
- [supportedBitDepths](icscannerfunctionalunit/supportedbitdepths.md)
- [supportedMeasurementUnits](icscannerfunctionalunit/supportedmeasurementunits.md)
- [supportedResolutions](icscannerfunctionalunit/supportedresolutions.md)
- [supportedScaleFactors](icscannerfunctionalunit/supportedscalefactors.md)
- [templates](icscannerfunctionalunit/templates.md)
- [thresholdForBlackAndWhiteScanning](icscannerfunctionalunit/thresholdforblackandwhitescanning.md)
- [type](icscannerfunctionalunit/type.md)
- [usesThresholdForBlackAndWhiteScanning](icscannerfunctionalunit/usesthresholdforblackandwhitescanning.md)
- [vendorFeatures](icscannerfunctionalunit/vendorfeatures.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ICScannerFunctionalUnitDocumentFeeder](icscannerfunctionalunitdocumentfeeder.md)
- [ICScannerFunctionalUnitFlatbed](icscannerfunctionalunitflatbed.md)
- [ICScannerFunctionalUnitNegativeTransparency](icscannerfunctionalunitnegativetransparency.md)
- [ICScannerFunctionalUnitPositiveTransparency](icscannerfunctionalunitpositivetransparency.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Functional Units

- [ICScannerFunctionalUnitDocumentFeeder](icscannerfunctionalunitdocumentfeeder.md): An object that represents the document feeder unit on a scanner.
- [ICScannerFunctionalUnitFlatbed](icscannerfunctionalunitflatbed.md): An object that represents the flatbed unit on a scanner.
- [ICScannerFunctionalUnitNegativeTransparency](icscannerfunctionalunitnegativetransparency.md): An object that represents the transparency unit for scanning negatives on the scanner.
- [ICScannerFunctionalUnitPositiveTransparency](icscannerfunctionalunitpositivetransparency.md): An object that represents the transparency unit for scanning positives on the scanner.
- [ICScannerTransferMode](icscannertransfermode.md): The modes for transferring scan data from the scanner functional unit.

# ICScannerFunctionalUnit (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** macOS 10.4+

An abstract class that represents a scanner functional unit.

## Declaration

```objectivec
@interface ICScannerFunctionalUnit : NSObject
```

<a id="overview"></a>

## Overview

The ImageCaptureCore framework defines four concrete subclasses of functional units:

- [ICScannerFunctionalUnitDocumentFeeder](icscannerfunctionalunitdocumentfeeder.md)
- [ICScannerFunctionalUnitFlatbed](icscannerfunctionalunitflatbed.md)
- [ICScannerFunctionalUnitPositiveTransparency](icscannerfunctionalunitpositivetransparency.md)
- [ICScannerFunctionalUnitNegativeTransparency](icscannerfunctionalunitnegativetransparency.md)

[ICScannerDevice](icscannerdevice.md) creates instances of these subclasses.

## Topics

### Instance Properties

- [acceptsThresholdForBlackAndWhiteScanning](icscannerfunctionalunit/acceptsthresholdforblackandwhitescanning.md)
- [bitDepth](icscannerfunctionalunit/bitdepth.md)
- [canPerformOverviewScan](icscannerfunctionalunit/canperformoverviewscan.md)
- [defaultThresholdForBlackAndWhiteScanning](icscannerfunctionalunit/defaultthresholdforblackandwhitescanning.md)
- [measurementUnit](icscannerfunctionalunit/measurementunit.md)
- [nativeXResolution](icscannerfunctionalunit/nativexresolution.md)
- [nativeYResolution](icscannerfunctionalunit/nativeyresolution.md)
- [overviewImage](icscannerfunctionalunit/overviewimage.md)
- [overviewResolution](icscannerfunctionalunit/overviewresolution.md)
- [overviewScanInProgress](icscannerfunctionalunit/overviewscaninprogress.md)
- [physicalSize](icscannerfunctionalunit/physicalsize.md)
- [pixelDataType](icscannerfunctionalunit/pixeldatatype.md)
- [preferredResolutions](icscannerfunctionalunit/preferredresolutions.md)
- [preferredScaleFactors](icscannerfunctionalunit/preferredscalefactors.md)
- [resolution](icscannerfunctionalunit/resolution.md)
- [scaleFactor](icscannerfunctionalunit/scalefactor.md)
- [scanArea](icscannerfunctionalunit/scanarea.md)
- [scanAreaOrientation](icscannerfunctionalunit/scanareaorientation.md)
- [scanInProgress](icscannerfunctionalunit/scaninprogress.md)
- [scanProgressPercentDone](icscannerfunctionalunit/scanprogresspercentdone.md)
- [state](icscannerfunctionalunit/state.md)
- [supportedBitDepths](icscannerfunctionalunit/supportedbitdepths.md)
- [supportedMeasurementUnits](icscannerfunctionalunit/supportedmeasurementunits.md)
- [supportedResolutions](icscannerfunctionalunit/supportedresolutions.md)
- [supportedScaleFactors](icscannerfunctionalunit/supportedscalefactors.md)
- [templates](icscannerfunctionalunit/templates.md)
- [thresholdForBlackAndWhiteScanning](icscannerfunctionalunit/thresholdforblackandwhitescanning.md)
- [type](icscannerfunctionalunit/type.md)
- [usesThresholdForBlackAndWhiteScanning](icscannerfunctionalunit/usesthresholdforblackandwhitescanning.md)
- [vendorFeatures](icscannerfunctionalunit/vendorfeatures.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ICScannerFunctionalUnitDocumentFeeder](icscannerfunctionalunitdocumentfeeder.md)
- [ICScannerFunctionalUnitFlatbed](icscannerfunctionalunitflatbed.md)
- [ICScannerFunctionalUnitNegativeTransparency](icscannerfunctionalunitnegativetransparency.md)
- [ICScannerFunctionalUnitPositiveTransparency](icscannerfunctionalunitpositivetransparency.md)

## See Also

### Functional Units

- [ICScannerFunctionalUnitDocumentFeeder](icscannerfunctionalunitdocumentfeeder.md): An object that represents the document feeder unit on a scanner.
- [ICScannerFunctionalUnitFlatbed](icscannerfunctionalunitflatbed.md): An object that represents the flatbed unit on a scanner.
- [ICScannerFunctionalUnitNegativeTransparency](icscannerfunctionalunitnegativetransparency.md): An object that represents the transparency unit for scanning negatives on the scanner.
- [ICScannerFunctionalUnitPositiveTransparency](icscannerfunctionalunitpositivetransparency.md): An object that represents the transparency unit for scanning positives on the scanner.
- [ICScannerTransferMode](icscannertransfermode.md): The modes for transferring scan data from the scanner functional unit.
