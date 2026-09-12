> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderchangeobserver/finishenumeratingwitherror(_:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderchangeobserver/finishenumeratingwitherror(_:))

# finishEnumeratingWithError(\_:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

Tells the observer that an error occurred during change notification.

## Declaration

```swift
func finishEnumeratingWithError(_ error: any Error)
```

## Parameters

- `error`: An object that contains information about the error.

## See Also

### Observing Changes

- [didDeleteItems(withIdentifiers:)](diddeleteitems%28withidentifiers_%29.md): Tells the observer that the specified items have been deleted.
- [didUpdate(\_:)](didupdate%28__%29.md): Tells the observer that the specified items have been updated.
- [finishEnumeratingChanges(upTo:moreComing:)](finishenumeratingchanges%28upto_morecoming_%29.md): Tells the observer that all of the changes have been enumerated up to the specified sync anchor.
- [suggestedBatchSize](suggestedbatchsize.md): The batch size that the system recommends.

# finishEnumeratingWithError: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

Tells the observer that an error occurred during change notification.

## Declaration

```objectivec
- (void) finishEnumeratingWithError:(NSError *) error;
```

## Parameters

- `error`: An object that contains information about the error.

## See Also

### Observing Changes

- [didDeleteItemsWithIdentifiers:](diddeleteitems%28withidentifiers_%29.md): Tells the observer that the specified items have been deleted.
- [didUpdateItems:](didupdate%28__%29.md): Tells the observer that the specified items have been updated.
- [finishEnumeratingChangesUpToSyncAnchor:moreComing:](finishenumeratingchanges%28upto_morecoming_%29.md): Tells the observer that all of the changes have been enumerated up to the specified sync anchor.
- [suggestedBatchSize](suggestedbatchsize.md): The batch size that the system recommends.
