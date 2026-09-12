> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectid/entity](https://developer.apple.com/documentation/coredata/nsmanagedobjectid/entity)

# entity (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity description associated with the object ID.

## Declaration

```swift
var entity: NSEntityDescription { get }
```

## See Also

### Related Documentation

- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)
- [entity](../nsmanagedobject/entity-swift.property.md): The entity description of the managed object.

### Getting Managed Object ID Information

- [isTemporaryID](istemporaryid.md): A Boolean value that indicates whether the object ID is temporary.
- [persistentStore](persistentstore.md): The persistent store that fetched the object for the object ID.
- [uriRepresentation()](urirepresentation%28%29.md): Returns a URI that provides an archiveable reference to the object for the object ID.

# entity (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity description associated with the object ID.

## Declaration

```objectivec
@property (strong, readonly) NSEntityDescription * entity;
```

## See Also

### Related Documentation

- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)
- [entity](../nsmanagedobject/entity-swift.property.md): The entity description of the managed object.

### Getting Managed Object ID Information

- [temporaryID](istemporaryid.md): A Boolean value that indicates whether the object ID is temporary.
- [persistentStore](persistentstore.md): The persistent store that fetched the object for the object ID.
- [URIRepresentation](urirepresentation%28%29.md): Returns a URI that provides an archiveable reference to the object for the object ID.
