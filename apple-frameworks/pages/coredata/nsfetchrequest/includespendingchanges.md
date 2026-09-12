> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/includespendingchanges](https://developer.apple.com/documentation/coredata/nsfetchrequest/includespendingchanges)

# includesPendingChanges (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether, when the fetch is executed, it matches against currently unsaved changes in the managed object context.

## Declaration

```swift
var includesPendingChanges: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if when the fetch is executed, the fetch will match against currently unsaved changes in the managed object context; otherwise the value is [false](https://developer.apple.com/documentation/swift/false). The default value is [true](https://developer.apple.com/documentation/swift/true).

If the value is [false](https://developer.apple.com/documentation/swift/false), the fetch request doesn’t check unsaved changes and only returns objects that matched the predicate in the persistent store.

<a id="Special-Considerations"></a>

### Special Considerations

A value of [true](https://developer.apple.com/documentation/swift/true) is not supported in conjunction with the result type [dictionaryResultType](../nsfetchrequestresulttype/dictionaryresulttype.md), including calculation of aggregate results (such as `max` and `min`). For dictionaries, the array returned from the fetch reflects the current state in the persistent store, and does not take into account any pending changes, insertions, or deletions in the context.

If you need to take pending changes into account for some simple aggregations like `max` and `min`, you can instead use a normal fetch request, sorted on the attribute you want, with a fetch limit of 1.

## See Also

### Managing How Results Are Returned

- [resultType](resulttype.md): The result type of the fetch request.
- [propertiesToFetch](propertiestofetch.md): A collection of either property descriptions or string property names that specify which properties should be returned by the fetch.
- [returnsDistinctResults](returnsdistinctresults.md): A Boolean value that indicates whether the fetch request returns only distinct values for the fields specified by [propertiesToFetch](propertiestofetch.md).
- [includesPropertyValues](includespropertyvalues.md): A Boolean value that indicates whether, when the fetch is executed, property data is obtained from the persistent store.
- [shouldRefreshRefetchedObjects](shouldrefreshrefetchedobjects.md): A Boolean value that indicates whether the property values of fetched objects will be updated with the current values in the persistent store.
- [returnsObjectsAsFaults](returnsobjectsasfaults.md): A Boolean value that indicates whether the objects resulting from a fetch request are faults.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.
- [NSFetchRequestResult](../nsfetchrequestresult.md): An abstract protocol used with parameterized fetch requests.

# includesPendingChanges (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether, when the fetch is executed, it matches against currently unsaved changes in the managed object context.

## Declaration

```objectivec
@property (nonatomic) BOOL includesPendingChanges;
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if when the fetch is executed, the fetch will match against currently unsaved changes in the managed object context; otherwise the value is [false](https://developer.apple.com/documentation/swift/false). The default value is [true](https://developer.apple.com/documentation/swift/true).

If the value is [false](https://developer.apple.com/documentation/swift/false), the fetch request doesn’t check unsaved changes and only returns objects that matched the predicate in the persistent store.

<a id="Special-Considerations"></a>

### Special Considerations

A value of [true](https://developer.apple.com/documentation/swift/true) is not supported in conjunction with the result type [NSDictionaryResultType](../nsfetchrequestresulttype/dictionaryresulttype.md), including calculation of aggregate results (such as `max` and `min`). For dictionaries, the array returned from the fetch reflects the current state in the persistent store, and does not take into account any pending changes, insertions, or deletions in the context.

If you need to take pending changes into account for some simple aggregations like `max` and `min`, you can instead use a normal fetch request, sorted on the attribute you want, with a fetch limit of 1.

## See Also

### Managing How Results Are Returned

- [resultType](resulttype.md): The result type of the fetch request.
- [propertiesToFetch](propertiestofetch.md): A collection of either property descriptions or string property names that specify which properties should be returned by the fetch.
- [returnsDistinctResults](returnsdistinctresults.md): A Boolean value that indicates whether the fetch request returns only distinct values for the fields specified by [propertiesToFetch](propertiestofetch.md).
- [includesPropertyValues](includespropertyvalues.md): A Boolean value that indicates whether, when the fetch is executed, property data is obtained from the persistent store.
- [shouldRefreshRefetchedObjects](shouldrefreshrefetchedobjects.md): A Boolean value that indicates whether the property values of fetched objects will be updated with the current values in the persistent store.
- [returnsObjectsAsFaults](returnsobjectsasfaults.md): A Boolean value that indicates whether the objects resulting from a fetch request are faults.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.
- [NSFetchRequestResult](../nsfetchrequestresult.md): An abstract protocol used with parameterized fetch requests.
