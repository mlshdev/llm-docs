> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanager(_:didreceiveread:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanager(_:didreceiveread:))

# peripheralManager(\_:didReceiveRead:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a local peripheral received an Attribute Protocol (ATT) read request for a characteristic with a dynamic value.

## Declaration

```swift
optional func peripheralManager(_ peripheral: CBPeripheralManager, didReceiveRead request: CBATTRequest)
```

## Parameters

- `peripheral`: The peripheral manager that received the request.
- `request`: A [CBATTRequest](../cbattrequest.md) object that represents a request to read a characteristic’s value.

<a id="Discussion"></a>

## Discussion

When you receive this callback, call the [respond(to:withResult:)](../cbperipheralmanager/respond%28to_withresult_%29.md) method of the [CBPeripheralManager](../cbperipheralmanager.md) class exactly once to respond to the read request.

## See Also

### Receiving Read and Write Requests

- [peripheralManager(\_:didReceiveWrite:)](peripheralmanager%28__didreceivewrite_%29.md): Tells the delegate that a local peripheral device received an Attribute Protocol (ATT) write request for a characteristic with a dynamic value.

# peripheralManager:didReceiveReadRequest: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that a local peripheral received an Attribute Protocol (ATT) read request for a characteristic with a dynamic value.

## Declaration

```objectivec
- (void) peripheralManager:(CBPeripheralManager *) peripheral didReceiveReadRequest:(CBATTRequest *) request;
```

## Parameters

- `peripheral`: The peripheral manager that received the request.
- `request`: A [CBATTRequest](../cbattrequest.md) object that represents a request to read a characteristic’s value.

<a id="Discussion"></a>

## Discussion

When you receive this callback, call the [respondToRequest:withResult:](../cbperipheralmanager/respond%28to_withresult_%29.md) method of the [CBPeripheralManager](../cbperipheralmanager.md) class exactly once to respond to the read request.

## See Also

### Receiving Read and Write Requests

- [peripheralManager:didReceiveWriteRequests:](peripheralmanager%28__didreceivewrite_%29.md): Tells the delegate that a local peripheral device received an Attribute Protocol (ATT) write request for a characteristic with a dynamic value.
