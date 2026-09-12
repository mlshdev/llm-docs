> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/integervalue](https://developer.apple.com/documentation/foundation/nsstring/integervalue)

# integerValue (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The `NSInteger` value of the string.

## Declaration

```swift
var integerValue: Int { get }
```

<a id="Discussion"></a>

## Discussion

The `NSInteger` value of the string, assuming a decimal representation and skipping whitespace at the beginning of the string. This property is `0` if the string doesn’t begin with a valid decimal text representation of a number.

This property uses formatting information stored in the non-localized value; use an [Scanner](../scanner.md) object for localized scanning of numeric values from a string.

## See Also

### Related Documentation

- [scanInt32(\_:)](../scanner/scanint32%28__%29.md): Deprecated. Scans for an int value from a decimal representation, returning a found value by reference.

### Getting Numeric Values

- [doubleValue](doublevalue.md): The floating-point value of the string as a `double`.
- [floatValue](floatvalue.md): The floating-point value of the string as a `float`.
- [intValue](intvalue.md): The integer value of the string.
- [longLongValue](longlongvalue.md): The `long long` value of the string.
- [boolValue](boolvalue.md): The Boolean value of the string.

# integerValue (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The `NSInteger` value of the string.

## Declaration

```objectivec
@property (readonly) NSInteger integerValue;
```

<a id="Discussion"></a>

## Discussion

The `NSInteger` value of the string, assuming a decimal representation and skipping whitespace at the beginning of the string. This property is `0` if the string doesn’t begin with a valid decimal text representation of a number.

This property uses formatting information stored in the non-localized value; use an [NSScanner](../scanner.md) object for localized scanning of numeric values from a string.

## See Also

### Related Documentation

- [scanInt:](../scanner/scanint32%28__%29.md): Deprecated. Scans for an int value from a decimal representation, returning a found value by reference.

### Getting Numeric Values

- [doubleValue](doublevalue.md): The floating-point value of the string as a `double`.
- [floatValue](floatvalue.md): The floating-point value of the string as a `float`.
- [intValue](intvalue.md): The integer value of the string.
- [longLongValue](longlongvalue.md): The `long long` value of the string.
- [boolValue](boolvalue.md): The Boolean value of the string.
