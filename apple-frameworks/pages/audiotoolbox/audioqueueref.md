> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueref](https://developer.apple.com/documentation/audiotoolbox/audioqueueref)

# AudioQueueRef (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Defines an opaque data type that represents an audio queue.

## Declaration

```swift
typealias AudioQueueRef = OpaquePointer
```

<a id="Discussion"></a>

## Discussion

An audio queue is a software object you use for recording or playing audio in macOS. It does the work of:

- Connecting to audio hardware
- Managing memory
- Employing codecs, as needed, for compressed audio formats
- Mediating recording or playback

You create, use, and dispose of audio queues using the functions described in [Audio Queue Services](audio-queue-services.md).

## See Also

### Creating and Disposing of Audio Queues

- [AudioQueueNewOutputWithDispatchQueue(\_:\_:\_:\_:\_:)](audioqueuenewoutputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewInputWithDispatchQueue(\_:\_:\_:\_:\_:)](audioqueuenewinputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewOutput(\_:\_:\_:\_:\_:\_:\_:)](audioqueuenewoutput%28______________%29.md): Creates a new playback audio queue object.
- [AudioQueueNewInput(\_:\_:\_:\_:\_:\_:\_:)](audioqueuenewinput%28______________%29.md): Creates a new recording audio queue object.
- [AudioQueueDispose(\_:\_:)](audioqueuedispose%28____%29.md): Disposes of an audio queue.
- [AudioQueueInputCallbackBlock](audioqueueinputcallbackblock.md)
- [AudioQueueOutputCallbackBlock](audioqueueoutputcallbackblock.md)

# AudioQueueRef (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Defines an opaque data type that represents an audio queue.

## Declaration

```objectivec
typedef struct OpaqueAudioQueue * AudioQueueRef;
```

<a id="Discussion"></a>

## Discussion

An audio queue is a software object you use for recording or playing audio in macOS. It does the work of:

- Connecting to audio hardware
- Managing memory
- Employing codecs, as needed, for compressed audio formats
- Mediating recording or playback

You create, use, and dispose of audio queues using the functions described in [Audio Queue Services](audio-queue-services.md).

## See Also

### Creating and Disposing of Audio Queues

- [AudioQueueNewOutputWithDispatchQueue](audioqueuenewoutputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewInputWithDispatchQueue](audioqueuenewinputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewOutput](audioqueuenewoutput%28______________%29.md): Creates a new playback audio queue object.
- [AudioQueueNewInput](audioqueuenewinput%28______________%29.md): Creates a new recording audio queue object.
- [AudioQueueDispose](audioqueuedispose%28____%29.md): Disposes of an audio queue.
- [AudioQueueInputCallbackBlock](audioqueueinputcallbackblock.md)
- [AudioQueueOutputCallbackBlock](audioqueueoutputcallbackblock.md)
