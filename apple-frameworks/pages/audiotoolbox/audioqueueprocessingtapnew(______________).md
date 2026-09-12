> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueprocessingtapnew(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueueprocessingtapnew(_:_:_:_:_:_:_:))

# AudioQueueProcessingTapNew(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func AudioQueueProcessingTapNew(_ inAQ: AudioQueueRef, _ inCallback: AudioQueueProcessingTapCallback, _ inClientData: UnsafeMutableRawPointer?, _ inFlags: AudioQueueProcessingTapFlags, _ outMaxFrames: UnsafeMutablePointer<UInt32>, _ outProcessingFormat: UnsafeMutablePointer<AudioStreamBasicDescription>, _ outAQTap: UnsafeMutablePointer<AudioQueueProcessingTapRef?>) -> OSStatus
```

## See Also

### Tapping the Queue’s Audio

- [AudioQueueProcessingTapGetQueueTime(\_:\_:\_:)](audioqueueprocessingtapgetqueuetime%28______%29.md)
- [AudioQueueProcessingTapGetSourceAudio(\_:\_:\_:\_:\_:\_:)](audioqueueprocessingtapgetsourceaudio%28____________%29.md)
- [AudioQueueProcessingTapDispose(\_:)](audioqueueprocessingtapdispose%28__%29.md)

# AudioQueueProcessingTapNew (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus AudioQueueProcessingTapNew(AudioQueueRef inAQ, AudioQueueProcessingTapCallback inCallback, void *inClientData, AudioQueueProcessingTapFlags inFlags, UInt32 *outMaxFrames, AudioStreamBasicDescription *outProcessingFormat, AudioQueueProcessingTapRef*outAQTap);
```

## See Also

### Tapping the Queue’s Audio

- [AudioQueueProcessingTapGetQueueTime](audioqueueprocessingtapgetqueuetime%28______%29.md)
- [AudioQueueProcessingTapGetSourceAudio](audioqueueprocessingtapgetsourceaudio%28____________%29.md)
- [AudioQueueProcessingTapDispose](audioqueueprocessingtapdispose%28__%29.md)
