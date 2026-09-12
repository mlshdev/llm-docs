> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/massformatter/numberformatter](https://developer.apple.com/documentation/foundation/massformatter/numberformatter)

# numberFormatter (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number formatter used to format the numbers in a mass strings.

## Declaration

```swift
@NSCopying var numberFormatter: NumberFormatter! { get set }
```

<a id="Discussion"></a>

## Discussion

This property defaults to a number formatter using the [NumberFormatter.Style.decimal](../numberformatter/style/decimal.md) style. You can provide a different number formatter to customize the mass string’s appearance.

## See Also

### Formatting Mass Strings

- [isForPersonMassUse](isforpersonmassuse.md): A Boolean value that indicates whether the resulting string represents a person’s mass.
- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSMassFormatter` class.
- [string(fromKilograms:)](string%28fromkilograms_%29.md): Returns a mass string for the provided value.
- [string(fromValue:unit:)](string%28fromvalue_unit_%29.md): Returns a properly formatted mass string for the given value and unit.
- [unitString(fromKilograms:usedUnit:)](unitstring%28fromkilograms_usedunit_%29.md): Returns the unit string for the provided value.
- [unitString(fromValue:unit:)](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.

# numberFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number formatter used to format the numbers in a mass strings.

## Declaration

```objectivec
@property (copy, null_resettable) NSNumberFormatter * numberFormatter;
```

<a id="Discussion"></a>

## Discussion

This property defaults to a number formatter using the [NSNumberFormatterDecimalStyle](../numberformatter/style/decimal.md) style. You can provide a different number formatter to customize the mass string’s appearance.

## See Also

### Formatting Mass Strings

- [forPersonMassUse](isforpersonmassuse.md): A Boolean value that indicates whether the resulting string represents a person’s mass.
- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSMassFormatter` class.
- [stringFromKilograms:](string%28fromkilograms_%29.md): Returns a mass string for the provided value.
- [stringFromValue:unit:](string%28fromvalue_unit_%29.md): Returns a properly formatted mass string for the given value and unit.
- [unitStringFromKilograms:usedUnit:](unitstring%28fromkilograms_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStringFromValue:unit:](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.
