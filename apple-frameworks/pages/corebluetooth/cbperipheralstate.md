> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralstate](https://developer.apple.com/documentation/corebluetooth/cbperipheralstate)

# CBPeripheralState (Swift)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Values representing the connection state of a peripheral.

## Declaration

```swift
enum CBPeripheralState
```

## Topics

### Peripheral States

- [CBPeripheralState.disconnected](cbperipheralstate/disconnected.md): The peripheral isn’t connected to the central manager.
- [CBPeripheralState.connecting](cbperipheralstate/connecting.md): The peripheral is in the process of connecting to the central manager.
- [CBPeripheralState.connected](cbperipheralstate/connected.md): The peripheral is connected to the central manager.
- [CBPeripheralState.disconnecting](cbperipheralstate/disconnecting.md): The peripheral is disconnecting from the central manager.

### Initializers

- [init(rawValue:)](cbperipheralstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring a Peripheral’s Connection State

- [state](cbperipheral/state.md): The connection state of the peripheral.
- [canSendWriteWithoutResponse](cbperipheral/cansendwritewithoutresponse.md): A Boolean value that indicates whether the remote device can send a write without a response.

# CBPeripheralState (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Values representing the connection state of a peripheral.

## Declaration

```objectivec
enum CBPeripheralState : NSInteger;
```

## Topics

### Peripheral States

- [CBPeripheralStateDisconnected](cbperipheralstate/disconnected.md): The peripheral isn’t connected to the central manager.
- [CBPeripheralStateConnecting](cbperipheralstate/connecting.md): The peripheral is in the process of connecting to the central manager.
- [CBPeripheralStateConnected](cbperipheralstate/connected.md): The peripheral is connected to the central manager.
- [CBPeripheralStateDisconnecting](cbperipheralstate/disconnecting.md): The peripheral is disconnecting from the central manager.

## See Also

### Monitoring a Peripheral’s Connection State

- [state](cbperipheral/state.md): The connection state of the peripheral.
- [canSendWriteWithoutResponse](cbperipheral/cansendwritewithoutresponse.md): A Boolean value that indicates whether the remote device can send a write without a response.
