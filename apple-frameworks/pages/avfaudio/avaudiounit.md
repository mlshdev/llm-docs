> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounit](https://developer.apple.com/documentation/avfaudio/avaudiounit)

# AVAudioUnit (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A subclass of the audio node class that, processes audio either in real time or nonreal time, depending on the type of the audio unit.

## Declaration

```swift
class AVAudioUnit
```

## Topics

### Loading an audio preset file

- [loadPreset(at:)](avaudiounit/loadpreset%28at_%29.md): Loads an audio unit using a specified preset.

### Creating an audio unit component

- [instantiate(with:options:completionHandler:)](avaudiounit/instantiate%28with_options_completionhandler_%29.md): Creates an instance of an audio unit component asynchronously and wraps it in an audio unit class.

### Getting audio unit values

- [audioComponentDescription](avaudiounit/audiocomponentdescription.md): The audio component description that represents the underlying Core Audio audio unit.
- [manufacturerName](avaudiounit/manufacturername.md): The name of the manufacturer of the audio unit.
- [name](avaudiounit/name.md): The name of the audio unit.
- [version](avaudiounit/version.md): The version number of the audio unit.

### Instance Properties

- [audioUnit](avaudiounit/audiounit-5vuo0.md): Deprecated.
- [audioUnit](avaudiounit/audiounit-7dsac.md): Deprecated.

### Instance Methods

- [withAudioUnit(\_:)](avaudiounit/withaudiounit%28__%29-66uo7.md): Provides scoped access to the audio unit’s AudioUnit
- [withAudioUnit(\_:)](avaudiounit/withaudiounit%28__%29-6c2ze.md): Provides scoped access to the audio unit’s AudioUnit

## Relationships

### Inherits From

- [AVAudioNode](avaudionode.md)

### Inherited By

- [AVAudioUnitEffect](avaudiouniteffect.md)
- [AVAudioUnitGenerator](avaudiounitgenerator.md)
- [AVAudioUnitMIDIInstrument](avaudiounitmidiinstrument.md)
- [AVAudioUnitTimeEffect](avaudiounittimeeffect.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Creating an audio unit extension](creating-an-audio-unit-extension.md): Build an extension by using an Xcode template.
- [Using voice processing](using-voice-processing.md): Add voice-processing capabilities to your app by using audio engine.

# AVAudioUnit (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A subclass of the audio node class that, processes audio either in real time or nonreal time, depending on the type of the audio unit.

## Declaration

```objectivec
@interface AVAudioUnit : AVAudioNode
```

## Topics

### Loading an audio preset file

- [loadAudioUnitPresetAtURL:error:](avaudiounit/loadpreset%28at_%29.md): Loads an audio unit using a specified preset.

### Creating an audio unit component

- [instantiateWithComponentDescription:options:completionHandler:](avaudiounit/instantiate%28with_options_completionhandler_%29.md): Creates an instance of an audio unit component asynchronously and wraps it in an audio unit class.

### Getting audio unit values

- [audioComponentDescription](avaudiounit/audiocomponentdescription.md): The audio component description that represents the underlying Core Audio audio unit.
- [manufacturerName](avaudiounit/manufacturername.md): The name of the manufacturer of the audio unit.
- [name](avaudiounit/name.md): The name of the audio unit.
- [version](avaudiounit/version.md): The version number of the audio unit.

### Instance Properties

- [AUAudioUnit](avaudiounit/auaudiounit.md)
- [audioUnit](avaudiounit/audiounit-4wpas.md)

## Relationships

### Inherits From

- [AVAudioNode](avaudionode.md)

### Inherited By

- [AVAudioUnitEffect](avaudiouniteffect.md)
- [AVAudioUnitGenerator](avaudiounitgenerator.md)
- [AVAudioUnitMIDIInstrument](avaudiounitmidiinstrument.md)
- [AVAudioUnitTimeEffect](avaudiounittimeeffect.md)

## See Also

### Essentials

- [Creating an audio unit extension](creating-an-audio-unit-extension.md): Build an extension by using an Xcode template.
- [Using voice processing](using-voice-processing.md): Add voice-processing capabilities to your app by using audio engine.
