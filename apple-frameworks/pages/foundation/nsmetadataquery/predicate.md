> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataquery/predicate](https://developer.apple.com/documentation/foundation/nsmetadataquery/predicate)

# predicate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The predicate used to filter query results.

## Declaration

```swift
@NSCopying var predicate: NSPredicate? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property while a query is running stops the query and discards the current results. The receiver immediately starts a new query.

## See Also

### Configuring queries

- [searchScopes](searchscopes.md): An array containing the search scopes.
- [sortDescriptors](sortdescriptors.md): An array of sort descriptor objects.
- [valueListAttributes](valuelistattributes.md): An array of attributes whose values are gathered by the query.
- [groupingAttributes](groupingattributes.md): An array of grouping attributes. (read-only)
- [notificationBatchingInterval](notificationbatchinginterval.md): The interval at which notification of updated results occurs.
- [delegate](delegate.md): The query’s delegate.
- [searchItems](searchitems.md): An array of objects that define the query’s scope.

# predicate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The predicate used to filter query results.

## Declaration

```objectivec
@property (copy, nullable) NSPredicate * predicate;
```

<a id="Discussion"></a>

## Discussion

Setting this property while a query is running stops the query and discards the current results. The receiver immediately starts a new query.

## See Also

### Configuring queries

- [searchScopes](searchscopes.md): An array containing the search scopes.
- [sortDescriptors](sortdescriptors.md): An array of sort descriptor objects.
- [valueListAttributes](valuelistattributes.md): An array of attributes whose values are gathered by the query.
- [groupingAttributes](groupingattributes.md): An array of grouping attributes. (read-only)
- [notificationBatchingInterval](notificationbatchinginterval.md): The interval at which notification of updated results occurs.
- [delegate](delegate.md): The query’s delegate.
- [searchItems](searchitems.md): An array of objects that define the query’s scope.
