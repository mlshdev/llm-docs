> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingoperation/type](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingoperation/type)

# type (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

The operation’s type.

## Declaration

```swift
var type: NSFileProviderTestingOperationType { get }
```

# type (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

The operation’s type.

## Declaration

```objectivec
@property (nonatomic, readonly) NSFileProviderTestingOperationType type;
```

## See Also

### Access the Operation Type

- [asChildrenEnumeration](aschildrenenumeration.md): Returns the operation if it enumerates contained items.
- [asCollisionResolution](ascollisionresolution.md): Returns the operation if it resolves a collision by renaming the new item.
- [asContentFetch](ascontentfetch.md): Returns the operation if it fetches an item’s content.
- [asCreation](ascreation.md): Returns the operation if it propagates the creation of an item.
- [asDeletion](asdeletion.md): Returns the operation if it propagates the deletion of an item.
- [asIngestion](asingestion.md): Returns the operation if it alerts the system to changes.
- [asLookup](aslookup.md): Returns the operation if it looks up an item.
- [asModification](asmodification.md): Returns the operation if it propagates a change.
