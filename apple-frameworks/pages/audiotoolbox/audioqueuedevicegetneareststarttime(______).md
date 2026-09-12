> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuedevicegetneareststarttime(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuedevicegetneareststarttime(_:_:_:))

# AudioQueueDeviceGetNearestStartTime(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets the start time, for an audio hardware device, that is closest to a requested start time.

## Declaration

```swift
func AudioQueueDeviceGetNearestStartTime(_ inAQ: AudioQueueRef, _ ioRequestedStartTime: UnsafeMutablePointer<AudioTimeStamp>, _ inFlags: UInt32) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue whose associated audio hardware device’s start time you want to get.
- `ioRequestedStartTime`: On input, the requested start time. On output, the actual start time.
- `inFlags`: Reserved for future use. Pass `0`.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This function asks an audio queue’s associated device for a start time to use for recording or playback. The time returned will be equal to or later than the requested start time, depending on device and system factors. For example, the start time might be shifted to allow for aligning buffer access. The device must be running to use this function.

## See Also

### Managing the Timeline

- [AudioQueueCreateTimeline(\_:\_:)](audioqueuecreatetimeline%28____%29.md): Creates a timeline object for an audio queue.
- [AudioQueueDisposeTimeline(\_:\_:)](audioqueuedisposetimeline%28____%29.md): Disposes of an audio queue’s timeline object.
- [AudioQueueDeviceGetCurrentTime(\_:\_:)](audioqueuedevicegetcurrenttime%28____%29.md): Gets the current time of the audio hardware device associated with an audio queue.
- [AudioQueueDeviceTranslateTime(\_:\_:\_:)](audioqueuedevicetranslatetime%28______%29.md): Converts the time for an audio queue’s associated audio hardware device from one time base representation to another.
- [AudioQueueGetCurrentTime(\_:\_:\_:\_:)](audioqueuegetcurrenttime%28________%29.md): Gets the current audio queue time.
- [AudioQueueTimelineRef](audioqueuetimelineref.md): Defines an opaque data type that represents an audio queue timeline object.

# AudioQueueDeviceGetNearestStartTime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets the start time, for an audio hardware device, that is closest to a requested start time.

## Declaration

```objectivec
extern OSStatus AudioQueueDeviceGetNearestStartTime(AudioQueueRef inAQ, AudioTimeStamp *ioRequestedStartTime, UInt32 inFlags);
```

## Parameters

- `inAQ`: The audio queue whose associated audio hardware device’s start time you want to get.
- `ioRequestedStartTime`: On input, the requested start time. On output, the actual start time.
- `inFlags`: Reserved for future use. Pass `0`.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This function asks an audio queue’s associated device for a start time to use for recording or playback. The time returned will be equal to or later than the requested start time, depending on device and system factors. For example, the start time might be shifted to allow for aligning buffer access. The device must be running to use this function.

## See Also

### Managing the Timeline

- [AudioQueueCreateTimeline](audioqueuecreatetimeline%28____%29.md): Creates a timeline object for an audio queue.
- [AudioQueueDisposeTimeline](audioqueuedisposetimeline%28____%29.md): Disposes of an audio queue’s timeline object.
- [AudioQueueDeviceGetCurrentTime](audioqueuedevicegetcurrenttime%28____%29.md): Gets the current time of the audio hardware device associated with an audio queue.
- [AudioQueueDeviceTranslateTime](audioqueuedevicetranslatetime%28______%29.md): Converts the time for an audio queue’s associated audio hardware device from one time base representation to another.
- [AudioQueueGetCurrentTime](audioqueuegetcurrenttime%28________%29.md): Gets the current audio queue time.
- [AudioQueueTimelineRef](audioqueuetimelineref.md): Defines an opaque data type that represents an audio queue timeline object.
