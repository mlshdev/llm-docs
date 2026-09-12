> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitfactory](https://developer.apple.com/documentation/audiotoolbox/auaudiounitfactory)

# AUAudioUnitFactory (Swift)

**Framework:** Audio Toolbox  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An object that creates a version 3 audio unit.

## Declaration

```swift
protocol AUAudioUnitFactory : NSExtensionRequestHandling
```

## Mentioned In

- [Rendering Spatial Audio from Bluetooth headphones](rendering-spatial-audio-from-bluetooth-headphones.md)

<a id="overview"></a>

## Overview

In most cases, if your audio unit specifies parameters to configure its behavior, it should provide a custom user interface to control those parameters. You create this user interface by subclassing the [AUViewController](../coreaudiokit/auviewcontroller.md) class and implementing this protocol on your subclass.

If your audio unit doesn’t provide a custom user interface, subclass the [NSObject](../objectivec/nsobject-swift.class.md) class instead. In this case, the hosting app must create a generic user interface for your audio unit.

## Topics

### Required Methods

- [createAudioUnit(with:)](auaudiounitfactory/createaudiounit%28with_%29.md): Creates an instance of an extension’s audio unit.

## Relationships

### Inherits From

- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Audio Units

- [Creating an audio unit extension](../avfaudio/creating-an-audio-unit-extension.md): Build an extension by using an Xcode template.
- [Creating custom audio effects](../avfaudio/creating-custom-audio-effects.md): Add custom audio-effect processing to apps like Logic Pro X and GarageBand by creating Audio Unit (AU) plug-ins.
- [Incorporating Audio Effects and Instruments](incorporating-audio-effects-and-instruments.md): Add custom audio processing and MIDI instruments to your app by hosting Audio Unit (AU) plug-ins.
- [Debugging Out-of-Process Audio Units on Apple Silicon](debugging-out-of-process-audio-units-on-apple-silicon.md): Connect to out-of-process audio units using the Xcode debugger.
- [Rendering Spatial Audio from Bluetooth headphones](rendering-spatial-audio-from-bluetooth-headphones.md): Create a Spatial Audio extension that allows Bluetooth headphones to track the wearer’s head movements for spatial audio playback.
- [AUAudioUnit](auaudiounit.md): A class that defines a host’s interface to an audio unit.
- [AUAudioUnitBus](auaudiounitbus.md): A class that defines an input or output connection point on an audio unit.
- [AUAudioUnitBusArray](auaudiounitbusarray.md): A class that defines a container for an audio unit’s input or output busses.
- [AUAudioUnitPreset](auaudiounitpreset.md): A class that describes an interface for custom parameter settings provided by the audio unit developer.
- [AUAudioUnitV2Bridge](auaudiounitv2bridge.md): A class that wraps a version 2 audio unit as version 3 audio unit.
- [AUHeadTrackingBinauralRenderer](auheadtrackingbinauralrenderer.md): A subclass of AUAudioUnit specifically for 3rd party spatial Audio Units.
- [AudioUnitExtensionCopyComponentList(\_:)](audiounitextensioncopycomponentlist%28__%29.md): Returns the component registrations for a given audio unit extension.
- [AudioUnitExtensionSetComponentList(\_:\_:)](audiounitextensionsetcomponentlist%28____%29.md): Allows the implementor of an audio unit extension to dynamically modify the list of component registrations for the extension.

# AUAudioUnitFactory (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An object that creates a version 3 audio unit.

## Declaration

```objectivec
@protocol AUAudioUnitFactory <NSExtensionRequestHandling>
```

## Mentioned In

- [Rendering Spatial Audio from Bluetooth headphones](rendering-spatial-audio-from-bluetooth-headphones.md)

<a id="overview"></a>

## Overview

In most cases, if your audio unit specifies parameters to configure its behavior, it should provide a custom user interface to control those parameters. You create this user interface by subclassing the [AUViewController](../coreaudiokit/auviewcontroller.md) class and implementing this protocol on your subclass.

If your audio unit doesn’t provide a custom user interface, subclass the [NSObject](../objectivec/nsobject-swift.class.md) class instead. In this case, the hosting app must create a generic user interface for your audio unit.

## Topics

### Required Methods

- [createAudioUnitWithComponentDescription:error:](auaudiounitfactory/createaudiounit%28with_%29.md): Creates an instance of an extension’s audio unit.

## Relationships

### Inherits From

- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)

## See Also

### Audio Units

- [Creating an audio unit extension](../avfaudio/creating-an-audio-unit-extension.md): Build an extension by using an Xcode template.
- [Creating custom audio effects](../avfaudio/creating-custom-audio-effects.md): Add custom audio-effect processing to apps like Logic Pro X and GarageBand by creating Audio Unit (AU) plug-ins.
- [Incorporating Audio Effects and Instruments](incorporating-audio-effects-and-instruments.md): Add custom audio processing and MIDI instruments to your app by hosting Audio Unit (AU) plug-ins.
- [Debugging Out-of-Process Audio Units on Apple Silicon](debugging-out-of-process-audio-units-on-apple-silicon.md): Connect to out-of-process audio units using the Xcode debugger.
- [Rendering Spatial Audio from Bluetooth headphones](rendering-spatial-audio-from-bluetooth-headphones.md): Create a Spatial Audio extension that allows Bluetooth headphones to track the wearer’s head movements for spatial audio playback.
- [AUAudioUnit](auaudiounit.md): A class that defines a host’s interface to an audio unit.
- [AUAudioUnitBus](auaudiounitbus.md): A class that defines an input or output connection point on an audio unit.
- [AUAudioUnitBusArray](auaudiounitbusarray.md): A class that defines a container for an audio unit’s input or output busses.
- [AUAudioUnitPreset](auaudiounitpreset.md): A class that describes an interface for custom parameter settings provided by the audio unit developer.
- [AUAudioUnitV2Bridge](auaudiounitv2bridge.md): A class that wraps a version 2 audio unit as version 3 audio unit.
- [AUHeadTrackingBinauralRenderer](auheadtrackingbinauralrenderer.md): A subclass of AUAudioUnit specifically for 3rd party spatial Audio Units.
- [AudioUnitExtensionCopyComponentList](audiounitextensioncopycomponentlist%28__%29.md): Returns the component registrations for a given audio unit extension.
- [AudioUnitExtensionSetComponentList](audiounitextensionsetcomponentlist%28____%29.md): Allows the implementor of an audio unit extension to dynamically modify the list of component registrations for the extension.
