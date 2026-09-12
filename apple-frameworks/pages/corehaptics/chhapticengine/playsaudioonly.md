> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/playsaudioonly](https://developer.apple.com/documentation/corehaptics/chhapticengine/playsaudioonly)

# playsAudioOnly (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the engine ignores haptic events and plays audio events only.

## Declaration

```swift
var playsAudioOnly: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If you set a new value on a running engine, you must restart the engine for the change to take effect.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Modifying Playback Properties

- [playsHapticsOnly](playshapticsonly.md): A Boolean value that indicates whether the engine ignores audio events.
- [isMutedForAudio](ismutedforaudio.md): A Boolean value that indicates whether the engine mutes audio.
- [isMutedForHaptics](ismutedforhaptics.md): A Boolean value that indicates whether the engine mutes haptics.

# playsAudioOnly (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the engine ignores haptic events and plays audio events only.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL playsAudioOnly;
```

<a id="Discussion"></a>

## Discussion

If you set a new value on a running engine, you must restart the engine for the change to take effect.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Modifying Playback Properties

- [playsHapticsOnly](playshapticsonly.md): A Boolean value that indicates whether the engine ignores audio events.
- [isMutedForAudio](ismutedforaudio.md): A Boolean value that indicates whether the engine mutes audio.
- [isMutedForHaptics](ismutedforhaptics.md): A Boolean value that indicates whether the engine mutes haptics.
