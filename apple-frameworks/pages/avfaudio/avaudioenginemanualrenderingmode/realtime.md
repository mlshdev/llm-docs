> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenginemanualrenderingmode/realtime](https://developer.apple.com/documentation/avfaudio/avaudioenginemanualrenderingmode/realtime)

# AVAudioEngineManualRenderingMode.realtime (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An engine that operates under real-time constraints and doesn’t make blocking calls while rendering.

## Declaration

```swift
case realtime
```

<a id="Discussion"></a>

## Discussion

You can only use the block-based render mechanism in this mode. See [manualRenderingBlock](../avaudioengine/manualrenderingblock.md).

## See Also

### Constants

- [AVAudioEngineManualRenderingMode.offline](offline.md): An engine that operates in an offline mode.

# AVAudioEngineManualRenderingModeRealtime (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An engine that operates under real-time constraints and doesn’t make blocking calls while rendering.

## Declaration

```objectivec
AVAudioEngineManualRenderingModeRealtime
```

<a id="Discussion"></a>

## Discussion

You can only use the block-based render mechanism in this mode. See [manualRenderingBlock](../avaudioengine/manualrenderingblock.md).

## See Also

### Constants

- [AVAudioEngineManualRenderingModeOffline](offline.md): An engine that operates in an offline mode.
