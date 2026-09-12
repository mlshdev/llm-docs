> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/energyformatter/unitstyle](https://developer.apple.com/documentation/foundation/energyformatter/unitstyle)

# unitStyle (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The unit style used by this formatter.

## Declaration

```swift
var unitStyle: Formatter.UnitStyle { get set }
```

<a id="Discussion"></a>

## Discussion

This property defaults to [Formatter.UnitStyle.medium](../formatter/unitstyle/medium.md). For a complete list of unit styles, see [Formatter.UnitStyle](../formatter/unitstyle.md).

## See Also

### Formatting Energy Strings

- [isForFoodEnergyUse](isforfoodenergyuse.md): A Boolean value that indicates whether the energy value is used to measure food energy.
- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSEnergyFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in energy strings.
- [string(fromJoules:)](string%28fromjoules_%29.md): Returns an energy string for the provided value.
- [string(fromValue:unit:)](string%28fromvalue_unit_%29.md): Returns a properly formatted energy string for the given value and unit.
- [unitString(fromJoules:usedUnit:)](unitstring%28fromjoules_usedunit_%29.md): Returns the unit string for the provided value.
- [unitString(fromValue:unit:)](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.

# unitStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The unit style used by this formatter.

## Declaration

```objectivec
@property NSFormattingUnitStyle unitStyle;
```

<a id="Discussion"></a>

## Discussion

This property defaults to [NSFormattingUnitStyleMedium](../formatter/unitstyle/medium.md). For a complete list of unit styles, see [NSFormattingUnitStyle](../formatter/unitstyle.md).

## See Also

### Formatting Energy Strings

- [forFoodEnergyUse](isforfoodenergyuse.md): A Boolean value that indicates whether the energy value is used to measure food energy.
- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSEnergyFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in energy strings.
- [stringFromJoules:](string%28fromjoules_%29.md): Returns an energy string for the provided value.
- [stringFromValue:unit:](string%28fromvalue_unit_%29.md): Returns a properly formatted energy string for the given value and unit.
- [unitStringFromJoules:usedUnit:](unitstring%28fromjoules_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStringFromValue:unit:](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
