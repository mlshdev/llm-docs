> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/managedobjectid(forurirepresentation:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/managedobjectid(forurirepresentation:))

# managedObjectID(forURIRepresentation:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the object identifier for the specified URI representation.

## Declaration

```swift
func managedObjectID(forURIRepresentation url: URL) -> NSManagedObjectID?
```

## Parameters

- `url`: An URL object containing a URI that specify a managed object.

<a id="return-value"></a>

## Return Value

An object ID for the object specified by `url`.

<a id="Discussion"></a>

## Discussion

The URI representation contains a UUID of the store the ID is coming from, and the coordinator can match it against the stores added to it.

## See Also

### Related Documentation

- [object(with:)](../nsmanagedobjectcontext/object%28with_%29.md): Returns either an existing object from the context or a fault that represents that object.
- [uriRepresentation()](../nsmanagedobjectid/urirepresentation%28%29.md): Returns a URI that provides an archiveable reference to the object for the object ID.

# managedObjectIDForURIRepresentation: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the object identifier for the specified URI representation.

## Declaration

```objectivec
- (NSManagedObjectID *) managedObjectIDForURIRepresentation:(NSURL *) url;
```

## Parameters

- `url`: An URL object containing a URI that specify a managed object.

<a id="return-value"></a>

## Return Value

An object ID for the object specified by `url`.

<a id="Discussion"></a>

## Discussion

The URI representation contains a UUID of the store the ID is coming from, and the coordinator can match it against the stores added to it.

## See Also

### Related Documentation

- [objectWithID:](../nsmanagedobjectcontext/object%28with_%29.md): Returns either an existing object from the context or a fault that represents that object.
- [URIRepresentation](../nsmanagedobjectid/urirepresentation%28%29.md): Returns a URI that provides an archiveable reference to the object for the object ID.
