> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/performsdpquery(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/performsdpquery(_:))

# performSDPQuery(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Performs an SDP query on the target device.

## Declaration

```swift
func performSDPQuery(_ target: Any!) -> IOReturn
```

## Parameters

- `target`: The target to message when the SDP query is complete

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the SDP query was successfully started.

<a id="Discussion"></a>

## Discussion

As a result of this call, a baseband connection will be built to the device (if not already connected). Then, an L2CAP channel will be opened to the SDP server on the device. At that point, a Service Search Attribute request will be issued with a UUID of 0x0100 (L2CAP) and an attribute range of 0x0000 - 0xffff specified. This will cause the SDP server to return all attributes of all L2CAP-derived services on the device. The results essentially encompass all services on the device. This function is always asynchronous. If a target is specified, when the SDP query is complete (or an error is encountered), the method -sdpQueryComplete:status: will be called on the given target. If no target is specified, the request is still asynchronous, but no callback will be made. That can be useful if the client has registered for SDP service changed notifications.

# performSDPQuery: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Performs an SDP query on the target device.

## Declaration

```objectivec
- (IOReturn) performSDPQuery:(id) target;
```

## Parameters

- `target`: The target to message when the SDP query is complete

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the SDP query was successfully started.

<a id="Discussion"></a>

## Discussion

As a result of this call, a baseband connection will be built to the device (if not already connected). Then, an L2CAP channel will be opened to the SDP server on the device. At that point, a Service Search Attribute request will be issued with a UUID of 0x0100 (L2CAP) and an attribute range of 0x0000 - 0xffff specified. This will cause the SDP server to return all attributes of all L2CAP-derived services on the device. The results essentially encompass all services on the device. This function is always asynchronous. If a target is specified, when the SDP query is complete (or an error is encountered), the method -sdpQueryComplete:status: will be called on the given target. If no target is specified, the request is still asynchronous, but no callback will be made. That can be useful if the client has registered for SDP service changed notifications.
