> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevicedelegate](https://developer.apple.com/documentation/imagecapturecore/icscannerdevicedelegate)

# ICScannerDeviceDelegate (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Protocol  
**Availability:** macOS 10.4+

Methods for determining availability, selecting a functional unit, and performing scans on connected scanners.

## Declaration

```swift
protocol ICScannerDeviceDelegate : ICDeviceDelegate
```

## Topics

### Determining Scanner Availability

- [scannerDeviceDidBecomeAvailable(\_:)](icscannerdevicedelegate/scannerdevicedidbecomeavailable%28__%29.md): Tells the client when another client closes the current open session on the scanner.

### Selecting a Functional Unit

- [scannerDevice(\_:didSelect:error:)](icscannerdevicedelegate/scannerdevice%28__didselect_error_%29.md): Tells the client when a functional unit is selected on the scanner.

### Performing a Scan

- [scannerDevice(\_:didCompleteOverviewScanWithError:)](icscannerdevicedelegate/scannerdevice%28__didcompleteoverviewscanwitherror_%29.md): Tells the client when the scanner completes an overview scan.
- [scannerDevice(\_:didCompleteScanWithError:)](icscannerdevicedelegate/scannerdevice%28__didcompletescanwitherror_%29.md): Tells the client when the scanner completes a scan.
- [scannerDevice(\_:didScanTo:)](icscannerdevicedelegate/scannerdevice%28__didscanto_%29-6tht3.md): Tells the client when the scanner receives the requested scan progress notification and a band of data is sent for each notification received.
- [scannerDevice(\_:didScanTo:)](icscannerdevicedelegate/scannerdevice%28__didscanto_%29-10whl.md): Tells the client when the scanner receives the requested scan.

## Relationships

### Inherits From

- [ICDeviceDelegate](icdevicedelegate.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Scanners

- [ICScannerDevice](icscannerdevice.md): An object that represents a scanner.
- [Scanner Configuration](scanner-configuration.md): Examine a scanner’s functional units and features.

# ICScannerDeviceDelegate (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Protocol  
**Availability:** macOS 10.4+

Methods for determining availability, selecting a functional unit, and performing scans on connected scanners.

## Declaration

```objectivec
@protocol ICScannerDeviceDelegate <ICDeviceDelegate>
```

## Topics

### Determining Scanner Availability

- [scannerDeviceDidBecomeAvailable:](icscannerdevicedelegate/scannerdevicedidbecomeavailable%28__%29.md): Tells the client when another client closes the current open session on the scanner.

### Selecting a Functional Unit

- [scannerDevice:didSelectFunctionalUnit:error:](icscannerdevicedelegate/scannerdevice%28__didselect_error_%29.md): Tells the client when a functional unit is selected on the scanner.

### Performing a Scan

- [scannerDevice:didCompleteOverviewScanWithError:](icscannerdevicedelegate/scannerdevice%28__didcompleteoverviewscanwitherror_%29.md): Tells the client when the scanner completes an overview scan.
- [scannerDevice:didCompleteScanWithError:](icscannerdevicedelegate/scannerdevice%28__didcompletescanwitherror_%29.md): Tells the client when the scanner completes a scan.
- [scannerDevice:didScanToBandData:](icscannerdevicedelegate/scannerdevice%28__didscanto_%29-6tht3.md): Tells the client when the scanner receives the requested scan progress notification and a band of data is sent for each notification received.
- [scannerDevice:didScanToURL:](icscannerdevicedelegate/scannerdevice%28__didscanto_%29-10whl.md): Tells the client when the scanner receives the requested scan.

### Deprecated

- [scannerDevice:didScanToURL:data:](icscannerdevicedelegate/scannerdevice_didscantourl_data_.md): Deprecated. Tells the client when the scanner device receives the requested scan.

## Relationships

### Inherits From

- [ICDeviceDelegate](icdevicedelegate.md)

## See Also

### Scanners

- [ICScannerDevice](icscannerdevice.md): An object that represents a scanner.
- [Scanner Configuration](scanner-configuration.md): Examine a scanner’s functional units and features.
