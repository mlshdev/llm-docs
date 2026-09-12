> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmutablecharacteristic/descriptors](https://developer.apple.com/documentation/corebluetooth/cbmutablecharacteristic/descriptors)

# descriptors (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of the characteristic’s descriptors.

## Declaration

```swift
var descriptors: [CBDescriptor]? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [CBDescriptor](../cbdescriptor.md) objects that provide more information about a characteristic’s value. For example, they may describe the value in human-readable form and describe how to format the value for presentation purposes. For more information about characteristic descriptors, see [CBDescriptor](../cbdescriptor.md).

## See Also

### Managing a Mutable Characteristic

- [value](value.md): The value of the characteristic.
- [properties](properties.md): The properties of the characteristic.
- [permissions](permissions.md): The permissions of the characteristic value.
- [CBAttributePermissions](../cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
- [subscribedCentrals](subscribedcentrals.md): A list of centrals that are currently subscribed to the characteristic’s value.

# descriptors (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of the characteristic’s descriptors.

## Declaration

```objectivec
@property (retain, readwrite, nullable) NSArray<CBDescriptor *> * descriptors;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [CBDescriptor](../cbdescriptor.md) objects that provide more information about a characteristic’s value. For example, they may describe the value in human-readable form and describe how to format the value for presentation purposes. For more information about characteristic descriptors, see [CBDescriptor](../cbdescriptor.md).

## See Also

### Managing a Mutable Characteristic

- [value](value.md): The value of the characteristic.
- [properties](properties.md): The properties of the characteristic.
- [permissions](permissions.md): The permissions of the characteristic value.
- [CBAttributePermissions](../cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
- [subscribedCentrals](subscribedcentrals.md): A list of centrals that are currently subscribed to the characteristic’s value.
