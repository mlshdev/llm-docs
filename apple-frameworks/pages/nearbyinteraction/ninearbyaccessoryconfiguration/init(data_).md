> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyaccessoryconfiguration/init(data:)](https://developer.apple.com/documentation/nearbyinteraction/ninearbyaccessoryconfiguration/init(data:))

# init(data:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

Creates a configuration for interaction between iPhone and third-party accessories.

## Declaration

```swift
init(data: Data) throws
```

## Parameters

- `data`: The accessory’s configuration data formatted to the [Ultra Wideband (UWB) third-party device specification](https://developer.apple.com/nearby-interaction).

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

## See Also

### Creating a configuration for UWB accessories

- [init(accessoryData:bluetoothPeerIdentifier:)](init%28accessorydata_bluetoothpeeridentifier_%29.md): Creates a configuration for an accessory with the given Bluetooth peer identifier.

# initWithData:error: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

Creates a configuration for interaction between iPhone and third-party accessories.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data error:(NSError **) error;
```

## Parameters

- `data`: The accessory’s configuration data formatted to the [Ultra Wideband (UWB) third-party device specification](https://developer.apple.com/nearby-interaction).
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

## See Also

### Creating a configuration for UWB accessories

- [initWithAccessoryData:bluetoothPeerIdentifier:error:](init%28accessorydata_bluetoothpeeridentifier_%29.md): Creates a configuration for an accessory with the given Bluetooth peer identifier.
