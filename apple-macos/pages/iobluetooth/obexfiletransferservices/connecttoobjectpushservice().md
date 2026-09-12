> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexfiletransferservices/connecttoobjectpushservice()](https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/connecttoobjectpushservice())

# connectToObjectPushService() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Connect to a remote device for ObjectPush operations. Most of the FTP functionality of this object will be disabled.

## Declaration

```swift
func connectToObjectPushService() -> OBEXError
```

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXSessionAlreadyConnectedError, kOBEXNoResourcesError initially. Further results returned through the fileTransferServicesConnectionComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

If the OBEXSession given to OBEXFileTransferServices on creation is not connected it can be manually connected through this method.

# connectToObjectPushService (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Connect to a remote device for ObjectPush operations. Most of the FTP functionality of this object will be disabled.

## Declaration

```objectivec
- (OBEXError) connectToObjectPushService;
```

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionBusyError, or kOBEXSessionAlreadyConnectedError, kOBEXNoResourcesError initially. Further results returned through the fileTransferServicesConnectionComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

If the OBEXSession given to OBEXFileTransferServices on creation is not connected it can be manually connected through this method.
