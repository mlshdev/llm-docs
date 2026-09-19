> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/indexdidupdatenotification

# indexDidUpdateNotification

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS

The notification the delegate posts after Spotlight updates the index.

## Declaration

```swift
static let indexDidUpdateNotification: Notification.Name
```

<a id="Discussion"></a>

## Discussion

The notification’s `userInfo` dictionary contains the keys [NSStoreUUIDKey](../nsstoreuuidkey.md) and [NSPersistentHistoryTokenKey](../nspersistenthistorytokenkey.md).

## See Also

### Updating the Index

- [searchableIndex(\_:reindexAllSearchableItemsWithAcknowledgementHandler:)](searchableindex%28__reindexallsearchableitemswithacknowledgementhandler_%29.md): Reindexes all searchable items and clears any local state.
- [searchableIndex(\_:reindexSearchableItemsWithIdentifiers:acknowledgementHandler:)](searchableindex%28__reindexsearchableitemswithidentifiers_acknowledgementhandler_%29.md): Reindexes the searchable items for the specified identifiers.
