> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsincrementalstore/execute(_:with:)](https://developer.apple.com/documentation/coredata/nsincrementalstore/execute(_:with:))

# execute(\_:with:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a value as appropriate for the given request, or nil if the request cannot be completed.

## Declaration

```swift
func execute(_ request: NSPersistentStoreRequest, with context: NSManagedObjectContext?) throws -> Any
```

## Parameters

- `request`: A fetch request.
- `context`: The managed object context used to execute `request`.

<a id="return-value"></a>

## Return Value

A value as appropriate for `request`, or `nil` if the request cannot be completed

<a id="Discussion"></a>

## Discussion

The value to return depends on the result type (see [resultType](../nsfetchrequest/resulttype.md)) of `request`:

- If it is `NSManagedObjectResultType`, `NSManagedObjectIDResultType`, or `NSDictionaryResultType`, the method should return an array containing all objects in the store matching the request.
- If it is `NSCountResultType`, the method should return an array containing an `NSNumber` whose value is the count of all objects in the store matching the request.
- If the request is a save request, the method should return an empty array.

If the save request contains nil values for the inserted/updated/deleted/locked collections; you should treat it as a request to save the store metadata.

You should implement this method conservatively, and expect that unknown request types may at some point be passed to the method. The correct behavior in these cases is to return `nil` and an error.

## See Also

### Manipulating Managed Objects

- [newValuesForObject(with:with:)](newvaluesforobject%28with_with_%29.md): Returns an incremental store node encapsulating the persistent external values of the object with a given object ID.
- [newValue(forRelationship:forObjectWith:with:)](newvalue%28forrelationship_forobjectwith_with_%29.md): Returns the relationship for the given relationship of the object with a given object ID.
- [obtainPermanentIDs(for:)](obtainpermanentids%28for_%29.md): Returns an array containing the object IDs for a given array of newly-inserted objects.
- [newObjectID(for:referenceObject:)](newobjectid%28for_referenceobject_%29.md): Returns a new object ID that uses given data as the key.
- [referenceObject(for:)](referenceobject%28for_%29.md): Returns the reference data used to construct a given object ID.

# executeRequest:withContext:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a value as appropriate for the given request, or nil if the request cannot be completed.

## Declaration

```objectivec
- (id) executeRequest:(NSPersistentStoreRequest *) request withContext:(NSManagedObjectContext *) context error:(NSError **) error;
```

## Parameters

- `request`: A fetch request.
- `context`: The managed object context used to execute `request`.
- `error`: If an error occurs, on return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

A value as appropriate for `request`, or `nil` if the request cannot be completed

<a id="Discussion"></a>

## Discussion

The value to return depends on the result type (see [resultType](../nsfetchrequest/resulttype.md)) of `request`:

- If it is `NSManagedObjectResultType`, `NSManagedObjectIDResultType`, or `NSDictionaryResultType`, the method should return an array containing all objects in the store matching the request.
- If it is `NSCountResultType`, the method should return an array containing an `NSNumber` whose value is the count of all objects in the store matching the request.
- If the request is a save request, the method should return an empty array.

If the save request contains nil values for the inserted/updated/deleted/locked collections; you should treat it as a request to save the store metadata.

You should implement this method conservatively, and expect that unknown request types may at some point be passed to the method. The correct behavior in these cases is to return `nil` and an error.

## See Also

### Manipulating Managed Objects

- [newValuesForObjectWithID:withContext:error:](newvaluesforobject%28with_with_%29.md): Returns an incremental store node encapsulating the persistent external values of the object with a given object ID.
- [newValueForRelationship:forObjectWithID:withContext:error:](newvalue%28forrelationship_forobjectwith_with_%29.md): Returns the relationship for the given relationship of the object with a given object ID.
- [obtainPermanentIDsForObjects:error:](obtainpermanentids%28for_%29.md): Returns an array containing the object IDs for a given array of newly-inserted objects.
- [newObjectIDForEntity:referenceObject:](newobjectid%28for_referenceobject_%29.md): Returns a new object ID that uses given data as the key.
- [referenceObjectForObjectID:](referenceobject%28for_%29.md): Returns the reference data used to construct a given object ID.
