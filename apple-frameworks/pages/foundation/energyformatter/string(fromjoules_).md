> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/energyformatter/string(fromjoules:)](https://developer.apple.com/documentation/foundation/energyformatter/string(fromjoules:))

# string(fromJoules:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an energy string for the provided value.

## Declaration

```swift
func string(fromJoules numberInJoules: Double) -> String
```

## Parameters

- `numberInJoules`: The energy value in joules.

<a id="return-value"></a>

## Return Value

A string that combines a value and a unit string appropriate for the formatter’s locale.

<a id="Discussion"></a>

## Discussion

This method converts the provided value in joules into units appropriate to the formatter’s locale.

## See Also

### Formatting Energy Strings

- [isForFoodEnergyUse](isforfoodenergyuse.md): A Boolean value that indicates whether the energy value is used to measure food energy.
- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSEnergyFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in energy strings.
- [string(fromValue:unit:)](string%28fromvalue_unit_%29.md): Returns a properly formatted energy string for the given value and unit.
- [unitString(fromJoules:usedUnit:)](unitstring%28fromjoules_usedunit_%29.md): Returns the unit string for the provided value.
- [unitString(fromValue:unit:)](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.

# stringFromJoules: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an energy string for the provided value.

## Declaration

```objectivec
- (NSString *) stringFromJoules:(double) numberInJoules;
```

## Parameters

- `numberInJoules`: The energy value in joules.

<a id="return-value"></a>

## Return Value

A string that combines a value and a unit string appropriate for the formatter’s locale.

<a id="Discussion"></a>

## Discussion

This method converts the provided value in joules into units appropriate to the formatter’s locale.

## See Also

### Formatting Energy Strings

- [forFoodEnergyUse](isforfoodenergyuse.md): A Boolean value that indicates whether the energy value is used to measure food energy.
- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSEnergyFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in energy strings.
- [stringFromValue:unit:](string%28fromvalue_unit_%29.md): Returns a properly formatted energy string for the given value and unit.
- [unitStringFromJoules:usedUnit:](unitstring%28fromjoules_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStringFromValue:unit:](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.
