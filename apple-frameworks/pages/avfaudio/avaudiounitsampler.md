> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitsampler](https://developer.apple.com/documentation/avfaudio/avaudiounitsampler)

# AVAudioUnitSampler (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that you configure with one or more instrument samples, based on Apple’s Sampler audio unit.

## Declaration

```swift
class AVAudioUnitSampler
```

<a id="overview"></a>

## Overview

An `AVAudioUnitSampler` is an [AVAudioUnit](avaudiounit.md) for Apple’s Sampler audio unit.

You configure the sampler by loading instruments from different types of files. These include an `aupreset` file, DLS, or SF2 sound bank; an EXS24 instrument; a single audio file; or an array of audio files.

The output of a `AVAudioUnitSampler` is a single stereo bus.

## Topics

### Configuring the Sampler Audio Unit

- [loadInstrument(at:)](avaudiounitsampler/loadinstrument%28at_%29.md): Configures the sampler with the specified instrument file.
- [loadAudioFiles(at:)](avaudiounitsampler/loadaudiofiles%28at_%29.md): Configures the sampler by loading the specified audio files.
- [loadSoundBankInstrument(at:program:bankMSB:bankLSB:)](avaudiounitsampler/loadsoundbankinstrument%28at_program_bankmsb_banklsb_%29.md): Loads a specific instrument from the specified soundbank.

### Getting and Setting Sampler Values

- [globalTuning](avaudiounitsampler/globaltuning.md): An adjustment for the tuning of all the played notes.
- [overallGain](avaudiounitsampler/overallgain.md): An adjustment for the gain of all the played notes, in decibels.
- [stereoPan](avaudiounitsampler/stereopan.md): An adjustment for the stereo panning of all the played notes.
- [masterGain](avaudiounitsampler/mastergain.md): Deprecated. An adjustment for the gain of all the played notes, in decibels.

## Relationships

### Inherits From

- [AVAudioUnitMIDIInstrument](avaudiounitmidiinstrument.md)

### Conforms To

- [AVAudio3DMixing](avaudio3dmixing.md)
- [AVAudioMixing](avaudiomixing.md)
- [AVAudioStereoMixing](avaudiostereomixing.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### MIDI

- [AVAudioSequencer](avaudiosequencer.md): An object that plays audio from a collection of MIDI events the system organizes into music tracks.
- [AVMIDIEventListBlock](avmidieventlistblock.md)

# AVAudioUnitSampler (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that you configure with one or more instrument samples, based on Apple’s Sampler audio unit.

## Declaration

```objectivec
@interface AVAudioUnitSampler : AVAudioUnitMIDIInstrument
```

<a id="overview"></a>

## Overview

An `AVAudioUnitSampler` is an [AVAudioUnit](avaudiounit.md) for Apple’s Sampler audio unit.

You configure the sampler by loading instruments from different types of files. These include an `aupreset` file, DLS, or SF2 sound bank; an EXS24 instrument; a single audio file; or an array of audio files.

The output of a `AVAudioUnitSampler` is a single stereo bus.

## Topics

### Configuring the Sampler Audio Unit

- [loadInstrumentAtURL:error:](avaudiounitsampler/loadinstrument%28at_%29.md): Configures the sampler with the specified instrument file.
- [loadAudioFilesAtURLs:error:](avaudiounitsampler/loadaudiofiles%28at_%29.md): Configures the sampler by loading the specified audio files.
- [loadSoundBankInstrumentAtURL:program:bankMSB:bankLSB:error:](avaudiounitsampler/loadsoundbankinstrument%28at_program_bankmsb_banklsb_%29.md): Loads a specific instrument from the specified soundbank.

### Getting and Setting Sampler Values

- [globalTuning](avaudiounitsampler/globaltuning.md): An adjustment for the tuning of all the played notes.
- [overallGain](avaudiounitsampler/overallgain.md): An adjustment for the gain of all the played notes, in decibels.
- [stereoPan](avaudiounitsampler/stereopan.md): An adjustment for the stereo panning of all the played notes.
- [masterGain](avaudiounitsampler/mastergain.md): Deprecated. An adjustment for the gain of all the played notes, in decibels.

## Relationships

### Inherits From

- [AVAudioUnitMIDIInstrument](avaudiounitmidiinstrument.md)

## See Also

### MIDI

- [AVAudioSequencer](avaudiosequencer.md): An object that plays audio from a collection of MIDI events the system organizes into music tracks.
- [AVMIDIEventListBlock](avmidieventlistblock.md)
