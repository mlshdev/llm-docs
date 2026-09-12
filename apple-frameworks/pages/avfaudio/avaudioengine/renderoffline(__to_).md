> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/renderoffline(_:to:)](https://developer.apple.com/documentation/avfaudio/avaudioengine/renderoffline(_:to:))

# renderOffline(\_:to:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Makes a render call to the engine operating in the offline manual rendering mode.

## Declaration

```swift
func renderOffline(_ numberOfFrames: AVAudioFrameCount, to buffer: AVAudioPCMBuffer) throws -> AVAudioEngineManualRenderingStatus
```

## Parameters

- `numberOfFrames`: The number of PCM sample frames to render.
- `buffer`: The PCM buffer the engine must render the audio for.

<a id="return-value"></a>

## Return Value

One of the status codes from [AVAudioEngineManualRenderingStatus](../avaudioenginemanualrenderingstatus.md). Irrespective of the returned status code, on exit, the output buffer’s [frameLength](../avaudiopcmbuffer/framelength.md) indicates the number of PCM samples the engine renders.

## See Also

### Manually Rendering an Audio Engine

- [enableManualRenderingMode(\_:format:maximumFrameCount:)](enablemanualrenderingmode%28__format_maximumframecount_%29.md): Sets the engine to operate in manual rendering mode with the render format and maximum frame count you specify.
- [disableManualRenderingMode()](disablemanualrenderingmode%28%29.md): Sets the engine to render to or from an audio device.

# renderOffline:toBuffer:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Makes a render call to the engine operating in the offline manual rendering mode.

## Declaration

```objectivec
- (AVAudioEngineManualRenderingStatus) renderOffline:(AVAudioFrameCount) numberOfFrames toBuffer:(AVAudioPCMBuffer *) buffer error:(NSError **) outError;
```

## Parameters

- `numberOfFrames`: The number of PCM sample frames to render.
- `buffer`: The PCM buffer the engine must render the audio for.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

One of the status codes from [AVAudioEngineManualRenderingStatus](../avaudioenginemanualrenderingstatus.md). Irrespective of the returned status code, on exit, the output buffer’s [frameLength](../avaudiopcmbuffer/framelength.md) indicates the number of PCM samples the engine renders.

## See Also

### Manually Rendering an Audio Engine

- [enableManualRenderingMode:format:maximumFrameCount:error:](enablemanualrenderingmode%28__format_maximumframecount_%29.md): Sets the engine to operate in manual rendering mode with the render format and maximum frame count you specify.
- [disableManualRenderingMode](disablemanualrenderingmode%28%29.md): Sets the engine to render to or from an audio device.
