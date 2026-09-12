> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectid/persistentstore](https://developer.apple.com/documentation/coredata/nsmanagedobjectid/persistentstore)

# persistentStore (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The persistent store that fetched the object for the object ID.

## Declaration

```swift
weak var persistentStore: NSPersistentStore? { get }
```

<a id="Discussion"></a>

## Discussion

`nil` if the ID is for a newly-inserted object that has not yet been saved to a persistent store.

## See Also

### Getting Managed Object ID Information

- [entity](entity.md): The entity description associated with the object ID.
- [isTemporaryID](istemporaryid.md): A Boolean value that indicates whether the object ID is temporary.
- [uriRepresentation()](urirepresentation%28%29.md): Returns a URI that provides an archiveable reference to the object for the object ID.

# persistentStore (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The persistent store that fetched the object for the object ID.

## Declaration

```objectivec
@property (weak, readonly, nullable) NSPersistentStore * persistentStore;
```

<a id="Discussion"></a>

## Discussion

`nil` if the ID is for a newly-inserted object that has not yet been saved to a persistent store.

## See Also

### Getting Managed Object ID Information

- [entity](entity.md): The entity description associated with the object ID.
- [temporaryID](istemporaryid.md): A Boolean value that indicates whether the object ID is temporary.
- [URIRepresentation](urirepresentation%28%29.md): Returns a URI that provides an archiveable reference to the object for the object ID.
