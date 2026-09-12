> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentdatasource/numberofchilditems(at:)](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentdatasource/numberofchilditems(at:))

# numberOfChildItems(at:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Provides the number of child nodes for the indicated node.

> Use CarPlay framework

## Declaration

```swift
func numberOfChildItems(at indexPath: IndexPath) -> Int
```

## Parameters

- `indexPath`: The index for the node to be queried.

<a id="return-value"></a>

## Return Value

An [NSInteger](../../objectivec/nsinteger.md) value representing the number of child nodes associated with the indicated node.

## See Also

### Working with child nodes

- [beginLoadingChildItems(at:completionHandler:)](beginloadingchilditems%28at_completionhandler_%29.md): Deprecated. Starts to load the children of the indicated index.
- [childItemsDisplayPlaybackProgress(at:)](childitemsdisplayplaybackprogress%28at_%29.md): Deprecated. Returns a Boolean value indicating whether the provided content supports playback progress.

# numberOfChildItemsAtIndexPath: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Provides the number of child nodes for the indicated node.

> Use CarPlay framework

## Declaration

```objectivec
- (NSInteger) numberOfChildItemsAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index for the node to be queried.

<a id="return-value"></a>

## Return Value

An [NSInteger](../../objectivec/nsinteger.md) value representing the number of child nodes associated with the indicated node.

## See Also

### Working with child nodes

- [beginLoadingChildItemsAtIndexPath:completionHandler:](beginloadingchilditems%28at_completionhandler_%29.md): Deprecated. Starts to load the children of the indicated index.
- [childItemsDisplayPlaybackProgressAtIndexPath:](childitemsdisplayplaybackprogress%28at_%29.md): Deprecated. Returns a Boolean value indicating whether the provided content supports playback progress.
