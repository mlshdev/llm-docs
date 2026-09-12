> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/floatvalue](https://developer.apple.com/documentation/foundation/nsstring/floatvalue)

# floatValue (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The floating-point value of the string as a `float`.

## Declaration

```swift
var floatValue: Float { get }
```

<a id="Discussion"></a>

## Discussion

This property doesn’t include whitespace at the beginning of the string. This property is `HUGE_VAL` or `–HUGE_VAL` on overflow, `0.0` on underflow. This property is `0.0` if the string doesn’t begin with a valid text representation of a floating-point number.

This method uses formatting information stored in the non-localized value; use an [Scanner](../scanner.md) object for localized scanning of numeric values from a string.

## See Also

### Related Documentation

- [scanFloat(\_:)](../scanner/scanfloat%28__%29.md): Deprecated. Scans for a float value, returning a found value by reference.

### Getting Numeric Values

- [doubleValue](doublevalue.md): The floating-point value of the string as a `double`.
- [intValue](intvalue.md): The integer value of the string.
- [integerValue](integervalue.md): The `NSInteger` value of the string.
- [longLongValue](longlongvalue.md): The `long long` value of the string.
- [boolValue](boolvalue.md): The Boolean value of the string.

# floatValue (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The floating-point value of the string as a `float`.

## Declaration

```objectivec
@property (readonly) float floatValue;
```

<a id="Discussion"></a>

## Discussion

This property doesn’t include whitespace at the beginning of the string. This property is `HUGE_VAL` or `–HUGE_VAL` on overflow, `0.0` on underflow. This property is `0.0` if the string doesn’t begin with a valid text representation of a floating-point number.

This method uses formatting information stored in the non-localized value; use an [NSScanner](../scanner.md) object for localized scanning of numeric values from a string.

## See Also

### Related Documentation

- [scanFloat:](../scanner/scanfloat%28__%29.md): Deprecated. Scans for a float value, returning a found value by reference.

### Getting Numeric Values

- [doubleValue](doublevalue.md): The floating-point value of the string as a `double`.
- [intValue](intvalue.md): The integer value of the string.
- [integerValue](integervalue.md): The `NSInteger` value of the string.
- [longLongValue](longlongvalue.md): The `long long` value of the string.
- [boolValue](boolvalue.md): The Boolean value of the string.
