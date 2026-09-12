> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuenewoutputwithdispatchqueue(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuenewoutputwithdispatchqueue(_:_:_:_:_:))

# AudioQueueNewOutputWithDispatchQueue(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```swift
func AudioQueueNewOutputWithDispatchQueue(_ outAQ: UnsafeMutablePointer<AudioQueueRef?>, _ inFormat: UnsafePointer<AudioStreamBasicDescription>, _ inFlags: UInt32, _ inCallbackDispatchQueue: dispatch_queue_t, _ inCallbackBlock: @escaping AudioQueueOutputCallbackBlock) -> OSStatus
```

## See Also

### Creating and Disposing of Audio Queues

- [AudioQueueNewInputWithDispatchQueue(\_:\_:\_:\_:\_:)](audioqueuenewinputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewOutput(\_:\_:\_:\_:\_:\_:\_:)](audioqueuenewoutput%28______________%29.md): Creates a new playback audio queue object.
- [AudioQueueNewInput(\_:\_:\_:\_:\_:\_:\_:)](audioqueuenewinput%28______________%29.md): Creates a new recording audio queue object.
- [AudioQueueDispose(\_:\_:)](audioqueuedispose%28____%29.md): Disposes of an audio queue.
- [AudioQueueRef](audioqueueref.md): Defines an opaque data type that represents an audio queue.
- [AudioQueueInputCallbackBlock](audioqueueinputcallbackblock.md)
- [AudioQueueOutputCallbackBlock](audioqueueoutputcallbackblock.md)

# AudioQueueNewOutputWithDispatchQueue (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus AudioQueueNewOutputWithDispatchQueue(AudioQueueRef*outAQ, const AudioStreamBasicDescription *inFormat, UInt32 inFlags, dispatch_queue_t inCallbackDispatchQueue, AudioQueueOutputCallbackBlock inCallbackBlock);
```

## See Also

### Creating and Disposing of Audio Queues

- [AudioQueueNewInputWithDispatchQueue](audioqueuenewinputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewOutput](audioqueuenewoutput%28______________%29.md): Creates a new playback audio queue object.
- [AudioQueueNewInput](audioqueuenewinput%28______________%29.md): Creates a new recording audio queue object.
- [AudioQueueDispose](audioqueuedispose%28____%29.md): Disposes of an audio queue.
- [AudioQueueRef](audioqueueref.md): Defines an opaque data type that represents an audio queue.
- [AudioQueueInputCallbackBlock](audioqueueinputcallbackblock.md)
- [AudioQueueOutputCallbackBlock](audioqueueoutputcallbackblock.md)
