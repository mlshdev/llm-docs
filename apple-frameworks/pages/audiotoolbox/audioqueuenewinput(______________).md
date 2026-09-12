> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuenewinput(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuenewinput(_:_:_:_:_:_:_:))

# AudioQueueNewInput(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a new recording audio queue object.

## Declaration

```swift
func AudioQueueNewInput(_ inFormat: UnsafePointer<AudioStreamBasicDescription>, _ inCallbackProc: AudioQueueInputCallback, _ inUserData: UnsafeMutableRawPointer?, _ inCallbackRunLoop: CFRunLoop?, _ inCallbackRunLoopMode: CFString?, _ inFlags: UInt32, _ outAQ: UnsafeMutablePointer<AudioQueueRef?>) -> OSStatus
```

## Parameters

- `inFormat`: The compressed or uncompressed audio data format to record to. When recording to linear PCM, only interleaved formats are supported.
- `inCallbackProc`: A callback function to use with the recording audio queue. The audio queue calls this function when the audio queue has finished filling a buffer. See [AudioQueueInputCallback](audioqueueinputcallback.md).
- `inUserData`: A custom data structure for use with the callback function.
- `inCallbackRunLoop`: The event loop on which the callback function pointed to by the  `inCallbackProc` parameter is to be called. If you specify `NULL`, the callback is called on one of the audio queue’s internal threads.
- `inCallbackRunLoopMode`: The run loop mode in which to invoke the callback function specified in the `inCallbackProc` parameter. Typically, you pass `kCFRunLoopCommonModes` or use `NULL`, which is equivalent. You can choose to create your own thread with your own run loops. For more information on run loops, see Run Loops and [CFRunLoop](../corefoundation/cfrunloop.md).
- `inFlags`: Reserved for future use. Must be `0`.
- `outAQ`: On output, the newly created recording audio queue.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Related Documentation

- [AudioQueueSetOfflineRenderFormat(\_:\_:\_:)](audioqueuesetofflinerenderformat%28______%29.md): Sets the rendering mode and audio format for a playback audio queue.

### Creating and Disposing of Audio Queues

- [AudioQueueNewOutputWithDispatchQueue(\_:\_:\_:\_:\_:)](audioqueuenewoutputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewInputWithDispatchQueue(\_:\_:\_:\_:\_:)](audioqueuenewinputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewOutput(\_:\_:\_:\_:\_:\_:\_:)](audioqueuenewoutput%28______________%29.md): Creates a new playback audio queue object.
- [AudioQueueDispose(\_:\_:)](audioqueuedispose%28____%29.md): Disposes of an audio queue.
- [AudioQueueRef](audioqueueref.md): Defines an opaque data type that represents an audio queue.
- [AudioQueueInputCallbackBlock](audioqueueinputcallbackblock.md)
- [AudioQueueOutputCallbackBlock](audioqueueoutputcallbackblock.md)

# AudioQueueNewInput (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a new recording audio queue object.

## Declaration

```objectivec
extern OSStatus AudioQueueNewInput(const AudioStreamBasicDescription *inFormat, AudioQueueInputCallback inCallbackProc, void *inUserData, CFRunLoopRef inCallbackRunLoop, CFStringRef inCallbackRunLoopMode, UInt32 inFlags, AudioQueueRef*outAQ);
```

## Parameters

- `inFormat`: The compressed or uncompressed audio data format to record to. When recording to linear PCM, only interleaved formats are supported.
- `inCallbackProc`: A callback function to use with the recording audio queue. The audio queue calls this function when the audio queue has finished filling a buffer. See [AudioQueueInputCallback](audioqueueinputcallback.md).
- `inUserData`: A custom data structure for use with the callback function.
- `inCallbackRunLoop`: The event loop on which the callback function pointed to by the  `inCallbackProc` parameter is to be called. If you specify `NULL`, the callback is called on one of the audio queue’s internal threads.
- `inCallbackRunLoopMode`: The run loop mode in which to invoke the callback function specified in the `inCallbackProc` parameter. Typically, you pass `kCFRunLoopCommonModes` or use `NULL`, which is equivalent. You can choose to create your own thread with your own run loops. For more information on run loops, see Run Loops and [CFRunLoopRef](../corefoundation/cfrunloop.md).
- `inFlags`: Reserved for future use. Must be `0`.
- `outAQ`: On output, the newly created recording audio queue.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Related Documentation

- [AudioQueueSetOfflineRenderFormat](audioqueuesetofflinerenderformat%28______%29.md): Sets the rendering mode and audio format for a playback audio queue.

### Creating and Disposing of Audio Queues

- [AudioQueueNewOutputWithDispatchQueue](audioqueuenewoutputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewInputWithDispatchQueue](audioqueuenewinputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewOutput](audioqueuenewoutput%28______________%29.md): Creates a new playback audio queue object.
- [AudioQueueDispose](audioqueuedispose%28____%29.md): Disposes of an audio queue.
- [AudioQueueRef](audioqueueref.md): Defines an opaque data type that represents an audio queue.
- [AudioQueueInputCallbackBlock](audioqueueinputcallbackblock.md)
- [AudioQueueOutputCallbackBlock](audioqueueoutputcallbackblock.md)
