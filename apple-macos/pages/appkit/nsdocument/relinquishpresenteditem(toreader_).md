> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/relinquishpresenteditem(toreader:)](https://developer.apple.com/documentation/appkit/nsdocument/relinquishpresenteditem(toreader:))

# relinquishPresentedItem(toReader:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

## Declaration

```swift
nonisolated func relinquishPresentedItem(toReader reader: @escaping @Sendable ((@Sendable () -> Void)?) -> Void)
```

## See Also

### Instance Methods

- [accommodatePresentedItemDeletion(completionHandler:)](accommodatepresenteditemdeletion%28completionhandler_%29.md)
- [presentedItemDidChange()](presenteditemdidchange%28%29.md)
- [presentedItemDidChangeUbiquityAttributes(\_:)](presenteditemdidchangeubiquityattributes%28__%29.md)
- [presentedItemDidGain(\_:)](presenteditemdidgain%28__%29.md)
- [presentedItemDidLose(\_:)](presenteditemdidlose%28__%29.md)
- [presentedItemDidMove(to:)](presenteditemdidmove%28to_%29.md)
- [presentedItemDidResolveConflict(\_:)](presenteditemdidresolveconflict%28__%29.md)
- [relinquishPresentedItem(toWriter:)](relinquishpresenteditem%28towriter_%29.md)
- [savePresentedItemChanges(completionHandler:)](savepresenteditemchanges%28completionhandler_%29.md)

# relinquishPresentedItemToReader: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

## Declaration

```objectivec
- (void) relinquishPresentedItemToReader:(void (^)(void (^reacquirer)())) reader;
```

## See Also

### Instance Methods

- [accommodatePresentedItemDeletionWithCompletionHandler:](accommodatepresenteditemdeletion%28completionhandler_%29.md)
- [presentedItemDidChange](presenteditemdidchange%28%29.md)
- [presentedItemDidChangeUbiquityAttributes:](presenteditemdidchangeubiquityattributes%28__%29.md)
- [presentedItemDidGainVersion:](presenteditemdidgain%28__%29.md)
- [presentedItemDidLoseVersion:](presenteditemdidlose%28__%29.md)
- [presentedItemDidMoveToURL:](presenteditemdidmove%28to_%29.md)
- [presentedItemDidResolveConflictVersion:](presenteditemdidresolveconflict%28__%29.md)
- [relinquishPresentedItemToWriter:](relinquishpresenteditem%28towriter_%29.md)
- [savePresentedItemChangesWithCompletionHandler:](savepresenteditemchanges%28completionhandler_%29.md)
