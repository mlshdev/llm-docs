> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicmetadata/maximumvalue](https://developer.apple.com/documentation/homekit/hmcharacteristicmetadata/maximumvalue)

# maximumValue (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum value for the characteristic.

## Declaration

```swift
var maximumValue: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

This value only applies to characteristics with a number type.

## See Also

### Bounding the value

- [validValues](validvalues.md): The subset of valid values supported by the characteristic when the format is of type unsigned integer.
- [minimumValue](minimumvalue.md): The minimum value for the characteristic.
- [stepValue](stepvalue.md): The minimum interval between values for the characteristic.
- [maxLength](maxlength.md): The maximum number of UTF-8 characters allowed in a characteristic that uses a string format.

# maximumValue (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum value for the characteristic.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * maximumValue;
```

<a id="Discussion"></a>

## Discussion

This value only applies to characteristics with a number type.

## See Also

### Bounding the value

- [validValues](validvalues.md): The subset of valid values supported by the characteristic when the format is of type unsigned integer.
- [minimumValue](minimumvalue.md): The minimum value for the characteristic.
- [stepValue](stepvalue.md): The minimum interval between values for the characteristic.
- [maxLength](maxlength.md): The maximum number of UTF-8 characters allowed in a characteristic that uses a string format.
