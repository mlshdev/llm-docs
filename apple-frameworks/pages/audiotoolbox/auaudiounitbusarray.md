> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbusarray](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbusarray)

# AUAudioUnitBusArray (Swift)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A class that defines a container for an audio unit’s input or output busses.

## Declaration

```swift
class AUAudioUnitBusArray
```

<a id="overview"></a>

## Overview

Hosts can observe a bus property across all busses by using KVO on a bus array object, without having to observe it on each individual bus. Some audio units (e.g. mixers) support variable numbers of busses, via subclassing. When the bus count changes, a KVO notification is sent on the audio unit’s [inputBusses](auaudiounit/inputbusses.md) or [outputBusses](auaudiounit/outputbusses.md) property, as appropriate.

This version 3 class is bridged to the version 2 `kAudioUnitProperty_ElementCount` API.

> **Note**

>  You could add listeners to individual busses, but that means you have to observe bus count changes and add or remove listeners in response. Furthermore, the [addObserver(\_:toObjectsAt:forKeyPath:options:context:)](../foundation/nsarray/addobserver%28__toobjectsat_forkeypath_options_context_%29.md) method is problematic; it does not let the individual objects override the observation request, and so a bus which is proxying a bus in an extension process does not get the message.

## Topics

### Initialization

- [init(audioUnit:busType:)](auaudiounitbusarray/init%28audiounit_bustype_%29.md): Initializes an empty bus array.
- [init(audioUnit:busType:busses:)](auaudiounitbusarray/init%28audiounit_bustype_busses_%29.md): Initializes a bus array by making a copy of the supplied busses.

### Bus Array Methods and Properties

- [count](auaudiounitbusarray/count.md): The number of busses in the array.
- [isCountChangeable](auaudiounitbusarray/iscountchangeable.md): Determines whether the array can have a variable number of busses.
- [ownerAudioUnit](auaudiounitbusarray/owneraudiounit.md): The audio unit that owns the bus array.
- [busType](auaudiounitbusarray/bustype.md): Determines whether the bus array is for input or output.
- [subscript(\_:)](auaudiounitbusarray/subscript%28__%29.md): Returns the bus at the specified index.
- [setBusCount(\_:)](auaudiounitbusarray/setbuscount%28__%29.md): Changes the number of busses in the array.
- [addObserver(toAllBusses:forKeyPath:options:context:)](auaudiounitbusarray/addobserver%28toallbusses_forkeypath_options_context_%29.md): Adds a KVO observer for a given property on all busses in the array.
- [removeObserver(fromAllBusses:forKeyPath:context:)](auaudiounitbusarray/removeobserver%28fromallbusses_forkeypath_context_%29.md): Removes a KVO observer for a given property on all busses in the array.

### Audio Unit Implementations

This method is only of interest to audio unit subclasses.

- [replaceBusses(\_:)](auaudiounitbusarray/replacebusses%28__%29.md): Replaces the current bus array with a copy of the supplied bus array.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
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
- [AUAudioUnitPreset](auaudiounitpreset.md): A class that describes an interface for custom parameter settings provided by the audio unit developer.
- [AUAudioUnitV2Bridge](auaudiounitv2bridge.md): A class that wraps a version 2 audio unit as version 3 audio unit.
- [AUHeadTrackingBinauralRenderer](auheadtrackingbinauralrenderer.md): A subclass of AUAudioUnit specifically for 3rd party spatial Audio Units.
- [AudioUnitExtensionCopyComponentList(\_:)](audiounitextensioncopycomponentlist%28__%29.md): Returns the component registrations for a given audio unit extension.
- [AudioUnitExtensionSetComponentList(\_:\_:)](audiounitextensionsetcomponentlist%28____%29.md): Allows the implementor of an audio unit extension to dynamically modify the list of component registrations for the extension.
- [AUAudioUnitFactory](auaudiounitfactory.md): An object that creates a version 3 audio unit.

# AUAudioUnitBusArray (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A class that defines a container for an audio unit’s input or output busses.

## Declaration

```objectivec
@interface AUAudioUnitBusArray : NSObject
```

<a id="overview"></a>

## Overview

Hosts can observe a bus property across all busses by using KVO on a bus array object, without having to observe it on each individual bus. Some audio units (e.g. mixers) support variable numbers of busses, via subclassing. When the bus count changes, a KVO notification is sent on the audio unit’s [inputBusses](auaudiounit/inputbusses.md) or [outputBusses](auaudiounit/outputbusses.md) property, as appropriate.

