> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderchangeobserver/didupdate(_:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderchangeobserver/didupdate(_:))

# didUpdate(\_:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

Tells the observer that the specified items have been updated.

## Declaration

```swift
func didUpdate(_ updatedItems: [any NSFileProviderItemProtocol])
```

## Parameters

- `updatedItems`: An array of updated items.

## See Also

### Observing Changes

- [didDeleteItems(withIdentifiers:)](diddeleteitems%28withidentifiers_%29.md): Tells the observer that the specified items have been deleted.
- [finishEnumeratingChanges(upTo:moreComing:)](finishenumeratingchanges%28upto_morecoming_%29.md): Tells the observer that all of the changes have been enumerated up to the specified sync anchor.
- [finishEnumeratingWithError(\_:)](finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during change notification.
- [suggestedBatchSize](suggestedbatchsize.md): The batch size that the system recommends.

# didUpdateItems: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

Tells the observer that the specified items have been updated.

## Declaration

```objectivec
- (void) didUpdateItems:(NSArray<id<NSFileProviderItem>> *) updatedItems;
```

## Parameters

- `updatedItems`: An array of updated items.

## See Also

### Observing Changes

- [didDeleteItemsWithIdentifiers:](diddeleteitems%28withidentifiers_%29.md): Tells the observer that the specified items have been deleted.
- [finishEnumeratingChangesUpToSyncAnchor:moreComing:](finishenumeratingchanges%28upto_morecoming_%29.md): Tells the observer that all of the changes have been enumerated up to the specified sync anchor.
- [finishEnumeratingWithError:](finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during change notification.
- [suggestedBatchSize](suggestedbatchsize.md): The batch size that the system recommends.
