> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevice/selectedfunctionalunit](https://developer.apple.com/documentation/imagecapturecore/icscannerdevice/selectedfunctionalunit)

# selectedFunctionalUnit (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The currently selected functional unit on the scanner.

## Declaration

```swift
var selectedFunctionalUnit: ICScannerFunctionalUnit { get }
```

## See Also

### Selecting a Functional Unit

- [availableFunctionalUnitTypes](availablefunctionalunittypes.md): An array of functional unit types available on this scanner.
- [requestSelect(\_:)](requestselect%28__%29.md): Requests to select a functional unit on the scanner.
- [ICScannerFunctionalUnitType](../icscannerfunctionalunittype.md): The types of scanner functional units.
- [ICScannerFunctionalUnitState](../icscannerfunctionalunitstate.md): Flags to indicate the state of the scanner functional unit.

# selectedFunctionalUnit (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The currently selected functional unit on the scanner.

## Declaration

```objectivec
@property (readonly) ICScannerFunctionalUnit * selectedFunctionalUnit;
```

## See Also

### Selecting a Functional Unit

- [availableFunctionalUnitTypes](availablefunctionalunittypes.md): An array of functional unit types available on this scanner.
- [requestSelectFunctionalUnit:](requestselect%28__%29.md): Requests to select a functional unit on the scanner.
- [ICScannerFunctionalUnitType](../icscannerfunctionalunittype.md): The types of scanner functional units.
- [ICScannerFunctionalUnitState](../icscannerfunctionalunitstate.md): Flags to indicate the state of the scanner functional unit.
