> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityquerysortingoptions](https://developer.apple.com/documentation/appintents/entityquerysortingoptions)

# EntityQuerySortingOptions

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The potential properties you can use to sort the results of a query.

## Declaration

```swift
struct EntityQuerySortingOptions<Entity> where Entity : AppEntity
```

## Topics

### Creating the sorting options

- [init(content:)](entityquerysortingoptions/init%28content_%29.md)
- [EntityQuerySortingOptionsBuilder](entityquerysortingoptionsbuilder.md): A result builder that allows you to declaratively describe the sorting options for an entity query.

### Getting the sorting options

- [subscript(\_:)](entityquerysortingoptions/subscript%28__%29.md)

### Initializers

- [init()](entityquerysortingoptions/init%28%29.md)

## See Also

### Sort options

- [EntityQuerySortableByProperty](entityquerysortablebyproperty.md): Details about a specific property you use to sort the query results.
- [EntityQuerySort](entityquerysort.md): The properties to use to sort the results when the query runs.
