> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/hassuffixcomparator](https://developer.apple.com/documentation/appintents/hassuffixcomparator)

# HasSuffixComparator

**Framework:** App Intents  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An object that determines whether the value of a string property has the specified suffix.

## Declaration

```swift
final class HasSuffixComparator<Property, PropertyType, InputType, ComparatorMappingType> where Property : EntityProperty<PropertyType>, PropertyType : _IntentValue, PropertyType : Sendable, InputType : _IntentValue
```

## Topics

### Creating a comparator

- [init(mappingTransform:)](hassuffixcomparator/init%28mappingtransform_%29-4dp26.md): Declares support for the `hasSuffix` operator between a `String` property and user-supplied values.
- [init(mappingTransform:)](hassuffixcomparator/init%28mappingtransform_%29-5cmgi.md): Declares support for the `hasSuffix` operator between a `String?` property and user-supplied values.
- [init(withResolvers:mappingTransform:)](hassuffixcomparator/init%28withresolvers_mappingtransform_%29-5rtmw.md): Declares support for the `hasSuffix` operator between a `String?` property and user-supplied values.
- [init(withResolvers:mappingTransform:)](hassuffixcomparator/init%28withresolvers_mappingtransform_%29-7tdan.md): Declares support for the `hasSuffix` operator between a `String` property and user-supplied values.

## Relationships

### Inherits From

- [EntityQueryComparator](entityquerycomparator.md)

## See Also

### String comparisons

- [HasPrefixComparator](hasprefixcomparator.md): An object that determines whether the value of a string property has the specified prefix.
- [StringComparisonOperator](stringcomparisonoperator.md)
