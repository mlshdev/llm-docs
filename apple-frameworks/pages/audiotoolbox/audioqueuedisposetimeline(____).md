> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuedisposetimeline(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuedisposetimeline(_:_:))

# AudioQueueDisposeTimeline(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Disposes of an audio queue’s timeline object.

## Declaration

```swift
func AudioQueueDisposeTimeline(_ inAQ: AudioQueueRef, _ inTimeline: AudioQueueTimelineRef) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue associated with the timeline object you want to dispose of.
- `inTimeline`: The timeline object to dispose of.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Disposing of an audio queue automatically disposes of any associated resources, including a timeline object. Call this function only if you want to dispose of a timeline object and not the audio queue associated with it.

## See Also

### Related Documentation

- [AudioQueueDispose(\_:\_:)](audioqueuedispose%28____%29.md): Disposes of an audio queue.

### Managing the Timeline

- [AudioQueueCreateTimeline(\_:\_:)](audioqueuecreatetimeline%28____%29.md): Creates a timeline object for an audio queue.
- [AudioQueueDeviceGetCurrentTime(\_:\_:)](audioqueuedevicegetcurrenttime%28____%29.md): Gets the current time of the audio hardware device associated with an audio queue.
- [AudioQueueDeviceGetNearestStartTime(\_:\_:\_:)](audioqueuedevicegetneareststarttime%28______%29.md): Gets the start time, for an audio hardware device, that is closest to a requested start time.
- [AudioQueueDeviceTranslateTime(\_:\_:\_:)](audioqueuedevicetranslatetime%28______%29.md): Converts the time for an audio queue’s associated audio hardware device from one time base representation to another.
- [AudioQueueGetCurrentTime(\_:\_:\_:\_:)](audioqueuegetcurrenttime%28________%29.md): Gets the current audio queue time.
- [AudioQueueTimelineRef](audioqueuetimelineref.md): Defines an opaque data type that represents an audio queue timeline object.

# AudioQueueDisposeTimeline (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Disposes of an audio queue’s timeline object.

## Declaration

```objectivec
extern OSStatus AudioQueueDisposeTimeline(AudioQueueRef inAQ, AudioQueueTimelineRef inTimeline);
```

## Parameters

- `inAQ`: The audio queue associated with the timeline object you want to dispose of.
- `inTimeline`: The timeline object to dispose of.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Disposing of an audio queue automatically disposes of any associated resources, including a timeline object. Call this function only if you want to dispose of a timeline object and not the audio queue associated with it.

## See Also

### Related Documentation

- [AudioQueueDispose](audioqueuedispose%28____%29.md): Disposes of an audio queue.

### Managing the Timeline

- [AudioQueueCreateTimeline](audioqueuecreatetimeline%28____%29.md): Creates a timeline object for an audio queue.
- [AudioQueueDeviceGetCurrentTime](audioqueuedevicegetcurrenttime%28____%29.md): Gets the current time of the audio hardware device associated with an audio queue.
- [AudioQueueDeviceGetNearestStartTime](audioqueuedevicegetneareststarttime%28______%29.md): Gets the start time, for an audio hardware device, that is closest to a requested start time.
- [AudioQueueDeviceTranslateTime](audioqueuedevicetranslatetime%28______%29.md): Converts the time for an audio queue’s associated audio hardware device from one time base representation to another.
- [AudioQueueGetCurrentTime](audioqueuegetcurrenttime%28________%29.md): Gets the current audio queue time.
- [AudioQueueTimelineRef](audioqueuetimelineref.md): Defines an opaque data type that represents an audio queue timeline object.
