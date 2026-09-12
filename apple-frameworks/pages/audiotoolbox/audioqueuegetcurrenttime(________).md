> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuegetcurrenttime(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuegetcurrenttime(_:_:_:_:))

# AudioQueueGetCurrentTime(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets the current audio queue time.

## Declaration

```swift
func AudioQueueGetCurrentTime(_ inAQ: AudioQueueRef, _ inTimeline: AudioQueueTimelineRef?, _ outTimeStamp: UnsafeMutablePointer<AudioTimeStamp>?, _ outTimelineDiscontinuity: UnsafeMutablePointer<DarwinBoolean>?) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue whose current time you want to get.
- `inTimeline`: The audio queue timeline object to which timeline discontinuities are reported. Use `NULL` if the audio queue does not have an associated timeline object.
- `outTimeStamp`: On output, the current audio queue time. The `mSampleTime` field represents audio queue time in terms of the audio queue sample rate, relative to when the queue started or will start.
- `outTimelineDiscontinuity`: On output, `true` if there has been a timeline discontinuity, or `false` if there has been no discontinuity. If the audio queue does not have an associated timeline object, this parameter is always `NULL`.

  A timeline discontinuity may occur, for example, if the sample rate is changed for the audio hardware device associated with an audio queue.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Managing the Timeline

- [AudioQueueCreateTimeline(\_:\_:)](audioqueuecreatetimeline%28____%29.md): Creates a timeline object for an audio queue.
- [AudioQueueDisposeTimeline(\_:\_:)](audioqueuedisposetimeline%28____%29.md): Disposes of an audio queue’s timeline object.
- [AudioQueueDeviceGetCurrentTime(\_:\_:)](audioqueuedevicegetcurrenttime%28____%29.md): Gets the current time of the audio hardware device associated with an audio queue.
- [AudioQueueDeviceGetNearestStartTime(\_:\_:\_:)](audioqueuedevicegetneareststarttime%28______%29.md): Gets the start time, for an audio hardware device, that is closest to a requested start time.
- [AudioQueueDeviceTranslateTime(\_:\_:\_:)](audioqueuedevicetranslatetime%28______%29.md): Converts the time for an audio queue’s associated audio hardware device from one time base representation to another.
- [AudioQueueTimelineRef](audioqueuetimelineref.md): Defines an opaque data type that represents an audio queue timeline object.

# AudioQueueGetCurrentTime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets the current audio queue time.

## Declaration

```objectivec
extern OSStatus AudioQueueGetCurrentTime(AudioQueueRef inAQ, AudioQueueTimelineRef inTimeline, AudioTimeStamp *outTimeStamp, Boolean *outTimelineDiscontinuity);
```

## Parameters

- `inAQ`: The audio queue whose current time you want to get.
- `inTimeline`: The audio queue timeline object to which timeline discontinuities are reported. Use `NULL` if the audio queue does not have an associated timeline object.
- `outTimeStamp`: On output, the current audio queue time. The `mSampleTime` field represents audio queue time in terms of the audio queue sample rate, relative to when the queue started or will start.
- `outTimelineDiscontinuity`: On output, `true` if there has been a timeline discontinuity, or `false` if there has been no discontinuity. If the audio queue does not have an associated timeline object, this parameter is always `NULL`.

  A timeline discontinuity may occur, for example, if the sample rate is changed for the audio hardware device associated with an audio queue.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Managing the Timeline

- [AudioQueueCreateTimeline](audioqueuecreatetimeline%28____%29.md): Creates a timeline object for an audio queue.
- [AudioQueueDisposeTimeline](audioqueuedisposetimeline%28____%29.md): Disposes of an audio queue’s timeline object.
- [AudioQueueDeviceGetCurrentTime](audioqueuedevicegetcurrenttime%28____%29.md): Gets the current time of the audio hardware device associated with an audio queue.
- [AudioQueueDeviceGetNearestStartTime](audioqueuedevicegetneareststarttime%28______%29.md): Gets the start time, for an audio hardware device, that is closest to a requested start time.
- [AudioQueueDeviceTranslateTime](audioqueuedevicetranslatetime%28______%29.md): Converts the time for an audio queue’s associated audio hardware device from one time base representation to another.
- [AudioQueueTimelineRef](audioqueuetimelineref.md): Defines an opaque data type that represents an audio queue timeline object.
