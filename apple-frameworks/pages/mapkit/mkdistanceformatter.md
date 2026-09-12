> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdistanceformatter](https://developer.apple.com/documentation/mapkit/mkdistanceformatter)

# MKDistanceFormatter (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

A utility object that converts between a geographic distance and a string-based expression of that distance.

## Declaration

```swift
class MKDistanceFormatter
```

<a id="overview"></a>

## Overview

Use a distance formatter to display distances to the user or to parse user-specified text to obtain a numerical value for a distance. When formatting strings containing distances, a distance formatter object takes into account the user’s locale and language settings. You can also specify a custom locale or custom units for any distances that you format.

## Topics

### Converting distances

- [string(fromDistance:)](mkdistanceformatter/string%28fromdistance_%29.md): Creates a string representation of the specified distance.
- [distance(from:)](mkdistanceformatter/distance%28from_%29.md): Returns the distance value parsed from the specified string.

### Specifying the format

- [locale](mkdistanceformatter/locale.md): The locale to use when formatting strings.
- [units](mkdistanceformatter/units-swift.property.md): The measuring system — imperial or metric — to use for units.
- [MKDistanceFormatter.Units](mkdistanceformatter/units-swift.enum.md): Constants that reflect the type of units to use in the string.
- [unitStyle](mkdistanceformatter/unitstyle.md): The preferred style for units.
- [MKDistanceFormatter.DistanceUnitStyle](mkdistanceformatter/distanceunitstyle.md): Constants that indicate the format style to use for strings.

## Relationships

### Inherits From

- [Formatter](../foundation/formatter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Map coordinates

- [MKCoordinateRegion](mkcoordinateregion.md): A rectangular geographic region that centers around a specific latitude and longitude.
- [MKCoordinateSpan](mkcoordinatespan.md): The width and height of a map region.
- [MKMapRect](mkmaprect.md): A rectangular area on a two-dimensional map projection.
- [MKMapPoint](mkmappoint.md): A point on a two-dimensional map projection.
- [MKMapSize](mkmapsize.md): Width and height information on a two-dimensional map projection.

# MKDistanceFormatter (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

A utility object that converts between a geographic distance and a string-based expression of that distance.

## Declaration

```objectivec
@interface MKDistanceFormatter : NSFormatter
```

<a id="overview"></a>

## Overview

Use a distance formatter to display distances to the user or to parse user-specified text to obtain a numerical value for a distance. When formatting strings containing distances, a distance formatter object takes into account the user’s locale and language settings. You can also specify a custom locale or custom units for any distances that you format.

## Topics

### Converting distances

- [stringFromDistance:](mkdistanceformatter/string%28fromdistance_%29.md): Creates a string representation of the specified distance.
- [distanceFromString:](mkdistanceformatter/distance%28from_%29.md): Returns the distance value parsed from the specified string.

### Specifying the format

- [locale](mkdistanceformatter/locale.md): The locale to use when formatting strings.
- [units](mkdistanceformatter/units-swift.property.md): The measuring system — imperial or metric — to use for units.
- [MKDistanceFormatterUnits](mkdistanceformatter/units-swift.enum.md): Constants that reflect the type of units to use in the string.
- [unitStyle](mkdistanceformatter/unitstyle.md): The preferred style for units.
- [MKDistanceFormatterUnitStyle](mkdistanceformatter/distanceunitstyle.md): Constants that indicate the format style to use for strings.

## Relationships

### Inherits From

- [NSFormatter](../foundation/formatter.md)

## See Also

### Map coordinates

- [MKCoordinateRegion](mkcoordinateregion.md): A rectangular geographic region that centers around a specific latitude and longitude.
- [MKCoordinateSpan](mkcoordinatespan.md): The width and height of a map region.
- [MKMapRect](mkmaprect.md): A rectangular area on a two-dimensional map projection.
- [MKMapPoint](mkmappoint.md): A point on a two-dimensional map projection.
- [MKMapSize](mkmapsize.md): Width and height information on a two-dimensional map projection.
