> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcharacteristic/isnotifying](https://developer.apple.com/documentation/corebluetooth/cbcharacteristic/isnotifying)

# isNotifying (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the characteristic is currently notifying a subscribed central of its value.

## Declaration

```swift
var isNotifying: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if you enabled notifications or indications for the characteristic by successfully calling the [setNotifyValue(\_:for:)](../cbperipheral/setnotifyvalue%28__for_%29.md) method of the [CBPeripheral](../cbperipheral.md) class. In this case, the peripheral updates its connected central that whenever the characteristic’s value changes.

If the value of the property is [false](https://developer.apple.com/documentation/swift/false), notifications (or indications) aren’t enabled for the characteristic, and the peripheral doesn’t update its connected central when the characteristic’s value changes.

## Topics

### Related Documentation

- [setNotifyValue(\_:for:)](../cbperipheral/setnotifyvalue%28__for_%29.md): Sets notifications or indications for the value of a specified characteristic.

## See Also

### Accessing Characteristic Data

- [value](value.md): The value of the characteristic.
- [descriptors](descriptors.md): A list of the descriptors discovered in this characteristic.
- [properties](properties.md): The properties of the characteristic.
- [CBCharacteristicProperties](../cbcharacteristicproperties.md): Values that represent the possible properties of a characteristic.
- [isBroadcasted](isbroadcasted.md): Deprecated. A Boolean value that indicates whether the characteristic the service broadcasts this characteristic.

# isNotifying (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the characteristic is currently notifying a subscribed central of its value.

## Declaration

```objectivec
@property (readonly) BOOL isNotifying;
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if you enabled notifications or indications for the characteristic by successfully calling the [setNotifyValue:forCharacteristic:](../cbperipheral/setnotifyvalue%28__for_%29.md) method of the [CBPeripheral](../cbperipheral.md) class. In this case, the peripheral updates its connected central that whenever the characteristic’s value changes.

If the value of the property is [false](https://developer.apple.com/documentation/swift/false), notifications (or indications) aren’t enabled for the characteristic, and the peripheral doesn’t update its connected central when the characteristic’s value changes.

## Topics

### Related Documentation

- [setNotifyValue:forCharacteristic:](../cbperipheral/setnotifyvalue%28__for_%29.md): Sets notifications or indications for the value of a specified characteristic.

## See Also

### Accessing Characteristic Data

- [value](value.md): The value of the characteristic.
- [descriptors](descriptors.md): A list of the descriptors discovered in this characteristic.
- [properties](properties.md): The properties of the characteristic.
- [CBCharacteristicProperties](../cbcharacteristicproperties.md): Values that represent the possible properties of a characteristic.
- [isBroadcasted](isbroadcasted.md): Deprecated. A Boolean value that indicates whether the characteristic the service broadcasts this characteristic.
