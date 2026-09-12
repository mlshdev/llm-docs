> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/remotenamerequest(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/remotenamerequest(_:))

# remoteNameRequest(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Issues a remote name request to the target device.

## Declaration

```swift
func remoteNameRequest(_ target: Any!) -> IOReturn
```

## Parameters

- `target`: The target to message when the remote name request is complete

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the remote name request was successfully issued (and if synchronous, if the request completed successfully).

<a id="Discussion"></a>

## Discussion

If a target is specified, the request is asynchronous and on completion of the request, the method

- (void)remoteNameRequestComplete:(IOBluetoothDevice \*)device status:(IOReturn)status;

will be called on the specified target. If no target is specified, the request is made synchronously and won’t return until the request is complete. This call with operate with the default page timeout value. If a different page timeout value is desired, the method -remoteNameRequest:withPageTimeout: should be used instead.

# remoteNameRequest: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Issues a remote name request to the target device.

## Declaration

```objectivec
- (IOReturn) remoteNameRequest:(id) target;
```

## Parameters

- `target`: The target to message when the remote name request is complete

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the remote name request was successfully issued (and if synchronous, if the request completed successfully).

<a id="Discussion"></a>

## Discussion

If a target is specified, the request is asynchronous and on completion of the request, the method

- (void)remoteNameRequestComplete:(IOBluetoothDevice \*)device status:(IOReturn)status;

will be called on the specified target. If no target is specified, the request is made synchronously and won’t return until the request is complete. This call with operate with the default page timeout value. If a different page timeout value is desired, the method -remoteNameRequest:withPageTimeout: should be used instead.
