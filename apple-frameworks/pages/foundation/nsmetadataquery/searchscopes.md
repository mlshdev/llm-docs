> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataquery/searchscopes](https://developer.apple.com/documentation/foundation/nsmetadataquery/searchscopes)

# searchScopes (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array containing the search scopes.

## Declaration

```swift
var searchScopes: [Any] { get set }
```

<a id="Discussion"></a>

## Discussion

This array can contain `NSURL` or `NSString` objects that represent file-system directories or the search scopes for the query. For a list of valid search scopes, see [Metadata Query Search Scopes](../metadata-query-search-scopes.md). An empty array indicates that there is no limitation on where the query searches.

## See Also

### Related Documentation

- [File Metadata Search Programming Guide](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/SpotlightQuery/Concepts/Introduction.html#//apple_ref/doc/uid/TP40001841)

### Configuring queries

- [predicate](predicate.md): The predicate used to filter query results.
- [sortDescriptors](sortdescriptors.md): An array of sort descriptor objects.
- [valueListAttributes](valuelistattributes.md): An array of attributes whose values are gathered by the query.
- [groupingAttributes](groupingattributes.md): An array of grouping attributes. (read-only)
- [notificationBatchingInterval](notificationbatchinginterval.md): The interval at which notification of updated results occurs.
- [delegate](delegate.md): The query’s delegate.
- [searchItems](searchitems.md): An array of objects that define the query’s scope.

# searchScopes (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array containing the search scopes.

## Declaration

```objectivec
@property (copy) NSArray * searchScopes;
```

<a id="Discussion"></a>

## Discussion

This array can contain `NSURL` or `NSString` objects that represent file-system directories or the search scopes for the query. For a list of valid search scopes, see [Metadata Query Search Scopes](../metadata-query-search-scopes.md). An empty array indicates that there is no limitation on where the query searches.

## See Also

### Related Documentation

- [File Metadata Search Programming Guide](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/SpotlightQuery/Concepts/Introduction.html#//apple_ref/doc/uid/TP40001841)

### Configuring queries

- [predicate](predicate.md): The predicate used to filter query results.
- [sortDescriptors](sortdescriptors.md): An array of sort descriptor objects.
- [valueListAttributes](valuelistattributes.md): An array of attributes whose values are gathered by the query.
- [groupingAttributes](groupingattributes.md): An array of grouping attributes. (read-only)
- [notificationBatchingInterval](notificationbatchinginterval.md): The interval at which notification of updated results occurs.
- [delegate](delegate.md): The query’s delegate.
- [searchItems](searchitems.md): An array of objects that define the query’s scope.
