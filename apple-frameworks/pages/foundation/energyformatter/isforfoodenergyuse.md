> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/energyformatter/isforfoodenergyuse](https://developer.apple.com/documentation/foundation/energyformatter/isforfoodenergyuse)

# isForFoodEnergyUse (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the energy value is used to measure food energy.

## Declaration

```swift
var isForFoodEnergyUse: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the energy is used to measure food energy; otherwise, [false](https://developer.apple.com/documentation/swift/false). If set to [true](https://developer.apple.com/documentation/swift/true), [EnergyFormatter.Unit.kilocalorie](unit/kilocalorie.md) may be represented using “C” instead of “kcal”. By default, this property returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Formatting Energy Strings

- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSEnergyFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in energy strings.
- [string(fromJoules:)](string%28fromjoules_%29.md): Returns an energy string for the provided value.
- [string(fromValue:unit:)](string%28fromvalue_unit_%29.md): Returns a properly formatted energy string for the given value and unit.
- [unitString(fromJoules:usedUnit:)](unitstring%28fromjoules_usedunit_%29.md): Returns the unit string for the provided value.
- [unitString(fromValue:unit:)](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.

# forFoodEnergyUse (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the energy value is used to measure food energy.

## Declaration

```objectivec
@property (getter=isForFoodEnergyUse) BOOL forFoodEnergyUse;
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the energy is used to measure food energy; otherwise, [false](https://developer.apple.com/documentation/swift/false). If set to [true](https://developer.apple.com/documentation/swift/true), [NSEnergyFormatterUnitKilocalorie](unit/kilocalorie.md) may be represented using “C” instead of “kcal”. By default, this property returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Formatting Energy Strings

- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSEnergyFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in energy strings.
- [stringFromJoules:](string%28fromjoules_%29.md): Returns an energy string for the provided value.
- [stringFromValue:unit:](string%28fromvalue_unit_%29.md): Returns a properly formatted energy string for the given value and unit.
- [unitStringFromJoules:usedUnit:](unitstring%28fromjoules_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStringFromValue:unit:](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.
