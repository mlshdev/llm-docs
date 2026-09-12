> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uievent/eventsubtype](https://developer.apple.com/documentation/uikit/uievent/eventsubtype)

# UIEvent.EventSubtype (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that specify the subtype of the event in relation to its general type.

## Declaration

```swift
enum EventSubtype
```

<a id="overview"></a>

## Overview

You can obtain the subtype of an event from the [subtype](subtype.md) property.

## Topics

### Constants

- [UIEvent.EventSubtype.none](eventsubtype/none.md): The event has no subtype.
- [UIEvent.EventSubtype.motionShake](eventsubtype/motionshake.md): The event is related to a person shaking the device.
- [UIEvent.EventSubtype.remoteControlPlay](eventsubtype/remotecontrolplay.md): A remote-control event for playing audio or video.
- [UIEvent.EventSubtype.remoteControlPause](eventsubtype/remotecontrolpause.md): A remote-control event for pausing audio or video.
- [UIEvent.EventSubtype.remoteControlStop](eventsubtype/remotecontrolstop.md): A remote-control event for stopping audio or video from playing.
- [UIEvent.EventSubtype.remoteControlTogglePlayPause](eventsubtype/remotecontroltoggleplaypause.md): A remote-control event for toggling audio or video between play and pause.
- [UIEvent.EventSubtype.remoteControlNextTrack](eventsubtype/remotecontrolnexttrack.md): A remote-control event for skipping to the next audio or video track.
- [UIEvent.EventSubtype.remoteControlPreviousTrack](eventsubtype/remotecontrolprevioustrack.md): A remote-control event for skipping to the previous audio or video track.
- [UIEvent.EventSubtype.remoteControlBeginSeekingBackward](eventsubtype/remotecontrolbeginseekingbackward.md): A remote-control event to start seeking backward through the audio or video medium.
- [UIEvent.EventSubtype.remoteControlEndSeekingBackward](eventsubtype/remotecontrolendseekingbackward.md): A remote-control event to end seeking backward through the audio or video medium.
- [UIEvent.EventSubtype.remoteControlBeginSeekingForward](eventsubtype/remotecontrolbeginseekingforward.md): A remote-control event to start seeking forward through the audio or video medium.
- [UIEvent.EventSubtype.remoteControlEndSeekingForward](eventsubtype/remotecontrolendseekingforward.md): A remote-control event to end seeking forward through the audio or video medium.

### Initializers

- [init(rawValue:)](eventsubtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the event type

- [type](type.md): Returns the type of the event.
- [UIEvent.EventType](eventtype.md): Constants that specify the general type of an event.
- [subtype](subtype.md): Returns the subtype of the event.

# UIEventSubtype (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that specify the subtype of the event in relation to its general type.

## Declaration

```objectivec
enum UIEventSubtype : NSInteger;
```

<a id="overview"></a>

## Overview

You can obtain the subtype of an event from the [subtype](subtype.md) property.

## Topics

### Constants

- [UIEventSubtypeNone](eventsubtype/none.md): The event has no subtype.
- [UIEventSubtypeMotionShake](eventsubtype/motionshake.md): The event is related to a person shaking the device.
- [UIEventSubtypeRemoteControlPlay](eventsubtype/remotecontrolplay.md): A remote-control event for playing audio or video.
- [UIEventSubtypeRemoteControlPause](eventsubtype/remotecontrolpause.md): A remote-control event for pausing audio or video.
- [UIEventSubtypeRemoteControlStop](eventsubtype/remotecontrolstop.md): A remote-control event for stopping audio or video from playing.
- [UIEventSubtypeRemoteControlTogglePlayPause](eventsubtype/remotecontroltoggleplaypause.md): A remote-control event for toggling audio or video between play and pause.
- [UIEventSubtypeRemoteControlNextTrack](eventsubtype/remotecontrolnexttrack.md): A remote-control event for skipping to the next audio or video track.
- [UIEventSubtypeRemoteControlPreviousTrack](eventsubtype/remotecontrolprevioustrack.md): A remote-control event for skipping to the previous audio or video track.
- [UIEventSubtypeRemoteControlBeginSeekingBackward](eventsubtype/remotecontrolbeginseekingbackward.md): A remote-control event to start seeking backward through the audio or video medium.
- [UIEventSubtypeRemoteControlEndSeekingBackward](eventsubtype/remotecontrolendseekingbackward.md): A remote-control event to end seeking backward through the audio or video medium.
- [UIEventSubtypeRemoteControlBeginSeekingForward](eventsubtype/remotecontrolbeginseekingforward.md): A remote-control event to start seeking forward through the audio or video medium.
- [UIEventSubtypeRemoteControlEndSeekingForward](eventsubtype/remotecontrolendseekingforward.md): A remote-control event to end seeking forward through the audio or video medium.

## See Also

### Getting the event type

- [type](type.md): Returns the type of the event.
- [UIEventType](eventtype.md): Constants that specify the general type of an event.
- [subtype](subtype.md): Returns the subtype of the event.
