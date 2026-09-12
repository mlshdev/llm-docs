> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/massformatter/string(fromkilograms:)](https://developer.apple.com/documentation/foundation/massformatter/string(fromkilograms:))

# string(fromKilograms:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a mass string for the provided value.

## Declaration

```swift
func string(fromKilograms numberInKilograms: Double) -> String
```

## Parameters

- `numberInKilograms`: The mass’s value in kilograms.

<a id="return-value"></a>

## Return Value

A string that combines a value and a unit string appropriate for the formatter’s locale.

<a id="Discussion"></a>

## Discussion

This method converts the provided mass in kilograms into units appropriate for the formatter’s locale.

## See Also

### Formatting Mass Strings

- [isForPersonMassUse](isforpersonmassuse.md): A Boolean value that indicates whether the resulting string represents a person’s mass.
- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSMassFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in a mass strings.
- [string(fromValue:unit:)](string%28fromvalue_unit_%29.md): Returns a properly formatted mass string for the given value and unit.
- [unitString(fromKilograms:usedUnit:)](unitstring%28fromkilograms_usedunit_%29.md): Returns the unit string for the provided value.
- [unitString(fromValue:unit:)](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.

# stringFromKilograms: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a mass string for the provided value.

## Declaration

```objectivec
- (NSString *) stringFromKilograms:(double) numberInKilograms;
```

## Parameters

- `numberInKilograms`: The mass’s value in kilograms.

<a id="return-value"></a>

## Return Value

A string that combines a value and a unit string appropriate for the formatter’s locale.

<a id="Discussion"></a>

## Discussion

This method converts the provided mass in kilograms into units appropriate for the formatter’s locale.

## See Also

### Formatting Mass Strings

- [forPersonMassUse](isforpersonmassuse.md): A Boolean value that indicates whether the resulting string represents a person’s mass.
- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSMassFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in a mass strings.
- [stringFromValue:unit:](string%28fromvalue_unit_%29.md): Returns a properly formatted mass string for the given value and unit.
- [unitStringFromKilograms:usedUnit:](unitstring%28fromkilograms_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStringFromValue:unit:](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.
