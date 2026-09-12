> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenginemanualrenderingstatus/insufficientdatafrominputnode](https://developer.apple.com/documentation/avfaudio/avaudioenginemanualrenderingstatus/insufficientdatafrominputnode)

# AVAudioEngineManualRenderingStatus.insufficientDataFromInputNode (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A condition that occurs when the input node doesn’t return enough input data to satisfy the render request at the time of the request.

## Declaration

```swift
case insufficientDataFromInputNode
```

<a id="Discussion"></a>

## Discussion

This status only applies to the input node when it provides input data for rendering. The output buffer may contain rendered data from other active sources in the engine’s processing graph. See [setManualRenderingInputPCMFormat(\_:inputBlock:)](../avaudioinputnode/setmanualrenderinginputpcmformat%28__inputblock_%29.md).

## See Also

### Constants

- [AVAudioEngineManualRenderingStatus.error](error.md): A problem that occurs during rendering and results in no data returning.
- [AVAudioEngineManualRenderingStatus.success](success.md): A status that indicates the successful return of the requested data.
- [AVAudioEngineManualRenderingStatus.cannotDoInCurrentContext](cannotdoincurrentcontext.md): An operation that the system can’t perform under the current conditions.

# AVAudioEngineManualRenderingStatusInsufficientDataFromInputNode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A condition that occurs when the input node doesn’t return enough input data to satisfy the render request at the time of the request.

## Declaration

```objectivec
AVAudioEngineManualRenderingStatusInsufficientDataFromInputNode
```

<a id="Discussion"></a>

## Discussion

This status only applies to the input node when it provides input data for rendering. The output buffer may contain rendered data from other active sources in the engine’s processing graph. See [setManualRenderingInputPCMFormat:inputBlock:](../avaudioinputnode/setmanualrenderinginputpcmformat%28__inputblock_%29.md).

## See Also

### Constants

- [AVAudioEngineManualRenderingStatusError](error.md): A problem that occurs during rendering and results in no data returning.
- [AVAudioEngineManualRenderingStatusSuccess](success.md): A status that indicates the successful return of the requested data.
- [AVAudioEngineManualRenderingStatusCannotDoInCurrentContext](cannotdoincurrentcontext.md): An operation that the system can’t perform under the current conditions.
