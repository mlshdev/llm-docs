> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitgetparameter(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiounitgetparameter(_:_:_:_:_:))

# AudioUnitGetParameter(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Gets the value of an audio unit parameter.

## Declaration

```swift
func AudioUnitGetParameter(_ inUnit: AudioUnit, _ inID: AudioUnitParameterID, _ inScope: AudioUnitScope, _ inElement: AudioUnitElement, _ outValue: UnsafeMutablePointer<AudioUnitParameterValue>) -> OSStatus
```

## Parameters

- `inUnit`: The audio unit that you want to get a parameter value from.
- `inID`: The identifier for the parameter.
- `inScope`: The audio unit scope for the parameter.
- `inElement`: The audio unit element for the parameter.
- `outValue`: On success, contains the current value for the specified audio unit parameter.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

## See Also

### Getting and Setting Parameters

- [AudioUnitScheduleParameters(\_:\_:\_:)](audiounitscheduleparameters%28______%29.md): Schedules changes to the value of an audio unit parameter.
- [AudioUnitSetParameter(\_:\_:\_:\_:\_:\_:)](audiounitsetparameter%28____________%29.md): Sets the value of an audio unit parameter.

# AudioUnitGetParameter (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Gets the value of an audio unit parameter.

## Declaration

```objectivec
extern OSStatus AudioUnitGetParameter(AudioUnit inUnit, AudioUnitParameterID inID, AudioUnitScope inScope, AudioUnitElement inElement, AudioUnitParameterValue *outValue);
```

## Parameters

- `inUnit`: The audio unit that you want to get a parameter value from.
- `inID`: The identifier for the parameter.
- `inScope`: The audio unit scope for the parameter.
- `inElement`: The audio unit element for the parameter.
- `outValue`: On success, contains the current value for the specified audio unit parameter.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

## See Also

### Getting and Setting Parameters

- [AudioUnitScheduleParameters](audiounitscheduleparameters%28______%29.md): Schedules changes to the value of an audio unit parameter.
- [AudioUnitSetParameter](audiounitsetparameter%28____________%29.md): Sets the value of an audio unit parameter.
