> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asbluetoothcompanyidentifier](https://developer.apple.com/documentation/accessorysetupkit/asbluetoothcompanyidentifier)

# ASBluetoothCompanyIdentifier (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst

The type used to identify a Bluetooth accessory provider.

## Declaration

```swift
struct ASBluetoothCompanyIdentifier
```

## Topics

### Creating an identifier

- [init(\_:)](asbluetoothcompanyidentifier/init%28__%29.md)
- [init(rawValue:)](asbluetoothcompanyidentifier/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying Bluetooth properties

- [bluetoothCompanyIdentifier](asdiscoverydescriptor/bluetoothcompanyidentifier.md): The accessory’s 16-bit Bluetooth Company Identifier.
- [bluetoothManufacturerDataBlob](asdiscoverydescriptor/bluetoothmanufacturerdatablob.md): A byte buffer that matches the accessory’s Bluetooth manufacturer data.
- [bluetoothManufacturerDataMask](asdiscoverydescriptor/bluetoothmanufacturerdatamask.md): The accessory’s Bluetooth manufacturer data mask.
- [bluetoothServiceDataBlob](asdiscoverydescriptor/bluetoothservicedatablob.md): A byte buffer that matches the accessory’s Bluetooth service data.
- [bluetoothServiceDataMask](asdiscoverydescriptor/bluetoothservicedatamask.md): The accessory’s Bluetooth service data mask.
- [bluetoothNameSubstring](asdiscoverydescriptor/bluetoothnamesubstring.md): The accessory’s over-the-air Bluetooth name substring.
- [bluetoothNameSubstringCompareOptions](asdiscoverydescriptor/bluetoothnamesubstringcompareoptions.md): The accessory’s over-the-air Bluetooth name substring compare options.
- [bluetoothServiceUUID](asdiscoverydescriptor/bluetoothserviceuuid.md): The accessory’s Bluetooth service UUID.
- [bluetoothRange](asdiscoverydescriptor/bluetoothrange.md): A property that tells the session to discover accessories within a specific Bluetooth range.
- [ASDiscoveryDescriptor.Range](asdiscoverydescriptor/range.md): The Bluetooth range in which to discover accessories.

# ASBluetoothCompanyIdentifier (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst

The type used to identify a Bluetooth accessory provider.

## Declaration

```objectivec
typedef uint16_t ASBluetoothCompanyIdentifier;
```

## See Also

### Specifying Bluetooth properties

- [bluetoothCompanyIdentifier](asdiscoverydescriptor/bluetoothcompanyidentifier.md): The accessory’s 16-bit Bluetooth Company Identifier.
- [bluetoothManufacturerDataBlob](asdiscoverydescriptor/bluetoothmanufacturerdatablob.md): A byte buffer that matches the accessory’s Bluetooth manufacturer data.
- [bluetoothManufacturerDataMask](asdiscoverydescriptor/bluetoothmanufacturerdatamask.md): The accessory’s Bluetooth manufacturer data mask.
- [bluetoothServiceDataBlob](asdiscoverydescriptor/bluetoothservicedatablob.md): A byte buffer that matches the accessory’s Bluetooth service data.
- [bluetoothServiceDataMask](asdiscoverydescriptor/bluetoothservicedatamask.md): The accessory’s Bluetooth service data mask.
- [bluetoothNameSubstring](asdiscoverydescriptor/bluetoothnamesubstring.md): The accessory’s over-the-air Bluetooth name substring.
- [bluetoothNameSubstringCompareOptions](asdiscoverydescriptor/bluetoothnamesubstringcompareoptions.md): The accessory’s over-the-air Bluetooth name substring compare options.
- [bluetoothServiceUUID](asdiscoverydescriptor/bluetoothserviceuuid.md): The accessory’s Bluetooth service UUID.
- [bluetoothRange](asdiscoverydescriptor/bluetoothrange.md): A property that tells the session to discover accessories within a specific Bluetooth range.
- [ASDiscoveryDescriptorRange](asdiscoverydescriptor/range.md): The Bluetooth range in which to discover accessories.
