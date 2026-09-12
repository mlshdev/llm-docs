> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit](https://developer.apple.com/documentation/audiotoolbox/auaudiounit)

# AUAudioUnit (Swift)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A class that defines a host’s interface to an audio unit.

## Declaration

```swift
class AUAudioUnit
```

## Mentioned In

- [Adding Parallel Real-Time Threads to Audio Workgroups](adding-parallel-real-time-threads-to-audio-workgroups.md)
- [Rendering Spatial Audio from Bluetooth headphones](rendering-spatial-audio-from-bluetooth-headphones.md)

<a id="overview"></a>

## Overview

Hosts can instantiate either version 3 or version 2 audio units with this class, and to some extent control whether an audio unit is instantiated in-process or in a separate extension process.

Version 3 audio units should subclass the [AUAudioUnit](auaudiounit.md) class. Version 3 audio unit components can be registered in the following ways:

- Package the component into an app extension containing an `AudioComponents`  `Info.plist` entry. The principal class must conform to the [AUAudioUnitFactory](auaudiounitfactory.md) protocol, which will typically instantiate an [AUAudioUnit](auaudiounit.md) subclass.
- Call the [registerSubclass(\_:as:name:version:)](auaudiounit/registersubclass%28__as_name_version_%29.md) method to associate a component description with an [AUAudioUnit](auaudiounit.md) subclass. Use the convention `<manufacturer name>:<audio unit name>` when naming your audio unit component.

Version 2 audio units should subclass the [AUAudioUnitV2Bridge](auaudiounitv2bridge.md) class instead. Version 2 audio unit components can be registered in the following ways:

- Package the component into a component bundle containing an `AudioComponents` `Info.plist` entry, referring to an `AudioComponentFactoryFunction` function.
- Call the `AudioComponentRegister` function to associate a component description with an `AudioComponentFactoryFunction` function.

A host does not need to be aware of the concrete [AUAudioUnit](auaudiounit.md) subclass that is being instantiated. The [init(componentDescription:options:)](auaudiounit/init%28componentdescription_options_%29.md) method ensures that the proper subclass is used.

> **Important**

>  When using the [AUAudioUnit](auaudiounit.md) class with a version 2 audio unit, or the C [AudioComponent](audiocomponent.md) and `AudioUnit` APIs with a version 3 audio unit, all major pieces of functionality are bridged between the two APIs. When applicable, this document references the version 2 API equivalent of each version 3 method or property.

## Topics

### Creating an Audio Unit

- [init(componentDescription:)](auaudiounit/init%28componentdescription_%29.md): Synchronously initializes a new audio unit object.
- [init(componentDescription:options:)](auaudiounit/init%28componentdescription_options_%29.md): Synchronously initializes a new audio unit object.
- [instantiate(with:options:completionHandler:)](auaudiounit/instantiate%28with_options_completionhandler_%29.md): Asynchronously creates an audio unit instance.

### Returning the Audio Busses

- [inputBusses](auaudiounit/inputbusses.md): An array containing the audio unit’s input connection points.
- [outputBusses](auaudiounit/outputbusses.md): An array containing the audio unit’s output connection points.

### Customizing the Audio Unit Behavior

These methods and properties are only of interest to audio unit subclasses.

- [registerSubclass(\_:as:name:version:)](auaudiounit/registersubclass%28__as_name_version_%29.md): Registers an audio unit subclass.
- [shouldChange(to:for:)](auaudiounit/shouldchange%28to_for_%29.md): This is called when you set the format on a bus.
- [setRenderResourcesAllocated(\_:)](auaudiounit/setrenderresourcesallocated%28__%29.md): Sets the Boolean value of the [renderResourcesAllocated](auaudiounit/renderresourcesallocated.md) property.
- [internalRenderBlock](auaudiounit/internalrenderblock.md): The block which you must provide, via a getter, in order to implement rendering.
- [midiOutputBufferSizeHint](auaudiounit/midioutputbuffersizehint.md)
- [AUInternalRenderBlock](auinternalrenderblock.md): A block to render the audio unit.

### Querying Parameters

- [parameterTree](auaudiounit/parametertree.md): An audio unit’s parameters, organized in a tree hierarchy.
- [allParameterValues](auaudiounit/allparametervalues.md): Special read-only property for KVO.
- [parametersForOverview(withCount:)](auaudiounit/parametersforoverview%28withcount_%29.md): Returns the audio unit’s most important parameters.

### Providing Data to the Host

- [musicalContextBlock](auaudiounit/musicalcontextblock.md): A callback to the host for musical context information.
- [transportStateBlock](auaudiounit/transportstateblock.md): A callback to the host for transport state information.
- [contextName](auaudiounit/contextname.md): Information about the host context in which the audio unit is connected, for display in the audio unit’s view.
- [supportsMPE](auaudiounit/supportsmpe.md): A Boolean value that indicates whether the audio unit supports multi-dimensional polyphonic expression.
- [AUHostMusicalContextBlock](auhostmusicalcontextblock.md): A block through which hosts provide musical tempo, time signature, and beat position.
- [AUHostTransportStateBlock](auhosttransportstateblock.md): A block through which hosts provide information about their transport state.

### Managing MIDI Events

- [isMusicDeviceOrEffect](auaudiounit/ismusicdeviceoreffect.md): Specifies whether an audio unit responds to MIDI events.
- [virtualMIDICableCount](auaudiounit/virtualmidicablecount.md): The number of virtual MIDI cables implemented by a music device or effect.
- [scheduleMIDIEventBlock](auaudiounit/schedulemidieventblock.md): A block used to schedule MIDI events.
- [midiOutputEventBlock](auaudiounit/midioutputeventblock.md)
- [midiOutputNames](auaudiounit/midioutputnames.md): The names of the MIDI outputs.
- [AUScheduleMIDIEventBlock](auschedulemidieventblock.md): A block to schedule MIDI events.
- [AUMIDIOutputEventBlock](aumidioutputeventblock.md)

### Managing Presets

- [fullState](auaudiounit/fullstate.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving as a user preset.
- [fullStateForDocument](auaudiounit/fullstatefordocument.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving in a user’s document.
- [factoryPresets](auaudiounit/factorypresets.md): A collection of presets provided by the audio unit’s developer.
- [currentPreset](auaudiounit/currentpreset.md): The audio unit’s last-selected preset.
- [supportsUserPresets](auaudiounit/supportsuserpresets.md)
- [userPresets](auaudiounit/userpresets.md)
- [saveUserPreset(\_:)](auaudiounit/saveuserpreset%28__%29.md)
- [deleteUserPreset(\_:)](auaudiounit/deleteuserpreset%28__%29.md)
- [presetState(for:)](auaudiounit/presetstate%28for_%29.md)

### Managing the Render Cycle

- [allocateRenderResources()](auaudiounit/allocaterenderresources%28%29.md): Allocates resources required to render audio.
- [deallocateRenderResources()](auaudiounit/deallocaterenderresources%28%29.md): Deallocates resources required to render audio.
- [reset()](auaudiounit/reset%28%29.md): Resets transitory rendering state to its initial state.
- [renderResourcesAllocated](auaudiounit/renderresourcesallocated.md): Determines whether the audio unit has allocated render resources.
- [renderBlock](auaudiounit/renderblock.md): The block that hosts use to ask the audio unit to render audio.
- [scheduleParameterBlock](auaudiounit/scheduleparameterblock.md): The block that hosts use to schedule parameters.
- [maximumFramesToRender](auaudiounit/maximumframestorender.md): The maximum number of frames that the audio unit can render at once.
- [token(byAddingRenderObserver:)](auaudiounit/token%28byaddingrenderobserver_%29.md): Adds a block to be called on each render cycle.
- [removeRenderObserver(\_:)](auaudiounit/removerenderobserver%28__%29.md): Removes an observer block previously added to the render cycle.
- [AURenderObserver](aurenderobserver.md): A block called when an audio unit renders audio.

### Messaging Channels

- [messageChannel(for:)](auaudiounit/messagechannel%28for_%29.md): Returns an object for bidirectional communication between an audio unit and its host.
- [AUMessageChannel](aumessagechannel.md): A specification for a bidirectional communication message channel.

### Optimizing Performance

- [latency](auaudiounit/latency.md): The audio unit’s processing latency, in seconds.
- [tailTime](auaudiounit/tailtime.md): The audio unit’s tail time, in seconds.
- [renderQuality](auaudiounit/renderquality.md): Provides a trade-off between rendering quality and CPU load.
- [shouldBypassEffect](auaudiounit/shouldbypasseffect.md): Determines whether an effect should route input directly to output, without any processing.
- [canProcessInPlace](auaudiounit/canprocessinplace.md): Determines whether an audio unit can process in place.
- [isRenderingOffline](auaudiounit/isrenderingoffline.md): Communicates to an audio unit that it is rendering offline.

### Describing the Audio Unit

- [componentDescription](auaudiounit/componentdescription.md): The component description with which the audio unit was created.
- [component](auaudiounit/component.md): The component found in the component description with which the audio unit was created.
- [componentName](auaudiounit/componentname.md): The audio unit’s component’s name.
- [componentVersion](auaudiounit/componentversion.md): The audio unit’s component’s version.
- [audioUnitName](auaudiounit/audiounitname.md): The audio unit’s name, derived from the component’s name.
- [audioUnitShortName](auaudiounit/audiounitshortname.md)
- [manufacturerName](auaudiounit/manufacturername.md): The manufacturer’s name, derived from the component’s name.

### Configuring the Channel Capabilities

- [channelCapabilities](auaudiounit/channelcapabilities.md): Expresses valid combinations of input and output channels.
- [channelMap](auaudiounit/channelmap.md)
- [profileState(forCable:channel:)](auaudiounit/profilestate%28forcable_channel_%29.md)
- [enable(\_:cable:onChannel:)](auaudiounit/enable%28__cable_onchannel_%29.md)
- [disableProfile(\_:cable:onChannel:)](auaudiounit/disableprofile%28__cable_onchannel_%29.md)
- [profileChangedBlock](auaudiounit/profilechangedblock.md)

### Configuring the Device

- [deviceID](auaudiounit/deviceid.md): Gets the I/O hardware device.
- [setDeviceID(\_:)](auaudiounit/setdeviceid%28__%29.md): Sets the I/O hardware device.
- [canPerformInput](auaudiounit/canperforminput.md): Determines whether the I/O device can perform input.
- [canPerformOutput](auaudiounit/canperformoutput.md): Determines whether the I/O device can perform output.
- [isInputEnabled](auaudiounit/isinputenabled.md): A flag enabling audio input from the unit.
- [isOutputEnabled](auaudiounit/isoutputenabled.md): A flag enabling audio output from the unit.
- [inputHandler](auaudiounit/inputhandler.md): The block that the output unit will call to notify when input is available.
- [outputProvider](auaudiounit/outputprovider.md): The block that the output unit will call to get audio to send to the output.
- [deviceInputLatency](auaudiounit/deviceinputlatency.md): The audio device’s input latency, in seconds.
- [deviceOutputLatency](auaudiounit/deviceoutputlatency.md): The audio devic’s output latency, in seconds.
- [startHardware()](auaudiounit/starthardware%28%29.md): Starts the audio hardware.
- [stopHardware()](auaudiounit/stophardware%28%29.md): Stops the audio hardware.
- [AURenderPullInputBlock](aurenderpullinputblock.md): A block to supply audio input to a render block.

### Configuring the User Interface

- [providesUserInterface](auaudiounit/providesuserinterface.md): A Boolean that indicates whether the audio unit provides a user interface, normally in the form of a view controller.
- [supportedViewConfigurations(\_:)](auaudiounit/supportedviewconfigurations%28__%29.md)
- [select(\_:)](auaudiounit/select%28__%29.md)

### Getting the Runtime Behavior

- [isRunning](auaudiounit/isrunning.md)
- [isLoadedInProcess](auaudiounit/isloadedinprocess.md)

### Constants

- [AUEventSampleTime](1387633-aueventsampletime.md): Expresses time as a sample count.
- [AUAudioUnitBusType](auaudiounitbustype.md)
- [AUHostTransportStateFlags](auhosttransportstateflags.md)
- [AURenderEventType](aurendereventtype.md)
- [AURenderBlock](aurenderblock.md): A block to render the audio unit.
- [AUInputHandler](auinputhandler.md): A block to notify the host of an I/O unit that an input is available.

### Getting the Audio Unit Presets

- [kAUPresetNumberKey](kaupresetnumberkey.md)
- [kAUPresetCPULoadKey](kaupresetcpuloadkey.md)
- [kAUPresetDataKey](kaupresetdatakey.md)
- [kAUPresetElementNameKey](kaupresetelementnamekey.md)
- [kAUPresetExternalFileRefs](kaupresetexternalfilerefs.md)
- [kAUPresetMASDataKey](kaupresetmasdatakey.md)
- [kAUPresetManufacturerKey](kaupresetmanufacturerkey.md)
- [kAUPresetNameKey](kaupresetnamekey.md)
- [kAUPresetPartKey](kaupresetpartkey.md): If present, distinguishes a global preset that is set on the global scope from a part-based preset that is set on the part scope. The value of this key is defined by the audio unit it applies to.
- [kAUPresetRenderQualityKey](kaupresetrenderqualitykey.md)
- [kAUPresetSubtypeKey](kaupresetsubtypekey.md)
- [kAUPresetTypeKey](kaupresettypekey.md)
- [kAUPresetVSTDataKey](kaupresetvstdatakey.md): VST state from a VST “bank.”
- [kAUPresetVSTPresetKey](kaupresetvstpresetkey.md): VST state from a VST “preset.”
- [kAUPresetVersionKey](kaupresetversionkey.md)

### Instance properties

- [audioUnitMIDIProtocol](auaudiounit/audiounitmidiprotocol.md)
- [hostMIDIProtocol](auaudiounit/hostmidiprotocol.md)
- [midiOutputEventListBlock](auaudiounit/midioutputeventlistblock.md)
- [migrateFromPlugin](auaudiounit/migratefromplugin.md)
- [scheduleMIDIEventListBlock](auaudiounit/schedulemidieventlistblock.md)

### Instance Methods

- [requestViewController(completionHandler:)](auaudiounit/requestviewcontroller%28completionhandler_%29.md): Requests an audio unit’s custom view controller.

### Instance Properties

- [intendedSpatialExperience](auaudiounit/intendedspatialexperience-7uqrm.md): The AUAudioUnit’s intended spatial audio experience.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AUAudioUnitV2Bridge](auaudiounitv2bridge.md)
- [AUHeadTrackingBinauralRenderer](auheadtrackingbinauralrenderer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Audio Units

- [Creating an audio unit extension](../avfaudio/creating-an-audio-unit-extension.md): Build an extension by using an Xcode template.
- [Creating custom audio effects](../avfaudio/creating-custom-audio-effects.md): Add custom audio-effect processing to apps like Logic Pro X and GarageBand by creating Audio Unit (AU) plug-ins.
- [Incorporating Audio Effects and Instruments](incorporating-audio-effects-and-instruments.md): Add custom audio processing and MIDI instruments to your app by hosting Audio Unit (AU) plug-ins.
- [Debugging Out-of-Process Audio Units on Apple Silicon](debugging-out-of-process-audio-units-on-apple-silicon.md): Connect to out-of-process audio units using the Xcode debugger.
- [Rendering Spatial Audio from Bluetooth headphones](rendering-spatial-audio-from-bluetooth-headphones.md): Create a Spatial Audio extension that allows Bluetooth headphones to track the wearer’s head movements for spatial audio playback.
- [AUAudioUnitBus](auaudiounitbus.md): A class that defines an input or output connection point on an audio unit.
- [AUAudioUnitBusArray](auaudiounitbusarray.md): A class that defines a container for an audio unit’s input or output busses.
- [AUAudioUnitPreset](auaudiounitpreset.md): A class that describes an interface for custom parameter settings provided by the audio unit developer.
- [AUAudioUnitV2Bridge](auaudiounitv2bridge.md): A class that wraps a version 2 audio unit as version 3 audio unit.
- [AUHeadTrackingBinauralRenderer](auheadtrackingbinauralrenderer.md): A subclass of AUAudioUnit specifically for 3rd party spatial Audio Units.
- [AudioUnitExtensionCopyComponentList(\_:)](audiounitextensioncopycomponentlist%28__%29.md): Returns the component registrations for a given audio unit extension.
- [AudioUnitExtensionSetComponentList(\_:\_:)](audiounitextensionsetcomponentlist%28____%29.md): Allows the implementor of an audio unit extension to dynamically modify the list of component registrations for the extension.
- [AUAudioUnitFactory](auaudiounitfactory.md): An object that creates a version 3 audio unit.

# AUAudioUnit (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A class that defines a host’s interface to an audio unit.

## Declaration

```objectivec
@interface AUAudioUnit : NSObject
```

## Mentioned In

- [Adding Parallel Real-Time Threads to Audio Workgroups](adding-parallel-real-time-threads-to-audio-workgroups.md)
- [Rendering Spatial Audio from Bluetooth headphones](rendering-spatial-audio-from-bluetooth-headphones.md)

<a id="overview"></a>

## Overview

Hosts can instantiate either version 3 or version 2 audio units with this class, and to some extent control whether an audio unit is instantiated in-process or in a separate extension process.

Version 3 audio units should subclass the [AUAudioUnit](auaudiounit.md) class. Version 3 audio unit components can be registered in the following ways:

- Package the component into an app extension containing an `AudioComponents`  `Info.plist` entry. The principal class must conform to the [AUAudioUnitFactory](auaudiounitfactory.md) protocol, which will typically instantiate an [AUAudioUnit](auaudiounit.md) subclass.
- Call the [registerSubclass:asComponentDescription:name:version:](auaudiounit/registersubclass%28__as_name_version_%29.md) method to associate a component description with an [AUAudioUnit](auaudiounit.md) subclass. Use the convention `<manufacturer name>:<audio unit name>` when naming your audio unit component.

Version 2 audio units should subclass the [AUAudioUnitV2Bridge](auaudiounitv2bridge.md) class instead. Version 2 audio unit components can be registered in the following ways:

- Package the component into a component bundle containing an `AudioComponents` `Info.plist` entry, referring to an `AudioComponentFactoryFunction` function.
- Call the `AudioComponentRegister` function to associate a component description with an `AudioComponentFactoryFunction` function.

A host does not need to be aware of the concrete [AUAudioUnit](auaudiounit.md) subclass that is being instantiated. The [initWithComponentDescription:options:error:](auaudiounit/init%28componentdescription_options_%29.md) method ensures that the proper subclass is used.

> **Important**

>  When using the [AUAudioUnit](auaudiounit.md) class with a version 2 audio unit, or the C [AudioComponent](audiocomponent.md) and `AudioUnit` APIs with a version 3 audio unit, all major pieces of functionality are bridged between the two APIs. When applicable, this document references the version 2 API equivalent of each version 3 method or property.

## Topics

### Creating an Audio Unit

- [initWithComponentDescription:error:](auaudiounit/init%28componentdescription_%29.md): Synchronously initializes a new audio unit object.
- [initWithComponentDescription:options:error:](auaudiounit/init%28componentdescription_options_%29.md): Synchronously initializes a new audio unit object.
- [instantiateWithComponentDescription:options:completionHandler:](auaudiounit/instantiate%28with_options_completionhandler_%29.md): Asynchronously creates an audio unit instance.

### Returning the Audio Busses

- [inputBusses](auaudiounit/inputbusses.md): An array containing the audio unit’s input connection points.
- [outputBusses](auaudiounit/outputbusses.md): An array containing the audio unit’s output connection points.

### Customizing the Audio Unit Behavior

These methods and properties are only of interest to audio unit subclasses.

- [registerSubclass:asComponentDescription:name:version:](auaudiounit/registersubclass%28__as_name_version_%29.md): Registers an audio unit subclass.
- [shouldChangeToFormat:forBus:](auaudiounit/shouldchange%28to_for_%29.md): This is called when you set the format on a bus.
- [setRenderResourcesAllocated:](auaudiounit/setrenderresourcesallocated%28__%29.md): Sets the Boolean value of the [renderResourcesAllocated](auaudiounit/renderresourcesallocated.md) property.
- [internalRenderBlock](auaudiounit/internalrenderblock.md): The block which you must provide, via a getter, in order to implement rendering.
- [MIDIOutputBufferSizeHint](auaudiounit/midioutputbuffersizehint.md)
- [AUInternalRenderBlock](auinternalrenderblock.md): A block to render the audio unit.

### Querying Parameters

- [parameterTree](auaudiounit/parametertree.md): An audio unit’s parameters, organized in a tree hierarchy.
- [allParameterValues](auaudiounit/allparametervalues.md): Special read-only property for KVO.
- [parametersForOverviewWithCount:](auaudiounit/parametersforoverview%28withcount_%29.md): Returns the audio unit’s most important parameters.

### Providing Data to the Host

- [musicalContextBlock](auaudiounit/musicalcontextblock.md): A callback to the host for musical context information.
- [transportStateBlock](auaudiounit/transportstateblock.md): A callback to the host for transport state information.
- [contextName](auaudiounit/contextname.md): Information about the host context in which the audio unit is connected, for display in the audio unit’s view.
- [supportsMPE](auaudiounit/supportsmpe.md): A Boolean value that indicates whether the audio unit supports multi-dimensional polyphonic expression.
- [AUHostMusicalContextBlock](auhostmusicalcontextblock.md): A block through which hosts provide musical tempo, time signature, and beat position.
- [AUHostTransportStateBlock](auhosttransportstateblock.md): A block through which hosts provide information about their transport state.

### Managing MIDI Events

- [musicDeviceOrEffect](auaudiounit/ismusicdeviceoreffect.md): Specifies whether an audio unit responds to MIDI events.
- [virtualMIDICableCount](auaudiounit/virtualmidicablecount.md): The number of virtual MIDI cables implemented by a music device or effect.
- [scheduleMIDIEventBlock](auaudiounit/schedulemidieventblock.md): A block used to schedule MIDI events.
- [MIDIOutputEventBlock](auaudiounit/midioutputeventblock.md)
- [MIDIOutputNames](auaudiounit/midioutputnames.md): The names of the MIDI outputs.
- [AUScheduleMIDIEventBlock](auschedulemidieventblock.md): A block to schedule MIDI events.
- [AUMIDIOutputEventBlock](aumidioutputeventblock.md)

### Managing Presets

- [fullState](auaudiounit/fullstate.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving as a user preset.
- [fullStateForDocument](auaudiounit/fullstatefordocument.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving in a user’s document.
- [factoryPresets](auaudiounit/factorypresets.md): A collection of presets provided by the audio unit’s developer.
- [currentPreset](auaudiounit/currentpreset.md): The audio unit’s last-selected preset.
- [supportsUserPresets](auaudiounit/supportsuserpresets.md)
- [userPresets](auaudiounit/userpresets.md)
- [saveUserPreset:error:](auaudiounit/saveuserpreset%28__%29.md)
- [deleteUserPreset:error:](auaudiounit/deleteuserpreset%28__%29.md)
- [presetStateFor:error:](auaudiounit/presetstate%28for_%29.md)

### Managing the Render Cycle

- [allocateRenderResourcesAndReturnError:](auaudiounit/allocaterenderresources%28%29.md): Allocates resources required to render audio.
- [deallocateRenderResources](auaudiounit/deallocaterenderresources%28%29.md): Deallocates resources required to render audio.
- [reset](auaudiounit/reset%28%29.md): Resets transitory rendering state to its initial state.
- [renderResourcesAllocated](auaudiounit/renderresourcesallocated.md): Determines whether the audio unit has allocated render resources.
- [renderBlock](auaudiounit/renderblock.md): The block that hosts use to ask the audio unit to render audio.
- [scheduleParameterBlock](auaudiounit/scheduleparameterblock.md): The block that hosts use to schedule parameters.
- [maximumFramesToRender](auaudiounit/maximumframestorender.md): The maximum number of frames that the audio unit can render at once.
- [tokenByAddingRenderObserver:](auaudiounit/token%28byaddingrenderobserver_%29.md): Adds a block to be called on each render cycle.
- [removeRenderObserver:](auaudiounit/removerenderobserver%28__%29.md): Removes an observer block previously added to the render cycle.
- [renderContextObserver](auaudiounit/rendercontextobserver.md): The block that the system calls when the rendering context changes.
- [AURenderContextObserver](aurendercontextobserver.md): A custom block that tells the audio unit which thread context to use for the next render cycle.
- [AudioUnitRenderContext](audiounitrendercontext.md): A structure that contains thread context information for a real-time rendering operation.
- [AURenderObserver](aurenderobserver.md): A block called when an audio unit renders audio.

### Messaging Channels

- [messageChannelFor:](auaudiounit/messagechannel%28for_%29.md): Returns an object for bidirectional communication between an audio unit and its host.
- [AUMessageChannel](aumessagechannel.md): A specification for a bidirectional communication message channel.

### Optimizing Performance

- [latency](auaudiounit/latency.md): The audio unit’s processing latency, in seconds.
- [tailTime](auaudiounit/tailtime.md): The audio unit’s tail time, in seconds.
- [renderQuality](auaudiounit/renderquality.md): Provides a trade-off between rendering quality and CPU load.
- [shouldBypassEffect](auaudiounit/shouldbypasseffect.md): Determines whether an effect should route input directly to output, without any processing.
- [canProcessInPlace](auaudiounit/canprocessinplace.md): Determines whether an audio unit can process in place.
- [renderingOffline](auaudiounit/isrenderingoffline.md): Communicates to an audio unit that it is rendering offline.
- [osWorkgroup](auaudiounit/osworkgroup.md): The workgroup associated with the audio device underlying this Audio Unit.

### Describing the Audio Unit

- [componentDescription](auaudiounit/componentdescription.md): The component description with which the audio unit was created.
- [component](auaudiounit/component.md): The component found in the component description with which the audio unit was created.
- [componentName](auaudiounit/componentname.md): The audio unit’s component’s name.
- [componentVersion](auaudiounit/componentversion.md): The audio unit’s component’s version.
- [audioUnitName](auaudiounit/audiounitname.md): The audio unit’s name, derived from the component’s name.
- [audioUnitShortName](auaudiounit/audiounitshortname.md)
- [manufacturerName](auaudiounit/manufacturername.md): The manufacturer’s name, derived from the component’s name.

### Configuring the Channel Capabilities

- [channelCapabilities](auaudiounit/channelcapabilities.md): Expresses valid combinations of input and output channels.
- [channelMap](auaudiounit/channelmap.md)
- [profileStateForCable:channel:](auaudiounit/profilestate%28forcable_channel_%29.md)
- [enableProfile:cable:onChannel:error:](auaudiounit/enable%28__cable_onchannel_%29.md)
- [disableProfile:cable:onChannel:error:](auaudiounit/disableprofile%28__cable_onchannel_%29.md)
- [profileChangedBlock](auaudiounit/profilechangedblock.md)

### Configuring the Device

- [deviceID](auaudiounit/deviceid.md): Gets the I/O hardware device.
- [setDeviceID:error:](auaudiounit/setdeviceid%28__%29.md): Sets the I/O hardware device.
- [canPerformInput](auaudiounit/canperforminput.md): Determines whether the I/O device can perform input.
- [canPerformOutput](auaudiounit/canperformoutput.md): Determines whether the I/O device can perform output.
- [inputEnabled](auaudiounit/isinputenabled.md): A flag enabling audio input from the unit.
- [outputEnabled](auaudiounit/isoutputenabled.md): A flag enabling audio output from the unit.
- [inputHandler](auaudiounit/inputhandler.md): The block that the output unit will call to notify when input is available.
- [outputProvider](auaudiounit/outputprovider.md): The block that the output unit will call to get audio to send to the output.
- [deviceInputLatency](auaudiounit/deviceinputlatency.md): The audio device’s input latency, in seconds.
- [deviceOutputLatency](auaudiounit/deviceoutputlatency.md): The audio devic’s output latency, in seconds.
- [startHardwareAndReturnError:](auaudiounit/starthardware%28%29.md): Starts the audio hardware.
- [stopHardware](auaudiounit/stophardware%28%29.md): Stops the audio hardware.
- [AURenderPullInputBlock](aurenderpullinputblock.md): A block to supply audio input to a render block.

### Configuring the User Interface

- [providesUserInterface](auaudiounit/providesuserinterface.md): A Boolean that indicates whether the audio unit provides a user interface, normally in the form of a view controller.
- [supportedViewConfigurations:](auaudiounit/supportedviewconfigurations%28__%29.md)
- [selectViewConfiguration:](auaudiounit/select%28__%29.md)

### Getting the Runtime Behavior

- [running](auaudiounit/isrunning.md)
- [isLoadedInProcess](auaudiounit/isloadedinprocess.md)

### Constants

- [AUEventSampleTime](1387633-aueventsampletime.md): Expresses time as a sample count.
- [AUAudioUnitBusType](auaudiounitbustype.md)
- [AUHostTransportStateFlags](auhosttransportstateflags.md)
- [AURenderEventType](aurendereventtype.md)
- [AURenderBlock](aurenderblock.md): A block to render the audio unit.
- [AUInputHandler](auinputhandler.md): A block to notify the host of an I/O unit that an input is available.

### Getting the Audio Unit Presets

- [kAUPresetNumberKey](kaupresetnumberkey.md)
- [kAUPresetCPULoadKey](kaupresetcpuloadkey.md)
- [kAUPresetDataKey](kaupresetdatakey.md)
- [kAUPresetElementNameKey](kaupresetelementnamekey.md)
- [kAUPresetExternalFileRefs](kaupresetexternalfilerefs.md)
- [kAUPresetMASDataKey](kaupresetmasdatakey.md)
- [kAUPresetManufacturerKey](kaupresetmanufacturerkey.md)
- [kAUPresetNameKey](kaupresetnamekey.md)
- [kAUPresetPartKey](kaupresetpartkey.md): If present, distinguishes a global preset that is set on the global scope from a part-based preset that is set on the part scope. The value of this key is defined by the audio unit it applies to.
- [kAUPresetRenderQualityKey](kaupresetrenderqualitykey.md)
- [kAUPresetSubtypeKey](kaupresetsubtypekey.md)
- [kAUPresetTypeKey](kaupresettypekey.md)
- [kAUPresetVSTDataKey](kaupresetvstdatakey.md): VST state from a VST “bank.”
- [kAUPresetVSTPresetKey](kaupresetvstpresetkey.md): VST state from a VST “preset.”
- [kAUPresetVersionKey](kaupresetversionkey.md)

### Instance properties

- [AudioUnitMIDIProtocol](auaudiounit/audiounitmidiprotocol.md)
- [hostMIDIProtocol](auaudiounit/hostmidiprotocol.md)
- [MIDIOutputEventListBlock](auaudiounit/midioutputeventlistblock.md)
- [migrateFromPlugin](auaudiounit/migratefromplugin.md)
- [scheduleMIDIEventListBlock](auaudiounit/schedulemidieventlistblock.md)

### Instance Methods

- [requestViewControllerWithCompletionHandler:](auaudiounit/requestviewcontroller%28completionhandler_%29.md): Requests an audio unit’s custom view controller.

### Instance Properties

- [intendedSpatialExperience](auaudiounit/intendedspatialexperience-1dvhd.md): The AUAudioUnit’s intended spatial experience.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AUAudioUnitV2Bridge](auaudiounitv2bridge.md)
- [AUHeadTrackingBinauralRenderer](auheadtrackingbinauralrenderer.md)

## See Also

### Audio Units

- [Creating an audio unit extension](../avfaudio/creating-an-audio-unit-extension.md): Build an extension by using an Xcode template.
- [Creating custom audio effects](../avfaudio/creating-custom-audio-effects.md): Add custom audio-effect processing to apps like Logic Pro X and GarageBand by creating Audio Unit (AU) plug-ins.
- [Incorporating Audio Effects and Instruments](incorporating-audio-effects-and-instruments.md): Add custom audio processing and MIDI instruments to your app by hosting Audio Unit (AU) plug-ins.
- [Debugging Out-of-Process Audio Units on Apple Silicon](debugging-out-of-process-audio-units-on-apple-silicon.md): Connect to out-of-process audio units using the Xcode debugger.
- [Rendering Spatial Audio from Bluetooth headphones](rendering-spatial-audio-from-bluetooth-headphones.md): Create a Spatial Audio extension that allows Bluetooth headphones to track the wearer’s head movements for spatial audio playback.
- [AUAudioUnitBus](auaudiounitbus.md): A class that defines an input or output connection point on an audio unit.
- [AUAudioUnitBusArray](auaudiounitbusarray.md): A class that defines a container for an audio unit’s input or output busses.
- [AUAudioUnitPreset](auaudiounitpreset.md): A class that describes an interface for custom parameter settings provided by the audio unit developer.
- [AUAudioUnitV2Bridge](auaudiounitv2bridge.md): A class that wraps a version 2 audio unit as version 3 audio unit.
- [AUHeadTrackingBinauralRenderer](auheadtrackingbinauralrenderer.md): A subclass of AUAudioUnit specifically for 3rd party spatial Audio Units.
- [AudioUnitExtensionCopyComponentList](audiounitextensioncopycomponentlist%28__%29.md): Returns the component registrations for a given audio unit extension.
- [AudioUnitExtensionSetComponentList](audiounitextensionsetcomponentlist%28____%29.md): Allows the implementor of an audio unit extension to dynamically modify the list of component registrations for the extension.
- [AUAudioUnitFactory](auaudiounitfactory.md): An object that creates a version 3 audio unit.
