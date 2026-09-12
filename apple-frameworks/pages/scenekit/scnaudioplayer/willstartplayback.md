> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudioplayer/willstartplayback](https://developer.apple.com/documentation/scenekit/scnaudioplayer/willstartplayback)

# willStartPlayback (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A block called by SceneKit when playback of the player’s audio source is about to begin.

## Declaration

```swift
var willStartPlayback: (() -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The block takes no parameters and returns no value. Use this block to perform actions in response to the playing of sounds.

## See Also

### Responding to Playback

- [didFinishPlayback](didfinishplayback.md): A block called by SceneKit when playback of the player’s audio source has completed.

# willStartPlayback (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A block called by SceneKit when playback of the player’s audio source is about to begin.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^willStartPlayback)();
```

<a id="Discussion"></a>

## Discussion

The block takes no parameters and returns no value. Use this block to perform actions in response to the playing of sounds.

## See Also

### Responding to Playback

- [didFinishPlayback](didfinishplayback.md): A block called by SceneKit when playback of the player’s audio source has completed.
