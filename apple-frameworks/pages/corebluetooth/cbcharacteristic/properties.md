> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcharacteristic/properties](https://developer.apple.com/documentation/corebluetooth/cbcharacteristic/properties)

# properties (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The properties of the characteristic.

## Declaration

```swift
var properties: CBCharacteristicProperties { get }
```

<a id="Discussion"></a>

## Discussion

The properties of a characteristic determine the access to and use of the characteristic’s value and descriptors. For a list of the possible values representing the properties of a characteristic, see [CBCharacteristicProperties](../cbcharacteristicproperties.md).

## See Also

### Accessing Characteristic Data

- [value](value.md): The value of the characteristic.
- [descriptors](descriptors.md): A list of the descriptors discovered in this characteristic.
- [CBCharacteristicProperties](../cbcharacteristicproperties.md): Values that represent the possible properties of a characteristic.
- [isNotifying](isnotifying.md): A Boolean value that indicates whether the characteristic is currently notifying a subscribed central of its value.
- [isBroadcasted](isbroadcasted.md): Deprecated. A Boolean value that indicates whether the characteristic the service broadcasts this characteristic.

# properties (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The properties of the characteristic.

## Declaration

```objectivec
@property (nonatomic, readonly) CBCharacteristicProperties properties;
```

<a id="Discussion"></a>

## Discussion

The properties of a characteristic determine the access to and use of the characteristic’s value and descriptors. For a list of the possible values representing the properties of a characteristic, see [CBCharacteristicProperties](../cbcharacteristicproperties.md).

## See Also

### Accessing Characteristic Data

- [value](value.md): The value of the characteristic.
- [descriptors](descriptors.md): A list of the descriptors discovered in this characteristic.
- [CBCharacteristicProperties](../cbcharacteristicproperties.md): Values that represent the possible properties of a characteristic.
- [isNotifying](isnotifying.md): A Boolean value that indicates whether the characteristic is currently notifying a subscribed central of its value.
- [isBroadcasted](isbroadcasted.md): Deprecated. A Boolean value that indicates whether the characteristic the service broadcasts this characteristic.
