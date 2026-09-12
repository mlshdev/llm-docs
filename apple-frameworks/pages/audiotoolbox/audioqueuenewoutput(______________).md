> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuenewoutput(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuenewoutput(_:_:_:_:_:_:_:))

# AudioQueueNewOutput(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a new playback audio queue object.

## Declaration

```swift
func AudioQueueNewOutput(_ inFormat: UnsafePointer<AudioStreamBasicDescription>, _ inCallbackProc: AudioQueueOutputCallback, _ inUserData: UnsafeMutableRawPointer?, _ inCallbackRunLoop: CFRunLoop?, _ inCallbackRunLoopMode: CFString?, _ inFlags: UInt32, _ outAQ: UnsafeMutablePointer<AudioQueueRef?>) -> OSStatus
```

## Parameters

- `inFormat`: The data format of the audio to play. For linear PCM, only interleaved formats are supported. Compressed formats are also supported.
- `inCallbackProc`: A callback function to use with the playback audio queue. The audio queue invokes the callback when the audio queue has finished acquiring a buffer. See [AudioQueueOutputCallback](audioqueueoutputcallback.md).
- `inUserData`: A custom data structure for use with the callback function.
- `inCallbackRunLoop`: The event loop on which the callback function pointed to by the `inCallbackProc` parameter is to be called. If you specify `NULL`, the callback is invoked on one of the audio queue’s internal threads.
- `inCallbackRunLoopMode`: The run loop mode in which to invoke the callback function specified in the `inCallbackProc` parameter. Typically, you pass `kCFRunLoopCommonModes` or use `NULL`, which is equivalent. You can choose to create your own thread with your own run loops. For more information on run loops, see Run Loops and [CFRunLoop](../corefoundation/cfrunloop.md).
- `inFlags`: Reserved for future use. Must be `0`.
- `outAQ`: On output, the newly created playback audio queue object.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Related Documentation

- [AudioQueueOfflineRender(\_:\_:\_:\_:)](audioqueueofflinerender%28________%29.md): Exports audio to a buffer, instead of to a device, using a playback audio queue.

### Creating and Disposing of Audio Queues

- [AudioQueueNewOutputWithDispatchQueue(\_:\_:\_:\_:\_:)](audioqueuenewoutputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewInputWithDispatchQueue(\_:\_:\_:\_:\_:)](audioqueuenewinputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewInput(\_:\_:\_:\_:\_:\_:\_:)](audioqueuenewinput%28______________%29.md): Creates a new recording audio queue object.
- [AudioQueueDispose(\_:\_:)](audioqueuedispose%28____%29.md): Disposes of an audio queue.
- [AudioQueueRef](audioqueueref.md): Defines an opaque data type that represents an audio queue.
- [AudioQueueInputCallbackBlock](audioqueueinputcallbackblock.md)
- [AudioQueueOutputCallbackBlock](audioqueueoutputcallbackblock.md)

# AudioQueueNewOutput (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a new playback audio queue object.

## Declaration

```objectivec
extern OSStatus AudioQueueNewOutput(const AudioStreamBasicDescription *inFormat, AudioQueueOutputCallback inCallbackProc, void *inUserData, CFRunLoopRef inCallbackRunLoop, CFStringRef inCallbackRunLoopMode, UInt32 inFlags, AudioQueueRef*outAQ);
```

## Parameters

- `inFormat`: The data format of the audio to play. For linear PCM, only interleaved formats are supported. Compressed formats are also supported.
- `inCallbackProc`: A callback function to use with the playback audio queue. The audio queue invokes the callback when the audio queue has finished acquiring a buffer. See [AudioQueueOutputCallback](audioqueueoutputcallback.md).
- `inUserData`: A custom data structure for use with the callback function.
- `inCallbackRunLoop`: The event loop on which the callback function pointed to by the `inCallbackProc` parameter is to be called. If you specify `NULL`, the callback is invoked on one of the audio queue’s internal threads.
- `inCallbackRunLoopMode`: The run loop mode in which to invoke the callback function specified in the `inCallbackProc` parameter. Typically, you pass `kCFRunLoopCommonModes` or use `NULL`, which is equivalent. You can choose to create your own thread with your own run loops. For more information on run loops, see Run Loops and [CFRunLoopRef](../corefoundation/cfrunloop.md).
- `inFlags`: Reserved for future use. Must be `0`.
- `outAQ`: On output, the newly created playback audio queue object.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Related Documentation

- [AudioQueueOfflineRender](audioqueueofflinerender%28________%29.md): Exports audio to a buffer, instead of to a device, using a playback audio queue.

### Creating and Disposing of Audio Queues

- [AudioQueueNewOutputWithDispatchQueue](audioqueuenewoutputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewInputWithDispatchQueue](audioqueuenewinputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewInput](audioqueuenewinput%28______________%29.md): Creates a new recording audio queue object.
- [AudioQueueDispose](audioqueuedispose%28____%29.md): Disposes of an audio queue.
- [AudioQueueRef](audioqueueref.md): Defines an opaque data type that represents an audio queue.
- [AudioQueueInputCallbackBlock](audioqueueinputcallbackblock.md)
- [AudioQueueOutputCallbackBlock](audioqueueoutputcallbackblock.md)