This version 3 class is bridged to the version 2 `kAudioUnitProperty_ElementCount` API.

> **Note**

>  You could add listeners to individual busses, but that means you have to observe bus count changes and add or remove listeners in response. Furthermore, the [addObserver:toObjectsAtIndexes:forKeyPath:options:context:](../foundation/nsarray/addobserver%28__toobjectsat_forkeypath_options_context_%29.md) method is problematic; it does not let the individual objects override the observation request, and so a bus which is proxying a bus in an extension process does not get the message.

## Topics

### Initialization

- [initWithAudioUnit:busType:](auaudiounitbusarray/init%28audiounit_bustype_%29.md): Initializes an empty bus array.
- [initWithAudioUnit:busType:busses:](auaudiounitbusarray/init%28audiounit_bustype_busses_%29.md): Initializes a bus array by making a copy of the supplied busses.

### Bus Array Methods and Properties

- [count](auaudiounitbusarray/count.md): The number of busses in the array.
- [countChangeable](auaudiounitbusarray/iscountchangeable.md): Determines whether the array can have a variable number of busses.
- [ownerAudioUnit](auaudiounitbusarray/owneraudiounit.md): The audio unit that owns the bus array.
- [busType](auaudiounitbusarray/bustype.md): Determines whether the bus array is for input or output.
- [objectAtIndexedSubscript:](auaudiounitbusarray/subscript%28__%29.md): Returns the bus at the specified index.
- [setBusCount:error:](auaudiounitbusarray/setbuscount%28__%29.md): Changes the number of busses in the array.
- [addObserverToAllBusses:forKeyPath:options:context:](auaudiounitbusarray/addobserver%28toallbusses_forkeypath_options_context_%29.md): Adds a KVO observer for a given property on all busses in the array.
- [removeObserverFromAllBusses:forKeyPath:context:](auaudiounitbusarray/removeobserver%28fromallbusses_forkeypath_context_%29.md): Removes a KVO observer for a given property on all busses in the array.

### Audio Unit Implementations

This method is only of interest to audio unit subclasses.

- [replaceBusses:](auaudiounitbusarray/replacebusses%28__%29.md): Replaces the current bus array with a copy of the supplied bus array.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSFastEnumeration](../foundation/nsfastenumeration.md)

## See Also

### Audio Units

- [Creating an audio unit extension](../avfaudio/creating-an-audio-unit-extension.md): Build an extension by using an Xcode template.
- [Creating custom audio effects](../avfaudio/creating-custom-audio-effects.md): Add custom audio-effect processing to apps like Logic Pro X and GarageBand by creating Audio Unit (AU) plug-ins.
- [Incorporating Audio Effects and Instruments](incorporating-audio-effects-and-instruments.md): Add custom audio processing and MIDI instruments to your app by hosting Audio Unit (AU) plug-ins.
- [Debugging Out-of-Process Audio Units on Apple Silicon](debugging-out-of-process-audio-units-on-apple-silicon.md): Connect to out-of-process audio units using the Xcode debugger.
- [Rendering Spatial Audio from Bluetooth headphones](rendering-spatial-audio-from-bluetooth-headphones.md): Create a Spatial Audio extension that allows Bluetooth headphones to track the wearer’s head movements for spatial audio playback.
- [AUAudioUnit](auaudiounit.md): A class that defines a host’s interface to an audio unit.
- [AUAudioUnitBus](auaudiounitbus.md): A class that defines an input or output connection point on an audio unit.
- [AUAudioUnitPreset](auaudiounitpreset.md): A class that describes an interface for custom parameter settings provided by the audio unit developer.
- [AUAudioUnitV2Bridge](auaudiounitv2bridge.md): A class that wraps a version 2 audio unit as version 3 audio unit.
- [AUHeadTrackingBinauralRenderer](auheadtrackingbinauralrenderer.md): A subclass of AUAudioUnit specifically for 3rd party spatial Audio Units.
- [AudioUnitExtensionCopyComponentList](audiounitextensioncopycomponentlist%28__%29.md): Returns the component registrations for a given audio unit extension.
- [AudioUnitExtensionSetComponentList](audiounitextensionsetcomponentlist%28____%29.md): Allows the implementor of an audio unit extension to dynamically modify the list of component registrations for the extension.
- [AUAudioUnitFactory](auaudiounitfactory.md): An object that creates a version 3 audio unit.
