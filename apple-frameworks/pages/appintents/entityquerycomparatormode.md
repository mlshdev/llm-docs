> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityquerycomparatormode](https://developer.apple.com/documentation/appintents/entityquerycomparatormode)

# EntityQueryComparatorMode

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Modes that determine how to apply a query’s comparators.

## Declaration

```swift
@frozen enum EntityQueryComparatorMode
```

## Topics

### Comparator modes

- [EntityQueryComparatorMode.and](entityquerycomparatormode/and.md)
- [EntityQueryComparatorMode.or](entityquerycomparatormode/or.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Searching for entities

- [entities(matching:mode:sortedBy:limit:)](entitypropertyquery/entities%28matching_mode_sortedby_limit_%29.md): Retrieves instances matching the supplied comparators.
- [EntityPropertyQuery.Sort](entitypropertyquery/sort.md)
- [EntityPropertyQuery.ComparatorMode](entitypropertyquery/comparatormode.md)
