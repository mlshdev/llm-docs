> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristic/metadata](https://developer.apple.com/documentation/homekit/hmcharacteristic/metadata)

# metadata (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Metadata about the units and other properties of the characteristic.

## Declaration

```swift
var metadata: HMCharacteristicMetadata? { get }
```

<a id="Discussion"></a>

## Discussion

You can typically infer a lot about a characteristic’s [value](value.md) from its [characteristicType](characteristictype.md), like if the value is a string, a number, or in some other format; what the units are; and what range of values to expect. To obtain this information explicitly, inspect the characteristic’s [metadata](metadata.md), represented by an instance of the [HMCharacteristicMetadata](../hmcharacteristicmetadata.md) class.

## See Also

### Managing characteristic presentation

- [HMCharacteristicMetadata](../hmcharacteristicmetadata.md): Metadata that describes a characteristic’s value and that may be useful for presentation purposes.

# metadata (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Metadata about the units and other properties of the characteristic.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) HMCharacteristicMetadata * metadata;
```

<a id="Discussion"></a>

## Discussion

You can typically infer a lot about a characteristic’s [value](value.md) from its [characteristicType](characteristictype.md), like if the value is a string, a number, or in some other format; what the units are; and what range of values to expect. To obtain this information explicitly, inspect the characteristic’s [metadata](metadata.md), represented by an instance of the [HMCharacteristicMetadata](../hmcharacteristicmetadata.md) class.

## See Also

### Managing characteristic presentation

- [HMCharacteristicMetadata](../hmcharacteristicmetadata.md): Metadata that describes a characteristic’s value and that may be useful for presentation purposes.
