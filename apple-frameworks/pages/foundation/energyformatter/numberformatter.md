> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/energyformatter/numberformatter](https://developer.apple.com/documentation/foundation/energyformatter/numberformatter)

# numberFormatter (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number formatter used to format the numbers in energy strings.

## Declaration

```swift
@NSCopying var numberFormatter: NumberFormatter! { get set }
```

<a id="Discussion"></a>

## Discussion

This property defaults to a number formatter using the [NumberFormatter.Style.decimal](../numberformatter/style/decimal.md) style. You can provide a different number formatter to customize the energy string’s appearance.

## See Also

### Formatting Energy Strings

- [isForFoodEnergyUse](isforfoodenergyuse.md): A Boolean value that indicates whether the energy value is used to measure food energy.
- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSEnergyFormatter` class.
- [string(fromJoules:)](string%28fromjoules_%29.md): Returns an energy string for the provided value.
- [string(fromValue:unit:)](string%28fromvalue_unit_%29.md): Returns a properly formatted energy string for the given value and unit.
- [unitString(fromJoules:usedUnit:)](unitstring%28fromjoules_usedunit_%29.md): Returns the unit string for the provided value.
- [unitString(fromValue:unit:)](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.

# numberFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number formatter used to format the numbers in energy strings.

## Declaration

```objectivec
@property (copy, null_resettable) NSNumberFormatter * numberFormatter;
```

<a id="Discussion"></a>

## Discussion

This property defaults to a number formatter using the [NSNumberFormatterDecimalStyle](../numberformatter/style/decimal.md) style. You can provide a different number formatter to customize the energy string’s appearance.

## See Also

### Formatting Energy Strings

- [forFoodEnergyUse](isforfoodenergyuse.md): A Boolean value that indicates whether the energy value is used to measure food energy.
- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSEnergyFormatter` class.
- [stringFromJoules:](string%28fromjoules_%29.md): Returns an energy string for the provided value.
- [stringFromValue:unit:](string%28fromvalue_unit_%29.md): Returns a properly formatted energy string for the given value and unit.
- [unitStringFromJoules:usedUnit:](unitstring%28fromjoules_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStringFromValue:unit:](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.
