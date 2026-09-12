> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/state](https://developer.apple.com/documentation/corebluetooth/cbperipheral/state)

# state (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The connection state of the peripheral.

## Declaration

```swift
var state: CBPeripheralState { get }
```

<a id="Discussion"></a>

## Discussion

This property represents the current connection state of the peripheral. For a list of the possible values, see [CBPeripheralState](../cbperipheralstate.md).

## See Also

### Monitoring a Peripheral’s Connection State

- [CBPeripheralState](../cbperipheralstate.md): Values representing the connection state of a peripheral.
- [canSendWriteWithoutResponse](cansendwritewithoutresponse.md): A Boolean value that indicates whether the remote device can send a write without a response.

# state (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The connection state of the peripheral.

## Declaration

```objectivec
@property (readonly) CBPeripheralState state;
```

<a id="Discussion"></a>

## Discussion

This property represents the current connection state of the peripheral. For a list of the possible values, see [CBPeripheralState](../cbperipheralstate.md).

## See Also

### Monitoring a Peripheral’s Connection State

- [CBPeripheralState](../cbperipheralstate.md): Values representing the connection state of a peripheral.
- [canSendWriteWithoutResponse](cansendwritewithoutresponse.md): A Boolean value that indicates whether the remote device can send a write without a response.
