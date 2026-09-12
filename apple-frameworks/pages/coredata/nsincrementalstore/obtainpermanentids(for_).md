> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsincrementalstore/obtainpermanentids(for:)](https://developer.apple.com/documentation/coredata/nsincrementalstore/obtainpermanentids(for:))

# obtainPermanentIDs(for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the object IDs for a given array of newly-inserted objects.

## Declaration

```swift
func obtainPermanentIDs(for array: [NSManagedObject]) throws -> [NSManagedObjectID]
```

## Parameters

- `array`: An array of newly-inserted objects.

<a id="return-value"></a>

## Return Value

An array containing the object IDs for the objects in `array`.

<a id="discussion"></a>

## Discussion

The returned array must return the object IDs in the same order as the objects appear in `array`.

<a id="Discussion"></a>

## Discussion

This method is called before [execute(\_:with:)](execute%28__with_%29.md) with a save request, to assign permanent IDs to newly-inserted objects.

## See Also

### Manipulating Managed Objects

- [execute(\_:with:)](execute%28__with_%29.md): Returns a value as appropriate for the given request, or nil if the request cannot be completed.
- [newValuesForObject(with:with:)](newvaluesforobject%28with_with_%29.md): Returns an incremental store node encapsulating the persistent external values of the object with a given object ID.
- [newValue(forRelationship:forObjectWith:with:)](newvalue%28forrelationship_forobjectwith_with_%29.md): Returns the relationship for the given relationship of the object with a given object ID.
- [newObjectID(for:referenceObject:)](newobjectid%28for_referenceobject_%29.md): Returns a new object ID that uses given data as the key.
- [referenceObject(for:)](referenceobject%28for_%29.md): Returns the reference data used to construct a given object ID.

# obtainPermanentIDsForObjects:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the object IDs for a given array of newly-inserted objects.

## Declaration

```objectivec
- (NSArray<NSManagedObjectID *> *) obtainPermanentIDsForObjects:(NSArray<NSManagedObject *> *) array error:(NSError **) error;
```

## Parameters

- `array`: An array of newly-inserted objects.
- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

An array containing the object IDs for the objects in `array`. On failure, this method returns `nil`.

<a id="discussion"></a>

## Discussion

The returned array must return the object IDs in the same order as the objects appear in `array`.

<a id="Discussion"></a>

## Discussion

This method is called before [executeRequest:withContext:error:](execute%28__with_%29.md) with a save request, to assign permanent IDs to newly-inserted objects.

## See Also

### Manipulating Managed Objects

- [executeRequest:withContext:error:](execute%28__with_%29.md): Returns a value as appropriate for the given request, or nil if the request cannot be completed.
- [newValuesForObjectWithID:withContext:error:](newvaluesforobject%28with_with_%29.md): Returns an incremental store node encapsulating the persistent external values of the object with a given object ID.
- [newValueForRelationship:forObjectWithID:withContext:error:](newvalue%28forrelationship_forobjectwith_with_%29.md): Returns the relationship for the given relationship of the object with a given object ID.
- [newObjectIDForEntity:referenceObject:](newobjectid%28for_referenceobject_%29.md): Returns a new object ID that uses given data as the key.
- [referenceObjectForObjectID:](referenceobject%28for_%29.md): Returns the reference data used to construct a given object ID.
