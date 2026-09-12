> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/fetchbatchsize](https://developer.apple.com/documentation/coredata/nsfetchrequest/fetchbatchsize)

# fetchBatchSize (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The batch size of the objects specified in the fetch request.

## Declaration

```swift
var fetchBatchSize: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0`. A batch size of `0` is treated as infinite, which disables the batch fetching behavior.

If you set a nonzero batch size, the collection of objects returned when an instance of [NSFetchRequest](../nsfetchrequest.md) is executed is broken into batches. When the fetch is executed, the entire request is evaluated and the identities of all matching objects recorded, but only data for objects up to the `batchSize` will be fetched from the persistent store at a time. The array returned from executing the request is a proxy object that transparently fetches subsequent batches on demand. (In database terms, this is an in-memory cursor.)

You can use this feature to restrict the working set of data in your application. In combination with [fetchLimit](fetchlimit.md), you can create a subrange of an arbitrary result set.

<a id="Special-Considerations"></a>

### Special Considerations

For purposes of thread safety, when the fetch is executed, consider the array proxy returned as being owned by the managed object context the request is executed against. Treat the array proxy as if it were a managed object registered with that context.

## See Also

### Specifying Fetch Constraints

- [predicate](predicate.md): The predicate of the fetch request.
- [fetchLimit](fetchlimit.md): The fetch limit of the fetch request.
- [fetchOffset](fetchoffset.md): The fetch offset of the fetch request.
- [affectedStores](affectedstores.md): An array of persistent stores specified for the fetch request.
- [NSFetchRequestExpression](../nsfetchrequestexpression.md): An expression that evaluates the result of a fetch request on a managed object context.
- [NSExpressionDescription](../nsexpressiondescription.md): An object that describes an expression to include with a fetch request.
- [NSFetchedPropertyDescription](../nsfetchedpropertydescription.md): A description object used to define which properties are fetched from Core Data.

# fetchBatchSize (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The batch size of the objects specified in the fetch request.

## Declaration

```objectivec
@property (nonatomic) NSUInteger fetchBatchSize;
```

<a id="Discussion"></a>

## Discussion

The default value is `0`. A batch size of `0` is treated as infinite, which disables the batch fetching behavior.

If you set a nonzero batch size, the collection of objects returned when an instance of [NSFetchRequest](../nsfetchrequest.md) is executed is broken into batches. When the fetch is executed, the entire request is evaluated and the identities of all matching objects recorded, but only data for objects up to the `batchSize` will be fetched from the persistent store at a time. The array returned from executing the request is a proxy object that transparently fetches subsequent batches on demand. (In database terms, this is an in-memory cursor.)

You can use this feature to restrict the working set of data in your application. In combination with [fetchLimit](fetchlimit.md), you can create a subrange of an arbitrary result set.

<a id="Special-Considerations"></a>

### Special Considerations

For purposes of thread safety, when the fetch is executed, consider the array proxy returned as being owned by the managed object context the request is executed against. Treat the array proxy as if it were a managed object registered with that context.

## See Also

### Specifying Fetch Constraints

- [predicate](predicate.md): The predicate of the fetch request.
- [fetchLimit](fetchlimit.md): The fetch limit of the fetch request.
- [fetchOffset](fetchoffset.md): The fetch offset of the fetch request.
- [affectedStores](affectedstores.md): An array of persistent stores specified for the fetch request.
- [NSFetchRequestExpression](../nsfetchrequestexpression.md): An expression that evaluates the result of a fetch request on a managed object context.
- [NSExpressionDescription](../nsexpressiondescription.md): An object that describes an expression to include with a fetch request.
- [NSFetchedPropertyDescription](../nsfetchedpropertydescription.md): A description object used to define which properties are fetched from Core Data.
