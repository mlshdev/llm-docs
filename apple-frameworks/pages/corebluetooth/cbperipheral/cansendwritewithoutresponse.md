> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/cansendwritewithoutresponse](https://developer.apple.com/documentation/corebluetooth/cbperipheral/cansendwritewithoutresponse)

# canSendWriteWithoutResponse (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that indicates whether the remote device can send a write without a response.

## Declaration

```swift
var canSendWriteWithoutResponse: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this value is [false](https://developer.apple.com/documentation/swift/false), flushing all current writes sets the value to [true](https://developer.apple.com/documentation/swift/true). This also results in a call to the delegate’s [peripheralIsReady(toSendWriteWithoutResponse:)](../cbperipheraldelegate/peripheralisready%28tosendwritewithoutresponse_%29.md).

## See Also

### Monitoring a Peripheral’s Connection State

- [state](state.md): The connection state of the peripheral.
- [CBPeripheralState](../cbperipheralstate.md): Values representing the connection state of a peripheral.

# canSendWriteWithoutResponse (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that indicates whether the remote device can send a write without a response.

## Declaration

```objectivec
@property (readonly) BOOL canSendWriteWithoutResponse;
```

<a id="Discussion"></a>

## Discussion

If this value is [false](https://developer.apple.com/documentation/swift/false), flushing all current writes sets the value to [true](https://developer.apple.com/documentation/swift/true). This also results in a call to the delegate’s [peripheralIsReadyToSendWriteWithoutResponse:](../cbperipheraldelegate/peripheralisready%28tosendwritewithoutresponse_%29.md).

## See Also

### Monitoring a Peripheral’s Connection State

- [state](state.md): The connection state of the peripheral.
- [CBPeripheralState](../cbperipheralstate.md): Values representing the connection state of a peripheral.
