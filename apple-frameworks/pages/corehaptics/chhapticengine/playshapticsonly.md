> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/playshapticsonly](https://developer.apple.com/documentation/corehaptics/chhapticengine/playshapticsonly)

# playsHapticsOnly (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the engine ignores audio events.

## Declaration

```swift
var playsHapticsOnly: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) causes the engine to ignore all audio events, such as [audioContinuous](../chhapticevent/eventtype/audiocontinuous.md) and [audioCustom](../chhapticevent/eventtype/audiocustom.md). This also reduces latency of starting haptic playback.

> **Important**

>  Changing the value of this property on a running engine has no effect until you stop and restart the engine.

## See Also

### Modifying Playback Properties

- [playsAudioOnly](playsaudioonly.md): A Boolean value that indicates whether the engine ignores haptic events and plays audio events only.
- [isMutedForAudio](ismutedforaudio.md): A Boolean value that indicates whether the engine mutes audio.
- [isMutedForHaptics](ismutedforhaptics.md): A Boolean value that indicates whether the engine mutes haptics.

# playsHapticsOnly (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the engine ignores audio events.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL playsHapticsOnly;
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) causes the engine to ignore all audio events, such as [CHHapticEventTypeAudioContinuous](../chhapticevent/eventtype/audiocontinuous.md) and [CHHapticEventTypeAudioCustom](../chhapticevent/eventtype/audiocustom.md). This also reduces latency of starting haptic playback.

> **Important**

>  Changing the value of this property on a running engine has no effect until you stop and restart the engine.

## See Also

### Modifying Playback Properties

- [playsAudioOnly](playsaudioonly.md): A Boolean value that indicates whether the engine ignores haptic events and plays audio events only.
- [isMutedForAudio](ismutedforaudio.md): A Boolean value that indicates whether the engine mutes audio.
- [isMutedForHaptics](ismutedforhaptics.md): A Boolean value that indicates whether the engine mutes haptics.
