> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entitypropertyquery/properties

# properties

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The set of query properties supported by this query.

## Declaration

```swift
static var properties: Self.QueryProperties { get }
```

## See Also

### Specifying the queryable properties

- [EntityPropertyQuery.QueryProperties](queryproperties.md)
- [EntityPropertyQuery.Property](property.md)
- [ComparatorMappingType](comparatormappingtype.md): Type produced by `EntityQueryComparator` mapping closures and supplied as input to `results`.
