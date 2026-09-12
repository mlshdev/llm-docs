> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/massformatter/isforpersonmassuse](https://developer.apple.com/documentation/foundation/massformatter/isforpersonmassuse)

# isForPersonMassUse (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the resulting string represents a person’s mass.

## Declaration

```swift
var isForPersonMassUse: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the value passed to [string(fromKilograms:)](string%28fromkilograms_%29.md) or [unitString(fromKilograms:usedUnit:)](unitstring%28fromkilograms_usedunit_%29.md) is a person’s mass; otherwise, [false](https://developer.apple.com/documentation/swift/false). By default, this property returns [false](https://developer.apple.com/documentation/swift/false).

The mass formatter uses this property when determining the best unit for a given locale (for example, in the [string(fromKilograms:)](string%28fromkilograms_%29.md) method).

## See Also

### Formatting Mass Strings

- [getObjectValue(\_:for:errorDescription:)](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSMassFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in a mass strings.
- [string(fromKilograms:)](string%28fromkilograms_%29.md): Returns a mass string for the provided value.
- [string(fromValue:unit:)](string%28fromvalue_unit_%29.md): Returns a properly formatted mass string for the given value and unit.
- [unitString(fromKilograms:usedUnit:)](unitstring%28fromkilograms_usedunit_%29.md): Returns the unit string for the provided value.
- [unitString(fromValue:unit:)](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.

# forPersonMassUse (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the resulting string represents a person’s mass.

## Declaration

```objectivec
@property (getter=isForPersonMassUse) BOOL forPersonMassUse;
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the value passed to [stringFromKilograms:](string%28fromkilograms_%29.md) or [unitStringFromKilograms:usedUnit:](unitstring%28fromkilograms_usedunit_%29.md) is a person’s mass; otherwise, [false](https://developer.apple.com/documentation/swift/false). By default, this property returns [false](https://developer.apple.com/documentation/swift/false).

The mass formatter uses this property when determining the best unit for a given locale (for example, in the [stringFromKilograms:](string%28fromkilograms_%29.md) method).

## See Also

### Formatting Mass Strings

- [getObjectValue:forString:errorDescription:](getobjectvalue%28__for_errordescription_%29.md): This method is not supported for the `NSMassFormatter` class.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in a mass strings.
- [stringFromKilograms:](string%28fromkilograms_%29.md): Returns a mass string for the provided value.
- [stringFromValue:unit:](string%28fromvalue_unit_%29.md): Returns a properly formatted mass string for the given value and unit.
- [unitStringFromKilograms:usedUnit:](unitstring%28fromkilograms_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStringFromValue:unit:](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.
