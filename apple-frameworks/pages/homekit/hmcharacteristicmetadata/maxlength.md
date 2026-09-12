> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicmetadata/maxlength](https://developer.apple.com/documentation/homekit/hmcharacteristicmetadata/maxlength)

# maxLength (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of UTF-8 characters allowed in a characteristic that uses a string format.

## Declaration

```swift
var maxLength: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

This value only applies to characteristics with a string type.

## See Also

### Bounding the value

- [validValues](validvalues.md): The subset of valid values supported by the characteristic when the format is of type unsigned integer.
- [minimumValue](minimumvalue.md): The minimum value for the characteristic.
- [maximumValue](maximumvalue.md): The maximum value for the characteristic.
- [stepValue](stepvalue.md): The minimum interval between values for the characteristic.

# maxLength (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of UTF-8 characters allowed in a characteristic that uses a string format.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * maxLength;
```

<a id="Discussion"></a>

## Discussion

This value only applies to characteristics with a string type.

## See Also

### Bounding the value

- [validValues](validvalues.md): The subset of valid values supported by the characteristic when the format is of type unsigned integer.
- [minimumValue](minimumvalue.md): The minimum value for the characteristic.
- [maximumValue](maximumvalue.md): The maximum value for the characteristic.
- [stepValue](stepvalue.md): The minimum interval between values for the characteristic.
