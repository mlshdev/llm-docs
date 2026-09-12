> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/affectedstores](https://developer.apple.com/documentation/coredata/nsfetchrequest/affectedstores)

# affectedStores (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An array of persistent stores specified for the fetch request.

## Declaration

```swift
var affectedStores: [NSPersistentStore]? { get set }
```

<a id="Discussion"></a>

## Discussion

The contents of the array are the identifiers for the stores to be searched when the fetch request is executed.

## See Also

### Specifying Fetch Constraints

- [predicate](predicate.md): The predicate of the fetch request.
- [fetchLimit](fetchlimit.md): The fetch limit of the fetch request.
- [fetchOffset](fetchoffset.md): The fetch offset of the fetch request.
- [fetchBatchSize](fetchbatchsize.md): The batch size of the objects specified in the fetch request.
- [NSFetchRequestExpression](../nsfetchrequestexpression.md): An expression that evaluates the result of a fetch request on a managed object context.
- [NSExpressionDescription](../nsexpressiondescription.md): An object that describes an expression to include with a fetch request.
- [NSFetchedPropertyDescription](../nsfetchedpropertydescription.md): A description object used to define which properties are fetched from Core Data.

# affectedStores (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An array of persistent stores specified for the fetch request.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSArray<NSPersistentStore *> * affectedStores;
```

<a id="Discussion"></a>

## Discussion

The contents of the array are the identifiers for the stores to be searched when the fetch request is executed.

## See Also

### Specifying Fetch Constraints

- [predicate](predicate.md): The predicate of the fetch request.
- [fetchLimit](fetchlimit.md): The fetch limit of the fetch request.
- [fetchOffset](fetchoffset.md): The fetch offset of the fetch request.
- [fetchBatchSize](fetchbatchsize.md): The batch size of the objects specified in the fetch request.
- [NSFetchRequestExpression](../nsfetchrequestexpression.md): An expression that evaluates the result of a fetch request on a managed object context.
- [NSExpressionDescription](../nsexpressiondescription.md): An object that describes an expression to include with a fetch request.
- [NSFetchedPropertyDescription](../nsfetchedpropertydescription.md): A description object used to define which properties are fetched from Core Data.
