> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscoredatacorespotlightdelegate/deletespotlightindex(completionhandler:)](https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/deletespotlightindex(completionhandler:))

# deleteSpotlightIndex(completionHandler:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Deletes all searchable items from the configured index.

## Declaration

```swift
func deleteSpotlightIndex(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func deleteSpotlightIndex() async throws
```

<a id="Discussion"></a>

## Discussion

The closure returns no value and takes only a single parameter, which is an error object that contains information about issues preventing the deletion of searchable items, or `nil` if Core Spotlight successfully deletes all searchable items.

Depending on the cause of the issue, an error can originate from Core Data or from Core Spotlight. Make sure your app can handle both scenarios.

> **Note**

>  You must call [stopSpotlightIndexing()](stopspotlightindexing%28%29.md) before you call this method; otherwise, Core Data immediately recreates the index.

## See Also

### Managing the Index

- [attributeSet(for:)](attributeset%28for_%29.md): Returns the searchable attributes for the specified managed object.
- [startSpotlightIndexing()](startspotlightindexing%28%29.md): Starts the indexing of the store’s entities.
- [stopSpotlightIndexing()](stopspotlightindexing%28%29.md): Stops the indexing of the store’s entities.

# deleteSpotlightIndexWithCompletionHandler: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Deletes all searchable items from the configured index.

## Declaration

```objectivec
- (void) deleteSpotlightIndexWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

The closure returns no value and takes only a single parameter, which is an error object that contains information about issues preventing the deletion of searchable items, or `nil` if Core Spotlight successfully deletes all searchable items.

Depending on the cause of the issue, an error can originate from Core Data or from Core Spotlight. Make sure your app can handle both scenarios.

> **Note**

>  You must call [stopSpotlightIndexing](stopspotlightindexing%28%29.md) before you call this method; otherwise, Core Data immediately recreates the index.

## See Also

### Managing the Index

- [attributeSetForObject:](attributeset%28for_%29.md): Returns the searchable attributes for the specified managed object.
- [startSpotlightIndexing](startspotlightindexing%28%29.md): Starts the indexing of the store’s entities.
- [stopSpotlightIndexing](stopspotlightindexing%28%29.md): Stops the indexing of the store’s entities.
