> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderchangeobserver](https://developer.apple.com/documentation/fileprovider/nsfileproviderchangeobserver)

# NSFileProviderChangeObserver (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

An observer that receives changes and deletions during enumeration.

## Declaration

```swift
protocol NSFileProviderChangeObserver : NSObjectProtocol
```

## Topics

### Observing Changes

- [didDeleteItems(withIdentifiers:)](nsfileproviderchangeobserver/diddeleteitems%28withidentifiers_%29.md): Tells the observer that the specified items have been deleted.
- [didUpdate(\_:)](nsfileproviderchangeobserver/didupdate%28__%29.md): Tells the observer that the specified items have been updated.
- [finishEnumeratingChanges(upTo:moreComing:)](nsfileproviderchangeobserver/finishenumeratingchanges%28upto_morecoming_%29.md): Tells the observer that all of the changes have been enumerated up to the specified sync anchor.
- [finishEnumeratingWithError(\_:)](nsfileproviderchangeobserver/finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during change notification.
- [suggestedBatchSize](nsfileproviderchangeobserver/suggestedbatchsize.md): The batch size that the system recommends.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Change Tracking

- [Tracking Your File Provider’s Changes](tracking-your-file-provider-s-changes.md): Create an enumerator to track changes to your file provider’s content.
- [NSFileProviderSyncAnchor](nsfileprovidersyncanchor.md): A synchronization point that represents the last batch of changes returned by the enumerator.

# NSFileProviderChangeObserver (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

An observer that receives changes and deletions during enumeration.

## Declaration

```objectivec
@protocol NSFileProviderChangeObserver <NSObject>
```

## Topics

### Observing Changes

- [didDeleteItemsWithIdentifiers:](nsfileproviderchangeobserver/diddeleteitems%28withidentifiers_%29.md): Tells the observer that the specified items have been deleted.
- [didUpdateItems:](nsfileproviderchangeobserver/didupdate%28__%29.md): Tells the observer that the specified items have been updated.
- [finishEnumeratingChangesUpToSyncAnchor:moreComing:](nsfileproviderchangeobserver/finishenumeratingchanges%28upto_morecoming_%29.md): Tells the observer that all of the changes have been enumerated up to the specified sync anchor.
- [finishEnumeratingWithError:](nsfileproviderchangeobserver/finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during change notification.
- [suggestedBatchSize](nsfileproviderchangeobserver/suggestedbatchsize.md): The batch size that the system recommends.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Change Tracking

- [Tracking Your File Provider’s Changes](tracking-your-file-provider-s-changes.md): Create an enumerator to track changes to your file provider’s content.
- [NSFileProviderSyncAnchor](nsfileprovidersyncanchor.md): A synchronization point that represents the last batch of changes returned by the enumerator.
