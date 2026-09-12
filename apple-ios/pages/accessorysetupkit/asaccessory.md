> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessory](https://developer.apple.com/documentation/accessorysetupkit/asaccessory)

# ASAccessory (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An accessory discovered by the accessory session.

## Declaration

```swift
class ASAccessory
```

## Topics

### Accessing identifiers

- [bluetoothIdentifier](asaccessory/bluetoothidentifier.md): The accessory’s unique Bluetooth identifier, if any.
- [bluetoothTransportBridgingIdentifier](asaccessory/bluetoothtransportbridgingidentifier.md): The accessory’s Bluetooth identifier, if any, for use when bridging classic transport profiles.
- [ssid](asaccessory/ssid.md): The accessory’s Wi-Fi SSID, if any.

### Presenting a display name

- [displayName](asaccessory/displayname.md): The accessory’s name, suitable for displaying to someone using your app.

### Inspecting the accessory’s descriptor

- [descriptor](asaccessory/descriptor.md): The descriptor used to discover the accessory.

### Inspecting accessory state

- [state](asaccessory/state.md): The current authorization state of the accessory.
- [ASAccessory.AccessoryState](asaccessory/accessorystate.md): An enumeration of possible authorization states of an accessory.

### Working with Wi-Fi Aware

- [wifiAwarePairedDeviceID](asaccessory/wifiawarepaireddeviceid-swift.property.md): The accessory’s Wi-Fi Aware Pairing Identifier.
- [ASAccessory.WiFiAwarePairedDeviceID](asaccessory/wifiawarepaireddeviceid-swift.typealias.md): The type used for an accessory’s Wi-Fi Aware Pairing Identifier.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [ASDiscoveredAccessory](asdiscoveredaccessory.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessory description

- [ASDiscoveredAccessory](asdiscoveredaccessory.md): A discovered accessory, for use in creating a customized picker display item.
- [ASAccessory.AccessoryState](asaccessory/accessorystate.md): An enumeration of possible authorization states of an accessory.

# ASAccessory (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An accessory discovered by the accessory session.

## Declaration

```objectivec
@interface ASAccessory : NSObject
```

## Topics

### Accessing identifiers

- [bluetoothIdentifier](asaccessory/bluetoothidentifier.md): The accessory’s unique Bluetooth identifier, if any.
- [bluetoothTransportBridgingIdentifier](asaccessory/bluetoothtransportbridgingidentifier.md): The accessory’s Bluetooth identifier, if any, for use when bridging classic transport profiles.
- [SSID](asaccessory/ssid.md): The accessory’s Wi-Fi SSID, if any.

### Presenting a display name

- [displayName](asaccessory/displayname.md): The accessory’s name, suitable for displaying to someone using your app.

### Inspecting the accessory’s descriptor

- [descriptor](asaccessory/descriptor.md): The descriptor used to discover the accessory.

### Inspecting accessory state

- [state](asaccessory/state.md): The current authorization state of the accessory.
- [ASAccessoryState](asaccessory/accessorystate.md): An enumeration of possible authorization states of an accessory.

### Working with Wi-Fi Aware

- [wifiAwarePairedDeviceID](asaccessory/wifiawarepaireddeviceid-swift.property.md): The accessory’s Wi-Fi Aware Pairing Identifier.
- [ASAccessoryWiFiAwarePairedDeviceID](asaccessory/wifiawarepaireddeviceid-swift.typealias.md): The type used for an accessory’s Wi-Fi Aware Pairing Identifier.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [ASDiscoveredAccessory](asdiscoveredaccessory.md)

## See Also

### Accessory description

- [ASDiscoveredAccessory](asdiscoveredaccessory.md): A discovered accessory, for use in creating a customized picker display item.
- [ASAccessoryState](asaccessory/accessorystate.md): An enumeration of possible authorization states of an accessory.
