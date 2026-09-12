> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitsampler/loadinstrument(at:)](https://developer.apple.com/documentation/avfaudio/avaudiounitsampler/loadinstrument(at:))

# loadInstrument(at:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Configures the sampler with the specified instrument file.

## Declaration

```swift
func loadInstrument(at instrumentURL: URL) throws
```

## Parameters

- `instrumentURL`: The URL of the file that contains the instrument.

<a id="Discussion"></a>

## Discussion

The instrument can be one of the following types: Logic or GarageBand `EXS24`, the sampler’s native `aupreset` file, or an audio file, such as `caf`, `aiff`, `wav`, or `mp3`.

For a single audio file, the framework loads it into a new default instrument and uses any information in the audio file, such as the root key and key range, for its placement in the instrument.

## See Also

### Configuring the Sampler Audio Unit

- [loadAudioFiles(at:)](loadaudiofiles%28at_%29.md): Configures the sampler by loading the specified audio files.
- [loadSoundBankInstrument(at:program:bankMSB:bankLSB:)](loadsoundbankinstrument%28at_program_bankmsb_banklsb_%29.md): Loads a specific instrument from the specified soundbank.

# loadInstrumentAtURL:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Configures the sampler with the specified instrument file.

## Declaration

```objectivec
- (BOOL) loadInstrumentAtURL:(NSURL *) instrumentURL error:(NSError **) outError;
```

## Parameters

- `instrumentURL`: The URL of the file that contains the instrument.
- `outError`: On exit, if an error occurs, a description of the error.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the framework configures the sampler with the instrument file; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The instrument can be one of the following types: Logic or GarageBand `EXS24`, the sampler’s native `aupreset` file, or an audio file, such as `caf`, `aiff`, `wav`, or `mp3`.

For a single audio file, the framework loads it into a new default instrument and uses any information in the audio file, such as the root key and key range, for its placement in the instrument.

## See Also

### Configuring the Sampler Audio Unit

- [loadAudioFilesAtURLs:error:](loadaudiofiles%28at_%29.md): Configures the sampler by loading the specified audio files.
- [loadSoundBankInstrumentAtURL:program:bankMSB:bankLSB:error:](loadsoundbankinstrument%28at_program_bankmsb_banklsb_%29.md): Loads a specific instrument from the specified soundbank.
