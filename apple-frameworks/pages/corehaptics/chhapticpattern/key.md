> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticpattern/key](https://developer.apple.com/documentation/corehaptics/chhapticpattern/key)

# CHHapticPattern.Key (Swift)

**Framework:** Core Haptics  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

Constants that define the keys you use to create a haptic pattern dictionary.

## Declaration

```swift
struct Key
```

## Topics

### Haptic Pattern Keys

- [event](key/event.md): A key that identifies the beginning of a haptic event definition.
- [eventDuration](key/eventduration.md): A key that identifies the duration of an event.
- [eventParameters](key/eventparameters.md): A key that identifies the beginning of an array of fixed parameter definitions.
- [eventType](key/eventtype.md): A key that identifies the type of event.
- [eventWaveformLoopEnabled](key/eventwaveformloopenabled.md): A key for a Boolean value that indicates whether to loop custom audio events.
- [eventWaveformPath](key/eventwaveformpath.md): A key that identifies the path to the local file that contains the audio waveform.
- [eventWaveformUseVolumeEnvelope](key/eventwaveformusevolumeenvelope.md): A key that identifies whether audio file playback fades in and out using an envelope.
- [parameter](key/parameter.md): A key that identifies the beginning of a parameter definition.
- [parameterCurve](key/parametercurve.md): A key that identifies the beginning of a parameter curve definition.
- [parameterCurveControlPoints](key/parametercurvecontrolpoints.md): A key that identifies the control points of a parameter curve.
- [parameterID](key/parameterid.md): A key that identifies the parameter ID.
- [parameterValue](key/parametervalue.md): A key that identifies the value of a parameter.
- [pattern](key/pattern.md): A key that identifies the beginning of a haptic pattern definition.
- [time](key/time.md): A key that identifies the relative time for an event or parameter, in seconds.
- [version](key/version.md): A key that identifies rhe version number of a haptic pattern dictionary.

### Initializers

- [init(rawValue:)](key/init%28rawvalue_%29.md): Creates a pattern key with a string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Haptic Pattern

- [init(contentsOf:)](init%28contentsof_%29.md): Creates a haptic pattern with the contents of an AHAP file.
- [init(events:parameterCurves:)](init%28events_parametercurves_%29.md): Constructs a haptic pattern from a series of events and parameter curves.
- [init(events:parameters:)](init%28events_parameters_%29.md): Constructs a haptic pattern from a series of events and parameters.
- [init(dictionary:)](init%28dictionary_%29.md): Creates a haptic pattern from a property list dictionary.

# CHHapticPatternKey (Objective-C)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

Constants that define the keys you use to create a haptic pattern dictionary.

## Declaration

```objectivec
typedef NSString * CHHapticPatternKey;
```

## Topics

### Haptic Pattern Keys

- [CHHapticPatternKeyEvent](key/event.md): A key that identifies the beginning of a haptic event definition.
- [CHHapticPatternKeyEventDuration](key/eventduration.md): A key that identifies the duration of an event.
- [CHHapticPatternKeyEventParameters](key/eventparameters.md): A key that identifies the beginning of an array of fixed parameter definitions.
- [CHHapticPatternKeyEventType](key/eventtype.md): A key that identifies the type of event.
- [CHHapticPatternKeyEventWaveformLoopEnabled](key/eventwaveformloopenabled.md): A key for a Boolean value that indicates whether to loop custom audio events.
- [CHHapticPatternKeyEventWaveformPath](key/eventwaveformpath.md): A key that identifies the path to the local file that contains the audio waveform.
- [CHHapticPatternKeyEventWaveformUseVolumeEnvelope](key/eventwaveformusevolumeenvelope.md): A key that identifies whether audio file playback fades in and out using an envelope.
- [CHHapticPatternKeyParameter](key/parameter.md): A key that identifies the beginning of a parameter definition.
- [CHHapticPatternKeyParameterCurve](key/parametercurve.md): A key that identifies the beginning of a parameter curve definition.
- [CHHapticPatternKeyParameterCurveControlPoints](key/parametercurvecontrolpoints.md): A key that identifies the control points of a parameter curve.
- [CHHapticPatternKeyParameterID](key/parameterid.md): A key that identifies the parameter ID.
- [CHHapticPatternKeyParameterValue](key/parametervalue.md): A key that identifies the value of a parameter.
- [CHHapticPatternKeyPattern](key/pattern.md): A key that identifies the beginning of a haptic pattern definition.
- [CHHapticPatternKeyTime](key/time.md): A key that identifies the relative time for an event or parameter, in seconds.
- [CHHapticPatternKeyVersion](key/version.md): A key that identifies rhe version number of a haptic pattern dictionary.

## See Also

### Creating a Haptic Pattern

- [initWithContentsOfURL:error:](init%28contentsof_%29.md): Creates a haptic pattern with the contents of an AHAP file.
- [initWithEvents:parameterCurves:error:](init%28events_parametercurves_%29.md): Constructs a haptic pattern from a series of events and parameter curves.
- [initWithEvents:parameters:error:](init%28events_parameters_%29.md): Constructs a haptic pattern from a series of events and parameters.
- [initWithDictionary:error:](init%28dictionary_%29.md): Creates a haptic pattern from a property list dictionary.
