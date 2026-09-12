> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/greaterthanorequaltocomparator](https://developer.apple.com/documentation/appintents/greaterthanorequaltocomparator)

# GreaterThanOrEqualToComparator

**Framework:** App Intents  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An object that determines whether the value of a comparable property is greater than or equal to the specified value.

## Declaration

```swift
final class GreaterThanOrEqualToComparator<Property, PropertyType, ComparatorMappingType> where Property : EntityProperty<PropertyType>, PropertyType : _IntentValue, PropertyType : Sendable, PropertyType.UnwrappedType : Comparable
```

## Topics

### Creating a comparator

- [init(mappingTransform:)](greaterthanorequaltocomparator/init%28mappingtransform_%29.md): Declares support for `Comparable` `>` comparisons between a property and user-supplied values.
- [init(mappingTransform:)](greaterthanorequaltocomparator/init%28mappingtransform_%29.md): Declares support for `Comparable` `>` comparisons between a property and user-supplied values.
- [init(withResolvers:mappingTransform:)](greaterthanorequaltocomparator/init%28withresolvers_mappingtransform_%29.md): Declares support for `Comparable` `>` comparisons between a property and user-supplied values.
- [init(withResolvers:mappingTransform:)](greaterthanorequaltocomparator/init%28withresolvers_mappingtransform_%29.md): Declares support for `Comparable` `>` comparisons between a property and user-supplied values.

## Relationships

### Inherits From

- [EntityQueryComparator](entityquerycomparator.md)

## See Also

### Equatable comparisons

- [EqualToComparator](equaltocomparator.md): An object that determines whether the value of an equatable property is equal to the specified value.
- [NotEqualToComparator](notequaltocomparator.md): An object that determines whether the value of an equatable property is not equal to the specified value.
- [GreaterThanComparator](greaterthancomparator.md): An object that determines whether the value of a comparable property is greater than the specified value.
- [LessThanComparator](lessthancomparator.md): An object that determines whether the value of a comparable property is less than the specified value.
- [LessThanOrEqualToComparator](lessthanorequaltocomparator.md): An object that determines whether the value of a comparable property is less than or equal to the specified value.
- [IsBetweenComparator](isbetweencomparator.md): This comparator is only supported for `Date` types in Shortcuts.
