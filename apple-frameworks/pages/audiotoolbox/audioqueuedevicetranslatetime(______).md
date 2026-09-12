> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuedevicetranslatetime(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuedevicetranslatetime(_:_:_:))

# AudioQueueDeviceTranslateTime(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts the time for an audio queue’s associated audio hardware device from one time base representation to another.

## Declaration

```swift
func AudioQueueDeviceTranslateTime(_ inAQ: AudioQueueRef, _ inTime: UnsafePointer<AudioTimeStamp>, _ outTime: UnsafeMutablePointer<AudioTimeStamp>) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue associated with the device whose times are being translated.
- `inTime`: The time to be translated.
- `outTime`: On output, the translated time.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

The device must be running for this function to provide a result. For an explanation of the various time base representations for an audio hardware device, see [AudioTimeStamp](../coreaudiotypes/audiotimestamp.md) in [Core Audio Data Types](../coreaudio/core-audio-data-types.md).

## See Also

### Managing the Timeline

- [AudioQueueCreateTimeline(\_:\_:)](audioqueuecreatetimeline%28____%29.md): Creates a timeline object for an audio queue.
- [AudioQueueDisposeTimeline(\_:\_:)](audioqueuedisposetimeline%28____%29.md): Disposes of an audio queue’s timeline object.
- [AudioQueueDeviceGetCurrentTime(\_:\_:)](audioqueuedevicegetcurrenttime%28____%29.md): Gets the current time of the audio hardware device associated with an audio queue.
- [AudioQueueDeviceGetNearestStartTime(\_:\_:\_:)](audioqueuedevicegetneareststarttime%28______%29.md): Gets the start time, for an audio hardware device, that is closest to a requested start time.
- [AudioQueueGetCurrentTime(\_:\_:\_:\_:)](audioqueuegetcurrenttime%28________%29.md): Gets the current audio queue time.
- [AudioQueueTimelineRef](audioqueuetimelineref.md): Defines an opaque data type that represents an audio queue timeline object.

# AudioQueueDeviceTranslateTime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts the time for an audio queue’s associated audio hardware device from one time base representation to another.

## Declaration

```objectivec
extern OSStatus AudioQueueDeviceTranslateTime(AudioQueueRef inAQ, const AudioTimeStamp *inTime, AudioTimeStamp *outTime);
```

## Parameters

- `inAQ`: The audio queue associated with the device whose times are being translated.
- `inTime`: The time to be translated.
- `outTime`: On output, the translated time.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

The device must be running for this function to provide a result. For an explanation of the various time base representations for an audio hardware device, see [AudioTimeStamp](../coreaudiotypes/audiotimestamp.md) in [Core Audio Data Types](../coreaudio/core-audio-data-types.md).

## See Also

### Managing the Timeline

- [AudioQueueCreateTimeline](audioqueuecreatetimeline%28____%29.md): Creates a timeline object for an audio queue.
- [AudioQueueDisposeTimeline](audioqueuedisposetimeline%28____%29.md): Disposes of an audio queue’s timeline object.
- [AudioQueueDeviceGetCurrentTime](audioqueuedevicegetcurrenttime%28____%29.md): Gets the current time of the audio hardware device associated with an audio queue.
- [AudioQueueDeviceGetNearestStartTime](audioqueuedevicegetneareststarttime%28______%29.md): Gets the start time, for an audio hardware device, that is closest to a requested start time.
- [AudioQueueGetCurrentTime](audioqueuegetcurrenttime%28________%29.md): Gets the current audio queue time.
- [AudioQueueTimelineRef](audioqueuetimelineref.md): Defines an opaque data type that represents an audio queue timeline object.
