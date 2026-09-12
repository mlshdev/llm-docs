> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/accommodatepresenteditemdeletion(completionhandler:)](https://developer.apple.com/documentation/appkit/nsdocument/accommodatepresenteditemdeletion(completionhandler:))

# accommodatePresentedItemDeletion(completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

## Declaration

```swift
nonisolated func accommodatePresentedItemDeletion(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
nonisolated func accommodatePresentedItemDeletion() async throws
```

## See Also

### Instance Methods

- [presentedItemDidChange()](presenteditemdidchange%28%29.md)
- [presentedItemDidChangeUbiquityAttributes(\_:)](presenteditemdidchangeubiquityattributes%28__%29.md)
- [presentedItemDidGain(\_:)](presenteditemdidgain%28__%29.md)
- [presentedItemDidLose(\_:)](presenteditemdidlose%28__%29.md)
- [presentedItemDidMove(to:)](presenteditemdidmove%28to_%29.md)
- [presentedItemDidResolveConflict(\_:)](presenteditemdidresolveconflict%28__%29.md)
- [relinquishPresentedItem(toReader:)](relinquishpresenteditem%28toreader_%29.md)
- [relinquishPresentedItem(toWriter:)](relinquishpresenteditem%28towriter_%29.md)
- [savePresentedItemChanges(completionHandler:)](savepresenteditemchanges%28completionhandler_%29.md)

# accommodatePresentedItemDeletionWithCompletionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

## Declaration

```objectivec
- (void) accommodatePresentedItemDeletionWithCompletionHandler:(void (^)(NSError *errorOrNil)) completionHandler;
```

## See Also

### Instance Methods

- [presentedItemDidChange](presenteditemdidchange%28%29.md)
- [presentedItemDidChangeUbiquityAttributes:](presenteditemdidchangeubiquityattributes%28__%29.md)
- [presentedItemDidGainVersion:](presenteditemdidgain%28__%29.md)
- [presentedItemDidLoseVersion:](presenteditemdidlose%28__%29.md)
- [presentedItemDidMoveToURL:](presenteditemdidmove%28to_%29.md)
- [presentedItemDidResolveConflictVersion:](presenteditemdidresolveconflict%28__%29.md)
- [relinquishPresentedItemToReader:](relinquishpresenteditem%28toreader_%29.md)
- [relinquishPresentedItemToWriter:](relinquishpresenteditem%28towriter_%29.md)
- [savePresentedItemChangesWithCompletionHandler:](savepresenteditemchanges%28completionhandler_%29.md)
