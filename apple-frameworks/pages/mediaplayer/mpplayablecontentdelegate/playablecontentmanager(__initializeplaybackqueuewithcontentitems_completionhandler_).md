> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentdelegate/playablecontentmanager(_:initializeplaybackqueuewithcontentitems:completionhandler:)](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentdelegate/playablecontentmanager(_:initializeplaybackqueuewithcontentitems:completionhandler:))

# playableContentManager(\_:initializePlaybackQueueWithContentItems:completionHandler:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ (deprecated in 12.0) · iPadOS 9.3+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Asks the delegate to prepare suggested content for playback.

> Use Intents framework for initiating playback queues.

## Declaration

```swift
optional func playableContentManager(_ contentManager: MPPlayableContentManager, initializePlaybackQueueWithContentItems contentItems: [Any]?, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
optional func playableContentManager(_ contentManager: MPPlayableContentManager, initializePlaybackQueueWithContentItems contentItems: [Any]?) async throws
```

## Parameters

- `contentManager`: The content manager that initiated the request.
- `contentItems`: The content items to load.
- `completionHandler`: A block that the system calls after content is ready for playback. The block takes the following parameter:

  - **error**: Pass [nil](../../objectivec/nil-227m0.md) if playback successfully began. If playback can’t begin, pass an error to indicate the reason.

<a id="Discussion"></a>

## Discussion

iOS calls this method when the user performs an action that, in context, might indicate intent to begin playing content using your app. For example, if the user frequently listens to audio content in your app with headphones while at a particular location, iOS might call this method upon plugging in headphones when the user is at that location. Your app responds by choosing appropriate content, performing any app-specific actions necessary to prepare the content for playback, and setting the [nowPlayingInfo](../mpnowplayinginfocenter/nowplayinginfo.md) property of the shared [MPNowPlayingInfoCenter](../mpnowplayinginfocenter.md) object to indicate to the user that this content is ready to play.

Use this method only to suggest content. Don’t begin playback of content in this method—do so only upon receiving a `Play` command or when the playable content manager requests to play something else.

After preparing content for playing, call the provided `completionHandler` block with an argument of [nil](../../objectivec/nil-227m0.md); or, if your app can’t prepare content, call the completion handler an error that indicates the reason.

## See Also

### Suggesting content for playback

- [playableContentManager(\_:initializePlaybackQueueWithCompletionHandler:)](playablecontentmanager%28__initializeplaybackqueuewithcompletionhandler_%29.md): Deprecated. Asks the delegate to prepare suggested content for playback.

# playableContentManager:initializePlaybackQueueWithContentItems:completionHandler: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ (deprecated in 12.0) · iPadOS 9.3+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Asks the delegate to prepare suggested content for playback.

> Use Intents framework for initiating playback queues.

## Declaration

```objectivec
- (void) playableContentManager:(MPPlayableContentManager *) contentManager initializePlaybackQueueWithContentItems:(NSArray *) contentItems completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `contentManager`: The content manager that initiated the request.
- `contentItems`: The content items to load.
- `completionHandler`: A block that the system calls after content is ready for playback. The block takes the following parameter:

  - **error**: Pass [nil](../../objectivec/nil-227m0.md) if playback successfully began. If playback can’t begin, pass an error to indicate the reason.

<a id="Discussion"></a>

## Discussion

iOS calls this method when the user performs an action that, in context, might indicate intent to begin playing content using your app. For example, if the user frequently listens to audio content in your app with headphones while at a particular location, iOS might call this method upon plugging in headphones when the user is at that location. Your app responds by choosing appropriate content, performing any app-specific actions necessary to prepare the content for playback, and setting the [nowPlayingInfo](../mpnowplayinginfocenter/nowplayinginfo.md) property of the shared [MPNowPlayingInfoCenter](../mpnowplayinginfocenter.md) object to indicate to the user that this content is ready to play.

Use this method only to suggest content. Don’t begin playback of content in this method—do so only upon receiving a `Play` command or when the playable content manager requests to play something else.

After preparing content for playing, call the provided `completionHandler` block with an argument of [nil](../../objectivec/nil-227m0.md); or, if your app can’t prepare content, call the completion handler an error that indicates the reason.

## See Also

### Suggesting content for playback

- [playableContentManager:initializePlaybackQueueWithCompletionHandler:](playablecontentmanager%28__initializeplaybackqueuewithcompletionhandler_%29.md): Deprecated. Asks the delegate to prepare suggested content for playback.
