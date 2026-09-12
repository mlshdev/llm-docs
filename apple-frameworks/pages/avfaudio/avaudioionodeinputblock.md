> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioionodeinputblock](https://developer.apple.com/documentation/avfaudio/avaudioionodeinputblock)

# AVAudioIONodeInputBlock (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The type that represents a block to render operation calls to get input data when in manual rendering mode.

## Declaration

```swift
typealias AVAudioIONodeInputBlock = (AVAudioFrameCount) -> UnsafePointer<AudioBufferList>?
```

## Parameters

- `inNumberOfFrames`: The number of frames the system needs to complete the request.

<a id="return-value"></a>

## Return Value

An [AudioBufferList](../coreaudiotypes/audiobufferlist.md) that contains the data to render, or `nil` if no data is available.

<a id="Discussion"></a>

## Discussion

Don’t clear or refill the data in the return value until the framework calls the input block again or the rendering finishes. The format of the buffer list must match the format you specify when registering the block.

## See Also

### Manually Giving Data to an Audio Engine

- [setManualRenderingInputPCMFormat(\_:inputBlock:)](avaudioinputnode/setmanualrenderinginputpcmformat%28__inputblock_%29.md): Supplies the data through the input node to the engine while operating in the manual rendering mode.

# AVAudioIONodeInputBlock (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The type that represents a block to render operation calls to get input data when in manual rendering mode.

## Declaration

```objectivec
typedef const struct AudioBufferList *(^)(unsigned int) AVAudioIONodeInputBlock;
```

## Parameters

- `inNumberOfFrames`: The number of frames the system needs to complete the request.

<a id="return-value"></a>

## Return Value

An [AudioBufferList](../coreaudiotypes/audiobufferlist.md) that contains the data to render, or `nil` if no data is available.

<a id="Discussion"></a>

## Discussion

Don’t clear or refill the data in the return value until the framework calls the input block again or the rendering finishes. The format of the buffer list must match the format you specify when registering the block.

## See Also

### Manually Giving Data to an Audio Engine

- [setManualRenderingInputPCMFormat:inputBlock:](avaudioinputnode/setmanualrenderinginputpcmformat%28__inputblock_%29.md): Supplies the data through the input node to the engine while operating in the manual rendering mode.
