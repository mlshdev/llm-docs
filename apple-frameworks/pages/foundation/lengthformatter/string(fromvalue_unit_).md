> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/lengthformatter/string(fromvalue:unit:)](https://developer.apple.com/documentation/foundation/lengthformatter/string(fromvalue:unit:))

# string(fromValue:unit:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a properly formatted length string for the given value and unit.

## Declaration

```swift
func string(fromValue value: Double, unit: LengthFormatter.Unit) -> String
```

## Parameters

- `value`: The length’s value in the given unit.
- `unit`: The unit used in the resulting length string.

<a id="return-value"></a>

## Return Value

A localized string that combines the provided value and unit.

## See Also

### Formatting Length Strings

- [isForPersonHeightUse](isforpersonheightuse.md): A Boolean value that indicates whether the resulting string represents a person’s height.
- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSLengthFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in length strings.
- [string(fromMeters:)](string%28frommeters_%29.md): Returns a length string for the provided value.
- [unitString(fromMeters:usedUnit:)](unitstring%28frommeters_usedunit_%29.md): Returns the unit string for the provided value.
- [unitString(fromValue:unit:)](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.

# stringFromValue:unit: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a properly formatted length string for the given value and unit.

## Declaration

```objectivec
- (NSString *) stringFromValue:(double) value unit:(NSLengthFormatterUnit) unit;
```

## Parameters

- `value`: The length’s value in the given unit.
- `unit`: The unit used in the resulting length string.

<a id="return-value"></a>

## Return Value

A localized string that combines the provided value and unit.

## See Also

### Formatting Length Strings

- [forPersonHeightUse](isforpersonheightuse.md): A Boolean value that indicates whether the resulting string represents a person’s height.
- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSLengthFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in length strings.
- [stringFromMeters:](string%28frommeters_%29.md): Returns a length string for the provided value.
- [unitStringFromMeters:usedUnit:](unitstring%28frommeters_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStringFromValue:unit:](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.
