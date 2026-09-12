> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerfunctionalunitstate](https://developer.apple.com/documentation/imagecapturecore/icscannerfunctionalunitstate)

# ICScannerFunctionalUnitState (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

Flags to indicate the state of the scanner functional unit.

## Declaration

```swift
enum ICScannerFunctionalUnitState
```

## Topics

### Constants

- [ICScannerFunctionalUnitState.ready](icscannerfunctionalunitstate/ready.md): A flag indicating that the functional unit is ready for operation.
- [ICScannerFunctionalUnitState.overviewScanInProgress](icscannerfunctionalunitstate/overviewscaninprogress.md): A flag indicating that the functional unit is performing an overview scan.
- [ICScannerFunctionalUnitState.scanInProgress](icscannerfunctionalunitstate/scaninprogress.md): A flag indicating that the functional unit is performing a scan.

### Initializers

- [init(rawValue:)](icscannerfunctionalunitstate/init%28rawvalue_%29.md)

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
- [ICScannerFunctionalUnitType](icscannerfunctionalunittype.md): The types of scanner functional units.

# ICScannerFunctionalUnitState (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

Flags to indicate the state of the scanner functional unit.

## Declaration

```objectivec
enum ICScannerFunctionalUnitState : NSUInteger;
```

## Topics

### Constants

- [ICScannerFunctionalUnitStateReady](icscannerfunctionalunitstate/ready.md): A flag indicating that the functional unit is ready for operation.
- [ICScannerFunctionalUnitStateOverviewScanInProgress](icscannerfunctionalunitstate/overviewscaninprogress.md): A flag indicating that the functional unit is performing an overview scan.
- [ICScannerFunctionalUnitStateScanInProgress](icscannerfunctionalunitstate/scaninprogress.md): A flag indicating that the functional unit is performing a scan.

## See Also

### Selecting a Functional Unit

- [availableFunctionalUnitTypes](icscannerdevice/availablefunctionalunittypes.md): An array of functional unit types available on this scanner.
- [selectedFunctionalUnit](icscannerdevice/selectedfunctionalunit.md): The currently selected functional unit on the scanner.
- [requestSelectFunctionalUnit:](icscannerdevice/requestselect%28__%29.md): Requests to select a functional unit on the scanner.
- [ICScannerFunctionalUnitType](icscannerfunctionalunittype.md): The types of scanner functional units.
