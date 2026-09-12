> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplaybackispreparedtoplaydidchangenotification](https://developer.apple.com/documentation/mediaplayer/mpmediaplaybackispreparedtoplaydidchangenotification)

# MPMediaPlaybackIsPreparedToPlayDidChangeNotification

**Interface language:** Objective-C

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · tvOS  (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Indicates that the prepared to play status of the media player has changed.

## Declaration

```objectivec
extern NSString * const MPMediaPlaybackIsPreparedToPlayDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

Posted upon change in the prepared-to-play state of an object conforming to the [MPMediaPlayback](mpmediaplayback.md) protocol. The object whose state has changed is available as the object associated with the notification.
