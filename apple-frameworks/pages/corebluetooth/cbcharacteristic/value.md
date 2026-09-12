> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcharacteristic/value](https://developer.apple.com/documentation/corebluetooth/cbcharacteristic/value)

# value (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value of the characteristic.

## Declaration

```swift
var value: Data? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the value of the characteristic. For example, a temperature measurement characteristic of a health thermometer service may have a value that indicates a temperature in Celsius.

## See Also

### Accessing Characteristic Data

- [descriptors](descriptors.md): A list of the descriptors discovered in this characteristic.
- [properties](properties.md): The properties of the characteristic.
- [CBCharacteristicProperties](../cbcharacteristicproperties.md): Values that represent the possible properties of a characteristic.
- [isNotifying](isnotifying.md): A Boolean value that indicates whether the characteristic is currently notifying a subscribed central of its value.
- [isBroadcasted](isbroadcasted.md): Deprecated. A Boolean value that indicates whether the characteristic the service broadcasts this characteristic.

# value (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value of the characteristic.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSData * value;
```

<a id="Discussion"></a>

## Discussion

This property contains the value of the characteristic. For example, a temperature measurement characteristic of a health thermometer service may have a value that indicates a temperature in Celsius.

## See Also

### Accessing Characteristic Data

- [descriptors](descriptors.md): A list of the descriptors discovered in this characteristic.
- [properties](properties.md): The properties of the characteristic.
- [CBCharacteristicProperties](../cbcharacteristicproperties.md): Values that represent the possible properties of a characteristic.
- [isNotifying](isnotifying.md): A Boolean value that indicates whether the characteristic is currently notifying a subscribed central of its value.
- [isBroadcasted](isbroadcasted.md): Deprecated. A Boolean value that indicates whether the characteristic the service broadcasts this characteristic.
