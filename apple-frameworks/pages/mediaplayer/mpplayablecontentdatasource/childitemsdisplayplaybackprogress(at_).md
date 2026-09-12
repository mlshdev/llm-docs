> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentdatasource/childitemsdisplayplaybackprogress(at:)](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentdatasource/childitemsdisplayplaybackprogress(at:))

# childItemsDisplayPlaybackProgress(at:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a Boolean value indicating whether the provided content supports playback progress.

> Use CarPlay framework

## Declaration

```swift
optional func childItemsDisplayPlaybackProgress(at indexPath: IndexPath) -> Bool
```

## Parameters

- `indexPath`: The index of the media item being queried.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the indicated media item supports displaying playback progress.

<a id="Discussion"></a>

## Discussion

If this method isn’t implemented, playback progress is not supported for any media item. If any media item does support displaying the playback progress, you must implement this method.

## See Also

### Working with child nodes

- [beginLoadingChildItems(at:completionHandler:)](beginloadingchilditems%28at_completionhandler_%29.md): Deprecated. Starts to load the children of the indicated index.
- [numberOfChildItems(at:)](numberofchilditems%28at_%29.md): Deprecated. Provides the number of child nodes for the indicated node.

# childItemsDisplayPlaybackProgressAtIndexPath: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a Boolean value indicating whether the provided content supports playback progress.

> Use CarPlay framework

## Declaration

```objectivec
- (BOOL) childItemsDisplayPlaybackProgressAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index of the media item being queried.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the indicated media item supports displaying playback progress.

<a id="Discussion"></a>

## Discussion

If this method isn’t implemented, playback progress is not supported for any media item. If any media item does support displaying the playback progress, you must implement this method.

## See Also

### Working with child nodes

- [beginLoadingChildItemsAtIndexPath:completionHandler:](beginloadingchilditems%28at_completionhandler_%29.md): Deprecated. Starts to load the children of the indicated index.
- [numberOfChildItemsAtIndexPath:](numberofchilditems%28at_%29.md): Deprecated. Provides the number of child nodes for the indicated node.
