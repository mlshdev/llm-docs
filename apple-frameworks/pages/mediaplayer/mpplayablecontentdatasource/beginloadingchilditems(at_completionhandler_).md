> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentdatasource/beginloadingchilditems(at:completionhandler:)](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentdatasource/beginloadingchilditems(at:completionhandler:))

# beginLoadingChildItems(at:completionHandler:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Starts to load the children of the indicated index.

> Use CarPlay framework

## Declaration

```swift
optional func beginLoadingChildItems(at indexPath: IndexPath, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
optional func beginLoadingChildItems(at indexPath: IndexPath) async throws
```

## Parameters

- `indexPath`: The index of the current item.
- `completionHandler`: A block to be called after all loading is completed.

  The block receives the following parameter:

  - ***error***: Contains an error message if there was an error trying to load the children of the indicated item; otherwise, contains `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to start asynchronous batch loading of media items. The app can load content before the media player needs to display the next media items. When you use this method, the client app must call the completion handler after loading has finished.

## See Also

### Working with child nodes

- [childItemsDisplayPlaybackProgress(at:)](childitemsdisplayplaybackprogress%28at_%29.md): Deprecated. Returns a Boolean value indicating whether the provided content supports playback progress.
- [numberOfChildItems(at:)](numberofchilditems%28at_%29.md): Deprecated. Provides the number of child nodes for the indicated node.

# beginLoadingChildItemsAtIndexPath:completionHandler: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Starts to load the children of the indicated index.

> Use CarPlay framework

## Declaration

```objectivec
- (void) beginLoadingChildItemsAtIndexPath:(NSIndexPath *) indexPath completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `indexPath`: The index of the current item.
- `completionHandler`: A block to be called after all loading is completed.

  The block receives the following parameter:

  - ***error***: Contains an error message if there was an error trying to load the children of the indicated item; otherwise, contains `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to start asynchronous batch loading of media items. The app can load content before the media player needs to display the next media items. When you use this method, the client app must call the completion handler after loading has finished.

## See Also

### Working with child nodes

- [childItemsDisplayPlaybackProgressAtIndexPath:](childitemsdisplayplaybackprogress%28at_%29.md): Deprecated. Returns a Boolean value indicating whether the provided content supports playback progress.
- [numberOfChildItemsAtIndexPath:](numberofchilditems%28at_%29.md): Deprecated. Provides the number of child nodes for the indicated node.
