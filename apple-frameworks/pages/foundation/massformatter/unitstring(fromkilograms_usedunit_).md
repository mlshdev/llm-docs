> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/massformatter/unitstring(fromkilograms:usedunit:)](https://developer.apple.com/documentation/foundation/massformatter/unitstring(fromkilograms:usedunit:))

# unitString(fromKilograms:usedUnit:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the unit string for the provided value.

## Declaration

```swift
func unitString(fromKilograms numberInKilograms: Double, usedUnit unitp: UnsafeMutablePointer<MassFormatter.Unit>?) -> String
```

## Parameters

- `numberInKilograms`: The mass’s value in kilograms.
- `unitp`: An output parameter. This will hold the [MassFormatter.Unit](unit.md) value that corresponds to the returned units.

<a id="return-value"></a>

## Return Value

A localized string representing the unit.

<a id="Discussion"></a>

## Discussion

This method selects the correct unit based on the formatter’s locale, the magnitude of the value, and the [isForPersonMassUse](isforpersonmassuse.md) property. The value, once converted into the appropriate unit, determines whether the unit string is plural or singular.

## See Also

### Formatting Mass Strings

- [isForPersonMassUse](isforpersonmassuse.md): A Boolean value that indicates whether the resulting string represents a person’s mass.
- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSMassFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in a mass strings.
- [string(fromKilograms:)](string%28fromkilograms_%29.md): Returns a mass string for the provided value.
- [string(fromValue:unit:)](string%28fromvalue_unit_%29.md): Returns a properly formatted mass string for the given value and unit.
- [unitString(fromValue:unit:)](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.

# unitStringFromKilograms:usedUnit: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the unit string for the provided value.

## Declaration

```objectivec
- (NSString *) unitStringFromKilograms:(double) numberInKilograms usedUnit:(NSMassFormatterUnit *) unitp;
```

## Parameters

- `numberInKilograms`: The mass’s value in kilograms.
- `unitp`: An output parameter. This will hold the [NSMassFormatterUnit](unit.md) value that corresponds to the returned units.

<a id="return-value"></a>

## Return Value

A localized string representing the unit.

<a id="Discussion"></a>

## Discussion

This method selects the correct unit based on the formatter’s locale, the magnitude of the value, and the [forPersonMassUse](isforpersonmassuse.md) property. The value, once converted into the appropriate unit, determines whether the unit string is plural or singular.

## See Also

### Formatting Mass Strings

- [forPersonMassUse](isforpersonmassuse.md): A Boolean value that indicates whether the resulting string represents a person’s mass.
- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSMassFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in a mass strings.
- [stringFromKilograms:](string%28fromkilograms_%29.md): Returns a mass string for the provided value.
- [stringFromValue:unit:](string%28fromvalue_unit_%29.md): Returns a properly formatted mass string for the given value and unit.
- [unitStringFromValue:unit:](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.
