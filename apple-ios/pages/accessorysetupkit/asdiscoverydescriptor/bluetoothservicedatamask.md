> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asdiscoverydescriptor/bluetoothservicedatamask](https://developer.apple.com/documentation/accessorysetupkit/asdiscoverydescriptor/bluetoothservicedatamask)

# bluetoothServiceDataMask (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The accessory’s Bluetooth service data mask.

## Declaration

```swift
var bluetoothServiceDataMask: Data? { get set }
```

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

## See Also

### Specifying Bluetooth properties

- [bluetoothCompanyIdentifier](bluetoothcompanyidentifier.md): The accessory’s 16-bit Bluetooth Company Identifier.
- [ASBluetoothCompanyIdentifier](../asbluetoothcompanyidentifier.md): The type used to identify a Bluetooth accessory provider.
- [ASBluetoothCompanyIdentifier](../asbluetoothcompanyidentifier.md): The type used to identify a Bluetooth accessory provider.
- [bluetoothManufacturerDataBlob](bluetoothmanufacturerdatablob.md): A byte buffer that matches the accessory’s Bluetooth manufacturer data.
- [bluetoothManufacturerDataMask](bluetoothmanufacturerdatamask.md): The accessory’s Bluetooth manufacturer data mask.
- [bluetoothServiceDataBlob](bluetoothservicedatablob.md): A byte buffer that matches the accessory’s Bluetooth service data.
- [bluetoothNameSubstring](bluetoothnamesubstring.md): The accessory’s over-the-air Bluetooth name substring.
- [bluetoothNameSubstringCompareOptions](bluetoothnamesubstringcompareoptions.md): The accessory’s over-the-air Bluetooth name substring compare options.
- [bluetoothServiceUUID](bluetoothserviceuuid.md): The accessory’s Bluetooth service UUID.
- [bluetoothRange](bluetoothrange.md): A property that tells the session to discover accessories within a specific Bluetooth range.
- [ASDiscoveryDescriptor.Range](range.md): The Bluetooth range in which to discover accessories.

# bluetoothServiceDataMask (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The accessory’s Bluetooth service data mask.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSData * bluetoothServiceDataMask;
```

## Mentioned In

- [Discovering and configuring accessories](../discovering-and-configuring-accessories.md)

## See Also

### Specifying Bluetooth properties

- [bluetoothCompanyIdentifier](bluetoothcompanyidentifier.md): The accessory’s 16-bit Bluetooth Company Identifier.
- [ASBluetoothCompanyIdentifier](../asbluetoothcompanyidentifier.md): The type used to identify a Bluetooth accessory provider.
- [ASBluetoothCompanyIdentifier](../asbluetoothcompanyidentifier.md): The type used to identify a Bluetooth accessory provider.
- [bluetoothManufacturerDataBlob](bluetoothmanufacturerdatablob.md): A byte buffer that matches the accessory’s Bluetooth manufacturer data.
- [bluetoothManufacturerDataMask](bluetoothmanufacturerdatamask.md): The accessory’s Bluetooth manufacturer data mask.
- [bluetoothServiceDataBlob](bluetoothservicedatablob.md): A byte buffer that matches the accessory’s Bluetooth service data.
- [bluetoothNameSubstring](bluetoothnamesubstring.md): The accessory’s over-the-air Bluetooth name substring.
- [bluetoothNameSubstringCompareOptions](bluetoothnamesubstringcompareoptions.md): The accessory’s over-the-air Bluetooth name substring compare options.
- [bluetoothServiceUUID](bluetoothserviceuuid.md): The accessory’s Bluetooth service UUID.
- [bluetoothRange](bluetoothrange.md): A property that tells the session to discover accessories within a specific Bluetooth range.
- [ASDiscoveryDescriptorRange](range.md): The Bluetooth range in which to discover accessories.
