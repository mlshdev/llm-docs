> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentdelegate/playablecontentmanager(_:didupdate:)](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentdelegate/playablecontentmanager(_:didupdate:))

# playableContentManager(\_:didUpdate:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 8.4+ (deprecated in 14.0) · iPadOS 8.4+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Notifies the delegate that the playable content manager’s context information has changed.

> Use CarPlay framework

## Declaration

```swift
optional func playableContentManager(_ contentManager: MPPlayableContentManager, didUpdate context: MPPlayableContentManagerContext)
```

## Parameters

- `contentManager`: The content manager whose current context has changed.
- `context`: The new context of the content manager.

<a id="Discussion"></a>

## Discussion

A playable content manager’s context provides information about the current playback environment of an external media player, such as whether that media player limits the amount of content to display. Use the content manager’s `context` property to examine attributes of the new context after the change.

# playableContentManager:didUpdateContext: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 8.4+ (deprecated in 14.0) · iPadOS 8.4+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Notifies the delegate that the playable content manager’s context information has changed.

> Use CarPlay framework

## Declaration

```objectivec
- (void) playableContentManager:(MPPlayableContentManager *) contentManager didUpdateContext:(MPPlayableContentManagerContext *) context;
```

## Parameters

- `contentManager`: The content manager whose current context has changed.
- `context`: The new context of the content manager.

<a id="Discussion"></a>

## Discussion

A playable content manager’s context provides information about the current playback environment of an external media player, such as whether that media player limits the amount of content to display. Use the content manager’s `context` property to examine attributes of the new context after the change.
