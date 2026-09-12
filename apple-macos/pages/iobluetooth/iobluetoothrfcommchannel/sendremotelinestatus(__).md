> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothrfcommchannel/sendremotelinestatus(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/sendremotelinestatus(_:))

# sendRemoteLineStatus(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sends an error to the remote side.

## Declaration

```swift
func sendRemoteLineStatus(_ lineStatus: BluetoothRFCOMMLineStatus) -> IOReturn
```

## Parameters

- `lineStatus`: The error type. The error code can be NoError, OverrunError, ParityError or FramingError.

<a id="return-value"></a>

## Return Value

An error code value. 0 if successful.

# sendRemoteLineStatus: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sends an error to the remote side.

## Declaration

```objectivec
- (IOReturn) sendRemoteLineStatus:(BluetoothRFCOMMLineStatus) lineStatus;
```

## Parameters

- `lineStatus`: The error type. The error code can be NoError, OverrunError, ParityError or FramingError.

<a id="return-value"></a>

## Return Value

An error code value. 0 if successful.
