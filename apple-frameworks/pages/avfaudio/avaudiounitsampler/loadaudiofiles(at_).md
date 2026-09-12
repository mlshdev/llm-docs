> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitsampler/loadaudiofiles(at:)](https://developer.apple.com/documentation/avfaudio/avaudiounitsampler/loadaudiofiles(at:))

# loadAudioFiles(at:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Configures the sampler by loading the specified audio files.

## Declaration

```swift
func loadAudioFiles(at audioFiles: [URL]) throws
```

## Parameters

- `audioFiles`: An array of audio file URLs to load.

<a id="Discussion"></a>

## Discussion

The framework loads the audio files into a new instrument with each audio file in its own sampler zone. The framework uses any information in the audio file for its placement in the instrument. For example, the root key and key range.

## See Also

### Configuring the Sampler Audio Unit

- [loadInstrument(at:)](loadinstrument%28at_%29.md): Configures the sampler with the specified instrument file.
- [loadSoundBankInstrument(at:program:bankMSB:bankLSB:)](loadsoundbankinstrument%28at_program_bankmsb_banklsb_%29.md): Loads a specific instrument from the specified soundbank.

# loadAudioFilesAtURLs:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Configures the sampler by loading the specified audio files.

## Declaration

```objectivec
- (BOOL) loadAudioFilesAtURLs:(NSArray<NSURL *> *) audioFiles error:(NSError **) outError;
```

## Parameters

- `audioFiles`: An array of audio file URLs to load.
- `outError`: On exit, if an error occurs, a description of the error.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the framework configures the sampler with the audio file(s); otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The framework loads the audio files into a new instrument with each audio file in its own sampler zone. The framework uses any information in the audio file for its placement in the instrument. For example, the root key and key range.

## See Also

### Configuring the Sampler Audio Unit

- [loadInstrumentAtURL:error:](loadinstrument%28at_%29.md): Configures the sampler with the specified instrument file.
- [loadSoundBankInstrumentAtURL:program:bankMSB:bankLSB:error:](loadsoundbankinstrument%28at_program_bankmsb_banklsb_%29.md): Loads a specific instrument from the specified soundbank.
