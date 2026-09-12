> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/doublevalue](https://developer.apple.com/documentation/foundation/nsstring/doublevalue)

# doubleValue (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The floating-point value of the string as a `double`.

## Declaration

```swift
var doubleValue: Double { get }
```

<a id="Discussion"></a>

## Discussion

This property doesn’t include any whitespace at the beginning of the string. This property is `HUGE_VAL` or `–HUGE_VAL` on overflow, `0.0` on underflow. This property is `0.0` if the string doesn’t begin with a valid text representation of a floating-point number.

This property uses formatting information stored in the non-localized value; use an [Scanner](../scanner.md) object for localized scanning of numeric values from a string.

## See Also

### Related Documentation

- [scanDouble(\_:)](../scanner/scandouble%28__%29.md): Deprecated. Scans for a double value, returning a found value by reference.

### Getting Numeric Values

- [floatValue](floatvalue.md): The floating-point value of the string as a `float`.
- [intValue](intvalue.md): The integer value of the string.
- [integerValue](integervalue.md): The `NSInteger` value of the string.
- [longLongValue](longlongvalue.md): The `long long` value of the string.
- [boolValue](boolvalue.md): The Boolean value of the string.

# doubleValue (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The floating-point value of the string as a `double`.

## Declaration

```objectivec
@property (readonly) double doubleValue;
```

<a id="Discussion"></a>

## Discussion

This property doesn’t include any whitespace at the beginning of the string. This property is `HUGE_VAL` or `–HUGE_VAL` on overflow, `0.0` on underflow. This property is `0.0` if the string doesn’t begin with a valid text representation of a floating-point number.

This property uses formatting information stored in the non-localized value; use an [NSScanner](../scanner.md) object for localized scanning of numeric values from a string.

## See Also

### Related Documentation

- [scanDouble:](../scanner/scandouble%28__%29.md): Deprecated. Scans for a double value, returning a found value by reference.

### Getting Numeric Values

- [floatValue](floatvalue.md): The floating-point value of the string as a `float`.
- [intValue](intvalue.md): The integer value of the string.
- [integerValue](integervalue.md): The `NSInteger` value of the string.
- [longLongValue](longlongvalue.md): The `long long` value of the string.
- [boolValue](boolvalue.md): The Boolean value of the string.
