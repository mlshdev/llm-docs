> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectid/istemporaryid](https://developer.apple.com/documentation/coredata/nsmanagedobjectid/istemporaryid)

# isTemporaryID (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the object ID is temporary.

## Declaration

```swift
var isTemporaryID: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is temporary, otherwise [false](https://developer.apple.com/documentation/swift/false). Most object IDs return [false](https://developer.apple.com/documentation/swift/false). New objects inserted into a managed object context are assigned a temporary ID which is replaced with a permanent one once the object gets saved to a persistent store.

## See Also

### Getting Managed Object ID Information

- [entity](entity.md): The entity description associated with the object ID.
- [persistentStore](persistentstore.md): The persistent store that fetched the object for the object ID.
- [uriRepresentation()](urirepresentation%28%29.md): Returns a URI that provides an archiveable reference to the object for the object ID.

# temporaryID (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the object ID is temporary.

## Declaration

```objectivec
@property (readonly, getter=isTemporaryID) BOOL temporaryID;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is temporary, otherwise [false](https://developer.apple.com/documentation/swift/false). Most object IDs return [false](https://developer.apple.com/documentation/swift/false). New objects inserted into a managed object context are assigned a temporary ID which is replaced with a permanent one once the object gets saved to a persistent store.

## See Also

### Getting Managed Object ID Information

- [entity](entity.md): The entity description associated with the object ID.
- [persistentStore](persistentstore.md): The persistent store that fetched the object for the object ID.
- [URIRepresentation](urirepresentation%28%29.md): Returns a URI that provides an archiveable reference to the object for the object ID.
