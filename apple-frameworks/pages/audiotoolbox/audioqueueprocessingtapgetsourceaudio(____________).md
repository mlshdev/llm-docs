> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueprocessingtapgetsourceaudio(_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueueprocessingtapgetsourceaudio(_:_:_:_:_:_:))

# AudioQueueProcessingTapGetSourceAudio(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func AudioQueueProcessingTapGetSourceAudio(_ inAQTap: AudioQueueProcessingTapRef, _ inNumberFrames: UInt32, _ ioTimeStamp: UnsafeMutablePointer<AudioTimeStamp>, _ outFlags: UnsafeMutablePointer<AudioQueueProcessingTapFlags>, _ outNumberFrames: UnsafeMutablePointer<UInt32>, _ ioData: UnsafeMutablePointer<AudioBufferList>) -> OSStatus
```

## See Also

### Tapping the Queue’s Audio

- [AudioQueueProcessingTapNew(\_:\_:\_:\_:\_:\_:\_:)](audioqueueprocessingtapnew%28______________%29.md)
- [AudioQueueProcessingTapGetQueueTime(\_:\_:\_:)](audioqueueprocessingtapgetqueuetime%28______%29.md)
- [AudioQueueProcessingTapDispose(\_:)](audioqueueprocessingtapdispose%28__%29.md)

# AudioQueueProcessingTapGetSourceAudio (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus AudioQueueProcessingTapGetSourceAudio(AudioQueueProcessingTapRef inAQTap, UInt32 inNumberFrames, AudioTimeStamp *ioTimeStamp, AudioQueueProcessingTapFlags *outFlags, UInt32 *outNumberFrames, AudioBufferList *ioData);
```

## See Also

### Tapping the Queue’s Audio

- [AudioQueueProcessingTapNew](audioqueueprocessingtapnew%28______________%29.md)
- [AudioQueueProcessingTapGetQueueTime](audioqueueprocessingtapgetqueuetime%28______%29.md)
- [AudioQueueProcessingTapDispose](audioqueueprocessingtapdispose%28__%29.md)
