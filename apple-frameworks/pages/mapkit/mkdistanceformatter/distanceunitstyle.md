> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdistanceformatter/distanceunitstyle](https://developer.apple.com/documentation/mapkit/mkdistanceformatter/distanceunitstyle)

# MKDistanceFormatter.DistanceUnitStyle (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the format style to use for strings.

## Declaration

```swift
enum DistanceUnitStyle
```

## Topics

### Constants

- [MKDistanceFormatter.DistanceUnitStyle.default](distanceunitstyle/default.md): Bases the determination to abbreviate on the current locale and user language settings.
- [MKDistanceFormatter.DistanceUnitStyle.abbreviated](distanceunitstyle/abbreviated.md): Abbreviates units.
- [MKDistanceFormatter.DistanceUnitStyle.full](distanceunitstyle/full.md): Spells out units in full.
- [MKDistanceFormatter.DistanceUnitStyle.default](distanceunitstyle/default.md): Bases the determination to abbreviate on the current locale and user language settings.
- [MKDistanceFormatter.DistanceUnitStyle.abbreviated](distanceunitstyle/abbreviated.md): Abbreviates units.
- [MKDistanceFormatter.DistanceUnitStyle.full](distanceunitstyle/full.md): Spells out units in full.

### Initializers

- [init(rawValue:)](distanceunitstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the format

- [locale](locale.md): The locale to use when formatting strings.
- [units](units-swift.property.md): The measuring system — imperial or metric — to use for units.
- [MKDistanceFormatter.Units](units-swift.enum.md): Constants that reflect the type of units to use in the string.
- [unitStyle](unitstyle.md): The preferred style for units.

# MKDistanceFormatterUnitStyle (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the format style to use for strings.

## Declaration

```objectivec
enum MKDistanceFormatterUnitStyle : NSUInteger;
```

## Topics

### Constants

- [MKDistanceFormatterUnitStyleDefault](distanceunitstyle/default.md): Bases the determination to abbreviate on the current locale and user language settings.
- [MKDistanceFormatterUnitStyleAbbreviated](distanceunitstyle/abbreviated.md): Abbreviates units.
- [MKDistanceFormatterUnitStyleFull](distanceunitstyle/full.md): Spells out units in full.
- [MKDistanceFormatterUnitStyleDefault](distanceunitstyle/default.md): Bases the determination to abbreviate on the current locale and user language settings.
- [MKDistanceFormatterUnitStyleAbbreviated](distanceunitstyle/abbreviated.md): Abbreviates units.
- [MKDistanceFormatterUnitStyleFull](distanceunitstyle/full.md): Spells out units in full.

## See Also

### Specifying the format

- [locale](locale.md): The locale to use when formatting strings.
- [units](units-swift.property.md): The measuring system — imperial or metric — to use for units.
- [MKDistanceFormatterUnits](units-swift.enum.md): Constants that reflect the type of units to use in the string.
- [unitStyle](unitstyle.md): The preferred style for units.
