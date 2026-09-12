> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanager(_:didpublishl2capchannel:error:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanager(_:didpublishl2capchannel:error:))

# peripheralManager(\_:didPublishL2CAPChannel:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the peripheral manager created a listener for incoming L2CAP channel connections.

## Declaration

```swift
optional func peripheralManager(_ peripheral: CBPeripheralManager, didPublishL2CAPChannel PSM: CBL2CAPPSM, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral manager that published the channel.
- `PSM`: The Protocol/Service Multiplexer (PSM) of the published channel.
- `error`: The error that prevented publishing, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

The peripheral manager calls this method after you call [publishL2CAPChannel(withEncryption:)](../cbperipheralmanager/publishl2capchannel%28withencryption_%29.md). The `PSM` parameter contains the PSM assigned for the published channel.

## See Also

### Using L2CAP Channels

- [peripheralManager(\_:didUnpublishL2CAPChannel:error:)](peripheralmanager%28__didunpublishl2capchannel_error_%29.md): Tells the delegate that the peripheral manager removed a published service from the local system.
- [peripheralManager(\_:didOpen:error:)](peripheralmanager%28__didopen_error_%29.md): Tells the delegate that the peripheral manager opened an L2CAP channel.

# peripheralManager:didPublishL2CAPChannel:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the peripheral manager created a listener for incoming L2CAP channel connections.

## Declaration

```objectivec
- (void) peripheralManager:(CBPeripheralManager *) peripheral didPublishL2CAPChannel:(CBL2CAPPSM) PSM error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral manager that published the channel.
- `PSM`: The Protocol/Service Multiplexer (PSM) of the published channel.
- `error`: The error that prevented publishing, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

The peripheral manager calls this method after you call [publishL2CAPChannelWithEncryption:](../cbperipheralmanager/publishl2capchannel%28withencryption_%29.md). The `PSM` parameter contains the PSM assigned for the published channel.

## See Also

### Using L2CAP Channels

- [peripheralManager:didUnpublishL2CAPChannel:error:](peripheralmanager%28__didunpublishl2capchannel_error_%29.md): Tells the delegate that the peripheral manager removed a published service from the local system.
- [peripheralManager:didOpenL2CAPChannel:error:](peripheralmanager%28__didopen_error_%29.md): Tells the delegate that the peripheral manager opened an L2CAP channel.
