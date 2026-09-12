> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevice/requestselect(_:)](https://developer.apple.com/documentation/imagecapturecore/icscannerdevice/requestselect(_:))

# requestSelect(\_:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Requests to select a functional unit on the scanner.

## Declaration

```swift
func requestSelect(_ type: ICScannerFunctionalUnitType)
```

<a id="Discussion"></a>

## Discussion

When the request has completed, [scannerDevice(\_:didSelect:error:)](../icscannerdevicedelegate/scannerdevice%28__didselect_error_%29.md) is called on the delegate.

## See Also

### Selecting a Functional Unit

- [availableFunctionalUnitTypes](availablefunctionalunittypes.md): An array of functional unit types available on this scanner.
- [selectedFunctionalUnit](selectedfunctionalunit.md): The currently selected functional unit on the scanner.
- [ICScannerFunctionalUnitType](../icscannerfunctionalunittype.md): The types of scanner functional units.
- [ICScannerFunctionalUnitState](../icscannerfunctionalunitstate.md): Flags to indicate the state of the scanner functional unit.

# requestSelectFunctionalUnit: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Requests to select a functional unit on the scanner.

## Declaration

```objectivec
- (void) requestSelectFunctionalUnit:(ICScannerFunctionalUnitType) type;
```

<a id="Discussion"></a>

## Discussion

When the request has completed, [scannerDevice:didSelectFunctionalUnit:error:](../icscannerdevicedelegate/scannerdevice%28__didselect_error_%29.md) is called on the delegate.

## See Also

### Selecting a Functional Unit

- [availableFunctionalUnitTypes](availablefunctionalunittypes.md): An array of functional unit types available on this scanner.
- [selectedFunctionalUnit](selectedfunctionalunit.md): The currently selected functional unit on the scanner.
- [ICScannerFunctionalUnitType](../icscannerfunctionalunittype.md): The types of scanner functional units.
- [ICScannerFunctionalUnitState](../icscannerfunctionalunitstate.md): Flags to indicate the state of the scanner functional unit.
