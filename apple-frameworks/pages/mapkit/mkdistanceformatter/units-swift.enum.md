> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdistanceformatter/units-swift.enum](https://developer.apple.com/documentation/mapkit/mkdistanceformatter/units-swift.enum)

# MKDistanceFormatter.Units (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Constants that reflect the type of units to use in the string.

## Declaration

```swift
enum Units
```

## Topics

### Constants

- [MKDistanceFormatter.Units.default](units-swift.enum/default.md): The format uses the locale information to determine which units to use.
- [MKDistanceFormatter.Units.metric](units-swift.enum/metric.md): The format uses metric units.
- [MKDistanceFormatter.Units.imperial](units-swift.enum/imperial.md): The format uses imperial units.
- [MKDistanceFormatter.Units.imperialWithYards](units-swift.enum/imperialwithyards.md): The format uses imperial units that include measurements in yards.
- [MKDistanceFormatter.Units.default](units-swift.enum/default.md): The format uses the locale information to determine which units to use.
- [MKDistanceFormatter.Units.metric](units-swift.enum/metric.md): The format uses metric units.
- [MKDistanceFormatter.Units.imperial](units-swift.enum/imperial.md): The format uses imperial units.
- [MKDistanceFormatter.Units.imperialWithYards](units-swift.enum/imperialwithyards.md): The format uses imperial units that include measurements in yards.

### Initializers

- [init(rawValue:)](units-swift.enum/init%28rawvalue_%29.md)

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
- [unitStyle](unitstyle.md): The preferred style for units.
- [MKDistanceFormatter.DistanceUnitStyle](distanceunitstyle.md): Constants that indicate the format style to use for strings.

# MKDistanceFormatterUnits (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Constants that reflect the type of units to use in the string.

## Declaration

```objectivec
enum MKDistanceFormatterUnits : NSUInteger;
```

## Topics

### Constants

- [MKDistanceFormatterUnitsDefault](units-swift.enum/default.md): The format uses the locale information to determine which units to use.
- [MKDistanceFormatterUnitsMetric](units-swift.enum/metric.md): The format uses metric units.
- [MKDistanceFormatterUnitsImperial](units-swift.enum/imperial.md): The format uses imperial units.
- [MKDistanceFormatterUnitsImperialWithYards](units-swift.enum/imperialwithyards.md): The format uses imperial units that include measurements in yards.
- [MKDistanceFormatterUnitsDefault](units-swift.enum/default.md): The format uses the locale information to determine which units to use.
- [MKDistanceFormatterUnitsMetric](units-swift.enum/metric.md): The format uses metric units.
- [MKDistanceFormatterUnitsImperial](units-swift.enum/imperial.md): The format uses imperial units.
- [MKDistanceFormatterUnitsImperialWithYards](units-swift.enum/imperialwithyards.md): The format uses imperial units that include measurements in yards.

## See Also

### Specifying the format

- [locale](locale.md): The locale to use when formatting strings.
- [units](units-swift.property.md): The measuring system — imperial or metric — to use for units.
- [unitStyle](unitstyle.md): The preferred style for units.
- [MKDistanceFormatterUnitStyle](distanceunitstyle.md): Constants that indicate the format style to use for strings.
