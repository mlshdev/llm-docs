> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/propertiestofetch](https://developer.apple.com/documentation/coredata/nsfetchrequest/propertiestofetch)

# propertiesToFetch (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A collection of either property descriptions or string property names that specify which properties should be returned by the fetch.

## Declaration

```swift
var propertiesToFetch: [Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

Property descriptions can either be instances of [NSPropertyDescription](../nspropertydescription.md) or [NSString](../../foundation/nsstring.md). The property descriptions may represent attributes, to-one relationships, or expressions. The name of an attribute or relationship description must match the name of a description on the fetch request’s entity.

<a id="Special-Considerations"></a>

### Special Considerations

You must set the entity for the fetch request before setting this value; otherwise, [NSFetchRequest](../nsfetchrequest.md) throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception.

This property can be set with [managedObjectResultType](../nsfetchrequestresulttype/managedobjectresulttype.md) and thereby implement a partial faulting (whereby only some of the properties are populated) of the returned objects, as well as the [dictionaryResultType](../nsfetchrequestresulttype/dictionaryresulttype.md) to define what properties are included in the resulting [NSDictionary](../../foundation/nsdictionary.md).

## See Also

### Managing How Results Are Returned

- [resultType](resulttype.md): The result type of the fetch request.
- [includesPendingChanges](includespendingchanges.md): A Boolean value that indicates whether, when the fetch is executed, it matches against currently unsaved changes in the managed object context.
- [returnsDistinctResults](returnsdistinctresults.md): A Boolean value that indicates whether the fetch request returns only distinct values for the fields specified by [propertiesToFetch](propertiestofetch.md).
- [includesPropertyValues](includespropertyvalues.md): A Boolean value that indicates whether, when the fetch is executed, property data is obtained from the persistent store.
- [shouldRefreshRefetchedObjects](shouldrefreshrefetchedobjects.md): A Boolean value that indicates whether the property values of fetched objects will be updated with the current values in the persistent store.
- [returnsObjectsAsFaults](returnsobjectsasfaults.md): A Boolean value that indicates whether the objects resulting from a fetch request are faults.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.
- [NSFetchRequestResult](../nsfetchrequestresult.md): An abstract protocol used with parameterized fetch requests.

# propertiesToFetch (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A collection of either property descriptions or string property names that specify which properties should be returned by the fetch.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray * propertiesToFetch;
```

<a id="Discussion"></a>

## Discussion

Property descriptions can either be instances of [NSPropertyDescription](../nspropertydescription.md) or [NSString](../../foundation/nsstring.md). The property descriptions may represent attributes, to-one relationships, or expressions. The name of an attribute or relationship description must match the name of a description on the fetch request’s entity.

<a id="Special-Considerations"></a>

### Special Considerations

You must set the entity for the fetch request before setting this value; otherwise, [NSFetchRequest](../nsfetchrequest.md) throws an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception.

This property can be set with [NSManagedObjectResultType](../nsfetchrequestresulttype/managedobjectresulttype.md) and thereby implement a partial faulting (whereby only some of the properties are populated) of the returned objects, as well as the [NSDictionaryResultType](../nsfetchrequestresulttype/dictionaryresulttype.md) to define what properties are included in the resulting [NSDictionary](../../foundation/nsdictionary.md).

## See Also

### Managing How Results Are Returned

- [resultType](resulttype.md): The result type of the fetch request.
- [includesPendingChanges](includespendingchanges.md): A Boolean value that indicates whether, when the fetch is executed, it matches against currently unsaved changes in the managed object context.
- [returnsDistinctResults](returnsdistinctresults.md): A Boolean value that indicates whether the fetch request returns only distinct values for the fields specified by [propertiesToFetch](propertiestofetch.md).
- [includesPropertyValues](includespropertyvalues.md): A Boolean value that indicates whether, when the fetch is executed, property data is obtained from the persistent store.
- [shouldRefreshRefetchedObjects](shouldrefreshrefetchedobjects.md): A Boolean value that indicates whether the property values of fetched objects will be updated with the current values in the persistent store.
- [returnsObjectsAsFaults](returnsobjectsasfaults.md): A Boolean value that indicates whether the objects resulting from a fetch request are faults.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.
- [NSFetchRequestResult](../nsfetchrequestresult.md): An abstract protocol used with parameterized fetch requests.
