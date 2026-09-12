> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuesetparameter(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuesetparameter(_:_:_:))

# AudioQueueSetParameter(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets a playback audio queue parameter value.

## Declaration

```swift
func AudioQueueSetParameter(_ inAQ: AudioQueueRef, _ inParamID: AudioQueueParameterID, _ inValue: AudioQueueParameterValue) -> OSStatus
```

## Parameters

- `inAQ`: The playback audio queue that you want to set a parameter value on.
- `inParamID`: The ID of the parameter you want to set. In OS X v10.5, audio queues have one parameter available: `kAudioQueueParam_Volume`, which controls playback gain.  See [Audio Queue Parameters](1552626-audio-queue-parameters.md).
- `inValue`: The parameter value to set.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Use this function to change the settings for a playback audio queue directly. Changes take effect immediately. To set playback gain at the granularity of an audio queue buffer, use the [AudioQueueEnqueueBufferWithParameters(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audioqueueenqueuebufferwithparameters%28____________________%29.md) function.

## See Also

### Related Documentation

- [AudioQueueEnqueueBufferWithParameters(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audioqueueenqueuebufferwithparameters%28____________________%29.md): Adds a buffer to the buffer queue of a playback audio queue object, specifying start time and other settings.

### Manipulating Audio Queue Parameters

- [AudioQueueGetParameter(\_:\_:\_:)](audioqueuegetparameter%28______%29.md): Gets an audio queue parameter value.

# AudioQueueSetParameter (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets a playback audio queue parameter value.

## Declaration

```objectivec
extern OSStatus AudioQueueSetParameter(AudioQueueRef inAQ, AudioQueueParameterID inParamID, AudioQueueParameterValue inValue);
```

## Parameters

- `inAQ`: The playback audio queue that you want to set a parameter value on.
- `inParamID`: The ID of the parameter you want to set. In OS X v10.5, audio queues have one parameter available: `kAudioQueueParam_Volume`, which controls playback gain.  See [Audio Queue Parameters](1552626-audio-queue-parameters.md).
- `inValue`: The parameter value to set.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Use this function to change the settings for a playback audio queue directly. Changes take effect immediately. To set playback gain at the granularity of an audio queue buffer, use the [AudioQueueEnqueueBufferWithParameters](audioqueueenqueuebufferwithparameters%28____________________%29.md) function.

## See Also

### Related Documentation

- [AudioQueueEnqueueBufferWithParameters](audioqueueenqueuebufferwithparameters%28____________________%29.md): Adds a buffer to the buffer queue of a playback audio queue object, specifying start time and other settings.

### Manipulating Audio Queue Parameters

- [AudioQueueGetParameter](audioqueuegetparameter%28______%29.md): Gets an audio queue parameter value.
