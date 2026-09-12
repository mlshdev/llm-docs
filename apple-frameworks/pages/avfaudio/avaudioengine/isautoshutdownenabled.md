> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/isautoshutdownenabled](https://developer.apple.com/documentation/avfaudio/avaudioengine/isautoshutdownenabled)

# isAutoShutdownEnabled (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether autoshutdown is in an enabled state.

## Declaration

```swift
var isAutoShutdownEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If autoshutdown is in an enabled state, the engine can start and stop the audio hardware dynamically to conserve power. In watchOS, autoshutdown is always in an enabled state. For other platforms, it’s in a disabled state by default.

## See Also

### Getting Manual Rendering Properties

- [AVAudioEngineManualRenderingBlock](../avaudioenginemanualrenderingblock.md): The type that represents a block that renders the engine when operating in manual rendering mode.
- [manualRenderingBlock](manualrenderingblock.md): The block that renders the engine when operating in manual rendering mode.
- [manualRenderingFormat](manualrenderingformat.md): The render format of the engine in manual rendering mode.
- [manualRenderingMaximumFrameCount](manualrenderingmaximumframecount.md): The maximum number of PCM sample frames the engine produces in any single render call in manual rendering mode.
- [manualRenderingMode](manualrenderingmode.md): The manual rendering mode configured on the engine.
- [manualRenderingSampleTime](manualrenderingsampletime.md): An indication of where the engine is on its render timeline in manual rendering mode.
- [isInManualRenderingMode](isinmanualrenderingmode.md): A Boolean value that indicates whether the engine is operating in manual rendering mode.

# autoShutdownEnabled (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether autoshutdown is in an enabled state.

## Declaration

```objectivec
@property (nonatomic, getter=isAutoShutdownEnabled) BOOL autoShutdownEnabled;
```

<a id="Discussion"></a>

## Discussion

If autoshutdown is in an enabled state, the engine can start and stop the audio hardware dynamically to conserve power. In watchOS, autoshutdown is always in an enabled state. For other platforms, it’s in a disabled state by default.

## See Also

### Getting Manual Rendering Properties

- [AVAudioEngineManualRenderingBlock](../avaudioenginemanualrenderingblock.md): The type that represents a block that renders the engine when operating in manual rendering mode.
- [manualRenderingBlock](manualrenderingblock.md): The block that renders the engine when operating in manual rendering mode.
- [manualRenderingFormat](manualrenderingformat.md): The render format of the engine in manual rendering mode.
- [manualRenderingMaximumFrameCount](manualrenderingmaximumframecount.md): The maximum number of PCM sample frames the engine produces in any single render call in manual rendering mode.
- [manualRenderingMode](manualrenderingmode.md): The manual rendering mode configured on the engine.
- [manualRenderingSampleTime](manualrenderingsampletime.md): An indication of where the engine is on its render timeline in manual rendering mode.
- [isInManualRenderingMode](isinmanualrenderingmode.md): A Boolean value that indicates whether the engine is operating in manual rendering mode.
