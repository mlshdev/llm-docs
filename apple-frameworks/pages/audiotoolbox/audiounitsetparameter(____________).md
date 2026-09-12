> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitsetparameter(_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiounitsetparameter(_:_:_:_:_:_:))

# AudioUnitSetParameter(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Sets the value of an audio unit parameter.

## Declaration

```swift
func AudioUnitSetParameter(_ inUnit: AudioUnit, _ inID: AudioUnitParameterID, _ inScope: AudioUnitScope, _ inElement: AudioUnitElement, _ inValue: AudioUnitParameterValue, _ inBufferOffsetInFrames: UInt32) -> OSStatus
```

## Parameters

- `inUnit`: The audio unit that you want to set a parameter value for.
- `inID`: The audio unit parameter identifier.
- `inScope`: The audio unit scope for the parameter.
- `inElement`: The audio unit element for the parameter.
- `inValue`: The value that you want to apply to the parameter.
- `inBufferOffsetInFrames`: Set this to 0. To schedule the setting of a parameter value, use the [AudioUnitScheduleParameters(\_:\_:\_:)](audiounitscheduleparameters%28______%29.md) function.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

## See Also

### Getting and Setting Parameters

- [AudioUnitGetParameter(\_:\_:\_:\_:\_:)](audiounitgetparameter%28__________%29.md): Gets the value of an audio unit parameter.
- [AudioUnitScheduleParameters(\_:\_:\_:)](audiounitscheduleparameters%28______%29.md): Schedules changes to the value of an audio unit parameter.

# AudioUnitSetParameter (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Sets the value of an audio unit parameter.

## Declaration

```objectivec
extern OSStatus AudioUnitSetParameter(AudioUnit inUnit, AudioUnitParameterID inID, AudioUnitScope inScope, AudioUnitElement inElement, AudioUnitParameterValue inValue, UInt32 inBufferOffsetInFrames);
```

## Parameters

- `inUnit`: The audio unit that you want to set a parameter value for.
- `inID`: The audio unit parameter identifier.
- `inScope`: The audio unit scope for the parameter.
- `inElement`: The audio unit element for the parameter.
- `inValue`: The value that you want to apply to the parameter.
- `inBufferOffsetInFrames`: Set this to 0. To schedule the setting of a parameter value, use the [AudioUnitScheduleParameters](audiounitscheduleparameters%28______%29.md) function.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

## See Also

### Getting and Setting Parameters

- [AudioUnitGetParameter](audiounitgetparameter%28__________%29.md): Gets the value of an audio unit parameter.
- [AudioUnitScheduleParameters](audiounitscheduleparameters%28______%29.md): Schedules changes to the value of an audio unit parameter.
