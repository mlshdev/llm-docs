> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/hasprefixcomparator](https://developer.apple.com/documentation/appintents/hasprefixcomparator)

# HasPrefixComparator

**Framework:** App Intents  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An object that determines whether the value of a string property has the specified prefix.

## Declaration

```swift
final class HasPrefixComparator<Property, PropertyType, InputType, ComparatorMappingType> where Property : EntityProperty<PropertyType>, PropertyType : _IntentValue, PropertyType : Sendable, InputType : _IntentValue
```

## Topics

### Creating a comparator

- [init(mappingTransform:)](hasprefixcomparator/init%28mappingtransform_%29-4i1bf.md): Declares support for the `hasPrefix` operator between a `String` property and user-supplied values.
- [init(mappingTransform:)](hasprefixcomparator/init%28mappingtransform_%29-5kri6.md): Declares support for the `hasPrefix` operator between a `String` property and user-supplied values.
- [init(withResolvers:mappingTransform:)](hasprefixcomparator/init%28withresolvers_mappingtransform_%29-2n67a.md): Declares support for the `hasPrefix` operator between a `String` property and user-supplied values.
- [init(withResolvers:mappingTransform:)](hasprefixcomparator/init%28withresolvers_mappingtransform_%29-48o75.md): Declares support for the `hasPrefix` operator between a `String` property and user-supplied values.

## Relationships

### Inherits From

- [EntityQueryComparator](entityquerycomparator.md)

## See Also

### String comparisons

- [HasSuffixComparator](hassuffixcomparator.md): An object that determines whether the value of a string property has the specified suffix.
- [StringComparisonOperator](stringcomparisonoperator.md)
