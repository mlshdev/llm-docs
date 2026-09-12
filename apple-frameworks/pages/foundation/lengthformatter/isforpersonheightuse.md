> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/lengthformatter/isforpersonheightuse](https://developer.apple.com/documentation/foundation/lengthformatter/isforpersonheightuse)

# isForPersonHeightUse (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the resulting string represents a person’s height.

## Declaration

```swift
var isForPersonHeightUse: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the value passed to [string(fromMeters:)](string%28frommeters_%29.md) or [unitString(fromMeters:usedUnit:)](unitstring%28frommeters_usedunit_%29.md) is a person’s height; otherwise, [false](https://developer.apple.com/documentation/swift/false). By default, this property returns [false](https://developer.apple.com/documentation/swift/false).

The length formatter uses this property when determining the best unit for a given locale (for example, in the [string(fromMeters:)](string%28frommeters_%29.md) method).

## See Also

### Formatting Length Strings

- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSLengthFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in length strings.
- [string(fromMeters:)](string%28frommeters_%29.md): Returns a length string for the provided value.
- [string(fromValue:unit:)](string%28fromvalue_unit_%29.md): Returns a properly formatted length string for the given value and unit.
- [unitString(fromMeters:usedUnit:)](unitstring%28frommeters_usedunit_%29.md): Returns the unit string for the provided value.
- [unitString(fromValue:unit:)](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.

# forPersonHeightUse (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the resulting string represents a person’s height.

## Declaration

```objectivec
@property (getter=isForPersonHeightUse) BOOL forPersonHeightUse;
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the value passed to [stringFromMeters:](string%28frommeters_%29.md) or [unitStringFromMeters:usedUnit:](unitstring%28frommeters_usedunit_%29.md) is a person’s height; otherwise, [false](https://developer.apple.com/documentation/swift/false). By default, this property returns [false](https://developer.apple.com/documentation/swift/false).

The length formatter uses this property when determining the best unit for a given locale (for example, in the [stringFromMeters:](string%28frommeters_%29.md) method).

## See Also

### Formatting Length Strings

- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSLengthFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in length strings.
- [stringFromMeters:](string%28frommeters_%29.md): Returns a length string for the provided value.
- [stringFromValue:unit:](string%28fromvalue_unit_%29.md): Returns a properly formatted length string for the given value and unit.
- [unitStringFromMeters:usedUnit:](unitstring%28frommeters_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStringFromValue:unit:](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.
