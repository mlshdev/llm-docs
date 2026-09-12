> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityqueryproperty/init(_:entityprovider:comparators:)](https://developer.apple.com/documentation/appintents/entityqueryproperty/init(_:entityprovider:comparators:))

# init(\_:entityProvider:comparators:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Initializes a EntityQueryProperty that applies to entity property at the provided keyPath.

## Declaration

```swift
init(_ keyPath: KeyPath<Subject, Property>, entityProvider: @escaping (Entity) -> Subject, @EntityQueryComparatorsBuilder<Entity, Subject, Property, PropertyType, ComparatorMappingType> comparators: () -> EntityQueryProperty<Entity, Subject, Property, PropertyType, ComparatorMappingType>.QueryComparators)
```

## Parameters

- `keyPath`: The keypath to the property that this EntityQueryProperty applies to. The target property type determines which comparator modifiers will be available.
- `entityProvider`: Closure which, given a `Entity` instance, returns the appropriate `Subject` instance to apply `EntityQueryComparator`s to.
- `comparators`: The set of `EntityQueryComparators` that this property supports being queried by.

## See Also

### Creating queryable properties

- [init(\_:comparators:)](init%28__comparators_%29.md): Initializes a EntityQueryProperty that applies to entity property at the provided keyPath.
- [EntityQueryProperty.QueryComparators](querycomparators.md): A type alias for the type that represents a collection of query comparators.
- [EntityQueryComparatorsBuilder](../entityquerycomparatorsbuilder.md): A result builder that allows you to declaratively describe the comparators for a queryable property.
