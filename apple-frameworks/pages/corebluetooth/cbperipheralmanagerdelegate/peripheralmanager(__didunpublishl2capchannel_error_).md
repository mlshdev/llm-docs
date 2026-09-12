> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanager(_:didunpublishl2capchannel:error:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanager(_:didunpublishl2capchannel:error:))

# peripheralManager(\_:didUnpublishL2CAPChannel:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the peripheral manager removed a published service from the local system.

## Declaration

```swift
optional func peripheralManager(_ peripheral: CBPeripheralManager, didUnpublishL2CAPChannel PSM: CBL2CAPPSM, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral manager that stopped publishing.
- `PSM`: The Protocol/Service Multiplexer (PSM) of the channel that was unpublished.
- `error`: The error that occurred, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

The peripheral manager calls this method after you call [unpublishL2CAPChannel(\_:)](../cbperipheralmanager/unpublishl2capchannel%28__%29.md).

## See Also

### Using L2CAP Channels

- [peripheralManager(\_:didPublishL2CAPChannel:error:)](peripheralmanager%28__didpublishl2capchannel_error_%29.md): Tells the delegate that the peripheral manager created a listener for incoming L2CAP channel connections.
- [peripheralManager(\_:didOpen:error:)](peripheralmanager%28__didopen_error_%29.md): Tells the delegate that the peripheral manager opened an L2CAP channel.

# peripheralManager:didUnpublishL2CAPChannel:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the peripheral manager removed a published service from the local system.

## Declaration

```objectivec
- (void) peripheralManager:(CBPeripheralManager *) peripheral didUnpublishL2CAPChannel:(CBL2CAPPSM) PSM error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral manager that stopped publishing.
- `PSM`: The Protocol/Service Multiplexer (PSM) of the channel that was unpublished.
- `error`: The error that occurred, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

The peripheral manager calls this method after you call [unpublishL2CAPChannel:](../cbperipheralmanager/unpublishl2capchannel%28__%29.md).

## See Also

### Using L2CAP Channels

- [peripheralManager:didPublishL2CAPChannel:error:](peripheralmanager%28__didpublishl2capchannel_error_%29.md): Tells the delegate that the peripheral manager created a listener for incoming L2CAP channel connections.
- [peripheralManager:didOpenL2CAPChannel:error:](peripheralmanager%28__didopen_error_%29.md): Tells the delegate that the peripheral manager opened an L2CAP channel.
