> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdistanceformatter/units-swift.property](https://developer.apple.com/documentation/mapkit/mkdistanceformatter/units-swift.property)

# units (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The measuring system — imperial or metric — to use for units.

## Declaration

```swift
var units: MKDistanceFormatter.Units { get set }
```

<a id="Discussion"></a>

## Discussion

You can use this property to explicitly set the measuring system for units. The default value of this property is [MKDistanceFormatter.Units.default](units-swift.enum/default.md), which bases the measuring system on the user’s locale.

## See Also

### Specifying the format

- [locale](locale.md): The locale to use when formatting strings.
- [MKDistanceFormatter.Units](units-swift.enum.md): Constants that reflect the type of units to use in the string.
- [unitStyle](unitstyle.md): The preferred style for units.
- [MKDistanceFormatter.DistanceUnitStyle](distanceunitstyle.md): Constants that indicate the format style to use for strings.

# units (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The measuring system — imperial or metric — to use for units.

## Declaration

```objectivec
@property (nonatomic, assign) MKDistanceFormatterUnits units;
```

```objectivec
@property (atomic, assign) MKDistanceFormatterUnits units;
```

<a id="Discussion"></a>

## Discussion

You can use this property to explicitly set the measuring system for units. The default value of this property is [MKDistanceFormatterUnitsDefault](units-swift.enum/default.md), which bases the measuring system on the user’s locale.

## See Also

### Specifying the format

- [locale](locale.md): The locale to use when formatting strings.
- [MKDistanceFormatterUnits](units-swift.enum.md): Constants that reflect the type of units to use in the string.
- [unitStyle](unitstyle.md): The preferred style for units.
- [MKDistanceFormatterUnitStyle](distanceunitstyle.md): Constants that indicate the format style to use for strings.
