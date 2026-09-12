> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitsampler/loadsoundbankinstrument(at:program:bankmsb:banklsb:)](https://developer.apple.com/documentation/avfaudio/avaudiounitsampler/loadsoundbankinstrument(at:program:bankmsb:banklsb:))

# loadSoundBankInstrument(at:program:bankMSB:bankLSB:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Loads a specific instrument from the specified soundbank.

## Declaration

```swift
func loadSoundBankInstrument(at bankURL: URL, program: UInt8, bankMSB: UInt8, bankLSB: UInt8) throws
```

## Parameters

- `bankURL`: The URL for a soundbank file, either a DLS bank (`.dls`) or a SoundFont bank (`.sf2`).
- `program`: The program number for the instrument to load.
- `bankMSB`: The most significant bit for the bank number for the instrument to load. This is usually `0x79` for melodic instruments and `0x78` for percussion instruments.
- `bankLSB`: The least significant bit for the bank number for the instrument to load. This is often `0` and represents the bank variation.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This method reads from the file and allocates memory. Don’t call it on a real-time thread.

## See Also

### Configuring the Sampler Audio Unit

- [loadInstrument(at:)](loadinstrument%28at_%29.md): Configures the sampler with the specified instrument file.
- [loadAudioFiles(at:)](loadaudiofiles%28at_%29.md): Configures the sampler by loading the specified audio files.

# loadSoundBankInstrumentAtURL:program:bankMSB:bankLSB:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Loads a specific instrument from the specified soundbank.

## Declaration

```objectivec
- (BOOL) loadSoundBankInstrumentAtURL:(NSURL *) bankURL program:(uint8_t) program bankMSB:(uint8_t) bankMSB bankLSB:(uint8_t) bankLSB error:(NSError **) outError;
```

## Parameters

- `bankURL`: The URL for a soundbank file, either a DLS bank (`.dls`) or a SoundFont bank (`.sf2`).
- `program`: The program number for the instrument to load.
- `bankMSB`: The most significant bit for the bank number for the instrument to load. This is usually `0x79` for melodic instruments and `0x78` for percussion instruments.
- `bankLSB`: The least significant bit for the bank number for the instrument to load. This is often `0` and represents the bank variation.
- `outError`: On exit, if an error occurs, a description of the error.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This method reads from the file and allocates memory. Don’t call it on a real-time thread.

## See Also

### Configuring the Sampler Audio Unit

- [loadInstrumentAtURL:error:](loadinstrument%28at_%29.md): Configures the sampler with the specified instrument file.
- [loadAudioFilesAtURLs:error:](loadaudiofiles%28at_%29.md): Configures the sampler by loading the specified audio files.
