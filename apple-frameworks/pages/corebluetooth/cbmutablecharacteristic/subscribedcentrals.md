> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmutablecharacteristic/subscribedcentrals](https://developer.apple.com/documentation/corebluetooth/cbmutablecharacteristic/subscribedcentrals)

# subscribedCentrals (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of centrals that are currently subscribed to the characteristic’s value.

## Declaration

```swift
var subscribedCentrals: [CBCentral]? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [CBCentral](../cbcentral.md) objects that currently subscribe to the characteristic’s value. The array is empty if the characteristic isn’t configured to support notifications or indications. Even if the characteristic’s configuration supports notifications or indications, the array is empty if centrals aren’t subscribing to the characteristic’s value.

## Topics

### Related Documentation

- [updateValue(\_:for:onSubscribedCentrals:)](../cbperipheralmanager/updatevalue%28__for_onsubscribedcentrals_%29.md): Send an updated characteristic value to one or more subscribed centrals, using a notification or indication.

## See Also

### Managing a Mutable Characteristic

- [value](value.md): The value of the characteristic.
- [descriptors](descriptors.md): An array of the characteristic’s descriptors.
- [properties](properties.md): The properties of the characteristic.
- [permissions](permissions.md): The permissions of the characteristic value.
- [CBAttributePermissions](../cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.

# subscribedCentrals (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of centrals that are currently subscribed to the characteristic’s value.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSArray<CBCentral *> * subscribedCentrals;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [CBCentral](../cbcentral.md) objects that currently subscribe to the characteristic’s value. The array is empty if the characteristic isn’t configured to support notifications or indications. Even if the characteristic’s configuration supports notifications or indications, the array is empty if centrals aren’t subscribing to the characteristic’s value.

## Topics

### Related Documentation

- [updateValue:forCharacteristic:onSubscribedCentrals:](../cbperipheralmanager/updatevalue%28__for_onsubscribedcentrals_%29.md): Send an updated characteristic value to one or more subscribed centrals, using a notification or indication.

## See Also

### Managing a Mutable Characteristic

- [value](value.md): The value of the characteristic.
- [descriptors](descriptors.md): An array of the characteristic’s descriptors.
- [properties](properties.md): The properties of the characteristic.
- [permissions](permissions.md): The permissions of the characteristic value.
- [CBAttributePermissions](../cbattributepermissions.md): Values that represent the read, write, and encryption permissions for a characteristic’s value.
