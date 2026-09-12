> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/enablemanualrenderingmode(_:format:maximumframecount:)](https://developer.apple.com/documentation/avfaudio/avaudioengine/enablemanualrenderingmode(_:format:maximumframecount:))

# enableManualRenderingMode(\_:format:maximumFrameCount:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Sets the engine to operate in manual rendering mode with the render format and maximum frame count you specify.

## Declaration

```swift
func enableManualRenderingMode(_ mode: AVAudioEngineManualRenderingMode, format pcmFormat: AVAudioFormat, maximumFrameCount: AVAudioFrameCount) throws
```

## Parameters

- `mode`: The manual rendering mode to use.
- `pcmFormat`: The format of the output PCM audio data from the engine.
- `maximumFrameCount`: The maximum number of PCM sample frames the engine produces in a single render call.

<a id="Discussion"></a>

## Discussion

Use this method to configure the engine to render in response to requests from the client. You must stop the engine before calling this method. The render format must be a PCM format and match the format of the rendering buffer.

The source nodes can supply the input data in manual rendering mode. For more information, see [AVAudioPlayerNode](../avaudioplayernode.md) and [AVAudioInputNode](../avaudioinputnode.md).

## See Also

### Manually Rendering an Audio Engine

- [disableManualRenderingMode()](disablemanualrenderingmode%28%29.md): Sets the engine to render to or from an audio device.
- [renderOffline(\_:to:)](renderoffline%28__to_%29.md): Makes a render call to the engine operating in the offline manual rendering mode.

# enableManualRenderingMode:format:maximumFrameCount:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Sets the engine to operate in manual rendering mode with the render format and maximum frame count you specify.

## Declaration

```objectivec
- (BOOL) enableManualRenderingMode:(AVAudioEngineManualRenderingMode) mode format:(AVAudioFormat *) pcmFormat maximumFrameCount:(AVAudioFrameCount) maximumFrameCount error:(NSError **) outError;
```

## Parameters

- `mode`: The manual rendering mode to use.
- `pcmFormat`: The format of the output PCM audio data from the engine.
- `maximumFrameCount`: The maximum number of PCM sample frames the engine produces in a single render call.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to configure the engine to render in response to requests from the client. You must stop the engine before calling this method. The render format must be a PCM format and match the format of the rendering buffer.

The source nodes can supply the input data in manual rendering mode. For more information, see [AVAudioPlayerNode](../avaudioplayernode.md) and [AVAudioInputNode](../avaudioinputnode.md).

## See Also

### Manually Rendering an Audio Engine

- [disableManualRenderingMode](disablemanualrenderingmode%28%29.md): Sets the engine to render to or from an audio device.
- [renderOffline:toBuffer:error:](renderoffline%28__to_%29.md): Makes a render call to the engine operating in the offline manual rendering mode.
