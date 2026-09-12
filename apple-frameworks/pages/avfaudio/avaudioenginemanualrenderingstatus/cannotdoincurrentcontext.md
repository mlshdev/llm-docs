> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenginemanualrenderingstatus/cannotdoincurrentcontext](https://developer.apple.com/documentation/avfaudio/avaudioenginemanualrenderingstatus/cannotdoincurrentcontext)

# AVAudioEngineManualRenderingStatus.cannotDoInCurrentContext (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An operation that the system can’t perform under the current conditions.

## Declaration

```swift
case cannotDoInCurrentContext
```

<a id="Discussion"></a>

## Discussion

This status guards a real-time render operation when a reconfiguration of the engine’s internal state is in progress. The client can try again later.

## See Also

### Constants

- [AVAudioEngineManualRenderingStatus.error](error.md): A problem that occurs during rendering and results in no data returning.
- [AVAudioEngineManualRenderingStatus.success](success.md): A status that indicates the successful return of the requested data.
- [AVAudioEngineManualRenderingStatus.insufficientDataFromInputNode](insufficientdatafrominputnode.md): A condition that occurs when the input node doesn’t return enough input data to satisfy the render request at the time of the request.

# AVAudioEngineManualRenderingStatusCannotDoInCurrentContext (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An operation that the system can’t perform under the current conditions.

## Declaration

```objectivec
AVAudioEngineManualRenderingStatusCannotDoInCurrentContext
```

<a id="Discussion"></a>

## Discussion

This status guards a real-time render operation when a reconfiguration of the engine’s internal state is in progress. The client can try again later.

## See Also

### Constants

- [AVAudioEngineManualRenderingStatusError](error.md): A problem that occurs during rendering and results in no data returning.
- [AVAudioEngineManualRenderingStatusSuccess](success.md): A status that indicates the successful return of the requested data.
- [AVAudioEngineManualRenderingStatusInsufficientDataFromInputNode](insufficientdatafrominputnode.md): A condition that occurs when the input node doesn’t return enough input data to satisfy the render request at the time of the request.
