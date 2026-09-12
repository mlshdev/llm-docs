> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/returnsdistinctresults](https://developer.apple.com/documentation/coredata/nsfetchrequest/returnsdistinctresults)

# returnsDistinctResults (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the fetch request returns only distinct values for the fields specified by [propertiesToFetch](propertiestofetch.md).

## Declaration

```swift
var returnsDistinctResults: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This value is used only if a value has been set for [propertiesToFetch](propertiestofetch.md).

This value is [true](https://developer.apple.com/documentation/swift/true) if when the fetch is executed, it returns only distinct values for the fields specified by [propertiesToFetch](propertiestofetch.md); otherwise, the value is [false](https://developer.apple.com/documentation/swift/false). The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing How Results Are Returned

- [resultType](resulttype.md): The result type of the fetch request.
- [includesPendingChanges](includespendingchanges.md): A Boolean value that indicates whether, when the fetch is executed, it matches against currently unsaved changes in the managed object context.
- [propertiesToFetch](propertiestofetch.md): A collection of either property descriptions or string property names that specify which properties should be returned by the fetch.
- [includesPropertyValues](includespropertyvalues.md): A Boolean value that indicates whether, when the fetch is executed, property data is obtained from the persistent store.
- [shouldRefreshRefetchedObjects](shouldrefreshrefetchedobjects.md): A Boolean value that indicates whether the property values of fetched objects will be updated with the current values in the persistent store.
- [returnsObjectsAsFaults](returnsobjectsasfaults.md): A Boolean value that indicates whether the objects resulting from a fetch request are faults.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.
- [NSFetchRequestResult](../nsfetchrequestresult.md): An abstract protocol used with parameterized fetch requests.

# returnsDistinctResults (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the fetch request returns only distinct values for the fields specified by [propertiesToFetch](propertiestofetch.md).

## Declaration

```objectivec
@property (nonatomic) BOOL returnsDistinctResults;
```

<a id="Discussion"></a>

## Discussion

This value is used only if a value has been set for [propertiesToFetch](propertiestofetch.md).

This value is [true](https://developer.apple.com/documentation/swift/true) if when the fetch is executed, it returns only distinct values for the fields specified by [propertiesToFetch](propertiestofetch.md); otherwise, the value is [false](https://developer.apple.com/documentation/swift/false). The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing How Results Are Returned

- [resultType](resulttype.md): The result type of the fetch request.
- [includesPendingChanges](includespendingchanges.md): A Boolean value that indicates whether, when the fetch is executed, it matches against currently unsaved changes in the managed object context.
- [propertiesToFetch](propertiestofetch.md): A collection of either property descriptions or string property names that specify which properties should be returned by the fetch.
- [includesPropertyValues](includespropertyvalues.md): A Boolean value that indicates whether, when the fetch is executed, property data is obtained from the persistent store.
- [shouldRefreshRefetchedObjects](shouldrefreshrefetchedobjects.md): A Boolean value that indicates whether the property values of fetched objects will be updated with the current values in the persistent store.
- [returnsObjectsAsFaults](returnsobjectsasfaults.md): A Boolean value that indicates whether the objects resulting from a fetch request are faults.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.
- [NSFetchRequestResult](../nsfetchrequestresult.md): An abstract protocol used with parameterized fetch requests.
