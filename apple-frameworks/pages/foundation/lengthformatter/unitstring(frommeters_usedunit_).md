> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/lengthformatter/unitstring(frommeters:usedunit:)](https://developer.apple.com/documentation/foundation/lengthformatter/unitstring(frommeters:usedunit:))

# unitString(fromMeters:usedUnit:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the unit string for the provided value.

## Declaration

```swift
func unitString(fromMeters numberInMeters: Double, usedUnit unitp: UnsafeMutablePointer<LengthFormatter.Unit>?) -> String
```

## Parameters

- `numberInMeters`: The length’s value in meters.
- `unitp`: An output parameter. This will hold the [LengthFormatter.Unit](unit.md) value that corresponds to the returned units.

<a id="return-value"></a>

## Return Value

A localized string representing the unit.

<a id="Discussion"></a>

## Discussion

This method selects the correct unit based on the formatter’s locale, the magnitude of the value, and the [isForPersonHeightUse](isforpersonheightuse.md) property.

## See Also

### Formatting Length Strings

- [isForPersonHeightUse](isforpersonheightuse.md): A Boolean value that indicates whether the resulting string represents a person’s height.
- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSLengthFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in length strings.
- [string(fromMeters:)](string%28frommeters_%29.md): Returns a length string for the provided value.
- [string(fromValue:unit:)](string%28fromvalue_unit_%29.md): Returns a properly formatted length string for the given value and unit.
- [unitString(fromValue:unit:)](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.

# unitStringFromMeters:usedUnit: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the unit string for the provided value.

## Declaration

```objectivec
- (NSString *) unitStringFromMeters:(double) numberInMeters usedUnit:(NSLengthFormatterUnit *) unitp;
```

## Parameters

- `numberInMeters`: The length’s value in meters.
- `unitp`: An output parameter. This will hold the [NSLengthFormatterUnit](unit.md) value that corresponds to the returned units.

<a id="return-value"></a>

## Return Value

A localized string representing the unit.

<a id="Discussion"></a>

## Discussion

This method selects the correct unit based on the formatter’s locale, the magnitude of the value, and the [forPersonHeightUse](isforpersonheightuse.md) property.

## See Also

### Formatting Length Strings

- [forPersonHeightUse](isforpersonheightuse.md): A Boolean value that indicates whether the resulting string represents a person’s height.
- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSLengthFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in length strings.
- [stringFromMeters:](string%28frommeters_%29.md): Returns a length string for the provided value.
- [stringFromValue:unit:](string%28fromvalue_unit_%29.md): Returns a properly formatted length string for the given value and unit.
- [unitStringFromValue:unit:](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.
