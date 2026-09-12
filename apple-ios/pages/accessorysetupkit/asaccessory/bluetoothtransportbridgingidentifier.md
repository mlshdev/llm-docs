> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessory/bluetoothtransportbridgingidentifier](https://developer.apple.com/documentation/accessorysetupkit/asaccessory/bluetoothtransportbridgingidentifier)

# bluetoothTransportBridgingIdentifier (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The accessory’s Bluetooth identifier, if any, for use when bridging classic transport profiles.

## Declaration

```swift
var bluetoothTransportBridgingIdentifier: Data? { get }
```

## See Also

### Accessing identifiers

- [bluetoothIdentifier](bluetoothidentifier.md): The accessory’s unique Bluetooth identifier, if any.
- [ssid](ssid.md): The accessory’s Wi-Fi SSID, if any.

# bluetoothTransportBridgingIdentifier (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The accessory’s Bluetooth identifier, if any, for use when bridging classic transport profiles.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * bluetoothTransportBridgingIdentifier;
```

## See Also

### Accessing identifiers

- [bluetoothIdentifier](bluetoothidentifier.md): The accessory’s unique Bluetooth identifier, if any.
- [SSID](ssid.md): The accessory’s Wi-Fi SSID, if any.
