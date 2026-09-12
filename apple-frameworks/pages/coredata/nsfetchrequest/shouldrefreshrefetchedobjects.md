> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/shouldrefreshrefetchedobjects](https://developer.apple.com/documentation/coredata/nsfetchrequest/shouldrefreshrefetchedobjects)

# shouldRefreshRefetchedObjects (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the property values of fetched objects will be updated with the current values in the persistent store.

## Declaration

```swift
var shouldRefreshRefetchedObjects: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the property values of fetched objects will be updated with the current values in the persistent store; otherwise, it is [false](https://developer.apple.com/documentation/swift/false).

By default when you fetch objects, they maintain their current property values, even if the values in the persistent store have changed. Invoking this method with the parameter [true](https://developer.apple.com/documentation/swift/true) means that when the fetch is executed, the property values of fetched objects are updated with the current values in the persistent store. This is a more convenient way to ensure that managed object property values are consistent with the store than by using [refresh(\_:mergeChanges:)](../nsmanagedobjectcontext/refresh%28__mergechanges_%29.md) (`NSManagedObjetContext`) for multiple objects in turn.

## See Also

### Managing How Results Are Returned

- [resultType](resulttype.md): The result type of the fetch request.
- [includesPendingChanges](includespendingchanges.md): A Boolean value that indicates whether, when the fetch is executed, it matches against currently unsaved changes in the managed object context.
- [propertiesToFetch](propertiestofetch.md): A collection of either property descriptions or string property names that specify which properties should be returned by the fetch.
- [returnsDistinctResults](returnsdistinctresults.md): A Boolean value that indicates whether the fetch request returns only distinct values for the fields specified by [propertiesToFetch](propertiestofetch.md).
- [includesPropertyValues](includespropertyvalues.md): A Boolean value that indicates whether, when the fetch is executed, property data is obtained from the persistent store.
- [returnsObjectsAsFaults](returnsobjectsasfaults.md): A Boolean value that indicates whether the objects resulting from a fetch request are faults.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.
- [NSFetchRequestResult](../nsfetchrequestresult.md): An abstract protocol used with parameterized fetch requests.

# shouldRefreshRefetchedObjects (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the property values of fetched objects will be updated with the current values in the persistent store.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldRefreshRefetchedObjects;
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the property values of fetched objects will be updated with the current values in the persistent store; otherwise, it is [false](https://developer.apple.com/documentation/swift/false).

By default when you fetch objects, they maintain their current property values, even if the values in the persistent store have changed. Invoking this method with the parameter [true](https://developer.apple.com/documentation/swift/true) means that when the fetch is executed, the property values of fetched objects are updated with the current values in the persistent store. This is a more convenient way to ensure that managed object property values are consistent with the store than by using [refreshObject:mergeChanges:](../nsmanagedobjectcontext/refresh%28__mergechanges_%29.md) (`NSManagedObjetContext`) for multiple objects in turn.

## See Also

### Managing How Results Are Returned

- [resultType](resulttype.md): The result type of the fetch request.
- [includesPendingChanges](includespendingchanges.md): A Boolean value that indicates whether, when the fetch is executed, it matches against currently unsaved changes in the managed object context.
- [propertiesToFetch](propertiestofetch.md): A collection of either property descriptions or string property names that specify which properties should be returned by the fetch.
- [returnsDistinctResults](returnsdistinctresults.md): A Boolean value that indicates whether the fetch request returns only distinct values for the fields specified by [propertiesToFetch](propertiestofetch.md).
- [includesPropertyValues](includespropertyvalues.md): A Boolean value that indicates whether, when the fetch is executed, property data is obtained from the persistent store.
- [returnsObjectsAsFaults](returnsobjectsasfaults.md): A Boolean value that indicates whether the objects resulting from a fetch request are faults.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.
- [NSFetchRequestResult](../nsfetchrequestresult.md): An abstract protocol used with parameterized fetch requests.
