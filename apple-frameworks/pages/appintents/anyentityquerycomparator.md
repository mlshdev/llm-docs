> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/anyentityquerycomparator](https://developer.apple.com/documentation/appintents/anyentityquerycomparator)

# AnyEntityQueryComparator

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that erases the type information of the underlying query comparator.

## Declaration

```swift
struct AnyEntityQueryComparator<Entity, Subject, Property, PropertyType, ComparatorMappingType> where Property : EntityProperty<PropertyType>, PropertyType : _IntentValue, PropertyType : Sendable
```

## See Also

### Building query comparators

- [buildBlock(\_:)](entityquerycomparatorsbuilder/buildblock%28__%29.md)
- [buildExpression(\_:)](entityquerycomparatorsbuilder/buildexpression%28__%29-4g6f9.md)
- [buildExpression(\_:)](entityquerycomparatorsbuilder/buildexpression%28__%29-5tlbq.md)
- [buildExpression(\_:)](entityquerycomparatorsbuilder/buildexpression%28__%29-6v6cj.md)
- [buildExpression(\_:)](entityquerycomparatorsbuilder/buildexpression%28__%29-8jx4k.md)
- [EntityQueryComparator](entityquerycomparator.md): The base class for all concrete entity query comparators.
