> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityquerycomparatorsbuilder](https://developer.apple.com/documentation/appintents/entityquerycomparatorsbuilder)

# EntityQueryComparatorsBuilder

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A result builder that allows you to declaratively describe the comparators for a queryable property.

## Declaration

```swift
@resultBuilder enum EntityQueryComparatorsBuilder<Entity, Subject, Property, PropertyType, ComparatorMappingType> where Entity : AppEntity, Subject : AppEntity, Property : EntityProperty<PropertyType>, PropertyType : _IntentValue, PropertyType : Sendable
```

## Topics

### Building query comparators

- [buildBlock(\_:)](entityquerycomparatorsbuilder/buildblock%28__%29.md)
- [AnyEntityQueryComparator](anyentityquerycomparator.md): A type that erases the type information of the underlying query comparator.
- [buildExpression(\_:)](entityquerycomparatorsbuilder/buildexpression%28__%29-4g6f9.md)
- [buildExpression(\_:)](entityquerycomparatorsbuilder/buildexpression%28__%29-5tlbq.md)
- [buildExpression(\_:)](entityquerycomparatorsbuilder/buildexpression%28__%29-6v6cj.md)
- [buildExpression(\_:)](entityquerycomparatorsbuilder/buildexpression%28__%29-8jx4k.md)
- [EntityQueryComparator](entityquerycomparator.md): The base class for all concrete entity query comparators.

## See Also

### Creating queryable properties

- [init(\_:comparators:)](entityqueryproperty/init%28__comparators_%29.md): Initializes a EntityQueryProperty that applies to entity property at the provided keyPath.
- [init(\_:entityProvider:comparators:)](entityqueryproperty/init%28__entityprovider_comparators_%29.md): Initializes a EntityQueryProperty that applies to entity property at the provided keyPath.
- [EntityQueryProperty.QueryComparators](entityqueryproperty/querycomparators.md): A type alias for the type that represents a collection of query comparators.
