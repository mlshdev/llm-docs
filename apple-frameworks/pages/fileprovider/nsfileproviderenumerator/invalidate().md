> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderenumerator/invalidate()](https://developer.apple.com/documentation/fileprovider/nsfileproviderenumerator/invalidate())

# invalidate() (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

Stops the enumeration of items and changes.

## Declaration

```swift
func invalidate()
```

## See Also

### Enumerating Items and Changes

- [enumerateItems(for:startingAt:)](enumerateitems%28for_startingat_%29.md): Requests the next batch of items, starting at the specified page.
- [enumerateChanges(for:from:)](enumeratechanges%28for_from_%29.md): Requests the next batch of changes after the specified sync anchor.
- [currentSyncAnchor(completionHandler:)](currentsyncanchor%28completionhandler_%29.md): Returns the current sync anchor.

# invalidate (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

Stops the enumeration of items and changes.

## Declaration

```objectivec
- (void) invalidate;
```

## See Also

### Enumerating Items and Changes

- [enumerateItemsForObserver:startingAtPage:](enumerateitems%28for_startingat_%29.md): Requests the next batch of items, starting at the specified page.
- [enumerateChangesForObserver:fromSyncAnchor:](enumeratechanges%28for_from_%29.md): Requests the next batch of changes after the specified sync anchor.
- [currentSyncAnchorWithCompletionHandler:](currentsyncanchor%28completionhandler_%29.md): Returns the current sync anchor.
