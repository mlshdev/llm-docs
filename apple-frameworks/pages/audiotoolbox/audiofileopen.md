> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofileopen](https://developer.apple.com/documentation/audiotoolbox/audiofileopen)

# AudioFileOpen

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.6)

> Deprecated. Use [AudioFileOpenURL](audiofileopenurl%28________%29.md) instead.

## Declaration

```objectivec
extern OSStatus AudioFileOpen(const struct FSRef *inFileRef, AudioFilePermissions inPermissions, AudioFileTypeID inFileTypeHint, AudioFileID*outAudioFile);
```

## Parameters

- `inFileRef`: A pointer to the audio file you want to open.
- `inPermissions`: The read-write permissions you want to assign to the file. Use the permission constants in [AudioFilePermissions](audiofilepermissions.md).
- `inFileTypeHint`: A hint to indicate the file type of the designated file. For files without filename extensions and with types not easily or uniquely determined from the data (such as ADTS,AC3), use this hint to indicate the file type. Otherwise, pass `0`. Only use this hint in macOS versions 10.3.1 or greater. In all earlier versions, any attempt to open these files fails.
- `outAudioFile`: On output, a pointer to the newly opened file.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This deprecated function opens an existing audio file specified by a file system reference.

## See Also

### Related Documentation

- [AudioFileOpenURL](audiofileopenurl%28________%29.md): Open an existing audio file specified by a URL.

### Functions

- [AudioFileCreate](audiofilecreate.md): Deprecated.
- [AudioFileInitialize](audiofileinitialize.md): Deprecated.
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
