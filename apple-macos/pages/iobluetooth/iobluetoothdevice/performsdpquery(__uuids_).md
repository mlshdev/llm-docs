> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/performsdpquery(_:uuids:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/performsdpquery(_:uuids:))

# performSDPQuery(\_:uuids:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Performs an SDP query on the target device with the specified service UUIDs.

## Declaration

```swift
func performSDPQuery(_ target: Any!, uuids uuidArray: [Any]!) -> IOReturn
```

## Parameters

- `target`: The target to message when the SDP query is complete
- `uuidArray`: An array of IOBluetoothSDPUUID objects for each service the caller is interested in

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the SDP query was successfully started.

<a id="Discussion"></a>

## Discussion

As a result of this call, a baseband connection will be built to the device (if not already connected). Then, an L2CAP channel will be opened to the SDP server on the device. At that point, a Service Search Attribute request will be issued for each service UUID specified in the UUID array.

This function is always asynchronous. If a target is specified, when the SDP query is complete (or an error is encountered), the method -sdpQueryComplete:status: will be called on the given target. If no target is specified, the request is still asynchronous, but no callback will be made. That can be useful if the client has registered for SDP service changed notifications.

# performSDPQuery:uuids: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Performs an SDP query on the target device with the specified service UUIDs.

## Declaration

```objectivec
- (IOReturn) performSDPQuery:(id) target uuids:(NSArray *) uuidArray;
```

## Parameters

- `target`: The target to message when the SDP query is complete
- `uuidArray`: An array of IOBluetoothSDPUUID objects for each service the caller is interested in

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the SDP query was successfully started.

<a id="Discussion"></a>

## Discussion

As a result of this call, a baseband connection will be built to the device (if not already connected). Then, an L2CAP channel will be opened to the SDP server on the device. At that point, a Service Search Attribute request will be issued for each service UUID specified in the UUID array.

This function is always asynchronous. If a target is specified, when the SDP query is complete (or an error is encountered), the method -sdpQueryComplete:status: will be called on the given target. If no target is specified, the request is still asynchronous, but no callback will be made. That can be useful if the client has registered for SDP service changed notifications.
