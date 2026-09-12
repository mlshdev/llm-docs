> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/property-comparators](https://developer.apple.com/documentation/appintents/property-comparators)

# Property comparators

**Framework:** App Intents  
**Kind:** API Collection

Specify the type of comparison to perform during a property-matched query.

## Topics

### Equatable comparisons

- [EqualToComparator](equaltocomparator.md): An object that determines whether the value of an equatable property is equal to the specified value.
- [NotEqualToComparator](notequaltocomparator.md): An object that determines whether the value of an equatable property is not equal to the specified value.
- [GreaterThanComparator](greaterthancomparator.md): An object that determines whether the value of a comparable property is greater than the specified value.
- [GreaterThanOrEqualToComparator](greaterthanorequaltocomparator.md): An object that determines whether the value of a comparable property is greater than or equal to the specified value.
- [LessThanComparator](lessthancomparator.md): An object that determines whether the value of a comparable property is less than the specified value.
- [LessThanOrEqualToComparator](lessthanorequaltocomparator.md): An object that determines whether the value of a comparable property is less than or equal to the specified value.
- [IsBetweenComparator](isbetweencomparator.md): This comparator is only supported for `Date` types in Shortcuts.

### String comparisons

- [HasPrefixComparator](hasprefixcomparator.md): An object that determines whether the value of a string property has the specified prefix.
- [HasSuffixComparator](hassuffixcomparator.md): An object that determines whether the value of a string property has the specified suffix.
- [StringComparisonOperator](stringcomparisonoperator.md)

### Containment comparisons

- [ContainsComparator](containscomparator.md): An object that determines whether the value of sequence property contains the specified value.

## See Also

### Property declarations

- [ComputedProperty()](computedproperty%28%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(title:)](computedproperty%28title_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(indexingKey:)](computedproperty%28indexingkey_%29.md): A macro that adds a computed app entity property with get and set accessors.
- [ComputedProperty(customIndexingKey:)](computedproperty%28customindexingkey_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(title:customIndexingKey:)](computedproperty%28title_customindexingkey_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(title:indexingKey:)](computedproperty%28title_indexingkey_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [DeferredProperty()](deferredproperty%28%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [DeferredProperty(title:)](deferredproperty%28title_%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [DeferredProperty(indexingKey:)](deferredproperty%28indexingkey_%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [DeferredProperty(title:indexingKey:)](deferredproperty%28title_indexingkey_%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [EntityProperty](entityproperty.md): A property wrapper that exposes the associated property to the system.
- [EntityPropertyModifiers](entitypropertymodifiers.md)
