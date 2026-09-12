> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueoutputcallbackblock](https://developer.apple.com/documentation/audiotoolbox/audioqueueoutputcallbackblock)

# AudioQueueOutputCallbackBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias AudioQueueOutputCallbackBlock = (AudioQueueRef, AudioQueueBufferRef) -> Void
```

## See Also

### Creating and Disposing of Audio Queues

- [AudioQueueNewOutputWithDispatchQueue(\_:\_:\_:\_:\_:)](audioqueuenewoutputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewInputWithDispatchQueue(\_:\_:\_:\_:\_:)](audioqueuenewinputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewOutput(\_:\_:\_:\_:\_:\_:\_:)](audioqueuenewoutput%28______________%29.md): Creates a new playback audio queue object.
- [AudioQueueNewInput(\_:\_:\_:\_:\_:\_:\_:)](audioqueuenewinput%28______________%29.md): Creates a new recording audio queue object.
- [AudioQueueDispose(\_:\_:)](audioqueuedispose%28____%29.md): Disposes of an audio queue.
- [AudioQueueRef](audioqueueref.md): Defines an opaque data type that represents an audio queue.
- [AudioQueueInputCallbackBlock](audioqueueinputcallbackblock.md)

# AudioQueueOutputCallbackBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef void (^)(struct OpaqueAudioQueue *, struct AudioQueueBuffer *) AudioQueueOutputCallbackBlock;
```

## See Also

### Creating and Disposing of Audio Queues

- [AudioQueueNewOutputWithDispatchQueue](audioqueuenewoutputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewInputWithDispatchQueue](audioqueuenewinputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewOutput](audioqueuenewoutput%28______________%29.md): Creates a new playback audio queue object.
- [AudioQueueNewInput](audioqueuenewinput%28______________%29.md): Creates a new recording audio queue object.
- [AudioQueueDispose](audioqueuedispose%28____%29.md): Disposes of an audio queue.
- [AudioQueueRef](audioqueueref.md): Defines an opaque data type that represents an audio queue.
- [AudioQueueInputCallbackBlock](audioqueueinputcallbackblock.md)
