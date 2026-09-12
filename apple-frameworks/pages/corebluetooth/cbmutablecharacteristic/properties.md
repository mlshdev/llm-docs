> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmutablecharacteristic/properties](https://developer.apple.com/documentation/corebluetooth/cbmutablecharacteristic/properties)

# properties (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The properties of the characteristic.

## Declaration

```swift
var properties: CBCharacteristicProperties { get set }
```

<a id="Discussion"></a>

## Discussion

The properties of a characteristic determine the access to and use of the characteristic’s value and descriptors. For a list of the possible values representing the properties of a characteristic, see the [CBCharacteristicProperties](../cbcharacteristicproperties.md) enumeration in [CBCharacteristic](../cbcharacteristic.md). However, you can’t use the [broadcast](../cbcharacteristicproperties/broadcast.md) and [extendedProperties](../cbcharacteristicproperties/extendedproperties.md) characteristic properties when creating a mutable characteristic.

## See Also

### Managing a Mutable Characteristic

- [value](value.md): The value of the characteristic.
- [descriptors](descriptors.md): An array of the characteristic’s descriptors.
- [permissions](permissions.md): The permissions of the characteristic value.
- [CBAttributePermissions](../cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
- [subscribedCentrals](subscribedcentrals.md): A list of centrals that are currently subscribed to the characteristic’s value.

# properties (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The properties of the characteristic.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) CBCharacteristicProperties properties;
```

<a id="Discussion"></a>

## Discussion

The properties of a characteristic determine the access to and use of the characteristic’s value and descriptors. For a list of the possible values representing the properties of a characteristic, see the [CBCharacteristicProperties](../cbcharacteristicproperties.md) enumeration in [CBCharacteristic](../cbcharacteristic.md). However, you can’t use the [CBCharacteristicPropertyBroadcast](../cbcharacteristicproperties/broadcast.md) and [CBCharacteristicPropertyExtendedProperties](../cbcharacteristicproperties/extendedproperties.md) characteristic properties when creating a mutable characteristic.

## See Also

### Managing a Mutable Characteristic

- [value](value.md): The value of the characteristic.
- [descriptors](descriptors.md): An array of the characteristic’s descriptors.
- [permissions](permissions.md): The permissions of the characteristic value.
- [CBAttributePermissions](../cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
- [subscribedCentrals](subscribedcentrals.md): A list of centrals that are currently subscribed to the characteristic’s value.
