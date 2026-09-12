> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerfunctionalunittype](https://developer.apple.com/documentation/imagecapturecore/icscannerfunctionalunittype)

# ICScannerFunctionalUnitType (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

The types of scanner functional units.

## Declaration

```swift
enum ICScannerFunctionalUnitType
```

## Topics

### Constants

- [ICScannerFunctionalUnitType.documentFeeder](icscannerfunctionalunittype/documentfeeder.md): A document feeder functional unit.
- [ICScannerFunctionalUnitType.flatbed](icscannerfunctionalunittype/flatbed.md): A flatbed functional unit.
- [ICScannerFunctionalUnitType.negativeTransparency](icscannerfunctionalunittype/negativetransparency.md): A transparency functional unit for scanning negatives.
- [ICScannerFunctionalUnitType.positiveTransparency](icscannerfunctionalunittype/positivetransparency.md): A transparency functional unit for scanning positives.

### Initializers

- [init(rawValue:)](icscannerfunctionalunittype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting a Functional Unit

- [availableFunctionalUnitTypes](icscannerdevice/availablefunctionalunittypes.md): An array of functional unit types available on this scanner.
- [selectedFunctionalUnit](icscannerdevice/selectedfunctionalunit.md): The currently selected functional unit on the scanner.
- [requestSelect(\_:)](icscannerdevice/requestselect%28__%29.md): Requests to select a functional unit on the scanner.
- [ICScannerFunctionalUnitState](icscannerfunctionalunitstate.md): Flags to indicate the state of the scanner functional unit.

# ICScannerFunctionalUnitType (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

The types of scanner functional units.

## Declaration

```objectivec
enum ICScannerFunctionalUnitType : NSUInteger;
```

## Topics

### Constants

- [ICScannerFunctionalUnitTypeDocumentFeeder](icscannerfunctionalunittype/documentfeeder.md): A document feeder functional unit.
- [ICScannerFunctionalUnitTypeFlatbed](icscannerfunctionalunittype/flatbed.md): A flatbed functional unit.
- [ICScannerFunctionalUnitTypeNegativeTransparency](icscannerfunctionalunittype/negativetransparency.md): A transparency functional unit for scanning negatives.
- [ICScannerFunctionalUnitTypePositiveTransparency](icscannerfunctionalunittype/positivetransparency.md): A transparency functional unit for scanning positives.

## See Also

### Selecting a Functional Unit

- [availableFunctionalUnitTypes](icscannerdevice/availablefunctionalunittypes.md): An array of functional unit types available on this scanner.
- [selectedFunctionalUnit](icscannerdevice/selectedfunctionalunit.md): The currently selected functional unit on the scanner.
- [requestSelectFunctionalUnit:](icscannerdevice/requestselect%28__%29.md): Requests to select a functional unit on the scanner.
- [ICScannerFunctionalUnitState](icscannerfunctionalunitstate.md): Flags to indicate the state of the scanner functional unit.
