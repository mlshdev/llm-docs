> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcharacteristic/descriptors](https://developer.apple.com/documentation/corebluetooth/cbcharacteristic/descriptors)

# descriptors (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of the descriptors discovered in this characteristic.

## Declaration

```swift
var descriptors: [CBDescriptor]? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [CBDescriptor](../cbdescriptor.md) objects that represent a characteristic’s descriptors. Characteristic descriptors provide more information about a characteristic’s value. For example, they may describe the value in human-readable form and describe how to format the value for presentation purposes. For more information about characteristic descriptors, see [CBDescriptor](../cbdescriptor.md).

## See Also

### Accessing Characteristic Data

- [value](value.md): The value of the characteristic.
- [properties](properties.md): The properties of the characteristic.
- [CBCharacteristicProperties](../cbcharacteristicproperties.md): Values that represent the possible properties of a characteristic.
- [isNotifying](isnotifying.md): A Boolean value that indicates whether the characteristic is currently notifying a subscribed central of its value.
- [isBroadcasted](isbroadcasted.md): Deprecated. A Boolean value that indicates whether the characteristic the service broadcasts this characteristic.

# descriptors (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of the descriptors discovered in this characteristic.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSArray<CBDescriptor *> * descriptors;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [CBDescriptor](../cbdescriptor.md) objects that represent a characteristic’s descriptors. Characteristic descriptors provide more information about a characteristic’s value. For example, they may describe the value in human-readable form and describe how to format the value for presentation purposes. For more information about characteristic descriptors, see [CBDescriptor](../cbdescriptor.md).

## See Also

### Accessing Characteristic Data

- [value](value.md): The value of the characteristic.
- [properties](properties.md): The properties of the characteristic.
- [CBCharacteristicProperties](../cbcharacteristicproperties.md): Values that represent the possible properties of a characteristic.
- [isNotifying](isnotifying.md): A Boolean value that indicates whether the characteristic is currently notifying a subscribed central of its value.
- [isBroadcasted](isbroadcasted.md): Deprecated. A Boolean value that indicates whether the characteristic the service broadcasts this characteristic.
