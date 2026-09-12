> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessory/supportoptions](https://developer.apple.com/documentation/accessorysetupkit/asaccessory/supportoptions)

# ASAccessory.SupportOptions (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Options of discoverable accessories.

## Declaration

```swift
struct SupportOptions
```

## Topics

### Creating an options instance

- [init(rawValue:)](supportoptions/init%28rawvalue_%29.md)

### Bluetooth options

- [bluetoothPairingLE](supportoptions/bluetoothpairingle.md): The accessory supports Bluetooth Low Energy pairing.
- [bluetoothTransportBridging](supportoptions/bluetoothtransportbridging.md): The accessory supports bridging to Bluetooth classic transport.
- [bluetoothHID](supportoptions/bluetoothhid.md): The accessory supports Bluetooth Low Energy HID service.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Specifying options

- [supportedOptions](../asdiscoverydescriptor/supportedoptions.md): Options supported by an accessory.

# ASAccessorySupportOptions (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst

Options of discoverable accessories.

## Declaration

```objectivec
enum ASAccessorySupportOptions : NSUInteger;
```

## Topics

### Bluetooth options

- [ASAccessorySupportBluetoothPairingLE](supportoptions/bluetoothpairingle.md): The accessory supports Bluetooth Low Energy pairing.
- [ASAccessorySupportBluetoothTransportBridging](supportoptions/bluetoothtransportbridging.md): The accessory supports bridging to Bluetooth classic transport.
- [ASAccessorySupportBluetoothHID](supportoptions/bluetoothhid.md): The accessory supports Bluetooth Low Energy HID service.

## See Also

### Specifying options

- [supportedOptions](../asdiscoverydescriptor/supportedoptions.md): Options supported by an accessory.
