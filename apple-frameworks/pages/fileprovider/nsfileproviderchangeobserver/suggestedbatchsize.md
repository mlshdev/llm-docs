> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderchangeobserver/suggestedbatchsize](https://developer.apple.com/documentation/fileprovider/nsfileproviderchangeobserver/suggestedbatchsize)

# suggestedBatchSize (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

The batch size that the system recommends.

## Declaration

```swift
optional var suggestedBatchSize: Int { get }
```

<a id="Discussion"></a>

## Discussion

The system suggests the batch size to optimize performance based on the context of the pending changes. The system can request the enumeration of a container for various reasons, such as if the user has the directory open in Finder, or the file open in an application. Each case has its own performance profile.

If the enumerator has more pending changes than the suggested batch size, it should split the changes into batches that are equal to or smaller than the batch size. If the enumerator has fewer changes than the suggested batch size, return all the changes immediately and finish the enumeration. You don’t need to wait for more incoming changes.

While using the suggested batch size helps ensure the best user experience, the system enforces a maximum of 100 times the suggested size.

## See Also

### Observing Changes

- [didDeleteItems(withIdentifiers:)](diddeleteitems%28withidentifiers_%29.md): Tells the observer that the specified items have been deleted.
- [didUpdate(\_:)](didupdate%28__%29.md): Tells the observer that the specified items have been updated.
- [finishEnumeratingChanges(upTo:moreComing:)](finishenumeratingchanges%28upto_morecoming_%29.md): Tells the observer that all of the changes have been enumerated up to the specified sync anchor.
- [finishEnumeratingWithError(\_:)](finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during change notification.

# suggestedBatchSize (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

The batch size that the system recommends.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger suggestedBatchSize;
```

<a id="Discussion"></a>

## Discussion

The system suggests the batch size to optimize performance based on the context of the pending changes. The system can request the enumeration of a container for various reasons, such as if the user has the directory open in Finder, or the file open in an application. Each case has its own performance profile.

If the enumerator has more pending changes than the suggested batch size, it should split the changes into batches that are equal to or smaller than the batch size. If the enumerator has fewer changes than the suggested batch size, return all the changes immediately and finish the enumeration. You don’t need to wait for more incoming changes.

While using the suggested batch size helps ensure the best user experience, the system enforces a maximum of 100 times the suggested size.

## See Also

### Observing Changes

- [didDeleteItemsWithIdentifiers:](diddeleteitems%28withidentifiers_%29.md): Tells the observer that the specified items have been deleted.
- [didUpdateItems:](didupdate%28__%29.md): Tells the observer that the specified items have been updated.
- [finishEnumeratingChangesUpToSyncAnchor:moreComing:](finishenumeratingchanges%28upto_morecoming_%29.md): Tells the observer that all of the changes have been enumerated up to the specified sync anchor.
- [finishEnumeratingWithError:](finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during change notification.
