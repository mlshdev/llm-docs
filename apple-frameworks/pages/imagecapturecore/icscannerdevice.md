> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevice](https://developer.apple.com/documentation/imagecapturecore/icscannerdevice)

# ICScannerDevice (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** macOS 10.4+

An object that represents a scanner.

## Declaration

```swift
class ICScannerDevice
```

<a id="overview"></a>

## Overview

An instance of ICScannerDevice class is intended to be used by the ICScannerDeviceView object. The ICScannerDeviceView class encapsulates the complexities of setting scan parameters, performing scans and saving the result. The developer should consider using ICScannerDeviceView instead of building their own views using the ICScannerDevice object.

## Topics

### Selecting a Functional Unit

- [availableFunctionalUnitTypes](icscannerdevice/availablefunctionalunittypes.md): An array of functional unit types available on this scanner.
- [selectedFunctionalUnit](icscannerdevice/selectedfunctionalunit.md): The currently selected functional unit on the scanner.
- [requestSelect(\_:)](icscannerdevice/requestselect%28__%29.md): Requests to select a functional unit on the scanner.
- [ICScannerFunctionalUnitType](icscannerfunctionalunittype.md): The types of scanner functional units.
- [ICScannerFunctionalUnitState](icscannerfunctionalunitstate.md): Flags to indicate the state of the scanner functional unit.

### Performing a Scan

- [requestOpenSession(withCredentials:password:)](icscannerdevice/requestopensession%28withcredentials_password_%29.md): Opens a session on the protected device with the authorized username and passcode.
- [requestOverviewScan()](icscannerdevice/requestoverviewscan%28%29.md): Starts an overview scan on the selected functional unit.
- [requestScan()](icscannerdevice/requestscan%28%29.md): Starts a scan on the selected functional unit.
- [cancelScan()](icscannerdevice/cancelscan%28%29.md): Cancels the current scan.
- [documentName](icscannerdevice/documentname.md): The document’s name.
- [documentUTI](icscannerdevice/documentuti.md): The document’s uniform type identifier.
- [downloadsDirectory](icscannerdevice/downloadsdirectory.md): The downloads directory.
- [transferMode](icscannerdevice/transfermode.md): The transfer mode for the scanned document.
- [maxMemoryBandSize](icscannerdevice/maxmemorybandsize.md): The total maximum band size requested when performing a memory-based transfer.

### Logging into a Protected Device

- [defaultUsername](icscannerdevice/defaultusername.md): A default username on protected scanners.

## Relationships

### Inherits From

- [ICDevice](icdevice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Scanners

- [ICScannerDeviceDelegate](icscannerdevicedelegate.md): Methods for determining availability, selecting a functional unit, and performing scans on connected scanners.
- [Scanner Configuration](scanner-configuration.md): Examine a scanner’s functional units and features.

# ICScannerDevice (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** macOS 10.4+

An object that represents a scanner.

## Declaration

```objectivec
@interface ICScannerDevice : ICDevice
```

<a id="overview"></a>

## Overview

An instance of ICScannerDevice class is intended to be used by the ICScannerDeviceView object. The ICScannerDeviceView class encapsulates the complexities of setting scan parameters, performing scans and saving the result. The developer should consider using ICScannerDeviceView instead of building their own views using the ICScannerDevice object.

## Topics

### Selecting a Functional Unit

- [availableFunctionalUnitTypes](icscannerdevice/availablefunctionalunittypes.md): An array of functional unit types available on this scanner.
- [selectedFunctionalUnit](icscannerdevice/selectedfunctionalunit.md): The currently selected functional unit on the scanner.
- [requestSelectFunctionalUnit:](icscannerdevice/requestselect%28__%29.md): Requests to select a functional unit on the scanner.
- [ICScannerFunctionalUnitType](icscannerfunctionalunittype.md): The types of scanner functional units.
- [ICScannerFunctionalUnitState](icscannerfunctionalunitstate.md): Flags to indicate the state of the scanner functional unit.

### Performing a Scan

- [requestOpenSessionWithCredentials:password:](icscannerdevice/requestopensession%28withcredentials_password_%29.md): Opens a session on the protected device with the authorized username and passcode.
- [requestOverviewScan](icscannerdevice/requestoverviewscan%28%29.md): Starts an overview scan on the selected functional unit.
- [requestScan](icscannerdevice/requestscan%28%29.md): Starts a scan on the selected functional unit.
- [cancelScan](icscannerdevice/cancelscan%28%29.md): Cancels the current scan.
- [documentName](icscannerdevice/documentname.md): The document’s name.
- [documentUTI](icscannerdevice/documentuti.md): The document’s uniform type identifier.
- [downloadsDirectory](icscannerdevice/downloadsdirectory.md): The downloads directory.
- [transferMode](icscannerdevice/transfermode.md): The transfer mode for the scanned document.
- [maxMemoryBandSize](icscannerdevice/maxmemorybandsize.md): The total maximum band size requested when performing a memory-based transfer.

### Logging into a Protected Device

- [defaultUsername](icscannerdevice/defaultusername.md): A default username on protected scanners.

## Relationships

### Inherits From

- [ICDevice](icdevice.md)

## See Also

### Scanners

- [ICScannerDeviceDelegate](icscannerdevicedelegate.md): Methods for determining availability, selecting a functional unit, and performing scans on connected scanners.
- [Scanner Configuration](scanner-configuration.md): Examine a scanner’s functional units and features.
