> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auheadtrackingbinauralrenderer](https://developer.apple.com/documentation/audiotoolbox/auheadtrackingbinauralrenderer)

# AUHeadTrackingBinauralRenderer (Swift)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A subclass of AUAudioUnit specifically for 3rd party spatial Audio Units.

## Declaration

```swift
class AUHeadTrackingBinauralRenderer
```

## Mentioned In

- [Rendering Spatial Audio from Bluetooth headphones](rendering-spatial-audio-from-bluetooth-headphones.md)

<a id="overview"></a>

## Overview

This class adds spatial-audio-specific head tracking properties beyond the standard AUAudioUnit interface.

When the user selects matching Bluetooth headphones for the current audio route and the system has a 3rd Party Spatial Audio Extension installed that supports them, the system automatically loads this AUAudioUnit subclass into the audio signal chain while head tracking remains active on the host device.

Only the audio mix engine may use AUHeadTrackingBinauralRenderer Audio Units to provide on demand Bluetooth head tracking support. See the 3rd Party Spatial Audio Extension programming guide for more information.

## Topics

### Instance Properties

- [deviceUID](auheadtrackingbinauralrenderer/deviceuid.md): The Unique Identifier (UID) of the Bluetooth headphone device providing IMU sensor data for head tracking.
- [isDisabled](auheadtrackingbinauralrenderer/isdisabled.md): Indicates whether the host is bypassing the renderer due to poor performance.
- [isHeadTracking](auheadtrackingbinauralrenderer/isheadtracking.md): Indicates whether the host currently has enabled head tracking for this spatial Audio Unit.

## Relationships

### Inherits From

- [AUAudioUnit](auaudiounit.md)

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
- [AUAudioUnitBus](auaudiounitbus.md): A class that defines an input or output connection point on an audio unit.
- [AUAudioUnitBusArray](auaudiounitbusarray.md): A class that defines a container for an audio unit’s input or output busses.
- [AUAudioUnitPreset](auaudiounitpreset.md): A class that describes an interface for custom parameter settings provided by the audio unit developer.
- [AUAudioUnitV2Bridge](auaudiounitv2bridge.md): A class that wraps a version 2 audio unit as version 3 audio unit.
- [AudioUnitExtensionCopyComponentList(\_:)](audiounitextensioncopycomponentlist%28__%29.md): Returns the component registrations for a given audio unit extension.
- [AudioUnitExtensionSetComponentList(\_:\_:)](audiounitextensionsetcomponentlist%28____%29.md): Allows the implementor of an audio unit extension to dynamically modify the list of component registrations for the extension.
- [AUAudioUnitFactory](auaudiounitfactory.md): An object that creates a version 3 audio unit.

# AUHeadTrackingBinauralRenderer (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A subclass of AUAudioUnit specifically for 3rd party spatial Audio Units.

## Declaration

```objectivec
@interface AUHeadTrackingBinauralRenderer : AUAudioUnit
```

## Mentioned In

- [Rendering Spatial Audio from Bluetooth headphones](rendering-spatial-audio-from-bluetooth-headphones.md)

<a id="overview"></a>

## Overview

This class adds spatial-audio-specific head tracking properties beyond the standard AUAudioUnit interface.

When the user selects matching Bluetooth headphones for the current audio route and the system has a 3rd Party Spatial Audio Extension installed that supports them, the system automatically loads this AUAudioUnit subclass into the audio signal chain while head tracking remains active on the host device.

Only the audio mix engine may use AUHeadTrackingBinauralRenderer Audio Units to provide on demand Bluetooth head tracking support. See the 3rd Party Spatial Audio Extension programming guide for more information.

## Topics

### Instance Properties

- [deviceUID](auheadtrackingbinauralrenderer/deviceuid.md): The Unique Identifier (UID) of the Bluetooth headphone device providing IMU sensor data for head tracking.
- [disabled](auheadtrackingbinauralrenderer/isdisabled.md): Indicates whether the host is bypassing the renderer due to poor performance.
- [headTracking](auheadtrackingbinauralrenderer/isheadtracking.md): Indicates whether the host currently has enabled head tracking for this spatial Audio Unit.

## Relationships

### Inherits From

- [AUAudioUnit](auaudiounit.md)

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
- [AudioUnitExtensionCopyComponentList](audiounitextensioncopycomponentlist%28__%29.md): Returns the component registrations for a given audio unit extension.
- [AudioUnitExtensionSetComponentList](audiounitextensionsetcomponentlist%28____%29.md): Allows the implementor of an audio unit extension to dynamically modify the list of component registrations for the extension.
- [AUAudioUnitFactory](auaudiounitfactory.md): An object that creates a version 3 audio unit.
