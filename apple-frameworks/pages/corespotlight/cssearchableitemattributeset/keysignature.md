> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/keysignature](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/keysignature)

# keySignature (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The musical key of the song or audio composition that the file contains, such as C, Dm, or F#m.

## Declaration

```swift
var keySignature: String? { get set }
```

## See Also

### Describing music

- [album](album.md): The title for a collection of audio media.
- [artist](artist.md): The artist associated with the media.
- [audioChannelCount](audiochannelcount.md): The number of channels in the audio data that the file contains.
- [audioEncodingApplication](audioencodingapplication.md): The name of the application that encoded the data the audio file contains.
- [audioSampleRate](audiosamplerate.md): The sample rate of the audio data the file contains, as a float value representing Hz (audio frames per second), such as 44100.0 or 22254.54.
- [audioTrackNumber](audiotracknumber.md): The track number of a song or audio composition when part of an album.
- [composer](composer.md): The composer of the song or audio composition that the audio file contains.
- [lyricist](lyricist.md): The lyricist or text writer for the song or audio composition that the file contains.
- [musicalGenre](musicalgenre.md): The musical genre of the song or audio composition that the file contains, such as jazz, pop, rock, or classical.
- [recordingDate](recordingdate.md): The recording date of the song or composition.
- [tempo](tempo.md): The tempo of the music that the audio file contains, in beats per minute.
- [timeSignature](timesignature.md): The time signature of the musical composition that the audio or MIDI file contains, in a string, such as “4/4” or “7/8”.
- [generalMIDISequence](generalmidisequence.md): A value that indicates whether the MIDI sequence the file contains is set up for use with a general MIDI device.
- [musicalInstrumentCategory](musicalinstrumentcategory.md): The category of the instrument associated with the audio file.
- [musicalInstrumentName](musicalinstrumentname.md): The name of an instrument within the context of an instrument category.

# keySignature (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The musical key of the song or audio composition that the file contains, such as C, Dm, or F#m.

## Declaration

```objectivec
@property (copy, nullable) NSString * keySignature;
```

## See Also

### Describing music

- [album](album.md): The title for a collection of audio media.
- [artist](artist.md): The artist associated with the media.
- [audioChannelCount](audiochannelcount.md): The number of channels in the audio data that the file contains.
- [audioEncodingApplication](audioencodingapplication.md): The name of the application that encoded the data the audio file contains.
- [audioSampleRate](audiosamplerate.md): The sample rate of the audio data the file contains, as a float value representing Hz (audio frames per second), such as 44100.0 or 22254.54.
- [audioTrackNumber](audiotracknumber.md): The track number of a song or audio composition when part of an album.
- [composer](composer.md): The composer of the song or audio composition that the audio file contains.
- [lyricist](lyricist.md): The lyricist or text writer for the song or audio composition that the file contains.
- [musicalGenre](musicalgenre.md): The musical genre of the song or audio composition that the file contains, such as jazz, pop, rock, or classical.
- [recordingDate](recordingdate.md): The recording date of the song or composition.
- [tempo](tempo.md): The tempo of the music that the audio file contains, in beats per minute.
- [timeSignature](timesignature.md): The time signature of the musical composition that the audio or MIDI file contains, in a string, such as “4/4” or “7/8”.
- [generalMIDISequence](generalmidisequence.md): A value that indicates whether the MIDI sequence the file contains is set up for use with a general MIDI device.
- [musicalInstrumentCategory](musicalinstrumentcategory.md): The category of the instrument associated with the audio file.
- [musicalInstrumentName](musicalinstrumentname.md): The name of an instrument within the context of an instrument category.
