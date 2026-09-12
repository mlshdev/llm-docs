> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectid/urirepresentation()](https://developer.apple.com/documentation/coredata/nsmanagedobjectid/urirepresentation())

# uriRepresentation() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a URI that provides an archiveable reference to the object for the object ID.

## Declaration

```swift
func uriRepresentation() -> URL
```

<a id="return-value"></a>

## Return Value

An `NSURL` object containing a URI that provides an archiveable reference to the object which the receiver represents.

<a id="Discussion"></a>

## Discussion

If the corresponding managed object has not yet been saved, the object ID (and hence URI) is a temporary value that will change when the corresponding managed object is saved.

## See Also

### Related Documentation

- [managedObjectID(forURIRepresentation:)](../nspersistentstorecoordinator/managedobjectid%28forurirepresentation_%29.md): Returns the object identifier for the specified URI representation.
- [object(with:)](../nsmanagedobjectcontext/object%28with_%29.md): Returns either an existing object from the context or a fault that represents that object.

### Getting Managed Object ID Information

- [entity](entity.md): The entity description associated with the object ID.
- [isTemporaryID](istemporaryid.md): A Boolean value that indicates whether the object ID is temporary.
- [persistentStore](persistentstore.md): The persistent store that fetched the object for the object ID.

# URIRepresentation (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a URI that provides an archiveable reference to the object for the object ID.

## Declaration

```objectivec
- (NSURL *) URIRepresentation;
```

<a id="return-value"></a>

## Return Value

An `NSURL` object containing a URI that provides an archiveable reference to the object which the receiver represents.

<a id="Discussion"></a>

## Discussion

If the corresponding managed object has not yet been saved, the object ID (and hence URI) is a temporary value that will change when the corresponding managed object is saved.

## See Also

### Related Documentation

- [managedObjectIDForURIRepresentation:](../nspersistentstorecoordinator/managedobjectid%28forurirepresentation_%29.md): Returns the object identifier for the specified URI representation.
- [objectWithID:](../nsmanagedobjectcontext/object%28with_%29.md): Returns either an existing object from the context or a fault that represents that object.

### Getting Managed Object ID Information

- [entity](entity.md): The entity description associated with the object ID.
- [temporaryID](istemporaryid.md): A Boolean value that indicates whether the object ID is temporary.
- [persistentStore](persistentstore.md): The persistent store that fetched the object for the object ID.
