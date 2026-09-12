> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentcreate](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentcreate)

# AudioFileComponentCreate

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.6)

## Declaration

```objectivec
extern OSStatus AudioFileComponentCreate(AudioFileComponent inComponent, const struct FSRef *inParentRef, CFStringRef inFileName, const AudioStreamBasicDescription *inFormat, UInt32 inFlags, struct FSRef *outNewFileRef);
```

## See Also

### Functions

- [AudioFileCreate](audiofilecreate.md): Deprecated.
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
- [AudioFileComponentDataIsThisFormat](audiofilecomponentdataisthisformat.md): Deprecated.
- [AudioFileComponentFileIsThisFormat](audiofilecomponentfileisthisformat.md): Deprecated.
- [AudioFileComponentInitialize](audiofilecomponentinitialize.md): Deprecated.
- [AudioFileComponentOpenFile](audiofilecomponentopenfile.md): Deprecated.
