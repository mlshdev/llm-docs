> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpplayablecontentdatasource/contentitem(at:)

# contentItem(at:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves the media item at the specified index.

> Use CarPlay framework

## Declaration

```swift
func contentItem(at indexPath: IndexPath) -> MPContentItem?
```

## Parameters

- `indexPath`: The index for the media item to be retrieved.

<a id="return-value"></a>

## Return Value

The media item at the indicated index.

## See Also

### Retrieving a media item

- [contentItem(forIdentifier:completionHandler:)](contentitem%28foridentifier_completionhandler_%29.md): Deprecated. Retrieves the content item associated with the provided identifier.

# contentItemAtIndexPath: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves the media item at the specified index.

> Use CarPlay framework

## Declaration

```objectivec
- (MPContentItem *) contentItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index for the media item to be retrieved.

<a id="return-value"></a>

## Return Value

The media item at the indicated index.

## See Also

### Retrieving a media item

- [contentItemForIdentifier:completionHandler:](contentitem%28foridentifier_completionhandler_%29.md): Deprecated. Retrieves the content item associated with the provided identifier.
