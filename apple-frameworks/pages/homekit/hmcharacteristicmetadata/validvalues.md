> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicmetadata/validvalues](https://developer.apple.com/documentation/homekit/hmcharacteristicmetadata/validvalues)

# validValues (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The subset of valid values supported by the characteristic when the format is of type unsigned integer.

## Declaration

```swift
var validValues: [NSNumber]? { get }
```

## See Also

### Bounding the value

- [minimumValue](minimumvalue.md): The minimum value for the characteristic.
- [maximumValue](maximumvalue.md): The maximum value for the characteristic.
- [stepValue](stepvalue.md): The minimum interval between values for the characteristic.
- [maxLength](maxlength.md): The maximum number of UTF-8 characters allowed in a characteristic that uses a string format.

# validValues (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The subset of valid values supported by the characteristic when the format is of type unsigned integer.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSNumber *> * validValues;
```

## See Also

### Bounding the value

- [minimumValue](minimumvalue.md): The minimum value for the characteristic.
- [maximumValue](maximumvalue.md): The maximum value for the characteristic.
- [stepValue](stepvalue.md): The minimum interval between values for the characteristic.
- [maxLength](maxlength.md): The maximum number of UTF-8 characters allowed in a characteristic that uses a string format.
