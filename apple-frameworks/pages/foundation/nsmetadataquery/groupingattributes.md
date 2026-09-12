> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataquery/groupingattributes](https://developer.apple.com/documentation/foundation/nsmetadataquery/groupingattributes)

# groupingAttributes (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of grouping attributes. (read-only)

## Declaration

```swift
var groupingAttributes: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property while a query is running stops the query and discards the current results. The receiver immediately starts a new query.

## See Also

### Configuring queries

- [searchScopes](searchscopes.md): An array containing the search scopes.
- [predicate](predicate.md): The predicate used to filter query results.
- [sortDescriptors](sortdescriptors.md): An array of sort descriptor objects.
- [valueListAttributes](valuelistattributes.md): An array of attributes whose values are gathered by the query.
- [notificationBatchingInterval](notificationbatchinginterval.md): The interval at which notification of updated results occurs.
- [delegate](delegate.md): The query’s delegate.
- [searchItems](searchitems.md): An array of objects that define the query’s scope.

# groupingAttributes (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of grouping attributes. (read-only)

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * groupingAttributes;
```

<a id="Discussion"></a>

## Discussion

Setting this property while a query is running stops the query and discards the current results. The receiver immediately starts a new query.

## See Also

### Configuring queries

- [searchScopes](searchscopes.md): An array containing the search scopes.
- [predicate](predicate.md): The predicate used to filter query results.
- [sortDescriptors](sortdescriptors.md): An array of sort descriptor objects.
- [valueListAttributes](valuelistattributes.md): An array of attributes whose values are gathered by the query.
- [notificationBatchingInterval](notificationbatchinginterval.md): The interval at which notification of updated results occurs.
- [delegate](delegate.md): The query’s delegate.
- [searchItems](searchitems.md): An array of objects that define the query’s scope.
