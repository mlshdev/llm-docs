> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/massformatter/string(fromvalue:unit:)](https://developer.apple.com/documentation/foundation/massformatter/string(fromvalue:unit:))

# string(fromValue:unit:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a properly formatted mass string for the given value and unit.

## Declaration

```swift
func string(fromValue value: Double, unit: MassFormatter.Unit) -> String
```

## Parameters

- `value`: The mass’s value in the given unit.
- `unit`: The unit used in the resulting mass string.

<a id="return-value"></a>

## Return Value

A localized string that combines the provided value and unit.

## See Also

### Formatting Mass Strings

- [isForPersonMassUse](isforpersonmassuse.md): A Boolean value that indicates whether the resulting string represents a person’s mass.
- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSMassFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in a mass strings.
- [string(fromKilograms:)](string%28fromkilograms_%29.md): Returns a mass string for the provided value.
- [unitString(fromKilograms:usedUnit:)](unitstring%28fromkilograms_usedunit_%29.md): Returns the unit string for the provided value.
- [unitString(fromValue:unit:)](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.

# stringFromValue:unit: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a properly formatted mass string for the given value and unit.

## Declaration

```objectivec
- (NSString *) stringFromValue:(double) value unit:(NSMassFormatterUnit) unit;
```

## Parameters

- `value`: The mass’s value in the given unit.
- `unit`: The unit used in the resulting mass string.

<a id="return-value"></a>

## Return Value

A localized string that combines the provided value and unit.

## See Also

### Formatting Mass Strings

- [forPersonMassUse](isforpersonmassuse.md): A Boolean value that indicates whether the resulting string represents a person’s mass.
- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSMassFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in a mass strings.
- [stringFromKilograms:](string%28fromkilograms_%29.md): Returns a mass string for the provided value.
- [unitStringFromKilograms:usedUnit:](unitstring%28fromkilograms_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStringFromValue:unit:](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.
