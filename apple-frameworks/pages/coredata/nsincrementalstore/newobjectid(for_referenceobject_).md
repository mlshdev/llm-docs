> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsincrementalstore/newobjectid(for:referenceobject:)](https://developer.apple.com/documentation/coredata/nsincrementalstore/newobjectid(for:referenceobject:))

# newObjectID(for:referenceObject:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new object ID that uses given data as the key.

## Declaration

```swift
func newObjectID(for entity: NSEntityDescription, referenceObject data: Any) -> NSManagedObjectID
```

## Parameters

- `entity`: The entity for the new object ID.
- `data`: An object of type [NSString](../../foundation/nsstring.md) or [NSNumber](../../foundation/nsnumber.md) to use as the key.

<a id="return-value"></a>

## Return Value

A new object ID for an instance of the entity specified by `entity` and that uses `data` as the key.

<a id="Discussion"></a>

## Discussion

You should not override this method.

## See Also

### Manipulating Managed Objects

- [execute(\_:with:)](execute%28__with_%29.md): Returns a value as appropriate for the given request, or nil if the request cannot be completed.
- [newValuesForObject(with:with:)](newvaluesforobject%28with_with_%29.md): Returns an incremental store node encapsulating the persistent external values of the object with a given object ID.
- [newValue(forRelationship:forObjectWith:with:)](newvalue%28forrelationship_forobjectwith_with_%29.md): Returns the relationship for the given relationship of the object with a given object ID.
- [obtainPermanentIDs(for:)](obtainpermanentids%28for_%29.md): Returns an array containing the object IDs for a given array of newly-inserted objects.
- [referenceObject(for:)](referenceobject%28for_%29.md): Returns the reference data used to construct a given object ID.

# newObjectIDForEntity:referenceObject: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new object ID that uses given data as the key.

## Declaration

```objectivec
- (NSManagedObjectID *) newObjectIDForEntity:(NSEntityDescription *) entity referenceObject:(id) data;
```

## Parameters

- `entity`: The entity for the new object ID.
- `data`: An object of type [NSString](../../foundation/nsstring.md) or [NSNumber](../../foundation/nsnumber.md) to use as the key.

<a id="return-value"></a>

## Return Value

A new object ID for an instance of the entity specified by `entity` and that uses `data` as the key.

<a id="Discussion"></a>

## Discussion

You should not override this method.

## See Also

### Manipulating Managed Objects

- [executeRequest:withContext:error:](execute%28__with_%29.md): Returns a value as appropriate for the given request, or nil if the request cannot be completed.
- [newValuesForObjectWithID:withContext:error:](newvaluesforobject%28with_with_%29.md): Returns an incremental store node encapsulating the persistent external values of the object with a given object ID.
- [newValueForRelationship:forObjectWithID:withContext:error:](newvalue%28forrelationship_forobjectwith_with_%29.md): Returns the relationship for the given relationship of the object with a given object ID.
- [obtainPermanentIDsForObjects:error:](obtainpermanentids%28for_%29.md): Returns an array containing the object IDs for a given array of newly-inserted objects.
- [referenceObjectForObjectID:](referenceobject%28for_%29.md): Returns the reference data used to construct a given object ID.
