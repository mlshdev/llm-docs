> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingoperation/aslookup](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingoperation/aslookup)

# asLookup

**Interface language:** Objective-C

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

Returns the operation if it looks up an item.

## Declaration

```objectivec
- (id<NSFileProviderTestingLookup>) asLookup;
```

<a id="Discussion"></a>

## Discussion

If the operation doesn’t conform to the [NSFileProviderTestingLookup](../nsfileprovidertestinglookup.md) protocol, this method returns `nil`.

## See Also

### Access the Operation Type

- [type](type.md): The operation’s type.
- [asChildrenEnumeration](aschildrenenumeration.md): Returns the operation if it enumerates contained items.
- [asCollisionResolution](ascollisionresolution.md): Returns the operation if it resolves a collision by renaming the new item.
- [asContentFetch](ascontentfetch.md): Returns the operation if it fetches an item’s content.
- [asCreation](ascreation.md): Returns the operation if it propagates the creation of an item.
- [asDeletion](asdeletion.md): Returns the operation if it propagates the deletion of an item.
- [asIngestion](asingestion.md): Returns the operation if it alerts the system to changes.
- [asModification](asmodification.md): Returns the operation if it propagates a change.
