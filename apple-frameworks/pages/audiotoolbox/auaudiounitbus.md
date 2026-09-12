> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbus](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbus)

# AUAudioUnitBus (Swift)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A class that defines an input or output connection point on an audio unit.

## Declaration

```swift
class AUAudioUnitBus
```

## Topics

### Bus Methods and Properties

- [setFormat(\_:)](auaudiounitbus/setformat%28__%29.md): Sets the bus’s audio format.
- [format](auaudiounitbus/format.md): The audio format and channel layout of audio being transferred on the bus.
- [isEnabled](auaudiounitbus/isenabled.md): Determines whether the bus is active.
- [name](auaudiounitbus/name.md): A name for the bus.
- [index](auaudiounitbus/index.md): The index of this bus in its containing array.
- [busType](auaudiounitbus/bustype.md): The bus type.
- [ownerAudioUnit](auaudiounitbus/owneraudiounit.md): The audio unit that owns the bus.
- [supportedChannelLayoutTags](auaudiounitbus/supportedchannellayouttags.md): An array of audio channel layout tags.
- [contextPresentationLatency](auaudiounitbus/contextpresentationlatency.md): Information about latency in the audio unit’s processing context.
- [shouldAllocateBuffer](auaudiounitbus/shouldallocatebuffer.md)

### Audio Unit Implementations

These methods and properties are only of interest to audio unit subclasses.

- [init(format:)](auaudiounitbus/init%28format_%29.md): Initializes a bus object with a specific format.
- [supportedChannelCounts](auaudiounitbus/supportedchannelcounts.md): An array of numbers indicating the supported number of channels for this bus.
- [maximumChannelCount](auaudiounitbus/maximumchannelcount.md): The maximum number of channels supported for this bus.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [AUAudioUnit](auaudiounit.md): A class that defines a host’s interface to an audio unit.
- [AUAudioUnitBusArray](auaudiounitbusarray.md): A class that defines a container for an audio unit’s input or output busses.
- [AUAudioUnitPreset](auaudiounitpreset.md): A class that describes an interface for custom parameter settings provided by the audio unit developer.
- [AUAudioUnitV2Bridge](auaudiounitv2bridge.md): A class that wraps a version 2 audio unit as version 3 audio unit.
- [AUHeadTrackingBinauralRenderer](auheadtrackingbinauralrenderer.md): A subclass of AUAudioUnit specifically for 3rd party spatial Audio Units.
- [AudioUnitExtensionCopyComponentList(\_:)](audiounitextensioncopycomponentlist%28__%29.md): Returns the component registrations for a given audio unit extension.
- [AudioUnitExtensionSetComponentList(\_:\_:)](audiounitextensionsetcomponentlist%28____%29.md): Allows the implementor of an audio unit extension to dynamically modify the list of component registrations for the extension.
- [AUAudioUnitFactory](auaudiounitfactory.md): An object that creates a version 3 audio unit.

# AUAudioUnitBus (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A class that defines an input or output connection point on an audio unit.

## Declaration

```objectivec
@interface AUAudioUnitBus : NSObject
```

## Topics

### Bus Methods and Properties

- [setFormat:error:](auaudiounitbus/setformat%28__%29.md): Sets the bus’s audio format.
- [format](auaudiounitbus/format.md): The audio format and channel layout of audio being transferred on the bus.
- [enabled](auaudiounitbus/isenabled.md): Determines whether the bus is active.
- [name](auaudiounitbus/name.md): A name for the bus.
- [index](auaudiounitbus/index.md): The index of this bus in its containing array.
- [busType](auaudiounitbus/bustype.md): The bus type.
- [ownerAudioUnit](auaudiounitbus/owneraudiounit.md): The audio unit that owns the bus.
- [supportedChannelLayoutTags](auaudiounitbus/supportedchannellayouttags.md): An array of audio channel layout tags.
- [contextPresentationLatency](auaudiounitbus/contextpresentationlatency.md): Information about latency in the audio unit’s processing context.
- [shouldAllocateBuffer](auaudiounitbus/shouldallocatebuffer.md)

### Audio Unit Implementations

These methods and properties are only of interest to audio unit subclasses.

- [initWithFormat:error:](auaudiounitbus/init%28format_%29.md): Initializes a bus object with a specific format.
- [supportedChannelCounts](auaudiounitbus/supportedchannelcounts.md): An array of numbers indicating the supported number of channels for this bus.
- [maximumChannelCount](auaudiounitbus/maximumchannelcount.md): The maximum number of channels supported for this bus.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Audio Units

- [Creating an audio unit extension](../avfaudio/creating-an-audio-unit-extension.md): Build an extension by using an Xcode template.
- [Creating custom audio effects](../avfaudio/creating-custom-audio-effects.md): Add custom audio-effect processing to apps like Logic Pro X and GarageBand by creating Audio Unit (AU) plug-ins.
- [Incorporating Audio Effects and Instruments](incorporating-audio-effects-and-instruments.md): Add custom audio processing and MIDI instruments to your app by hosting Audio Unit (AU) plug-ins.
- [Debugging Out-of-Process Audio Units on Apple Silicon](debugging-out-of-process-audio-units-on-apple-silicon.md): Connect to out-of-process audio units using the Xcode debugger.
- [Rendering Spatial Audio from Bluetooth headphones](rendering-spatial-audio-from-bluetooth-headphones.md): Create a Spatial Audio extension that allows Bluetooth headphones to track the wearer’s head movements for spatial audio playback.
- [AUAudioUnit](auaudiounit.md): A class that defines a host’s interface to an audio unit.
- [AUAudioUnitBusArray](auaudiounitbusarray.md): A class that defines a container for an audio unit’s input or output busses.
- [AUAudioUnitPreset](auaudiounitpreset.md): A class that describes an interface for custom parameter settings provided by the audio unit developer.
- [AUAudioUnitV2Bridge](auaudiounitv2bridge.md): A class that wraps a version 2 audio unit as version 3 audio unit.
- [AUHeadTrackingBinauralRenderer](auheadtrackingbinauralrenderer.md): A subclass of AUAudioUnit specifically for 3rd party spatial Audio Units.
- [AudioUnitExtensionCopyComponentList](audiounitextensioncopycomponentlist%28__%29.md): Returns the component registrations for a given audio unit extension.
- [AudioUnitExtensionSetComponentList](audiounitextensionsetcomponentlist%28____%29.md): Allows the implementor of an audio unit extension to dynamically modify the list of component registrations for the extension.
- [AUAudioUnitFactory](auaudiounitfactory.md): An object that creates a version 3 audio unit.
