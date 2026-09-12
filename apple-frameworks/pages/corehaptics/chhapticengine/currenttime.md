> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/currenttime](https://developer.apple.com/documentation/corehaptics/chhapticengine/currenttime)

# currentTime (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The absolute time, in seconds, to use for scheduling haptic and audio events.

## Declaration

```swift
var currentTime: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This time applies to all haptic and audio events sent to and managed by the Core Haptics engine. Use the current time as a way to determine or track the start times of haptic and audio events, created as [CHHapticEvent](../chhapticevent.md) objects. It corresponds to the [relativeTime](../chhapticevent/relativetime.md) and [duration](../chhapticevent/duration.md) properties of haptic events.

> **Note**

>  The Core Haptics engine time doesn’t correlate to time used in media playback classes from other frameworks, such as [AVAudioPlayer](../../avfaudio/avaudioplayer.md).

## See Also

### Getting the Current Media Time

- [CHHapticTimeImmediate](../chhaptictimeimmediate.md): A time constant used to schedule a command immediately.

# currentTime (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The absolute time, in seconds, to use for scheduling haptic and audio events.

## Declaration

```objectivec
@property (readonly) NSTimeInterval currentTime;
```

<a id="Discussion"></a>

## Discussion

This time applies to all haptic and audio events sent to and managed by the Core Haptics engine. Use the current time as a way to determine or track the start times of haptic and audio events, created as [CHHapticEvent](../chhapticevent.md) objects. It corresponds to the [relativeTime](../chhapticevent/relativetime.md) and [duration](../chhapticevent/duration.md) properties of haptic events.

> **Note**

>  The Core Haptics engine time doesn’t correlate to time used in media playback classes from other frameworks, such as [AVAudioPlayer](../../avfaudio/avaudioplayer.md).

## See Also

### Getting the Current Media Time

- [CHHapticTimeImmediate](../chhaptictimeimmediate.md): A time constant used to schedule a command immediately.
