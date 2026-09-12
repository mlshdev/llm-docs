> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticpattern/key/event](https://developer.apple.com/documentation/corehaptics/chhapticpattern/key/event)

# event (Swift)

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A key that identifies the beginning of a haptic event definition.

## Declaration

```swift
static let event: CHHapticPattern.Key
```

<a id="Discussion"></a>

## Discussion

The haptic event definition includes an event type, a time, and an optional set of fixed parameters.

## See Also

### Haptic Pattern Keys

- [eventDuration](eventduration.md): A key that identifies the duration of an event.
- [eventParameters](eventparameters.md): A key that identifies the beginning of an array of fixed parameter definitions.
- [eventType](eventtype.md): A key that identifies the type of event.
- [eventWaveformLoopEnabled](eventwaveformloopenabled.md): A key for a Boolean value that indicates whether to loop custom audio events.
- [eventWaveformPath](eventwaveformpath.md): A key that identifies the path to the local file that contains the audio waveform.
- [eventWaveformUseVolumeEnvelope](eventwaveformusevolumeenvelope.md): A key that identifies whether audio file playback fades in and out using an envelope.
- [parameter](parameter.md): A key that identifies the beginning of a parameter definition.
- [parameterCurve](parametercurve.md): A key that identifies the beginning of a parameter curve definition.
- [parameterCurveControlPoints](parametercurvecontrolpoints.md): A key that identifies the control points of a parameter curve.
- [parameterID](parameterid.md): A key that identifies the parameter ID.
- [parameterValue](parametervalue.md): A key that identifies the value of a parameter.
- [pattern](pattern.md): A key that identifies the beginning of a haptic pattern definition.
- [time](time.md): A key that identifies the relative time for an event or parameter, in seconds.
- [version](version.md): A key that identifies rhe version number of a haptic pattern dictionary.

# CHHapticPatternKeyEvent (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A key that identifies the beginning of a haptic event definition.

## Declaration

```objectivec
extern CHHapticPatternKey CHHapticPatternKeyEvent;
```

<a id="Discussion"></a>

## Discussion

The haptic event definition includes an event type, a time, and an optional set of fixed parameters.

## See Also

### Haptic Pattern Keys

- [CHHapticPatternKeyEventDuration](eventduration.md): A key that identifies the duration of an event.
- [CHHapticPatternKeyEventParameters](eventparameters.md): A key that identifies the beginning of an array of fixed parameter definitions.
- [CHHapticPatternKeyEventType](eventtype.md): A key that identifies the type of event.
- [CHHapticPatternKeyEventWaveformLoopEnabled](eventwaveformloopenabled.md): A key for a Boolean value that indicates whether to loop custom audio events.
- [CHHapticPatternKeyEventWaveformPath](eventwaveformpath.md): A key that identifies the path to the local file that contains the audio waveform.
- [CHHapticPatternKeyEventWaveformUseVolumeEnvelope](eventwaveformusevolumeenvelope.md): A key that identifies whether audio file playback fades in and out using an envelope.
- [CHHapticPatternKeyParameter](parameter.md): A key that identifies the beginning of a parameter definition.
- [CHHapticPatternKeyParameterCurve](parametercurve.md): A key that identifies the beginning of a parameter curve definition.
- [CHHapticPatternKeyParameterCurveControlPoints](parametercurvecontrolpoints.md): A key that identifies the control points of a parameter curve.
- [CHHapticPatternKeyParameterID](parameterid.md): A key that identifies the parameter ID.
- [CHHapticPatternKeyParameterValue](parametervalue.md): A key that identifies the value of a parameter.
- [CHHapticPatternKeyPattern](pattern.md): A key that identifies the beginning of a haptic pattern definition.
- [CHHapticPatternKeyTime](time.md): A key that identifies the relative time for an event or parameter, in seconds.
- [CHHapticPatternKeyVersion](version.md): A key that identifies rhe version number of a haptic pattern dictionary.
