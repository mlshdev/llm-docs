> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/au3dmixerrenderingflags](https://developer.apple.com/documentation/audiotoolbox/au3dmixerrenderingflags)

# AU3DMixerRenderingFlags (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct AU3DMixerRenderingFlags
```

## Topics

### Constants

- [k3DMixerRenderingFlags_ConstantReverbBlend](au3dmixerrenderingflags/k3dmixerrenderingflags_constantreverbblend.md)
- [k3DMixerRenderingFlags_DistanceAttenuation](au3dmixerrenderingflags/k3dmixerrenderingflags_distanceattenuation.md)
- [k3DMixerRenderingFlags_DistanceDiffusion](au3dmixerrenderingflags/k3dmixerrenderingflags_distancediffusion.md)
- [k3DMixerRenderingFlags_DistanceFilter](au3dmixerrenderingflags/k3dmixerrenderingflags_distancefilter.md)
- [k3DMixerRenderingFlags_DopplerShift](au3dmixerrenderingflags/k3dmixerrenderingflags_dopplershift.md)
- [k3DMixerRenderingFlags_InterAuralDelay](au3dmixerrenderingflags/k3dmixerrenderingflags_interauraldelay.md)
- [k3DMixerRenderingFlags_LinearDistanceAttenuation](au3dmixerrenderingflags/k3dmixerrenderingflags_lineardistanceattenuation.md)

### Initializers

- [init(rawValue:)](au3dmixerrenderingflags/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Structures

- [AudioUnitConnection](audiounitconnection.md): An audio unit source-to-destination connection specification.
- [AudioUnitEvent](audiounitevent.md)
- [AudioUnitExternalBuffer](audiounitexternalbuffer.md): Allows an audio unit host application to tell an audio unit to use a specified buffer for its input callback.
- [AudioUnitFrequencyResponseBin](audiounitfrequencyresponsebin.md): An audio unit’s audio level at a particular frequency.
- [AudioUnitMeterClipping](audiounitmeterclipping.md): Audio clipping that has occurred in a mixer unit.
- [AudioUnitMIDIControlMapping](audiounitmidicontrolmapping.md)
- [AudioUnitOtherPluginDesc](audiounitotherplugindesc.md)
- [AudioUnitParameter](audiounitparameter.md): An adjustable audio unit attribute such as volume, pitch, or filter cutoff frequency.
- [AudioUnitParameterEvent](audiounitparameterevent.md): A scheduled change to an audio unit parameter’s value.
- [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md): The suggested update rate and history duration for parameters which have the [flag_PlotHistory](audiounitparameteroptions/flag_plothistory.md) flag set.
- [AudioUnitParameterNameInfo](audiounitparameternameinfo.md): A short version of the name for an audio unit parameter.
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.

# AU3DMixerRenderingFlags (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
enum AU3DMixerRenderingFlags : UInt32;
```

## Topics

### Constants

- [k3DMixerRenderingFlags_ConstantReverbBlend](au3dmixerrenderingflags/k3dmixerrenderingflags_constantreverbblend.md)
- [k3DMixerRenderingFlags_DistanceAttenuation](au3dmixerrenderingflags/k3dmixerrenderingflags_distanceattenuation.md)
- [k3DMixerRenderingFlags_DistanceDiffusion](au3dmixerrenderingflags/k3dmixerrenderingflags_distancediffusion.md)
- [k3DMixerRenderingFlags_DistanceFilter](au3dmixerrenderingflags/k3dmixerrenderingflags_distancefilter.md)
- [k3DMixerRenderingFlags_DopplerShift](au3dmixerrenderingflags/k3dmixerrenderingflags_dopplershift.md)
- [k3DMixerRenderingFlags_InterAuralDelay](au3dmixerrenderingflags/k3dmixerrenderingflags_interauraldelay.md)
- [k3DMixerRenderingFlags_LinearDistanceAttenuation](au3dmixerrenderingflags/k3dmixerrenderingflags_lineardistanceattenuation.md)

## See Also

### Structures

- [AudioUnitConnection](audiounitconnection.md): An audio unit source-to-destination connection specification.
- [AudioUnitEvent](audiounitevent.md)
- [AudioUnitExternalBuffer](audiounitexternalbuffer.md): Allows an audio unit host application to tell an audio unit to use a specified buffer for its input callback.
- [AudioUnitFrequencyResponseBin](audiounitfrequencyresponsebin.md): An audio unit’s audio level at a particular frequency.
- [AudioUnitMeterClipping](audiounitmeterclipping.md): Audio clipping that has occurred in a mixer unit.
- [AudioUnitMIDIControlMapping](audiounitmidicontrolmapping.md)
- [AudioUnitOtherPluginDesc](audiounitotherplugindesc.md)
- [AudioUnitParameter](audiounitparameter.md): An adjustable audio unit attribute such as volume, pitch, or filter cutoff frequency.
- [AudioUnitParameterEvent](audiounitparameterevent.md): A scheduled change to an audio unit parameter’s value.
- [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md): The suggested update rate and history duration for parameters which have the [kAudioUnitParameterFlag_PlotHistory](audiounitparameteroptions/flag_plothistory.md) flag set.
- [AudioUnitParameterNameInfo](audiounitparameternameinfo.md): A short version of the name for an audio unit parameter.
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
