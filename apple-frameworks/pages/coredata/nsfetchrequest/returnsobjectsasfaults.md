> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/returnsobjectsasfaults](https://developer.apple.com/documentation/coredata/nsfetchrequest/returnsobjectsasfaults)

# returnsObjectsAsFaults (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the objects resulting from a fetch request are faults.

## Declaration

```swift
var returnsObjectsAsFaults: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the objects resulting from a fetch using the [NSFetchRequest](../nsfetchrequest.md) are faults; otherwise, it is [false](https://developer.apple.com/documentation/swift/false). The default value is [true](https://developer.apple.com/documentation/swift/true). This setting is not used if the result type (see [resultType](resulttype.md)) is `NSManagedObjectIDResultType`, as object IDs do not have property values. You can set [returnsObjectsAsFaults](returnsobjectsasfaults.md) to [false](https://developer.apple.com/documentation/swift/false) to gain a performance benefit if you know you will need to access the property values from the returned objects.

When you execute a fetch, by default [returnsObjectsAsFaults](returnsobjectsasfaults.md) is [true](https://developer.apple.com/documentation/swift/true); Core Data fetches the object data for the matching records, fills the row cache with the information, and returns managed object as faults. These faults are managed objects, but all of their property data resides in the row cache until the fault is fired. When the fault is fired, Core Data retrieves the data from the row cache. Although the overhead for this operation is small, for large datasets it may not be trivial. If you *need* to access the property values from the returned objects (for example, if you iterate over all the objects to calculate the average value of a particular attribute), then it is more efficient to set [returnsObjectsAsFaults](returnsobjectsasfaults.md) to [false](https://developer.apple.com/documentation/swift/false) to avoid the additional overhead.

## See Also

### Managing How Results Are Returned

- [resultType](resulttype.md): The result type of the fetch request.
- [includesPendingChanges](includespendingchanges.md): A Boolean value that indicates whether, when the fetch is executed, it matches against currently unsaved changes in the managed object context.
- [propertiesToFetch](propertiestofetch.md): A collection of either property descriptions or string property names that specify which properties should be returned by the fetch.
- [returnsDistinctResults](returnsdistinctresults.md): A Boolean value that indicates whether the fetch request returns only distinct values for the fields specified by [propertiesToFetch](propertiestofetch.md).
- [includesPropertyValues](includespropertyvalues.md): A Boolean value that indicates whether, when the fetch is executed, property data is obtained from the persistent store.
- [shouldRefreshRefetchedObjects](shouldrefreshrefetchedobjects.md): A Boolean value that indicates whether the property values of fetched objects will be updated with the current values in the persistent store.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.
- [NSFetchRequestResult](../nsfetchrequestresult.md): An abstract protocol used with parameterized fetch requests.

# returnsObjectsAsFaults (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the objects resulting from a fetch request are faults.

## Declaration

```objectivec
@property (nonatomic) BOOL returnsObjectsAsFaults;
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the objects resulting from a fetch using the [NSFetchRequest](../nsfetchrequest.md) are faults; otherwise, it is [false](https://developer.apple.com/documentation/swift/false). The default value is [true](https://developer.apple.com/documentation/swift/true). This setting is not used if the result type (see [resultType](resulttype.md)) is `NSManagedObjectIDResultType`, as object IDs do not have property values. You can set [returnsObjectsAsFaults](returnsobjectsasfaults.md) to [false](https://developer.apple.com/documentation/swift/false) to gain a performance benefit if you know you will need to access the property values from the returned objects.

When you execute a fetch, by default [returnsObjectsAsFaults](returnsobjectsasfaults.md) is [true](https://developer.apple.com/documentation/swift/true); Core Data fetches the object data for the matching records, fills the row cache with the information, and returns managed object as faults. These faults are managed objects, but all of their property data resides in the row cache until the fault is fired. When the fault is fired, Core Data retrieves the data from the row cache. Although the overhead for this operation is small, for large datasets it may not be trivial. If you *need* to access the property values from the returned objects (for example, if you iterate over all the objects to calculate the average value of a particular attribute), then it is more efficient to set [returnsObjectsAsFaults](returnsobjectsasfaults.md) to [false](https://developer.apple.com/documentation/swift/false) to avoid the additional overhead.

## See Also

### Managing How Results Are Returned

- [resultType](resulttype.md): The result type of the fetch request.
- [includesPendingChanges](includespendingchanges.md): A Boolean value that indicates whether, when the fetch is executed, it matches against currently unsaved changes in the managed object context.
- [propertiesToFetch](propertiestofetch.md): A collection of either property descriptions or string property names that specify which properties should be returned by the fetch.
- [returnsDistinctResults](returnsdistinctresults.md): A Boolean value that indicates whether the fetch request returns only distinct values for the fields specified by [propertiesToFetch](propertiestofetch.md).
- [includesPropertyValues](includespropertyvalues.md): A Boolean value that indicates whether, when the fetch is executed, property data is obtained from the persistent store.
- [shouldRefreshRefetchedObjects](shouldrefreshrefetchedobjects.md): A Boolean value that indicates whether the property values of fetched objects will be updated with the current values in the persistent store.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.
- [NSFetchRequestResult](../nsfetchrequestresult.md): An abstract protocol used with parameterized fetch requests.
