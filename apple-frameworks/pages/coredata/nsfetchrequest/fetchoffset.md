> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/fetchoffset](https://developer.apple.com/documentation/coredata/nsfetchrequest/fetchoffset)

# fetchOffset (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The fetch offset of the fetch request.

## Declaration

```swift
var fetchOffset: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0`.

This setting allows you to specify an offset at which rows will begin being returned. Effectively, the request skips the specified number of matching entries. For example, given a fetch that typically returns `a, b, c, d`, specifying an offset of 1 will return `b, c, d`, and an offset of 4  will return an empty array. Offsets are ignored in nested requests such as subqueries.

This property can be used to restrict the working set of data.  In combination with [fetchLimit](fetchlimit.md), you can create a subrange of an arbitrary result set.

## See Also

### Specifying Fetch Constraints

- [predicate](predicate.md): The predicate of the fetch request.
- [fetchLimit](fetchlimit.md): The fetch limit of the fetch request.
- [fetchBatchSize](fetchbatchsize.md): The batch size of the objects specified in the fetch request.
- [affectedStores](affectedstores.md): An array of persistent stores specified for the fetch request.
- [NSFetchRequestExpression](../nsfetchrequestexpression.md): An expression that evaluates the result of a fetch request on a managed object context.
- [NSExpressionDescription](../nsexpressiondescription.md): An object that describes an expression to include with a fetch request.
- [NSFetchedPropertyDescription](../nsfetchedpropertydescription.md): A description object used to define which properties are fetched from Core Data.

# fetchOffset (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The fetch offset of the fetch request.

## Declaration

```objectivec
@property (nonatomic) NSUInteger fetchOffset;
```

<a id="Discussion"></a>

## Discussion

The default value is `0`.

This setting allows you to specify an offset at which rows will begin being returned. Effectively, the request skips the specified number of matching entries. For example, given a fetch that typically returns `a, b, c, d`, specifying an offset of 1 will return `b, c, d`, and an offset of 4  will return an empty array. Offsets are ignored in nested requests such as subqueries.

This property can be used to restrict the working set of data.  In combination with [fetchLimit](fetchlimit.md), you can create a subrange of an arbitrary result set.

## See Also

### Specifying Fetch Constraints

- [predicate](predicate.md): The predicate of the fetch request.
- [fetchLimit](fetchlimit.md): The fetch limit of the fetch request.
- [fetchBatchSize](fetchbatchsize.md): The batch size of the objects specified in the fetch request.
- [affectedStores](affectedstores.md): An array of persistent stores specified for the fetch request.
- [NSFetchRequestExpression](../nsfetchrequestexpression.md): An expression that evaluates the result of a fetch request on a managed object context.
- [NSExpressionDescription](../nsexpressiondescription.md): An object that describes an expression to include with a fetch request.
- [NSFetchedPropertyDescription](../nsfetchedpropertydescription.md): A description object used to define which properties are fetched from Core Data.
