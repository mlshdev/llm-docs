> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicdevicestartnote(_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/musicdevicestartnote(_:_:_:_:_:_:))

# MusicDeviceStartNote(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func MusicDeviceStartNote(_ inUnit: MusicDeviceComponent, _ inInstrument: MusicDeviceInstrumentID, _ inGroupID: MusicDeviceGroupID, _ outNoteInstanceID: UnsafeMutablePointer<NoteInstanceID>, _ inOffsetSampleFrame: UInt32, _ inParams: UnsafePointer<MusicDeviceNoteParams>) -> OSStatus
```

## See Also

### Interacting with Music Devices

- [MusicDeviceMIDIEvent(\_:\_:\_:\_:\_:)](musicdevicemidievent%28__________%29.md)
- [MusicDeviceMIDIEventList(\_:\_:\_:)](musicdevicemidieventlist%28______%29.md)
- [MusicDeviceStopNote(\_:\_:\_:\_:)](musicdevicestopnote%28________%29.md)
- [MusicDeviceSysEx(\_:\_:\_:)](musicdevicesysex%28______%29.md)
- [MusicDeviceComponent](musicdevicecomponent.md)
- [MusicDeviceGroupID](musicdevicegroupid.md)
- [MusicDeviceInstrumentID](musicdeviceinstrumentid.md)
- [MusicDeviceMIDIEventProc](musicdevicemidieventproc.md)
- [MusicDeviceStartNoteProc](musicdevicestartnoteproc.md)
- [MusicDeviceStopNoteProc](musicdevicestopnoteproc.md)
- [MusicDeviceSysExProc](musicdevicesysexproc.md)

# MusicDeviceStartNote (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus MusicDeviceStartNote(MusicDeviceComponent inUnit, MusicDeviceInstrumentID inInstrument, MusicDeviceGroupID inGroupID, NoteInstanceID *outNoteInstanceID, UInt32 inOffsetSampleFrame, const MusicDeviceNoteParams *inParams);
```

## See Also

### Interacting with Music Devices

- [MusicDeviceMIDIEvent](musicdevicemidievent%28__________%29.md)
- [MusicDeviceMIDIEventList](musicdevicemidieventlist%28______%29.md)
- [MusicDeviceStopNote](musicdevicestopnote%28________%29.md)
- [MusicDeviceSysEx](musicdevicesysex%28______%29.md)
- [MusicDeviceComponent](musicdevicecomponent.md)
- [MusicDeviceGroupID](musicdevicegroupid.md)
- [MusicDeviceInstrumentID](musicdeviceinstrumentid.md)
- [MusicDeviceMIDIEventProc](musicdevicemidieventproc.md)
- [MusicDeviceStartNoteProc](musicdevicestartnoteproc.md)
- [MusicDeviceStopNoteProc](musicdevicestopnoteproc.md)
- [MusicDeviceSysExProc](musicdevicesysexproc.md)
