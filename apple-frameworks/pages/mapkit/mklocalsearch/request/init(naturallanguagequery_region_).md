> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mklocalsearch/request/init(naturallanguagequery:region:)

# init(naturalLanguageQuery:region:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes and returns a local search request based on the provided string and region.

## Declaration

```swift
convenience init(naturalLanguageQuery: String, region: MKCoordinateRegion)
```

## Parameters

- `naturalLanguageQuery`: A string containing the desired search item.
- `region`: A map region that provides a hint as to where to search.

## See Also

### Initializing a natural language search request

- [init(naturalLanguageQuery:)](init%28naturallanguagequery_%29.md): Initializes and returns a local search request based on the provided string.

# initWithNaturalLanguageQuery:region: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes and returns a local search request based on the provided string and region.

## Declaration

```objectivec
- (instancetype) initWithNaturalLanguageQuery:(NSString *) naturalLanguageQuery region:(MKCoordinateRegion) region;
```

## Parameters

- `naturalLanguageQuery`: A string containing the desired search item.
- `region`: A map region that provides a hint as to where to search.

## See Also

### Initializing a natural language search request

- [initWithNaturalLanguageQuery:](init%28naturallanguagequery_%29.md): Initializes and returns a local search request based on the provided string.
