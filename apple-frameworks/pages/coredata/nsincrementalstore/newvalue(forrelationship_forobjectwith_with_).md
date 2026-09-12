> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsincrementalstore/newvalue(forrelationship:forobjectwith:with:)](https://developer.apple.com/documentation/coredata/nsincrementalstore/newvalue(forrelationship:forobjectwith:with:))

# newValue(forRelationship:forObjectWith:with:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the relationship for the given relationship of the object with a given object ID.

## Declaration

```swift
func newValue(forRelationship relationship: NSRelationshipDescription, forObjectWith objectID: NSManagedObjectID, with context: NSManagedObjectContext?) throws -> Any
```

## Parameters

- `relationship`: The relationship for which values are requested.
- `objectID`: The ID of the object for which values are requested.
- `context`: The managed object context into which values will be returned.

<a id="return-value"></a>

## Return Value

The value of the relationship specified `relationship` of the object with object ID `objectID`, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

If the relationship is a to-one, the method should return an [NSManagedObjectID](../nsmanagedobjectid.md) instance that identifies the destination, or an instance of [NSNull](../../foundation/nsnull.md) if the relationship value is `nil`.

If the relationship is a to-many, the method should return a collection object containing [NSManagedObjectID](../nsmanagedobjectid.md) instances to identify the related objects. Using an `NSArray` instance is preferred because it will be the most efficient. A store may also return an instance of `NSSet` or `NSOrderedSet`; an instance of `NSDictionary` is not acceptable.

If an object with object ID `objectID` cannot be found, the method should return `nil` and—if `error` is not `NULL`—create and return an appropriate error object in `error`.

## See Also

### Manipulating Managed Objects

- [execute(\_:with:)](execute%28__with_%29.md): Returns a value as appropriate for the given request, or nil if the request cannot be completed.
- [newValuesForObject(with:with:)](newvaluesforobject%28with_with_%29.md): Returns an incremental store node encapsulating the persistent external values of the object with a given object ID.
- [obtainPermanentIDs(for:)](obtainpermanentids%28for_%29.md): Returns an array containing the object IDs for a given array of newly-inserted objects.
- [newObjectID(for:referenceObject:)](newobjectid%28for_referenceobject_%29.md): Returns a new object ID that uses given data as the key.
- [referenceObject(for:)](referenceobject%28for_%29.md): Returns the reference data used to construct a given object ID.

# newValueForRelationship:forObjectWithID:withContext:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the relationship for the given relationship of the object with a given object ID.

## Declaration

```objectivec
- (id) newValueForRelationship:(NSRelationshipDescription *) relationship forObjectWithID:(NSManagedObjectID *) objectID withContext:(NSManagedObjectContext *) context error:(NSError **) error;
```

## Parameters

- `relationship`: The relationship for which values are requested.
- `objectID`: The ID of the object for which values are requested.
- `context`: The managed object context into which values will be returned.
- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

The value of the relationship specified `relationship` of the object with object ID `objectID`, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

If the relationship is a to-one, the method should return an [NSManagedObjectID](../nsmanagedobjectid.md) instance that identifies the destination, or an instance of [NSNull](../../foundation/nsnull.md) if the relationship value is `nil`.

If the relationship is a to-many, the method should return a collection object containing [NSManagedObjectID](../nsmanagedobjectid.md) instances to identify the related objects. Using an `NSArray` instance is preferred because it will be the most efficient. A store may also return an instance of `NSSet` or `NSOrderedSet`; an instance of `NSDictionary` is not acceptable.

If an object with object ID `objectID` cannot be found, the method should return `nil` and—if `error` is not `NULL`—create and return an appropriate error object in `error`.

## See Also

### Manipulating Managed Objects

- [executeRequest:withContext:error:](execute%28__with_%29.md): Returns a value as appropriate for the given request, or nil if the request cannot be completed.
- [newValuesForObjectWithID:withContext:error:](newvaluesforobject%28with_with_%29.md): Returns an incremental store node encapsulating the persistent external values of the object with a given object ID.
- [obtainPermanentIDsForObjects:error:](obtainpermanentids%28for_%29.md): Returns an array containing the object IDs for a given array of newly-inserted objects.
- [newObjectIDForEntity:referenceObject:](newobjectid%28for_referenceobject_%29.md): Returns a new object ID that uses given data as the key.
- [referenceObjectForObjectID:](referenceobject%28for_%29.md): Returns the reference data used to construct a given object ID.
