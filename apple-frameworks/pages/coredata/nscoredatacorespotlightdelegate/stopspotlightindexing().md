> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscoredatacorespotlightdelegate/stopspotlightindexing()](https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/stopspotlightindexing())

# stopSpotlightIndexing() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Stops the indexing of the store’s entities.

## Declaration

```swift
func stopSpotlightIndexing()
```

<a id="Discussion"></a>

## Discussion

After you call this method, the delegate no longer posts notifications about index changes.

## See Also

### Managing the Index

- [attributeSet(for:)](attributeset%28for_%29.md): Returns the searchable attributes for the specified managed object.
- [deleteSpotlightIndex(completionHandler:)](deletespotlightindex%28completionhandler_%29.md): Deletes all searchable items from the configured index.
- [startSpotlightIndexing()](startspotlightindexing%28%29.md): Starts the indexing of the store’s entities.

# stopSpotlightIndexing (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Stops the indexing of the store’s entities.

## Declaration

```objectivec
- (void) stopSpotlightIndexing;
```

<a id="Discussion"></a>

## Discussion

After you call this method, the delegate no longer posts notifications about index changes.

## See Also

### Managing the Index

- [attributeSetForObject:](attributeset%28for_%29.md): Returns the searchable attributes for the specified managed object.
- [deleteSpotlightIndexWithCompletionHandler:](deletespotlightindex%28completionhandler_%29.md): Deletes all searchable items from the configured index.
- [startSpotlightIndexing](startspotlightindexing%28%29.md): Starts the indexing of the store’s entities.
