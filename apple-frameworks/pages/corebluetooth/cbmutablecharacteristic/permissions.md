> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmutablecharacteristic/permissions](https://developer.apple.com/documentation/corebluetooth/cbmutablecharacteristic/permissions)

# permissions (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The permissions of the characteristic value.

## Declaration

```swift
var permissions: CBAttributePermissions { get set }
```

<a id="Discussion"></a>

## Discussion

Characteristic permissions represent the read, write, and encryption permissions for a characteristic’s value. For a complete list and discussion of the available characteristic permissions, see [CBAttributePermissions](../cbattributepermissions.md).

## See Also

### Managing a Mutable Characteristic

- [value](value.md): The value of the characteristic.
- [descriptors](descriptors.md): An array of the characteristic’s descriptors.
- [properties](properties.md): The properties of the characteristic.
- [CBAttributePermissions](../cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
- [subscribedCentrals](subscribedcentrals.md): A list of centrals that are currently subscribed to the characteristic’s value.

# permissions (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The permissions of the characteristic value.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) CBAttributePermissions permissions;
```

<a id="Discussion"></a>

## Discussion

Characteristic permissions represent the read, write, and encryption permissions for a characteristic’s value. For a complete list and discussion of the available characteristic permissions, see [CBAttributePermissions](../cbattributepermissions.md).

## See Also

### Managing a Mutable Characteristic

- [value](value.md): The value of the characteristic.
- [descriptors](descriptors.md): An array of the characteristic’s descriptors.
- [properties](properties.md): The properties of the characteristic.
- [CBAttributePermissions](../cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
- [subscribedCentrals](subscribedcentrals.md): A list of centrals that are currently subscribed to the characteristic’s value.
