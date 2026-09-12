> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataquery/searchitems](https://developer.apple.com/documentation/foundation/nsmetadataquery/searchitems)

# searchItems (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of objects that define the query’s scope.

## Declaration

```swift
var searchItems: [Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this method to scope the metadata query to a collection of existing URLs and/or metadata items. This array contains the `NSURL` and/or `NSMetadataItem` items to be searched.

## See Also

### Configuring queries

- [searchScopes](searchscopes.md): An array containing the search scopes.
- [predicate](predicate.md): The predicate used to filter query results.
- [sortDescriptors](sortdescriptors.md): An array of sort descriptor objects.
- [valueListAttributes](valuelistattributes.md): An array of attributes whose values are gathered by the query.
- [groupingAttributes](groupingattributes.md): An array of grouping attributes. (read-only)
- [notificationBatchingInterval](notificationbatchinginterval.md): The interval at which notification of updated results occurs.
- [delegate](delegate.md): The query’s delegate.

# searchItems (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of objects that define the query’s scope.

## Declaration

```objectivec
@property (copy, nullable) NSArray * searchItems;
```

<a id="Discussion"></a>

## Discussion

Use this method to scope the metadata query to a collection of existing URLs and/or metadata items. This array contains the `NSURL` and/or `NSMetadataItem` items to be searched.

## See Also

### Configuring queries

- [searchScopes](searchscopes.md): An array containing the search scopes.
- [predicate](predicate.md): The predicate used to filter query results.
- [sortDescriptors](sortdescriptors.md): An array of sort descriptor objects.
- [valueListAttributes](valuelistattributes.md): An array of attributes whose values are gathered by the query.
- [groupingAttributes](groupingattributes.md): An array of grouping attributes. (read-only)
- [notificationBatchingInterval](notificationbatchinginterval.md): The interval at which notification of updated results occurs.
- [delegate](delegate.md): The query’s delegate.
