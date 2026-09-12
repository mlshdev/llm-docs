> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/predicate](https://developer.apple.com/documentation/coredata/nsfetchrequest/predicate)

# predicate (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The predicate of the fetch request.

## Declaration

```swift
var predicate: NSPredicate? { get set }
```

<a id="Discussion"></a>

## Discussion

The predicate instance constrains the selection of objects the [NSFetchRequest](../nsfetchrequest.md) instance is to fetch.

If the predicate is empty—for example, if it is an `AND` predicate whose array of elements contains no predicates—the request has its predicate set to `nil`. For more about predicates, see [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789).

## See Also

### Specifying Fetch Constraints

- [fetchLimit](fetchlimit.md): The fetch limit of the fetch request.
- [fetchOffset](fetchoffset.md): The fetch offset of the fetch request.
- [fetchBatchSize](fetchbatchsize.md): The batch size of the objects specified in the fetch request.
- [affectedStores](affectedstores.md): An array of persistent stores specified for the fetch request.
- [NSFetchRequestExpression](../nsfetchrequestexpression.md): An expression that evaluates the result of a fetch request on a managed object context.
- [NSExpressionDescription](../nsexpressiondescription.md): An object that describes an expression to include with a fetch request.
- [NSFetchedPropertyDescription](../nsfetchedpropertydescription.md): A description object used to define which properties are fetched from Core Data.

# predicate (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The predicate of the fetch request.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSPredicate * predicate;
```

<a id="Discussion"></a>

## Discussion

The predicate instance constrains the selection of objects the [NSFetchRequest](../nsfetchrequest.md) instance is to fetch.

If the predicate is empty—for example, if it is an `AND` predicate whose array of elements contains no predicates—the request has its predicate set to `nil`. For more about predicates, see [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789).

## See Also

### Specifying Fetch Constraints

- [fetchLimit](fetchlimit.md): The fetch limit of the fetch request.
- [fetchOffset](fetchoffset.md): The fetch offset of the fetch request.
- [fetchBatchSize](fetchbatchsize.md): The batch size of the objects specified in the fetch request.
- [affectedStores](affectedstores.md): An array of persistent stores specified for the fetch request.
- [NSFetchRequestExpression](../nsfetchrequestexpression.md): An expression that evaluates the result of a fetch request on a managed object context.
- [NSExpressionDescription](../nsexpressiondescription.md): An object that describes an expression to include with a fetch request.
- [NSFetchedPropertyDescription](../nsfetchedpropertydescription.md): A description object used to define which properties are fetched from Core Data.
