> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanager/publishl2capchannel(withencryption:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanager/publishl2capchannel(withencryption:))

# publishL2CAPChannel(withEncryption:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a listener for incoming L2CAP channel connections.

## Declaration

```swift
func publishL2CAPChannel(withEncryption encryptionRequired: Bool)
```

## Parameters

- `encryptionRequired`: [true](https://developer.apple.com/documentation/swift/true) if the service requires link encryption before a stream can be established. [false](https://developer.apple.com/documentation/swift/false) if the service supports use over an unsecured link.

<a id="Discussion"></a>

## Discussion

The system determines an unused Protocol and Service Multiplexer (PSM) at the time of publishing, and provides it to your app with [peripheralManager(\_:didPublishL2CAPChannel:error:)](../cbperipheralmanagerdelegate/peripheralmanager%28__didpublishl2capchannel_error_%29.md). L2CAP channels aren’t discoverable by themselves, so it’s the app’s responsibility to handle PSM discovery on the client.

## See Also

### Using L2CAP Channels

- [unpublishL2CAPChannel(\_:)](unpublishl2capchannel%28__%29.md): Removes a published service from the local system.

# publishL2CAPChannelWithEncryption: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a listener for incoming L2CAP channel connections.

## Declaration

```objectivec
- (void) publishL2CAPChannelWithEncryption:(BOOL) encryptionRequired;
```

## Parameters

- `encryptionRequired`: [true](https://developer.apple.com/documentation/swift/true) if the service requires link encryption before a stream can be established. [false](https://developer.apple.com/documentation/swift/false) if the service supports use over an unsecured link.

<a id="Discussion"></a>

## Discussion

The system determines an unused Protocol and Service Multiplexer (PSM) at the time of publishing, and provides it to your app with [peripheralManager:didPublishL2CAPChannel:error:](../cbperipheralmanagerdelegate/peripheralmanager%28__didpublishl2capchannel_error_%29.md). L2CAP channels aren’t discoverable by themselves, so it’s the app’s responsibility to handle PSM discovery on the client.

## See Also

### Using L2CAP Channels

- [unpublishL2CAPChannel:](unpublishl2capchannel%28__%29.md): Removes a published service from the local system.
