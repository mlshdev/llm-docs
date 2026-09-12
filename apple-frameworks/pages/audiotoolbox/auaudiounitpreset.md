> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitpreset](https://developer.apple.com/documentation/audiotoolbox/auaudiounitpreset)

# AUAudioUnitPreset (Swift)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A class that describes an interface for custom parameter settings provided by the audio unit developer.

## Declaration

```swift
class AUAudioUnitPreset
```

<a id="overview"></a>

## Overview

These presets often produce a useful sound or starting point.

For more details on working with Audio Unit presets, see [Audio Units - How to correctly save and restore Audio Unit presets.](https://developer.apple.com/library/archive/technotes/tn2157/_index.html#//apple_ref/doc/uid/DTS40011953) Note that the version 3 [fullState](auaudiounit/fullstate.md) property is bridged to the version 2 `kAudioUnitProperty_ClassInfo` API. Similarly, the version 3 [fullStateForDocument](auaudiounit/fullstatefordocument.md) property is bridged to the version 2 `kAudioUnitProperty_ClassInfoFromDocument` API.

## Topics

### Preset Properties

- [name](auaudiounitpreset/name.md): The preset’s name.
- [number](auaudiounitpreset/number.md): The preset’s unique numeric identifier.

### Initializers

- [init(coder:)](auaudiounitpreset/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

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
- [AUAudioUnitV2Bridge](auaudiounitv2bridge.md): A class that wraps a version 2 audio unit as version 3 audio unit.
- [AUHeadTrackingBinauralRenderer](auheadtrackingbinauralrenderer.md): A subclass of AUAudioUnit specifically for 3rd party spatial Audio Units.
- [AudioUnitExtensionCopyComponentList(\_:)](audiounitextensioncopycomponentlist%28__%29.md): Returns the component registrations for a given audio unit extension.
- [AudioUnitExtensionSetComponentList(\_:\_:)](audiounitextensionsetcomponentlist%28____%29.md): Allows the implementor of an audio unit extension to dynamically modify the list of component registrations for the extension.
- [AUAudioUnitFactory](auaudiounitfactory.md): An object that creates a version 3 audio unit.

# AUAudioUnitPreset (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A class that describes an interface for custom parameter settings provided by the audio unit developer.

## Declaration

```objectivec
@interface AUAudioUnitPreset : NSObject
```

<a id="overview"></a>

## Overview

These presets often produce a useful sound or starting point.

For more details on working with Audio Unit presets, see [Audio Units - How to correctly save and restore Audio Unit presets.](https://developer.apple.com/library/archive/technotes/tn2157/_index.html#//apple_ref/doc/uid/DTS40011953) Note that the version 3 [fullState](auaudiounit/fullstate.md) property is bridged to the version 2 `kAudioUnitProperty_ClassInfo` API. Similarly, the version 3 [fullStateForDocument](auaudiounit/fullstatefordocument.md) property is bridged to the version 2 `kAudioUnitProperty_ClassInfoFromDocument` API.

## Topics

### Preset Properties

- [name](auaudiounitpreset/name.md): The preset’s name.
- [number](auaudiounitpreset/number.md): The preset’s unique numeric identifier.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

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
- [AUAudioUnitV2Bridge](auaudiounitv2bridge.md): A class that wraps a version 2 audio unit as version 3 audio unit.
- [AUHeadTrackingBinauralRenderer](auheadtrackingbinauralrenderer.md): A subclass of AUAudioUnit specifically for 3rd party spatial Audio Units.
- [AudioUnitExtensionCopyComponentList](audiounitextensioncopycomponentlist%28__%29.md): Returns the component registrations for a given audio unit extension.
- [AudioUnitExtensionSetComponentList](audiounitextensionsetcomponentlist%28____%29.md): Allows the implementor of an audio unit extension to dynamically modify the list of component registrations for the extension.
- [AUAudioUnitFactory](auaudiounitfactory.md): An object that creates a version 3 audio unit.
