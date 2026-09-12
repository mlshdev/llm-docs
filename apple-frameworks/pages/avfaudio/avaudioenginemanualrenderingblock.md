> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenginemanualrenderingblock](https://developer.apple.com/documentation/avfaudio/avaudioenginemanualrenderingblock)

# AVAudioEngineManualRenderingBlock (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The type that represents a block that renders the engine when operating in manual rendering mode.

## Declaration

```swift
typealias AVAudioEngineManualRenderingBlock = (AVAudioFrameCount, UnsafeMutablePointer<AudioBufferList>, UnsafeMutablePointer<OSStatus>?) -> AVAudioEngineManualRenderingStatus
```

## Parameters

- `numberOfFrames`: The number of PCM sample frames to render.
- `outBuffer`: The PCM buffer the engine must render the audio for.
- `outError`: On exit, if an error occurs during rendering, a description of the error.

<a id="return-value"></a>

## Return Value

One of the status codes from [AVAudioEngineManualRenderingStatus](avaudioenginemanualrenderingstatus.md). Irrespective of the returned status code, on exit, the output buffer’s [frameLength](avaudiopcmbuffer/framelength.md) indicates the number of PCM samples the engine renders.

## See Also

### Getting Manual Rendering Properties

- [manualRenderingBlock](avaudioengine/manualrenderingblock.md): The block that renders the engine when operating in manual rendering mode.
- [manualRenderingFormat](avaudioengine/manualrenderingformat.md): The render format of the engine in manual rendering mode.
- [manualRenderingMaximumFrameCount](avaudioengine/manualrenderingmaximumframecount.md): The maximum number of PCM sample frames the engine produces in any single render call in manual rendering mode.
- [manualRenderingMode](avaudioengine/manualrenderingmode.md): The manual rendering mode configured on the engine.
- [manualRenderingSampleTime](avaudioengine/manualrenderingsampletime.md): An indication of where the engine is on its render timeline in manual rendering mode.
- [isAutoShutdownEnabled](avaudioengine/isautoshutdownenabled.md): A Boolean value that indicates whether autoshutdown is in an enabled state.
- [isInManualRenderingMode](avaudioengine/isinmanualrenderingmode.md): A Boolean value that indicates whether the engine is operating in manual rendering mode.

# AVAudioEngineManualRenderingBlock (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The type that represents a block that renders the engine when operating in manual rendering mode.

## Declaration

```objectivec
typedef enum AVAudioEngineManualRenderingStatus (^)(unsigned int, struct AudioBufferList *, int *) AVAudioEngineManualRenderingBlock;
```

## Parameters

- `numberOfFrames`: The number of PCM sample frames to render.
- `outBuffer`: The PCM buffer the engine must render the audio for.
- `outError`: On exit, if an error occurs during rendering, a description of the error.

<a id="return-value"></a>

## Return Value

One of the status codes from [AVAudioEngineManualRenderingStatus](avaudioenginemanualrenderingstatus.md). Irrespective of the returned status code, on exit, the output buffer’s [frameLength](avaudiopcmbuffer/framelength.md) indicates the number of PCM samples the engine renders.

## See Also

### Getting Manual Rendering Properties

- [manualRenderingBlock](avaudioengine/manualrenderingblock.md): The block that renders the engine when operating in manual rendering mode.
- [manualRenderingFormat](avaudioengine/manualrenderingformat.md): The render format of the engine in manual rendering mode.
- [manualRenderingMaximumFrameCount](avaudioengine/manualrenderingmaximumframecount.md): The maximum number of PCM sample frames the engine produces in any single render call in manual rendering mode.
- [manualRenderingMode](avaudioengine/manualrenderingmode.md): The manual rendering mode configured on the engine.
- [manualRenderingSampleTime](avaudioengine/manualrenderingsampletime.md): An indication of where the engine is on its render timeline in manual rendering mode.
- [autoShutdownEnabled](avaudioengine/isautoshutdownenabled.md): A Boolean value that indicates whether autoshutdown is in an enabled state.
- [isInManualRenderingMode](avaudioengine/isinmanualrenderingmode.md): A Boolean value that indicates whether the engine is operating in manual rendering mode.
