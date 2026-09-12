> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityqueryproperty/querycomparators](https://developer.apple.com/documentation/appintents/entityqueryproperty/querycomparators)

# EntityQueryProperty.QueryComparators

**Framework:** App Intents  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type alias for the type that represents a collection of query comparators.

## Declaration

```swift
typealias QueryComparators = [AnyEntityQueryComparator<Entity, Subject, Property, PropertyType, ComparatorMappingType>]
```

## See Also

### Creating queryable properties

- [init(\_:comparators:)](init%28__comparators_%29.md): Initializes a EntityQueryProperty that applies to entity property at the provided keyPath.
- [init(\_:entityProvider:comparators:)](init%28__entityprovider_comparators_%29.md): Initializes a EntityQueryProperty that applies to entity property at the provided keyPath.
- [EntityQueryComparatorsBuilder](../entityquerycomparatorsbuilder.md): A result builder that allows you to declaratively describe the comparators for a queryable property.
