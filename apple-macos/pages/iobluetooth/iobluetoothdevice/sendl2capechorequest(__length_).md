> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/sendl2capechorequest(_:length:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/sendl2capechorequest(_:length:))

# sendL2CAPEchoRequest(\_:length:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Send an echo request over the L2CAP connection to a remote device.

## Declaration

```swift
func sendL2CAPEchoRequest(_ data: UnsafeMutableRawPointer!, length: UInt16) -> IOReturn
```

## Parameters

- `data`: (Void \*) - Pointer to buffer to send.
- `length`: (UInt16) - Length of the buffer to send

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the echo request was able to be sent.

<a id="Discussion"></a>

## Discussion

The current implementation returns when the request has been sent, but does not indicate when a response is received. Also, the baseband connection must be up for the echo request to be sent. In the future, this method will also open the connection if necessary. The API will be updated to allow the client to be informed when the echo response has been received (both synchronously and asynchronously).

# sendL2CAPEchoRequest:length: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Send an echo request over the L2CAP connection to a remote device.

## Declaration

```objectivec
- (IOReturn) sendL2CAPEchoRequest:(void *) data length:(UInt16) length;
```

## Parameters

- `data`: (Void \*) - Pointer to buffer to send.
- `length`: (UInt16) - Length of the buffer to send

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the echo request was able to be sent.

<a id="Discussion"></a>

## Discussion

The current implementation returns when the request has been sent, but does not indicate when a response is received. Also, the baseband connection must be up for the echo request to be sent. In the future, this method will also open the connection if necessary. The API will be updated to allow the client to be informed when the echo response has been received (both synchronously and asynchronously).
