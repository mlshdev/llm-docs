> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueoutputcallback](https://developer.apple.com/documentation/audiotoolbox/audioqueueoutputcallback)

# AudioQueueOutputCallback (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Called by the system when an audio queue buffer is available for reuse.

## Declaration

```swift
typealias AudioQueueOutputCallback = (UnsafeMutableRawPointer?, AudioQueueRef, AudioQueueBufferRef) -> Void
```

## Parameters

- `inUserData`: The custom data you’ve specified in the `inUserData` parameter of the [AudioQueueNewOutput(\_:\_:\_:\_:\_:\_:\_:)](audioqueuenewoutput%28______________%29.md) function. Typically, this includes data format and state information for the audio queue.
- `inAQ`: The playback audio queue that invoked the callback.
- `inBuffer`: An audio queue buffer, newly available to fill because the playback audio queue has acquired its contents.

<a id="Discussion"></a>

## Discussion

If you name your callback function `MyAudioQueueOutputCallback`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

This callback function is invoked each time its associated playback audio queue has acquired the data from an audio queue buffer, at which point the buffer is available for reuse. The newly-available buffer is sent to this callback in the `inBuffer` parameter. Typically, you write this callback to:

1. Fill the newly-available buffer with the next set of audio data from a file or other buffer.
2. Reenqueue the buffer for playback. To reenqueue a buffer, use the [AudioQueueEnqueueBuffer(\_:\_:\_:\_:)](audioqueueenqueuebuffer%28________%29.md) or [AudioQueueEnqueueBufferWithParameters(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audioqueueenqueuebufferwithparameters%28____________________%29.md) function.

To associate this callback with a playback audio queue, provide a reference to the callback as you are creating the audio queue. See the `inCallbackProc` parameter of the [AudioQueueNewOutput(\_:\_:\_:\_:\_:\_:\_:)](audioqueuenewoutput%28______________%29.md) function.

When the system invokes this callback, you cannot assume that the audio data from the newly-available buffer has been played. For a description of how to check that a sound has finished playing, read the Discussion for the [AudioQueuePropertyListenerProc](audioqueuepropertylistenerproc.md) callback function.

## See Also

### Callbacks

- [AudioQueueInputCallback](audioqueueinputcallback.md): Called by the system when a recording audio queue has finished filling an audio queue buffer.
- [AudioQueuePropertyListenerProc](audioqueuepropertylistenerproc.md): Called by the system when a specified audio queue property changes value.

# AudioQueueOutputCallback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Called by the system when an audio queue buffer is available for reuse.

## Declaration

```objectivec
typedef void (*)(void *, struct OpaqueAudioQueue *, struct AudioQueueBuffer *) AudioQueueOutputCallback;
```

## Parameters

- `inUserData`: The custom data you’ve specified in the `inUserData` parameter of the [AudioQueueNewOutput](audioqueuenewoutput%28______________%29.md) function. Typically, this includes data format and state information for the audio queue.
- `inAQ`: The playback audio queue that invoked the callback.
- `inBuffer`: An audio queue buffer, newly available to fill because the playback audio queue has acquired its contents.

<a id="Discussion"></a>

## Discussion

If you name your callback function `MyAudioQueueOutputCallback`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

This callback function is invoked each time its associated playback audio queue has acquired the data from an audio queue buffer, at which point the buffer is available for reuse. The newly-available buffer is sent to this callback in the `inBuffer` parameter. Typically, you write this callback to:

1. Fill the newly-available buffer with the next set of audio data from a file or other buffer.
2. Reenqueue the buffer for playback. To reenqueue a buffer, use the [AudioQueueEnqueueBuffer](audioqueueenqueuebuffer%28________%29.md) or [AudioQueueEnqueueBufferWithParameters](audioqueueenqueuebufferwithparameters%28____________________%29.md) function.

To associate this callback with a playback audio queue, provide a reference to the callback as you are creating the audio queue. See the `inCallbackProc` parameter of the [AudioQueueNewOutput](audioqueuenewoutput%28______________%29.md) function.

When the system invokes this callback, you cannot assume that the audio data from the newly-available buffer has been played. For a description of how to check that a sound has finished playing, read the Discussion for the [AudioQueuePropertyListenerProc](audioqueuepropertylistenerproc.md) callback function.

## See Also

### Callbacks

- [AudioQueueInputCallback](audioqueueinputcallback.md): Called by the system when a recording audio queue has finished filling an audio queue buffer.
- [AudioQueuePropertyListenerProc](audioqueuepropertylistenerproc.md): Called by the system when a specified audio queue property changes value.
