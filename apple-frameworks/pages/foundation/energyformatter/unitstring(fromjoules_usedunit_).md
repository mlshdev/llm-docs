> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/energyformatter/unitstring(fromjoules:usedunit:)](https://developer.apple.com/documentation/foundation/energyformatter/unitstring(fromjoules:usedunit:))

# unitString(fromJoules:usedUnit:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the unit string for the provided value.

## Declaration

```swift
func unitString(fromJoules numberInJoules: Double, usedUnit unitp: UnsafeMutablePointer<EnergyFormatter.Unit>?) -> String
```

## Parameters

- `numberInJoules`: The energy value in joules.
- `unitp`: An output parameter. This will hold the [EnergyFormatter.Unit](unit.md) value that corresponds to the returned units.

<a id="return-value"></a>

## Return Value

A localized string representing the unit.

<a id="Discussion"></a>

## Discussion

This method selects the correct unit based on the formatter’s locale, the magnitude of the value, and the [isForFoodEnergyUse](isforfoodenergyuse.md) property.

## See Also

### Formatting Energy Strings

- [isForFoodEnergyUse](isforfoodenergyuse.md): A Boolean value that indicates whether the energy value is used to measure food energy.
- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSEnergyFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in energy strings.
- [string(fromJoules:)](string%28fromjoules_%29.md): Returns an energy string for the provided value.
- [string(fromValue:unit:)](string%28fromvalue_unit_%29.md): Returns a properly formatted energy string for the given value and unit.
- [unitString(fromValue:unit:)](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.

# unitStringFromJoules:usedUnit: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the unit string for the provided value.

## Declaration

```objectivec
- (NSString *) unitStringFromJoules:(double) numberInJoules usedUnit:(NSEnergyFormatterUnit *) unitp;
```

## Parameters

- `numberInJoules`: The energy value in joules.
- `unitp`: An output parameter. This will hold the [NSEnergyFormatterUnit](unit.md) value that corresponds to the returned units.

<a id="return-value"></a>

## Return Value

A localized string representing the unit.

<a id="Discussion"></a>

## Discussion

This method selects the correct unit based on the formatter’s locale, the magnitude of the value, and the [forFoodEnergyUse](isforfoodenergyuse.md) property.

## See Also

### Formatting Energy Strings

- [forFoodEnergyUse](isforfoodenergyuse.md): A Boolean value that indicates whether the energy value is used to measure food energy.
- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSEnergyFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in energy strings.
- [stringFromJoules:](string%28fromjoules_%29.md): Returns an energy string for the provided value.
- [stringFromValue:unit:](string%28fromvalue_unit_%29.md): Returns a properly formatted energy string for the given value and unit.
- [unitStringFromValue:unit:](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.
