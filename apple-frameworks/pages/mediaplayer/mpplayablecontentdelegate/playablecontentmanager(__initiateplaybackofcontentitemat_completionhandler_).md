> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentdelegate/playablecontentmanager(_:initiateplaybackofcontentitemat:completionhandler:)](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentdelegate/playablecontentmanager(_:initiateplaybackofcontentitemat:completionhandler:))

# playableContentManager(\_:initiatePlaybackOfContentItemAt:completionHandler:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Asks the delegate to begin playback of the specified content item.

> Use CarPlay framework

## Declaration

```swift
optional func playableContentManager(_ contentManager: MPPlayableContentManager, initiatePlaybackOfContentItemAt indexPath: IndexPath, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
optional func playableContentManager(_ contentManager: MPPlayableContentManager, initiatePlaybackOfContentItemAt indexPath: IndexPath) async throws
```

## Parameters

- `contentManager`: The content manager that initiated the request.
- `indexPath`: The index for the indicated item.
- `completionHandler`: A block that the system calls after initiating a playback request. The block takes the following parameter:

  - **error**: Pass [nil](../../objectivec/nil-227m0.md) if playback successfully began. If playback can’t begin, pass an error to indicate the reason.

<a id="Discussion"></a>

## Discussion

The system calls this method when a media player interface needs to play a media item. Your app responds by beginning playback of the requested media item. After beginning playback, call the provided `completionHandler` block with an argument of `nil`; or, if your app can’t begin playback, call the completion handler with an error that indicates the reason.

> **Important**

>  Don’t automatically restart playback when the media item is already playing. In most cases, it’s better for your app to do nothing and continue to play the current media item.

# playableContentManager:initiatePlaybackOfContentItemAtIndexPath:completionHandler: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Asks the delegate to begin playback of the specified content item.

> Use CarPlay framework

## Declaration

```objectivec
- (void) playableContentManager:(MPPlayableContentManager *) contentManager initiatePlaybackOfContentItemAtIndexPath:(NSIndexPath *) indexPath completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `contentManager`: The content manager that initiated the request.
- `indexPath`: The index for the indicated item.
- `completionHandler`: A block that the system calls after initiating a playback request. The block takes the following parameter:

  - **error**: Pass [nil](../../objectivec/nil-227m0.md) if playback successfully began. If playback can’t begin, pass an error to indicate the reason.

<a id="Discussion"></a>

## Discussion

The system calls this method when a media player interface needs to play a media item. Your app responds by beginning playback of the requested media item. After beginning playback, call the provided `completionHandler` block with an argument of `nil`; or, if your app can’t begin playback, call the completion handler with an error that indicates the reason.

> **Important**

>  Don’t automatically restart playback when the media item is already playing. In most cases, it’s better for your app to do nothing and continue to play the current media item.
