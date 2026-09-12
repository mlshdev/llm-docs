> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsincrementalstore/referenceobject(for:)](https://developer.apple.com/documentation/coredata/nsincrementalstore/referenceobject(for:))

# referenceObject(for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the reference data used to construct a given object ID.

## Declaration

```swift
func referenceObject(for objectID: NSManagedObjectID) -> Any
```

## Parameters

- `objectID`: An object ID created by the receiver.

<a id="return-value"></a>

## Return Value

The reference data used to construct objectID.

<a id="Discussion"></a>

## Discussion

This method raises an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if the object ID was not created by the receiving store.

You should not override this method.

## See Also

### Manipulating Managed Objects

- [execute(\_:with:)](execute%28__with_%29.md): Returns a value as appropriate for the given request, or nil if the request cannot be completed.
- [newValuesForObject(with:with:)](newvaluesforobject%28with_with_%29.md): Returns an incremental store node encapsulating the persistent external values of the object with a given object ID.
- [newValue(forRelationship:forObjectWith:with:)](newvalue%28forrelationship_forobjectwith_with_%29.md): Returns the relationship for the given relationship of the object with a given object ID.
- [obtainPermanentIDs(for:)](obtainpermanentids%28for_%29.md): Returns an array containing the object IDs for a given array of newly-inserted objects.
- [newObjectID(for:referenceObject:)](newobjectid%28for_referenceobject_%29.md): Returns a new object ID that uses given data as the key.

# referenceObjectForObjectID: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the reference data used to construct a given object ID.

## Declaration

```objectivec
- (id) referenceObjectForObjectID:(NSManagedObjectID *) objectID;
```

## Parameters

- `objectID`: An object ID created by the receiver.

<a id="return-value"></a>

## Return Value

The reference data used to construct objectID.

<a id="Discussion"></a>

## Discussion

This method raises an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if the object ID was not created by the receiving store.

You should not override this method.

## See Also

### Manipulating Managed Objects

- [executeRequest:withContext:error:](execute%28__with_%29.md): Returns a value as appropriate for the given request, or nil if the request cannot be completed.
- [newValuesForObjectWithID:withContext:error:](newvaluesforobject%28with_with_%29.md): Returns an incremental store node encapsulating the persistent external values of the object with a given object ID.
- [newValueForRelationship:forObjectWithID:withContext:error:](newvalue%28forrelationship_forobjectwith_with_%29.md): Returns the relationship for the given relationship of the object with a given object ID.
- [obtainPermanentIDsForObjects:error:](obtainpermanentids%28for_%29.md): Returns an array containing the object IDs for a given array of newly-inserted objects.
- [newObjectIDForEntity:referenceObject:](newobjectid%28for_referenceobject_%29.md): Returns a new object ID that uses given data as the key.
