> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentmanager/delegate](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentmanager/delegate)

# delegate (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

A delegate that lets the media player manage the app’s playback queue.

> Use CarPlay framework

## Declaration

```swift
weak var delegate: (any MPPlayableContentDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate responds to external events that trigger a change in the media item that’s playing. An example of such an event would be choosing to play a song from a different album, or requesting suggested content to play next. The app must be able to respond to these events at any time.

To instead respond to events that affect the playback state of the currently playing item, use the [MPRemoteCommandEvent](../mpremotecommandevent.md) class.

## See Also

### Responding to playback events

- [MPPlayableContentDelegate](../mpplayablecontentdelegate.md): Deprecated. The protocol used to let external media players send playback commands to an app.

# delegate (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

A delegate that lets the media player manage the app’s playback queue.

> Use CarPlay framework

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<MPPlayableContentDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate responds to external events that trigger a change in the media item that’s playing. An example of such an event would be choosing to play a song from a different album, or requesting suggested content to play next. The app must be able to respond to these events at any time.

To instead respond to events that affect the playback state of the currently playing item, use the [MPRemoteCommandEvent](../mpremotecommandevent.md) class.

## See Also

### Responding to playback events

- [MPPlayableContentDelegate](../mpplayablecontentdelegate.md): Deprecated. The protocol used to let external media players send playback commands to an app.
