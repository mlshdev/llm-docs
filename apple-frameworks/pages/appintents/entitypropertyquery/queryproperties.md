> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entitypropertyquery/queryproperties](https://developer.apple.com/documentation/appintents/entitypropertyquery/queryproperties)

# EntityPropertyQuery.QueryProperties

**Framework:** App Intents  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
typealias QueryProperties = EntityQueryProperties<Self.Entity, Self.ComparatorMappingType>
```

## See Also

### Specifying the queryable properties

- [properties](properties.md): The set of query properties supported by this query.
- [EntityPropertyQuery.Property](property.md)
- [ComparatorMappingType](comparatormappingtype.md): Type produced by `EntityQueryComparator` mapping closures and supplied as input to `results`.
