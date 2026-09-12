> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmutablecharacteristic/value](https://developer.apple.com/documentation/corebluetooth/cbmutablecharacteristic/value)

# value (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value of the characteristic.

## Declaration

```swift
var value: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the value of the characteristic. For example, a temperature measurement characteristic of a health thermometer service may have a value that indicates a temperature in Celsius.

## See Also

### Managing a Mutable Characteristic

- [descriptors](descriptors.md): An array of the characteristic’s descriptors.
- [properties](properties.md): The properties of the characteristic.
- [permissions](permissions.md): The permissions of the characteristic value.
- [CBAttributePermissions](../cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
- [subscribedCentrals](subscribedcentrals.md): A list of centrals that are currently subscribed to the characteristic’s value.

# value (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value of the characteristic.

## Declaration

```objectivec
@property (retain, readwrite, nullable) NSData * value;
```

<a id="Discussion"></a>

## Discussion

This property contains the value of the characteristic. For example, a temperature measurement characteristic of a health thermometer service may have a value that indicates a temperature in Celsius.

## See Also

### Managing a Mutable Characteristic

- [descriptors](descriptors.md): An array of the characteristic’s descriptors.
- [properties](properties.md): The properties of the characteristic.
- [permissions](permissions.md): The permissions of the characteristic value.
- [CBAttributePermissions](../cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
- [subscribedCentrals](subscribedcentrals.md): A list of centrals that are currently subscribed to the characteristic’s value.
