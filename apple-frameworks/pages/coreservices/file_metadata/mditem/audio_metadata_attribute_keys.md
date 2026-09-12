> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/file_metadata/mditem/audio_metadata_attribute_keys](https://developer.apple.com/documentation/coreservices/file_metadata/mditem/audio_metadata_attribute_keys)

# Audio Metadata Attribute Keys

**Interface languages:** Swift, Objective-C

**Framework:** Core Services  
**Kind:** API Collection

Metadata attribute keys that describe an audio file.

## Topics

### Constants

- [kMDItemAppleLoopDescriptors](../../kmditemappleloopdescriptors.md): Specifies multiple pieces of descriptive information about a loop. A CFArray of CFStrings.
- [kMDItemAppleLoopsKeyFilterType](../../kmditemappleloopskeyfiltertype.md): Specifies key filtering information about a loop. Loops are matched against projects that often in a major or minor key. A CFString.
- [kMDItemAppleLoopsLoopMode](../../kmditemappleloopsloopmode.md): Specifies how a file should be played. A CFString.
- [kMDItemAppleLoopsRootKey](../../kmditemappleloopsrootkey.md): Specifies the loop's original key. The key is the root note or tonic for the loop, and does not include the scale type. A CFString.
- [kMDItemAudioChannelCount](../../kmditemaudiochannelcount.md): Number of channels in the audio data contained in the file. A CFNumber.
- [kMDItemAudioEncodingApplication](../../kmditemaudioencodingapplication.md): The name of the application that encoded the data contained in the audio file. A CFString.
- [kMDItemAudioSampleRate](../../kmditemaudiosamplerate.md): Sample rate of the audio data contained in the file. The sample rate is a float value representing hz (audio_frames/second). For example: 44100.0, 22254.54. A CFNumber.
- [kMDItemAudioTrackNumber](../../kmditemaudiotracknumber.md): The track number of a song or composition when it is part of an album. A CFNumber (integer).
- [kMDItemComposer](../../kmditemcomposer.md): The composer of the music contained in the audio file. A CFString.
- [kMDItemIsGeneralMIDISequence](../../kmditemisgeneralmidisequence.md): Indicates whether the MIDI sequence contained in the file is setup for use with a General MIDI device. A CFBoolean.
- [kMDItemKeySignature](../../kmditemkeysignature.md): The key of the music contained in the audio file. For example: C, Dm, F#m, Bb. A CFString.
- [kMDItemLyricist](../../kmditemlyricist.md): The lyricist, or text writer, of the music contained in the audio file. A CFString.
- [kMDItemMusicalGenre](../../kmditemmusicalgenre.md): The musical genre of the song or composition contained in the audio file. For example: Jazz, Pop, Rock, Classical. A CFString.
- [kMDItemMusicalInstrumentCategory](../../kmditemmusicalinstrumentcategory.md): Specifies the category of an instrument. A CFString.
- [kMDItemMusicalInstrumentName](../../kmditemmusicalinstrumentname.md): Specifies the name of instrument relative to the instrument category. A CFString.
- [kMDItemRecordingDate](../../kmditemrecordingdate.md): The recording date of the song or composition.
- [kMDItemRecordingYear](../../kmditemrecordingyear.md): Indicates the year the item was recorded. For example, 1964, 2003, etc. A CFNumber.
- [kMDItemTempo](../../kmditemtempo.md): A float value that specifies the beats per minute of the music contained in the audio file. A CFNumber.
- [kMDItemTimeSignature](../../kmditemtimesignature.md): The time signature of the musical composition contained in the audio/MIDI file. For example: "4/4", "7/8". A CFString.
