> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/manualrenderingformat](https://developer.apple.com/documentation/avfaudio/avaudioengine/manualrenderingformat)

# manualRenderingFormat (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The render format of the engine in manual rendering mode.

## Declaration

```swift
var manualRenderingFormat: AVAudioFormat { get }
```

## See Also

### Getting Manual Rendering Properties

- [AVAudioEngineManualRenderingBlock](../avaudioenginemanualrenderingblock.md): The type that represents a block that renders the engine when operating in manual rendering mode.
- [manualRenderingBlock](manualrenderingblock.md): The block that renders the engine when operating in manual rendering mode.
- [manualRenderingMaximumFrameCount](manualrenderingmaximumframecount.md): The maximum number of PCM sample frames the engine produces in any single render call in manual rendering mode.
- [manualRenderingMode](manualrenderingmode.md): The manual rendering mode configured on the engine.
- [manualRenderingSampleTime](manualrenderingsampletime.md): An indication of where the engine is on its render timeline in manual rendering mode.
- [isAutoShutdownEnabled](isautoshutdownenabled.md): A Boolean value that indicates whether autoshutdown is in an enabled state.
- [isInManualRenderingMode](isinmanualrenderingmode.md): A Boolean value that indicates whether the engine is operating in manual rendering mode.

# manualRenderingFormat (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The render format of the engine in manual rendering mode.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioFormat * manualRenderingFormat;
```

## See Also

### Getting Manual Rendering Properties

- [AVAudioEngineManualRenderingBlock](../avaudioenginemanualrenderingblock.md): The type that represents a block that renders the engine when operating in manual rendering mode.
- [manualRenderingBlock](manualrenderingblock.md): The block that renders the engine when operating in manual rendering mode.
- [manualRenderingMaximumFrameCount](manualrenderingmaximumframecount.md): The maximum number of PCM sample frames the engine produces in any single render call in manual rendering mode.
- [manualRenderingMode](manualrenderingmode.md): The manual rendering mode configured on the engine.
- [manualRenderingSampleTime](manualrenderingsampletime.md): An indication of where the engine is on its render timeline in manual rendering mode.
- [autoShutdownEnabled](isautoshutdownenabled.md): A Boolean value that indicates whether autoshutdown is in an enabled state.
- [isInManualRenderingMode](isinmanualrenderingmode.md): A Boolean value that indicates whether the engine is operating in manual rendering mode.
