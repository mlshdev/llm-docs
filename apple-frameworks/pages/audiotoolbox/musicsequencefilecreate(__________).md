> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicsequencefilecreate(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/musicsequencefilecreate(_:_:_:_:_:))

# MusicSequenceFileCreate(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a MIDI file from the events in a music sequence.

## Declaration

```swift
func MusicSequenceFileCreate(_ inSequence: MusicSequence, _ inFileRef: CFURL, _ inFileType: MusicSequenceFileTypeID, _ inFlags: MusicSequenceFileFlags, _ inResolution: Int16) -> OSStatus
```

## Parameters

- `inSequence`: The music sequence that you want to create a MIDI file from.
- `inFileRef`: The URL to the MIDI file to be created.
- `inFileType`: The type of file to create.
- `inFlags`: Flags that configure the file creation process.
- `inResolution`: The resolution, which depends on the file type and the music sequence type.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

This function can be (and is most commonly) used to create a MIDI file from the events in a sequence. Only MIDI based events are used when creating the MIDI file. MIDI files are normally beat based, but can also have a SMPTE (or real-time rather than beat time) representation.

The inResolution parameter specifies the relationship between “tick” and quarter note for saving to a standard MIDI file. Pass 0 to this parameter to use the default value; namely, the value that is currently set on the tempo track.

The various sequence types determine the kinds of files that can be created, as follows:

- Beats—When saving a MIDI file, it saves a beats (PPQ) based axis.
- Seconds—When saving a MIDI file, it will save it as a SMPTE resolution - so you should specify this resolution when creating the MIDI file. If zero is specified, 25 fps and 40 ticks/frame is used (a time scale of a millisecond)
- Samples—You cannot save to a MIDI file with this sequence type.

The complete meaning of the 16-bit “division” field in a MIDI File’s MThd chunk. If it is positive, then a tick represents 1/D quarter notes.  If it negative, the following pertains:

- Bits 14-8 are a signed 7-bit number representing the SMPTE format: 24, -25, -29 (drop), -30.
- Bits 7-0 represents the number of ticks per SMPTE frame. Typical values are 4, 10, 80, 100. You can obtain millisecond resolution by specifying 25 frames/sec and 40 divisions/frame:

```objc
  30 fps with 80 bits (ticks) per frame: 0xE250  ((char)0xE2 == -30)
```

## See Also

### Managing Music Sequences

- [NewMusicSequence(\_:)](newmusicsequence%28__%29.md): Creates a new empty music sequence.
- [DisposeMusicSequence(\_:)](disposemusicsequence%28__%29.md): Disposes of a music sequence.
- [MusicSequenceBarBeatTimeToBeats(\_:\_:\_:)](musicsequencebarbeattimetobeats%28______%29.md): Formats a music sequence’s bar-beat time to its beat time.
- [MusicSequenceBeatsToBarBeatTime(\_:\_:\_:\_:)](musicsequencebeatstobarbeattime%28________%29.md): Formats a music sequence’s beat time to its bar-beat time.
- [MusicSequenceDisposeTrack(\_:\_:)](musicsequencedisposetrack%28____%29.md): Removes a music track from a music sequence, and disposes of the track.
- [MusicSequenceFileCreateData(\_:\_:\_:\_:\_:)](musicsequencefilecreatedata%28__________%29.md): Creates a data object containing the events from a music sequence.
- [MusicSequenceFileLoad(\_:\_:\_:\_:)](musicsequencefileload%28________%29.md): Loads data into a music sequence from a URL reference.
- [MusicSequenceFileLoadData(\_:\_:\_:\_:)](musicsequencefileloaddata%28________%29.md): Load data into a music sequence from a data reference.
- [MusicSequenceGetAUGraph(\_:\_:)](musicsequencegetaugraph%28____%29.md): Gets the audio processing graph associated with a music sequence.
- [MusicSequenceGetBeatsForSeconds(\_:\_:\_:)](musicsequencegetbeatsforseconds%28______%29.md): Calculates the number of beats that correspond to a number of seconds.
- [MusicSequenceGetIndTrack(\_:\_:\_:)](musicsequencegetindtrack%28______%29.md): Gets the music track at the specified track index.
- [MusicSequenceGetInfoDictionary(\_:)](musicsequencegetinfodictionary%28__%29.md): Returns a dictionary containing music sequence information.
- [MusicSequenceGetSMPTEResolution(\_:\_:\_:)](musicsequencegetsmpteresolution%28______%29.md)
- [MusicSequenceGetSecondsForBeats(\_:\_:\_:)](musicsequencegetsecondsforbeats%28______%29.md): Calculates the number of seconds that correspond to a number of beats.
- [MusicSequenceGetSequenceType(\_:\_:)](musicsequencegetsequencetype%28____%29.md): Gets the sequence type for a music sequence.

