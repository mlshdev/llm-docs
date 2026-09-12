> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristic/properties](https://developer.apple.com/documentation/homekit/hmcharacteristic/properties)

# properties (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of properties that describe the characteristic.

## Declaration

```swift
var properties: [String] { get }
```

<a id="Discussion"></a>

## Discussion

Test a characteristic’s [properties](properties.md) array for any of the constants listed in [Characteristic Properties](../characteristic-properties.md) to learn something about the corresponding characteristic. For example, you can create a readability Boolean in an extension to the [HMCharacteristic](../hmcharacteristic.md) class by testing for [HMCharacteristicPropertyReadable](../hmcharacteristicpropertyreadable.md):

```swift
extension HMCharacteristic {
    var isReadable: Bool {
        return properties.contains(HMCharacteristicPropertyReadable)
    }
}
```

## See Also

### Reading characteristic properties

- [Characteristic Properties](../characteristic-properties.md): The properties that characteristics can have.

# properties (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of properties that describe the characteristic.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * properties;
```

<a id="Discussion"></a>

## Discussion

Test a characteristic’s [properties](properties.md) array for any of the constants listed in [Characteristic Properties](../characteristic-properties.md) to learn something about the corresponding characteristic. For example, you can create a readability Boolean in an extension to the [HMCharacteristic](../hmcharacteristic.md) class by testing for [HMCharacteristicPropertyReadable](../hmcharacteristicpropertyreadable.md):

```swift
extension HMCharacteristic {
    var isReadable: Bool {
        return properties.contains(HMCharacteristicPropertyReadable)
    }
}
```

## See Also

### Reading characteristic properties

- [Characteristic Properties](../characteristic-properties.md): The properties that characteristics can have.
