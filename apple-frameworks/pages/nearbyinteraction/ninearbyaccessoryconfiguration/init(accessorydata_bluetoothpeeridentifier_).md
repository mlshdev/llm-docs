> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyaccessoryconfiguration/init(accessorydata:bluetoothpeeridentifier:)](https://developer.apple.com/documentation/nearbyinteraction/ninearbyaccessoryconfiguration/init(accessorydata:bluetoothpeeridentifier:))

# init(accessoryData:bluetoothPeerIdentifier:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Creates a configuration for an accessory with the given Bluetooth peer identifier.

## Declaration

```swift
init(accessoryData: Data, bluetoothPeerIdentifier identifier: UUID) throws
```

## Parameters

- `accessoryData`: The accessory’s configuration data formatted to the [Ultra Wideband (UWB) third-party device specification](https://developer.apple.com/nearby-interaction).
- `identifier`: The accessory’s Bluetooth peer identifier. For more information, see [CBPeer](../../corebluetooth/cbpeer.md) [identifier](../../corebluetooth/cbpeer/identifier.md).

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

Use this initializer when your app interacts with a Bluetooth accessory that’s paired to the device to enable interaction while your app is in the background.

## See Also

### Creating a configuration for UWB accessories

- [init(data:)](init%28data_%29.md): Creates a configuration for interaction between iPhone and third-party accessories.

# initWithAccessoryData:bluetoothPeerIdentifier:error: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Creates a configuration for an accessory with the given Bluetooth peer identifier.

## Declaration

```objectivec
- (instancetype) initWithAccessoryData:(NSData *) accessoryData bluetoothPeerIdentifier:(NSUUID *) identifier error:(NSError **) error;
```

## Parameters

- `accessoryData`: The accessory’s configuration data formatted to the [Ultra Wideband (UWB) third-party device specification](https://developer.apple.com/nearby-interaction).
- `identifier`: The accessory’s Bluetooth peer identifier. For more information, see [CBPeer](../../corebluetooth/cbpeer.md) [identifier](../../corebluetooth/cbpeer/identifier.md).
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

Use this initializer when your app interacts with a Bluetooth accessory that’s paired to the device to enable interaction while your app is in the background.

## See Also

### Creating a configuration for UWB accessories

- [initWithData:error:](init%28data_%29.md): Creates a configuration for interaction between iPhone and third-party accessories.
