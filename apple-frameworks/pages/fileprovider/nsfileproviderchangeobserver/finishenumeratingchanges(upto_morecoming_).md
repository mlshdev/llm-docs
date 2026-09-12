> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderchangeobserver/finishenumeratingchanges(upto:morecoming:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderchangeobserver/finishenumeratingchanges(upto:morecoming:))

# finishEnumeratingChanges(upTo:moreComing:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

Tells the observer that all of the changes have been enumerated up to the specified sync anchor.

## Declaration

```swift
func finishEnumeratingChanges(upTo anchor: NSFileProviderSyncAnchor, moreComing: Bool)
```

## Parameters

- `anchor`: An object used to identify the end of the current batch of changes.
- `moreComing`: A Boolean value that indicates the file provider still has one or more batches of pending changes.

## See Also

### Observing Changes

- [didDeleteItems(withIdentifiers:)](diddeleteitems%28withidentifiers_%29.md): Tells the observer that the specified items have been deleted.
- [didUpdate(\_:)](didupdate%28__%29.md): Tells the observer that the specified items have been updated.
- [finishEnumeratingWithError(\_:)](finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during change notification.
- [suggestedBatchSize](suggestedbatchsize.md): The batch size that the system recommends.

# finishEnumeratingChangesUpToSyncAnchor:moreComing: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

Tells the observer that all of the changes have been enumerated up to the specified sync anchor.

## Declaration

```objectivec
- (void) finishEnumeratingChangesUpToSyncAnchor:(NSFileProviderSyncAnchor) anchor moreComing:(BOOL) moreComing;
```

## Parameters

- `anchor`: An object used to identify the end of the current batch of changes.
- `moreComing`: A Boolean value that indicates the file provider still has one or more batches of pending changes.

## See Also

### Observing Changes

- [didDeleteItemsWithIdentifiers:](diddeleteitems%28withidentifiers_%29.md): Tells the observer that the specified items have been deleted.
- [didUpdateItems:](didupdate%28__%29.md): Tells the observer that the specified items have been updated.
- [finishEnumeratingWithError:](finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during change notification.
- [suggestedBatchSize](suggestedbatchsize.md): The batch size that the system recommends.
