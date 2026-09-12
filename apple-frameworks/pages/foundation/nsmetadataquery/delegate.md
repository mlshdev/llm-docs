> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataquery/delegate](https://developer.apple.com/documentation/foundation/nsmetadataquery/delegate)

# delegate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The query’s delegate.

## Declaration

```swift
unowned(unsafe) var delegate: (any NSMetadataQueryDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains an object that acts as the query’s delegate, or `nil`. The delegate must implement the [NSMetadataQueryDelegate](../nsmetadataquerydelegate.md). Pass `nil` to remove the current delegate.

## See Also

### Configuring queries

- [searchScopes](searchscopes.md): An array containing the search scopes.
- [predicate](predicate.md): The predicate used to filter query results.
- [sortDescriptors](sortdescriptors.md): An array of sort descriptor objects.
- [valueListAttributes](valuelistattributes.md): An array of attributes whose values are gathered by the query.
- [groupingAttributes](groupingattributes.md): An array of grouping attributes. (read-only)
- [notificationBatchingInterval](notificationbatchinginterval.md): The interval at which notification of updated results occurs.
- [searchItems](searchitems.md): An array of objects that define the query’s scope.

# delegate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The query’s delegate.

## Declaration

```objectivec
@property (assign, nullable) id<NSMetadataQueryDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

This property contains an object that acts as the query’s delegate, or `nil`. The delegate must implement the [NSMetadataQueryDelegate](../nsmetadataquerydelegate.md). Pass `nil` to remove the current delegate.

## See Also

### Configuring queries

- [searchScopes](searchscopes.md): An array containing the search scopes.
- [predicate](predicate.md): The predicate used to filter query results.
- [sortDescriptors](sortdescriptors.md): An array of sort descriptor objects.
- [valueListAttributes](valuelistattributes.md): An array of attributes whose values are gathered by the query.
- [groupingAttributes](groupingattributes.md): An array of grouping attributes. (read-only)
- [notificationBatchingInterval](notificationbatchinginterval.md): The interval at which notification of updated results occurs.
- [searchItems](searchitems.md): An array of objects that define the query’s scope.
