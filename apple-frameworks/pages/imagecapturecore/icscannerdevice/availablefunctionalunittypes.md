> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevice/availablefunctionalunittypes](https://developer.apple.com/documentation/imagecapturecore/icscannerdevice/availablefunctionalunittypes)

# availableFunctionalUnitTypes (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

An array of functional unit types available on this scanner.

## Declaration

```swift
var availableFunctionalUnitTypes: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

This array contains [NSNumber](../../foundation/nsnumber.md) objects whose values are of type [ICScannerFunctionalUnitType](../icscannerfunctionalunittype.md).

## See Also

### Selecting a Functional Unit

- [selectedFunctionalUnit](selectedfunctionalunit.md): The currently selected functional unit on the scanner.
- [requestSelect(\_:)](requestselect%28__%29.md): Requests to select a functional unit on the scanner.
- [ICScannerFunctionalUnitType](../icscannerfunctionalunittype.md): The types of scanner functional units.
- [ICScannerFunctionalUnitState](../icscannerfunctionalunitstate.md): Flags to indicate the state of the scanner functional unit.

# availableFunctionalUnitTypes (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

An array of functional unit types available on this scanner.

## Declaration

```objectivec
@property (readonly) NSArray<NSNumber *> * availableFunctionalUnitTypes;
```

<a id="Discussion"></a>

## Discussion

This array contains [NSNumber](../../foundation/nsnumber.md) objects whose values are of type [ICScannerFunctionalUnitType](../icscannerfunctionalunittype.md).

## See Also

### Selecting a Functional Unit

- [selectedFunctionalUnit](selectedfunctionalunit.md): The currently selected functional unit on the scanner.
- [requestSelectFunctionalUnit:](requestselect%28__%29.md): Requests to select a functional unit on the scanner.
- [ICScannerFunctionalUnitType](../icscannerfunctionalunittype.md): The types of scanner functional units.
- [ICScannerFunctionalUnitState](../icscannerfunctionalunitstate.md): Flags to indicate the state of the scanner functional unit.
