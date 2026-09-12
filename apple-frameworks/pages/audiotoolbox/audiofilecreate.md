> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecreate](https://developer.apple.com/documentation/audiotoolbox/audiofilecreate)

# AudioFileCreate

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.6)

> Deprecated. Use [AudioFileCreateWithURL](audiofilecreatewithurl%28__________%29.md) instead.

## Declaration

```objectivec
extern OSStatus AudioFileCreate(const struct FSRef *inParentRef, CFStringRef inFileName, AudioFileTypeID inFileType, const AudioStreamBasicDescription *inFormat, AudioFileFlags inFlags, struct FSRef *outNewFileRef, AudioFileID*outAudioFile);
```

## Parameters

- `inParentRef`: A pointer to the directory where the new file should be created.
- `inFileName`: The name of the file to be created.
- `inFileType`: The type of audio file to create. See [AudioFileTypeID](audiofiletypeid.md) for constants that can be used.
- `inFormat`: A pointer to the structure that describes the format of the data.
- `inFlags`: Relevant flags for creating or opening the file. Currently set to `0`.
- `outNewFileRef`: On output, a pointer to the location of the newly created file.
- `outAudioFile`: On output, a pointer to the newly created audio file.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This deprecated function uses an `FSRef` type rather than the `CFURLRef` type used by the [AudioFileCreateWithURL](audiofilecreatewithurl%28__________%29.md) function.

## See Also

### Related Documentation

- [AudioFileCreateWithURL](audiofilecreatewithurl%28__________%29.md): Creates a new audio file, or initializes an existing file, specified by a URL.

### Functions

- [AudioFileInitialize](audiofileinitialize.md): Deprecated.
- [AudioFileOpen](audiofileopen.md): Deprecated.
- [AudioFileReadPackets](audiofilereadpackets%28______________%29.md): Deprecated. Reads a fixed duration of audio data from an audio file.
- [MusicSequenceLoadSMFDataWithFlags](musicsequenceloadsmfdatawithflags.md): Deprecated.
- [MusicSequenceLoadSMFWithFlags](musicsequenceloadsmfwithflags.md): Deprecated.
- [MusicSequenceSaveMIDIFile](musicsequencesavemidifile.md): Deprecated.
- [MusicSequenceSaveSMFData](musicsequencesavesmfdata.md): Deprecated.
- [MusicTrackNewExtendedControlEvent](musictracknewextendedcontrolevent.md): Deprecated.
- [AudioComponentGetIcon](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.
- [AudioComponentGetLastActiveTime](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.
- [AudioFileComponentCreate](audiofilecomponentcreate.md): Deprecated.
- [AudioFileComponentDataIsThisFormat](audiofilecomponentdataisthisformat.md): Deprecated.
- [AudioFileComponentFileIsThisFormat](audiofilecomponentfileisthisformat.md): Deprecated.
- [AudioFileComponentInitialize](audiofilecomponentinitialize.md): Deprecated.
- [AudioFileComponentOpenFile](audiofilecomponentopenfile.md): Deprecated.