# MusicSequenceFileCreate (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a MIDI file from the events in a music sequence.

## Declaration

```objectivec
extern OSStatus MusicSequenceFileCreate(MusicSequence inSequence, CFURLRef inFileRef, MusicSequenceFileTypeID inFileType, MusicSequenceFileFlags inFlags, SInt16 inResolution);
```

## Parameters

- `inSequence`: The music sequence that you want to create a MIDI file from.
- `inFileRef`: The URL to the MIDI file to be created.
- `inFileType`: The type of file to create.
- `inFlags`: Flags that configure the file creation process.
- `inResolution`: The resolution, which depends on the file type and the music sequence type.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

This function can be (and is most commonly) used to create a MIDI file from the events in a sequence. Only MIDI based events are used when creating the MIDI file. MIDI files are normally beat based, but can also have a SMPTE (or real-time rather than beat time) representation.

The inResolution parameter specifies the relationship between “tick” and quarter note for saving to a standard MIDI file. Pass 0 to this parameter to use the default value; namely, the value that is currently set on the tempo track.

The various sequence types determine the kinds of files that can be created, as follows:

- Beats—When saving a MIDI file, it saves a beats (PPQ) based axis.
- Seconds—When saving a MIDI file, it will save it as a SMPTE resolution - so you should specify this resolution when creating the MIDI file. If zero is specified, 25 fps and 40 ticks/frame is used (a time scale of a millisecond)
- Samples—You cannot save to a MIDI file with this sequence type.

The complete meaning of the 16-bit “division” field in a MIDI File’s MThd chunk. If it is positive, then a tick represents 1/D quarter notes.  If it negative, the following pertains:

- Bits 14-8 are a signed 7-bit number representing the SMPTE format: 24, -25, -29 (drop), -30.
- Bits 7-0 represents the number of ticks per SMPTE frame. Typical values are 4, 10, 80, 100. You can obtain millisecond resolution by specifying 25 frames/sec and 40 divisions/frame:

```objc
  30 fps with 80 bits (ticks) per frame: 0xE250  ((char)0xE2 == -30)
```

## See Also

### Managing Music Sequences

- [NewMusicSequence](newmusicsequence%28__%29.md): Creates a new empty music sequence.
- [DisposeMusicSequence](disposemusicsequence%28__%29.md): Disposes of a music sequence.
- [MusicSequenceBarBeatTimeToBeats](musicsequencebarbeattimetobeats%28______%29.md): Formats a music sequence’s bar-beat time to its beat time.
- [MusicSequenceBeatsToBarBeatTime](musicsequencebeatstobarbeattime%28________%29.md): Formats a music sequence’s beat time to its bar-beat time.
- [MusicSequenceDisposeTrack](musicsequencedisposetrack%28____%29.md): Removes a music track from a music sequence, and disposes of the track.
- [MusicSequenceFileCreateData](musicsequencefilecreatedata%28__________%29.md): Creates a data object containing the events from a music sequence.
- [MusicSequenceFileLoad](musicsequencefileload%28________%29.md): Loads data into a music sequence from a URL reference.
- [MusicSequenceFileLoadData](musicsequencefileloaddata%28________%29.md): Load data into a music sequence from a data reference.
- [MusicSequenceGetAUGraph](musicsequencegetaugraph%28____%29.md): Gets the audio processing graph associated with a music sequence.
- [MusicSequenceGetBeatsForSeconds](musicsequencegetbeatsforseconds%28______%29.md): Calculates the number of beats that correspond to a number of seconds.
- [MusicSequenceGetIndTrack](musicsequencegetindtrack%28______%29.md): Gets the music track at the specified track index.
- [MusicSequenceGetInfoDictionary](musicsequencegetinfodictionary%28__%29.md): Returns a dictionary containing music sequence information.
- [MusicSequenceGetSMPTEResolution](musicsequencegetsmpteresolution%28______%29.md)
- [MusicSequenceGetSecondsForBeats](musicsequencegetsecondsforbeats%28______%29.md): Calculates the number of seconds that correspond to a number of beats.
- [MusicSequenceGetSequenceType](musicsequencegetsequencetype%28____%29.md): Gets the sequence type for a music sequence.
