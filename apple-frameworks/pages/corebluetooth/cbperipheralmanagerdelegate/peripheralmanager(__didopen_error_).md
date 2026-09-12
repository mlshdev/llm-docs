> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanager(_:didopen:error:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanager(_:didopen:error:))

# peripheralManager(\_:didOpen:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the peripheral manager opened an L2CAP channel.

## Declaration

```swift
optional func peripheralManager(_ peripheral: CBPeripheralManager, didOpen channel: CBL2CAPChannel?, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral manager that opened the channel.
- `channel`: The channel opened by the manager.
- `error`: The error that occurred, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

The peripheral manager calls this method after you call [publishL2CAPChannel(withEncryption:)](../cbperipheralmanager/publishl2capchannel%28withencryption_%29.md).

## See Also

### Using L2CAP Channels

- [peripheralManager(\_:didPublishL2CAPChannel:error:)](peripheralmanager%28__didpublishl2capchannel_error_%29.md): Tells the delegate that the peripheral manager created a listener for incoming L2CAP channel connections.
- [peripheralManager(\_:didUnpublishL2CAPChannel:error:)](peripheralmanager%28__didunpublishl2capchannel_error_%29.md): Tells the delegate that the peripheral manager removed a published service from the local system.

# peripheralManager:didOpenL2CAPChannel:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the peripheral manager opened an L2CAP channel.

## Declaration

```objectivec
- (void) peripheralManager:(CBPeripheralManager *) peripheral didOpenL2CAPChannel:(CBL2CAPChannel *) channel error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral manager that opened the channel.
- `channel`: The channel opened by the manager.
- `error`: The error that occurred, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

The peripheral manager calls this method after you call [publishL2CAPChannelWithEncryption:](../cbperipheralmanager/publishl2capchannel%28withencryption_%29.md).

## See Also

### Using L2CAP Channels

- [peripheralManager:didPublishL2CAPChannel:error:](peripheralmanager%28__didpublishl2capchannel_error_%29.md): Tells the delegate that the peripheral manager created a listener for incoming L2CAP channel connections.
- [peripheralManager:didUnpublishL2CAPChannel:error:](peripheralmanager%28__didunpublishl2capchannel_error_%29.md): Tells the delegate that the peripheral manager removed a published service from the local system.
