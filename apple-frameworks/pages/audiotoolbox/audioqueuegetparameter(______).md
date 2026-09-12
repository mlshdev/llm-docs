> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuegetparameter(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuegetparameter(_:_:_:))

# AudioQueueGetParameter(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets an audio queue parameter value.

## Declaration

```swift
func AudioQueueGetParameter(_ inAQ: AudioQueueRef, _ inParamID: AudioQueueParameterID, _ outValue: UnsafeMutablePointer<AudioQueueParameterValue>) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue that you want to get a parameter value from.
- `inParamID`: The ID of the parameter whose value you want to get. In OS X v10.5, audio queues have one parameter available: `kAudioQueueParam_Volume`, which controls playback gain.  See [Audio Queue Parameters](1552626-audio-queue-parameters.md)
- `outValue`: On output, points to the current value of the specified parameter.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

You can access the current parameter values for an audio queue at any time with this function. An audio queue parameter value is the sum of settings applied at buffer granularity, using the [AudioQueueEnqueueBufferWithParameters(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audioqueueenqueuebufferwithparameters%28____________________%29.md) function, and settings applied to the audio queue per se, using the [AudioQueueSetParameter(\_:\_:\_:)](audioqueuesetparameter%28______%29.md) function.

## See Also

### Manipulating Audio Queue Parameters

- [AudioQueueSetParameter(\_:\_:\_:)](audioqueuesetparameter%28______%29.md): Sets a playback audio queue parameter value.

# AudioQueueGetParameter (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets an audio queue parameter value.

## Declaration

```objectivec
extern OSStatus AudioQueueGetParameter(AudioQueueRef inAQ, AudioQueueParameterID inParamID, AudioQueueParameterValue *outValue);
```

## Parameters

- `inAQ`: The audio queue that you want to get a parameter value from.
- `inParamID`: The ID of the parameter whose value you want to get. In OS X v10.5, audio queues have one parameter available: `kAudioQueueParam_Volume`, which controls playback gain.  See [Audio Queue Parameters](1552626-audio-queue-parameters.md)
- `outValue`: On output, points to the current value of the specified parameter.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

You can access the current parameter values for an audio queue at any time with this function. An audio queue parameter value is the sum of settings applied at buffer granularity, using the [AudioQueueEnqueueBufferWithParameters](audioqueueenqueuebufferwithparameters%28____________________%29.md) function, and settings applied to the audio queue per se, using the [AudioQueueSetParameter](audioqueuesetparameter%28______%29.md) function.

## See Also

### Manipulating Audio Queue Parameters

- [AudioQueueSetParameter](audioqueuesetparameter%28______%29.md): Sets a playback audio queue parameter value.
