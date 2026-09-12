> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderchangeobserver/diddeleteitems(withidentifiers:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderchangeobserver/diddeleteitems(withidentifiers:))

# didDeleteItems(withIdentifiers:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

Tells the observer that the specified items have been deleted.

## Declaration

```swift
func didDeleteItems(withIdentifiers deletedItemIdentifiers: [NSFileProviderItemIdentifier])
```

## Parameters

- `deletedItemIdentifiers`: An array of identifiers for the deleted items.

## See Also

### Observing Changes

- [didUpdate(\_:)](didupdate%28__%29.md): Tells the observer that the specified items have been updated.
- [finishEnumeratingChanges(upTo:moreComing:)](finishenumeratingchanges%28upto_morecoming_%29.md): Tells the observer that all of the changes have been enumerated up to the specified sync anchor.
- [finishEnumeratingWithError(\_:)](finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during change notification.
- [suggestedBatchSize](suggestedbatchsize.md): The batch size that the system recommends.

# didDeleteItemsWithIdentifiers: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

Tells the observer that the specified items have been deleted.

## Declaration

```objectivec
- (void) didDeleteItemsWithIdentifiers:(NSArray<NSString *> *) deletedItemIdentifiers;
```

## Parameters

- `deletedItemIdentifiers`: An array of identifiers for the deleted items.

## See Also

### Observing Changes

- [didUpdateItems:](didupdate%28__%29.md): Tells the observer that the specified items have been updated.
- [finishEnumeratingChangesUpToSyncAnchor:moreComing:](finishenumeratingchanges%28upto_morecoming_%29.md): Tells the observer that all of the changes have been enumerated up to the specified sync anchor.
- [finishEnumeratingWithError:](finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during change notification.
- [suggestedBatchSize](suggestedbatchsize.md): The batch size that the system recommends.
