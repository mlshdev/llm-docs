> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdistanceformatter/locale](https://developer.apple.com/documentation/mapkit/mkdistanceformatter/locale)

# locale (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The locale to use when formatting strings.

## Declaration

```swift
var locale: Locale! { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t specify an explicit locale, the formatter uses the user’s current locale information.

## See Also

### Specifying the format

- [units](units-swift.property.md): The measuring system — imperial or metric — to use for units.
- [MKDistanceFormatter.Units](units-swift.enum.md): Constants that reflect the type of units to use in the string.
- [unitStyle](unitstyle.md): The preferred style for units.
- [MKDistanceFormatter.DistanceUnitStyle](distanceunitstyle.md): Constants that indicate the format style to use for strings.

# locale (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The locale to use when formatting strings.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSLocale * locale;
```

```objectivec
@property (atomic, copy, null_resettable) NSLocale * locale;
```

<a id="Discussion"></a>

## Discussion

If you don’t specify an explicit locale, the formatter uses the user’s current locale information.

## See Also

### Specifying the format

- [units](units-swift.property.md): The measuring system — imperial or metric — to use for units.
- [MKDistanceFormatterUnits](units-swift.enum.md): Constants that reflect the type of units to use in the string.
- [unitStyle](unitstyle.md): The preferred style for units.
- [MKDistanceFormatterUnitStyle](distanceunitstyle.md): Constants that indicate the format style to use for strings.
