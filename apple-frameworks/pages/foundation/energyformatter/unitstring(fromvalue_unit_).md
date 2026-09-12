> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/energyformatter/unitstring(fromvalue:unit:)](https://developer.apple.com/documentation/foundation/energyformatter/unitstring(fromvalue:unit:))

# unitString(fromValue:unit:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the unit string based on the provided value and unit.

## Declaration

```swift
func unitString(fromValue value: Double, unit: EnergyFormatter.Unit) -> String
```

## Parameters

- `value`: The energy value in the provided unit.
- `unit`: The unit to use in the resulting energy string.

<a id="return-value"></a>

## Return Value

A localized string representing the given unit. The provided value determines whether the unit is plural or singular.

## See Also

### Formatting Energy Strings

- [isForFoodEnergyUse](isforfoodenergyuse.md): A Boolean value that indicates whether the energy value is used to measure food energy.
- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSEnergyFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in energy strings.
- [string(fromJoules:)](string%28fromjoules_%29.md): Returns an energy string for the provided value.
- [string(fromValue:unit:)](string%28fromvalue_unit_%29.md): Returns a properly formatted energy string for the given value and unit.
- [unitString(fromJoules:usedUnit:)](unitstring%28fromjoules_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStyle](unitstyle.md): The unit style used by this formatter.

# unitStringFromValue:unit: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the unit string based on the provided value and unit.

## Declaration

```objectivec
- (NSString *) unitStringFromValue:(double) value unit:(NSEnergyFormatterUnit) unit;
```

## Parameters

- `value`: The energy value in the provided unit.
- `unit`: The unit to use in the resulting energy string.

<a id="return-value"></a>

## Return Value

A localized string representing the given unit. The provided value determines whether the unit is plural or singular.

## See Also

### Formatting Energy Strings

- [forFoodEnergyUse](isforfoodenergyuse.md): A Boolean value that indicates whether the energy value is used to measure food energy.
- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSEnergyFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in energy strings.
- [stringFromJoules:](string%28fromjoules_%29.md): Returns an energy string for the provided value.
- [stringFromValue:unit:](string%28fromvalue_unit_%29.md): Returns a properly formatted energy string for the given value and unit.
- [unitStringFromJoules:usedUnit:](unitstring%28fromjoules_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStyle](unitstyle.md): The unit style used by this formatter.
