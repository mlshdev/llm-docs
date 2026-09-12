> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearchcompleter/filtertype-swift.enum](https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/filtertype-swift.enum)

# MKLocalSearchCompleter.FilterType (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 9.3+ (deprecated in 13.0) · iPadOS 9.3+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11.4+ (deprecated in 10.15) · tvOS 9.2+ (deprecated in 13.0)

Constants indicating the types of search completions to return.

> Use [MKLocalSearchCompleter.ResultType](resulttype.md) instead.

## Declaration

```swift
enum FilterType
```

## Topics

### Constants

- [MKLocalSearchCompleter.FilterType.locationsAndQueries](filtertype-swift.enum/locationsandqueries.md): Deprecated. Points of interest and query suggestions. Specify this value when you want both map-based points of interest and common query terms used to find locations. For example, the search string `cof` yields a completion for *coffee*.
- [MKLocalSearchCompleter.FilterType.locationsOnly](filtertype-swift.enum/locationsonly.md): Deprecated. Points of interest only. Specify this value when you want the search string to yield completions that correspond to a specific point-of-interest on the map.
- [MKLocalSearchCompleter.FilterType.locationsAndQueries](filtertype-swift.enum/locationsandqueries.md): Deprecated. Points of interest and query suggestions. Specify this value when you want both map-based points of interest and common query terms used to find locations. For example, the search string `cof` yields a completion for *coffee*.
- [MKLocalSearchCompleter.FilterType.locationsOnly](filtertype-swift.enum/locationsonly.md): Deprecated. Points of interest only. Specify this value when you want the search string to yield completions that correspond to a specific point-of-interest on the map.

### Initializers

- [init(rawValue:)](filtertype-swift.enum/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [MKMapType](../mkmaptype.md): Deprecated. The type of map to display.
- [MKPinAnnotationColor](../mkpinannotationcolor.md): Deprecated. The supported colors for pin annotations.

# MKSearchCompletionFilterType (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 9.3+ (deprecated in 13.0) · iPadOS 9.3+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11.4+ (deprecated in 10.15) · tvOS 9.2+ (deprecated in 13.0)

Constants indicating the types of search completions to return.

> Use [MKLocalSearchCompleterResultType](resulttype.md) instead.

## Declaration

```objectivec
enum MKSearchCompletionFilterType : NSInteger;
```

## Topics

### Constants

- [MKSearchCompletionFilterTypeLocationsAndQueries](filtertype-swift.enum/locationsandqueries.md): Deprecated. Points of interest and query suggestions. Specify this value when you want both map-based points of interest and common query terms used to find locations. For example, the search string `cof` yields a completion for *coffee*.
- [MKSearchCompletionFilterTypeLocationsOnly](filtertype-swift.enum/locationsonly.md): Deprecated. Points of interest only. Specify this value when you want the search string to yield completions that correspond to a specific point-of-interest on the map.
- [MKSearchCompletionFilterTypeLocationsAndQueries](filtertype-swift.enum/locationsandqueries.md): Deprecated. Points of interest and query suggestions. Specify this value when you want both map-based points of interest and common query terms used to find locations. For example, the search string `cof` yields a completion for *coffee*.
- [MKSearchCompletionFilterTypeLocationsOnly](filtertype-swift.enum/locationsonly.md): Deprecated. Points of interest only. Specify this value when you want the search string to yield completions that correspond to a specific point-of-interest on the map.

## See Also

### Enumerations

- [MKMapType](../mkmaptype.md): Deprecated. The type of map to display.
- [MKPinAnnotationColor](../mkpinannotationcolor.md): Deprecated. The supported colors for pin annotations.
