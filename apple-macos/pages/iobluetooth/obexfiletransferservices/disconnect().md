> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexfiletransferservices/disconnect()](https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/disconnect())

# disconnect() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Disconnect from the remote device

## Declaration

```swift
func disconnect() -> OBEXError
```

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionNotConnectedError, or kOBEXSessionBusyError initially. Further results returned through the fileTransferServicesDisconnectionComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

The user can manually disconnect the OBEXSession from the remote device if they want to. OBEXFileTransferServices will disconnect the OBEXSession at release only if it was responsible for opening the connection via a connect method.

# disconnect (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Disconnect from the remote device

## Declaration

```objectivec
- (OBEXError) disconnect;
```

<a id="return-value"></a>

## Return Value

kOBEXSuccess, kOBEXSessionNotConnectedError, or kOBEXSessionBusyError initially. Further results returned through the fileTransferServicesDisconnectionComplete: delegate method if initially successful.

<a id="Discussion"></a>

## Discussion

The user can manually disconnect the OBEXSession from the remote device if they want to. OBEXFileTransferServices will disconnect the OBEXSession at release only if it was responsible for opening the connection via a connect method.
