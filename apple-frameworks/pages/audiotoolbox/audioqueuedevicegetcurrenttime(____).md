> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuedevicegetcurrenttime(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuedevicegetcurrenttime(_:_:))

# AudioQueueDeviceGetCurrentTime(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets the current time of the audio hardware device associated with an audio queue.

## Declaration

```swift
func AudioQueueDeviceGetCurrentTime(_ inAQ: AudioQueueRef, _ outTimeStamp: UnsafeMutablePointer<AudioTimeStamp>) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue whose associated audio device is to be queried.
- `outTimeStamp`: On output, the current time of the audio hardware device associated with the audio queue. If the device is not running, the only valid field in the audio timestamp structure is `mHostTime`.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This function returns a value whether or not the audio hardware device associated with the audio queue is running. The similar `AudioDeviceGetCurrentTime` function, declared in the `AudioHardware.h` header file, returns an error in this case.

## See Also

### Related Documentation

- [AudioDeviceGetCurrentTime(\_:\_:)](../coreaudio/audiodevicegetcurrenttime%28____%29.md)

### Managing the Timeline

- [AudioQueueCreateTimeline(\_:\_:)](audioqueuecreatetimeline%28____%29.md): Creates a timeline object for an audio queue.
- [AudioQueueDisposeTimeline(\_:\_:)](audioqueuedisposetimeline%28____%29.md): Disposes of an audio queue’s timeline object.
- [AudioQueueDeviceGetNearestStartTime(\_:\_:\_:)](audioqueuedevicegetneareststarttime%28______%29.md): Gets the start time, for an audio hardware device, that is closest to a requested start time.
- [AudioQueueDeviceTranslateTime(\_:\_:\_:)](audioqueuedevicetranslatetime%28______%29.md): Converts the time for an audio queue’s associated audio hardware device from one time base representation to another.
- [AudioQueueGetCurrentTime(\_:\_:\_:\_:)](audioqueuegetcurrenttime%28________%29.md): Gets the current audio queue time.
- [AudioQueueTimelineRef](audioqueuetimelineref.md): Defines an opaque data type that represents an audio queue timeline object.

# AudioQueueDeviceGetCurrentTime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets the current time of the audio hardware device associated with an audio queue.

## Declaration

```objectivec
extern OSStatus AudioQueueDeviceGetCurrentTime(AudioQueueRef inAQ, AudioTimeStamp *outTimeStamp);
```

## Parameters

- `inAQ`: The audio queue whose associated audio device is to be queried.
- `outTimeStamp`: On output, the current time of the audio hardware device associated with the audio queue. If the device is not running, the only valid field in the audio timestamp structure is `mHostTime`.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This function returns a value whether or not the audio hardware device associated with the audio queue is running. The similar `AudioDeviceGetCurrentTime` function, declared in the `AudioHardware.h` header file, returns an error in this case.

## See Also

### Related Documentation

- [AudioDeviceGetCurrentTime](../coreaudio/audiodevicegetcurrenttime%28____%29.md)

### Managing the Timeline

- [AudioQueueCreateTimeline](audioqueuecreatetimeline%28____%29.md): Creates a timeline object for an audio queue.
- [AudioQueueDisposeTimeline](audioqueuedisposetimeline%28____%29.md): Disposes of an audio queue’s timeline object.
- [AudioQueueDeviceGetNearestStartTime](audioqueuedevicegetneareststarttime%28______%29.md): Gets the start time, for an audio hardware device, that is closest to a requested start time.
- [AudioQueueDeviceTranslateTime](audioqueuedevicetranslatetime%28______%29.md): Converts the time for an audio queue’s associated audio hardware device from one time base representation to another.
- [AudioQueueGetCurrentTime](audioqueuegetcurrenttime%28________%29.md): Gets the current audio queue time.
- [AudioQueueTimelineRef](audioqueuetimelineref.md): Defines an opaque data type that represents an audio queue timeline object.
