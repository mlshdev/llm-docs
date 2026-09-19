> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/connecttoftpservice()

# connectToFTPService() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Connect to a remote device for FTP operations

## Declaration

```swift
func connectToFTPService() -> OBEXError
```

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXSessionAlreadyConnectedError, kOBEXNoResourcesError initially. Further results returned through the fileTransferServicesConnectionComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

If the OBEXSession given to OBEXFileTransferServices on creation is not connected it can be manually connected through this method.

# connectToFTPService (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Connect to a remote device for FTP operations

## Declaration

```objectivec
- (OBEXError) connectToFTPService;
```

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXSessionAlreadyConnectedError, kOBEXNoResourcesError initially. Further results returned through the fileTransferServicesConnectionComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

If the OBEXSession given to OBEXFileTransferServices on creation is not connected it can be manually connected through this method.
