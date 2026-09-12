> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitrenderactionflags](https://developer.apple.com/documentation/audiotoolbox/audiounitrenderactionflags)

# AudioUnitRenderActionFlags (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Flags for configuring audio unit rendering.

## Declaration

```swift
struct AudioUnitRenderActionFlags
```

<a id="overview"></a>

## Overview

These flags can be set in a callback from an audio unit during an audio unit render operation from either the `RenderNotify` Proc or the render input callback.

## Topics

### Constants

- [unitRenderAction_PreRender](audiounitrenderactionflags/unitrenderaction_prerender.md): Called on a render notification Proc - which is called either before or after the render operation of the audio unit. If this flag is set, the proc is being called before the render operation is performed.
- [unitRenderAction_PostRender](audiounitrenderactionflags/unitrenderaction_postrender.md): Called on a render notification Proc - which is called either before or after the render operation of the audio unit. If this flag is set, the proc is being called after the render operation is completed.
- [unitRenderAction_OutputIsSilence](audiounitrenderactionflags/unitrenderaction_outputissilence.md): This flag can be set in a render input callback (or in the audio unit’s render operation itself) and is used to indicate that the render buffer contains only silence. It can then be used by the caller as a hint to whether the buffer needs to be processed or not.
- [offlineUnitRenderAction_Preflight](audiounitrenderactionflags/offlineunitrenderaction_preflight.md): This is used with offline audio units (of type `'auol'`). It is used when an offline unit is being preflighted, which is performed prior to the actual offline rendering actions are performed. It is used for those cases where the offline process needs it (for example, with an offline unit that normalizes an audio file, it needs to see all of the audio data first before it can perform its normalization).
- [offlineUnitRenderAction_Render](audiounitrenderactionflags/offlineunitrenderaction_render.md): Once an offline unit has been successfully preflighted, it is then put into its render mode. So this flag is set to indicate to the audio unit that it is now in that state and that it should perform its processing on the input data.
- [offlineUnitRenderAction_Complete](audiounitrenderactionflags/offlineunitrenderaction_complete.md): This flag is set when an offline unit has completed either its preflight or performed render operation.
- [unitRenderAction_PostRenderError](audiounitrenderactionflags/unitrenderaction_postrendererror.md): If this flag is set on the post-render call an error was returned by the audio unit’s render operation. In this case, the error can be retrieved through the lastRenderError property and the audio data in `ioData` handed to the post-render notification will be invalid.
- [unitRenderAction_DoNotCheckRenderArgs](audiounitrenderactionflags/unitrenderaction_donotcheckrenderargs.md): If this flag is set, then checks that are done on the arguments provided to render are not performed. This can be useful to use to save computation time in situations where you are sure you are providing the correct arguments and structures to the various render calls.

### Initializers

- [init(rawValue:)](audiounitrenderactionflags/init%28rawvalue_%29.md)

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

# AudioUnitRenderActionFlags (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Flags for configuring audio unit rendering.

## Declaration

```objectivec
enum AudioUnitRenderActionFlags : UInt32;
```

<a id="overview"></a>

## Overview

These flags can be set in a callback from an audio unit during an audio unit render operation from either the `RenderNotify` Proc or the render input callback.

## Topics

### Constants

- [kAudioUnitRenderAction_PreRender](audiounitrenderactionflags/unitrenderaction_prerender.md): Called on a render notification Proc - which is called either before or after the render operation of the audio unit. If this flag is set, the proc is being called before the render operation is performed.
- [kAudioUnitRenderAction_PostRender](audiounitrenderactionflags/unitrenderaction_postrender.md): Called on a render notification Proc - which is called either before or after the render operation of the audio unit. If this flag is set, the proc is being called after the render operation is completed.
- [kAudioUnitRenderAction_OutputIsSilence](audiounitrenderactionflags/unitrenderaction_outputissilence.md): This flag can be set in a render input callback (or in the audio unit’s render operation itself) and is used to indicate that the render buffer contains only silence. It can then be used by the caller as a hint to whether the buffer needs to be processed or not.
- [kAudioOfflineUnitRenderAction_Preflight](audiounitrenderactionflags/offlineunitrenderaction_preflight.md): This is used with offline audio units (of type `'auol'`). It is used when an offline unit is being preflighted, which is performed prior to the actual offline rendering actions are performed. It is used for those cases where the offline process needs it (for example, with an offline unit that normalizes an audio file, it needs to see all of the audio data first before it can perform its normalization).
- [kAudioOfflineUnitRenderAction_Render](audiounitrenderactionflags/offlineunitrenderaction_render.md): Once an offline unit has been successfully preflighted, it is then put into its render mode. So this flag is set to indicate to the audio unit that it is now in that state and that it should perform its processing on the input data.
- [kAudioOfflineUnitRenderAction_Complete](audiounitrenderactionflags/offlineunitrenderaction_complete.md): This flag is set when an offline unit has completed either its preflight or performed render operation.
- [kAudioUnitRenderAction_PostRenderError](audiounitrenderactionflags/unitrenderaction_postrendererror.md): If this flag is set on the post-render call an error was returned by the audio unit’s render operation. In this case, the error can be retrieved through the lastRenderError property and the audio data in `ioData` handed to the post-render notification will be invalid.
- [kAudioUnitRenderAction_DoNotCheckRenderArgs](audiounitrenderactionflags/unitrenderaction_donotcheckrenderargs.md): If this flag is set, then checks that are done on the arguments provided to render are not performed. This can be useful to use to save computation time in situations where you are sure you are providing the correct arguments and structures to the various render calls.

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
