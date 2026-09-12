> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/boolvalue](https://developer.apple.com/documentation/foundation/nsstring/boolvalue)

# boolValue (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The Boolean value of the string.

## Declaration

```swift
var boolValue: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) on encountering one of “Y”, “y”, “T”, “t”, or a digit 1-9—the method ignores any trailing characters. This property is [false](https://developer.apple.com/documentation/swift/false) if the receiver doesn’t begin with a valid decimal text representation of a number.

The property assumes a decimal representation and skips whitespace at the beginning of the string. It also skips initial whitespace characters, or optional -/+ sign followed by zeroes.

## See Also

### Related Documentation

- [scanInt32(\_:)](../scanner/scanint32%28__%29.md): Deprecated. Scans for an int value from a decimal representation, returning a found value by reference.

### Getting Numeric Values

- [doubleValue](doublevalue.md): The floating-point value of the string as a `double`.
- [floatValue](floatvalue.md): The floating-point value of the string as a `float`.
- [intValue](intvalue.md): The integer value of the string.
- [integerValue](integervalue.md): The `NSInteger` value of the string.
- [longLongValue](longlongvalue.md): The `long long` value of the string.

# boolValue (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The Boolean value of the string.

## Declaration

```objectivec
@property (readonly) BOOL boolValue;
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) on encountering one of “Y”, “y”, “T”, “t”, or a digit 1-9—the method ignores any trailing characters. This property is [false](https://developer.apple.com/documentation/swift/false) if the receiver doesn’t begin with a valid decimal text representation of a number.

The property assumes a decimal representation and skips whitespace at the beginning of the string. It also skips initial whitespace characters, or optional -/+ sign followed by zeroes.

## See Also

### Related Documentation

- [scanInt:](../scanner/scanint32%28__%29.md): Deprecated. Scans for an int value from a decimal representation, returning a found value by reference.

### Getting Numeric Values

- [doubleValue](doublevalue.md): The floating-point value of the string as a `double`.
- [floatValue](floatvalue.md): The floating-point value of the string as a `float`.
- [intValue](intvalue.md): The integer value of the string.
- [integerValue](integervalue.md): The `NSInteger` value of the string.
- [longLongValue](longlongvalue.md): The `long long` value of the string.
