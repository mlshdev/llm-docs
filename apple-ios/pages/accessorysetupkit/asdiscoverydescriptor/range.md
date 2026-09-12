> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asdiscoverydescriptor/range](https://developer.apple.com/documentation/accessorysetupkit/asdiscoverydescriptor/range)

# ASDiscoveryDescriptor.Range (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The Bluetooth range in which to discover accessories.

## Declaration

```swift
enum Range
```

## Topics

### Creating an options instance

- [init(rawValue:)](range/init%28rawvalue_%29.md)

### Bluetooth options

- [ASDiscoveryDescriptor.Range.default](range/default.md): The default range in which to discover accessories.
- [ASDiscoveryDescriptor.Range.immediate](range/immediate.md): A range in the immediate vicinity of the device performing accessory discovery.

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

- [bluetoothCompanyIdentifier](bluetoothcompanyidentifier.md): The accessory’s 16-bit Bluetooth Company Identifier.
- [ASBluetoothCompanyIdentifier](../asbluetoothcompanyidentifier.md): The type used to identify a Bluetooth accessory provider.
- [ASBluetoothCompanyIdentifier](../asbluetoothcompanyidentifier.md): The type used to identify a Bluetooth accessory provider.
- [bluetoothManufacturerDataBlob](bluetoothmanufacturerdatablob.md): A byte buffer that matches the accessory’s Bluetooth manufacturer data.
- [bluetoothManufacturerDataMask](bluetoothmanufacturerdatamask.md): The accessory’s Bluetooth manufacturer data mask.
- [bluetoothServiceDataBlob](bluetoothservicedatablob.md): A byte buffer that matches the accessory’s Bluetooth service data.
- [bluetoothServiceDataMask](bluetoothservicedatamask.md): The accessory’s Bluetooth service data mask.
- [bluetoothNameSubstring](bluetoothnamesubstring.md): The accessory’s over-the-air Bluetooth name substring.
- [bluetoothNameSubstringCompareOptions](bluetoothnamesubstringcompareoptions.md): The accessory’s over-the-air Bluetooth name substring compare options.
- [bluetoothServiceUUID](bluetoothserviceuuid.md): The accessory’s Bluetooth service UUID.
- [bluetoothRange](bluetoothrange.md): A property that tells the session to discover accessories within a specific Bluetooth range.

# ASDiscoveryDescriptorRange (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst

The Bluetooth range in which to discover accessories.

## Declaration

```objectivec
enum ASDiscoveryDescriptorRange : NSInteger;
```

## Topics

### Bluetooth options

- [ASDiscoveryDescriptorRangeDefault](range/default.md): The default range in which to discover accessories.
- [ASDiscoveryDescriptorRangeImmediate](range/immediate.md): A range in the immediate vicinity of the device performing accessory discovery.

## See Also

### Specifying Bluetooth properties

- [bluetoothCompanyIdentifier](bluetoothcompanyidentifier.md): The accessory’s 16-bit Bluetooth Company Identifier.
- [ASBluetoothCompanyIdentifier](../asbluetoothcompanyidentifier.md): The type used to identify a Bluetooth accessory provider.
- [ASBluetoothCompanyIdentifier](../asbluetoothcompanyidentifier.md): The type used to identify a Bluetooth accessory provider.
- [bluetoothManufacturerDataBlob](bluetoothmanufacturerdatablob.md): A byte buffer that matches the accessory’s Bluetooth manufacturer data.
- [bluetoothManufacturerDataMask](bluetoothmanufacturerdatamask.md): The accessory’s Bluetooth manufacturer data mask.
- [bluetoothServiceDataBlob](bluetoothservicedatablob.md): A byte buffer that matches the accessory’s Bluetooth service data.
- [bluetoothServiceDataMask](bluetoothservicedatamask.md): The accessory’s Bluetooth service data mask.
- [bluetoothNameSubstring](bluetoothnamesubstring.md): The accessory’s over-the-air Bluetooth name substring.
- [bluetoothNameSubstringCompareOptions](bluetoothnamesubstringcompareoptions.md): The accessory’s over-the-air Bluetooth name substring compare options.
- [bluetoothServiceUUID](bluetoothserviceuuid.md): The accessory’s Bluetooth service UUID.
- [bluetoothRange](bluetoothrange.md): A property that tells the session to discover accessories within a specific Bluetooth range.
