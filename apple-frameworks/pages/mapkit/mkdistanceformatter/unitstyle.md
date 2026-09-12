> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdistanceformatter/unitstyle](https://developer.apple.com/documentation/mapkit/mkdistanceformatter/unitstyle)

# unitStyle (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The preferred style for units.

## Declaration

```swift
var unitStyle: MKDistanceFormatter.DistanceUnitStyle { get set }
```

<a id="Discussion"></a>

## Discussion

You can abbreviate or fully spell out units. The default value of this property is [MKDistanceFormatter.DistanceUnitStyle.default](distanceunitstyle/default.md), which bases the style on the user’s locale and language settings.

## See Also

### Specifying the format

- [locale](locale.md): The locale to use when formatting strings.
- [units](units-swift.property.md): The measuring system — imperial or metric — to use for units.
- [MKDistanceFormatter.Units](units-swift.enum.md): Constants that reflect the type of units to use in the string.
- [MKDistanceFormatter.DistanceUnitStyle](distanceunitstyle.md): Constants that indicate the format style to use for strings.

# unitStyle (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The preferred style for units.

## Declaration

```objectivec
@property (nonatomic, assign) MKDistanceFormatterUnitStyle unitStyle;
```

```objectivec
@property (atomic, assign) MKDistanceFormatterUnitStyle unitStyle;
```

<a id="Discussion"></a>

## Discussion

You can abbreviate or fully spell out units. The default value of this property is [MKDistanceFormatterUnitStyleDefault](distanceunitstyle/default.md), which bases the style on the user’s locale and language settings.

## See Also

### Specifying the format

- [locale](locale.md): The locale to use when formatting strings.
- [units](units-swift.property.md): The measuring system — imperial or metric — to use for units.
- [MKDistanceFormatterUnits](units-swift.enum.md): Constants that reflect the type of units to use in the string.
- [MKDistanceFormatterUnitStyle](distanceunitstyle.md): Constants that indicate the format style to use for strings.
