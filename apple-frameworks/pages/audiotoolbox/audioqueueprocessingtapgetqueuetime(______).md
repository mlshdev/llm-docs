> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueprocessingtapgetqueuetime(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueueprocessingtapgetqueuetime(_:_:_:))

# AudioQueueProcessingTapGetQueueTime(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func AudioQueueProcessingTapGetQueueTime(_ inAQTap: AudioQueueProcessingTapRef, _ outQueueSampleTime: UnsafeMutablePointer<Float64>, _ outQueueFrameCount: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## See Also

### Tapping the Queue’s Audio

- [AudioQueueProcessingTapNew(\_:\_:\_:\_:\_:\_:\_:)](audioqueueprocessingtapnew%28______________%29.md)
- [AudioQueueProcessingTapGetSourceAudio(\_:\_:\_:\_:\_:\_:)](audioqueueprocessingtapgetsourceaudio%28____________%29.md)
- [AudioQueueProcessingTapDispose(\_:)](audioqueueprocessingtapdispose%28__%29.md)

# AudioQueueProcessingTapGetQueueTime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus AudioQueueProcessingTapGetQueueTime(AudioQueueProcessingTapRef inAQTap, Float64 *outQueueSampleTime, UInt32 *outQueueFrameCount);
```

## See Also

### Tapping the Queue’s Audio

- [AudioQueueProcessingTapNew](audioqueueprocessingtapnew%28______________%29.md)
- [AudioQueueProcessingTapGetSourceAudio](audioqueueprocessingtapgetsourceaudio%28____________%29.md)
- [AudioQueueProcessingTapDispose](audioqueueprocessingtapdispose%28__%29.md)
