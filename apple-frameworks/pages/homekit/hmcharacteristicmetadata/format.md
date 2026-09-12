> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicmetadata/format](https://developer.apple.com/documentation/homekit/hmcharacteristicmetadata/format)

# format (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The format of the values for the characteristic.

## Declaration

```swift
var format: String? { get }
```

<a id="Discussion"></a>

## Discussion

The [format](format.md) property tells you what kind of data the characteristic’s [value](../hmcharacteristic/value.md) contains. For example, you can extend the [HMCharacteristic](../hmcharacteristic.md) class with a computed property that reports whether a given characteristic is a floating point number:

```swift
extension HMCharacteristic {
    var isFloat: Bool {
        return metadata?.format == HMCharacteristicMetadataFormatFloat
    }
}
```

See [Characteristic Data Formats](../characteristic-data-formats.md) for the list of possible formats.

## See Also

### Formatting the value

- [Characteristic Data Formats](../characteristic-data-formats.md): Constants for identifying the data format of characteristic values.

# format (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The format of the values for the characteristic.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * format;
```

<a id="Discussion"></a>

## Discussion

The [format](format.md) property tells you what kind of data the characteristic’s [value](../hmcharacteristic/value.md) contains. For example, you can extend the [HMCharacteristic](../hmcharacteristic.md) class with a computed property that reports whether a given characteristic is a floating point number:

```swift
extension HMCharacteristic {
    var isFloat: Bool {
        return metadata?.format == HMCharacteristicMetadataFormatFloat
    }
}
```

See [Characteristic Data Formats](../characteristic-data-formats.md) for the list of possible formats.

## See Also

### Formatting the value

- [Characteristic Data Formats](../characteristic-data-formats.md): Constants for identifying the data format of characteristic values.
