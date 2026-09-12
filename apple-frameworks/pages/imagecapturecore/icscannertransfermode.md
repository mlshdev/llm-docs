> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannertransfermode](https://developer.apple.com/documentation/imagecapturecore/icscannertransfermode)

# ICScannerTransferMode (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

The modes for transferring scan data from the scanner functional unit.

## Declaration

```swift
enum ICScannerTransferMode
```

## Topics

### Constants

- [ICScannerTransferMode.fileBased](icscannertransfermode/filebased.md): The mode for transferring the scan as a file.
- [ICScannerTransferMode.memoryBased](icscannertransfermode/memorybased.md): The mode for transferring the scan as data.

### Initializers

- [init(rawValue:)](icscannertransfermode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Functional Units

- [ICScannerFunctionalUnit](icscannerfunctionalunit.md): An abstract class that represents a scanner functional unit.
- [ICScannerFunctionalUnitDocumentFeeder](icscannerfunctionalunitdocumentfeeder.md): An object that represents the document feeder unit on a scanner.
- [ICScannerFunctionalUnitFlatbed](icscannerfunctionalunitflatbed.md): An object that represents the flatbed unit on a scanner.
- [ICScannerFunctionalUnitNegativeTransparency](icscannerfunctionalunitnegativetransparency.md): An object that represents the transparency unit for scanning negatives on the scanner.
- [ICScannerFunctionalUnitPositiveTransparency](icscannerfunctionalunitpositivetransparency.md): An object that represents the transparency unit for scanning positives on the scanner.

# ICScannerTransferMode (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

The modes for transferring scan data from the scanner functional unit.

## Declaration

```objectivec
enum ICScannerTransferMode : NSUInteger;
```

## Topics

### Constants

- [ICScannerTransferModeFileBased](icscannertransfermode/filebased.md): The mode for transferring the scan as a file.
- [ICScannerTransferModeMemoryBased](icscannertransfermode/memorybased.md): The mode for transferring the scan as data.

## See Also

### Functional Units

- [ICScannerFunctionalUnit](icscannerfunctionalunit.md): An abstract class that represents a scanner functional unit.
- [ICScannerFunctionalUnitDocumentFeeder](icscannerfunctionalunitdocumentfeeder.md): An object that represents the document feeder unit on a scanner.
- [ICScannerFunctionalUnitFlatbed](icscannerfunctionalunitflatbed.md): An object that represents the flatbed unit on a scanner.
- [ICScannerFunctionalUnitNegativeTransparency](icscannerfunctionalunitnegativetransparency.md): An object that represents the transparency unit for scanning negatives on the scanner.
- [ICScannerFunctionalUnitPositiveTransparency](icscannerfunctionalunitpositivetransparency.md): An object that represents the transparency unit for scanning positives on the scanner.
