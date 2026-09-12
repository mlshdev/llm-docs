> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicdevicemidieventlist(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/musicdevicemidieventlist(_:_:_:))

# MusicDeviceMIDIEventList(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

## Declaration

```swift
func MusicDeviceMIDIEventList(_ inUnit: MusicDeviceComponent, _ inOffsetSampleFrame: UInt32, _ evtList: UnsafePointer<MIDIEventList>) -> OSStatus
```

## See Also

### Interacting with Music Devices

- [MusicDeviceMIDIEvent(\_:\_:\_:\_:\_:)](musicdevicemidievent%28__________%29.md)
- [MusicDeviceStartNote(\_:\_:\_:\_:\_:\_:)](musicdevicestartnote%28____________%29.md)
- [MusicDeviceStopNote(\_:\_:\_:\_:)](musicdevicestopnote%28________%29.md)
- [MusicDeviceSysEx(\_:\_:\_:)](musicdevicesysex%28______%29.md)
- [MusicDeviceComponent](musicdevicecomponent.md)
- [MusicDeviceGroupID](musicdevicegroupid.md)
- [MusicDeviceInstrumentID](musicdeviceinstrumentid.md)
- [MusicDeviceMIDIEventProc](musicdevicemidieventproc.md)
- [MusicDeviceStartNoteProc](musicdevicestartnoteproc.md)
- [MusicDeviceStopNoteProc](musicdevicestopnoteproc.md)
- [MusicDeviceSysExProc](musicdevicesysexproc.md)

# MusicDeviceMIDIEventList (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus MusicDeviceMIDIEventList(MusicDeviceComponent inUnit, UInt32 inOffsetSampleFrame, const struct MIDIEventList *evtList);
```

## See Also

### Interacting with Music Devices

- [MusicDeviceMIDIEvent](musicdevicemidievent%28__________%29.md)
- [MusicDeviceStartNote](musicdevicestartnote%28____________%29.md)
- [MusicDeviceStopNote](musicdevicestopnote%28________%29.md)
- [MusicDeviceSysEx](musicdevicesysex%28______%29.md)
- [MusicDeviceComponent](musicdevicecomponent.md)
- [MusicDeviceGroupID](musicdevicegroupid.md)
- [MusicDeviceInstrumentID](musicdeviceinstrumentid.md)
- [MusicDeviceMIDIEventProc](musicdevicemidieventproc.md)
- [MusicDeviceStartNoteProc](musicdevicestartnoteproc.md)
- [MusicDeviceStopNoteProc](musicdevicestopnoteproc.md)
- [MusicDeviceSysExProc](musicdevicesysexproc.md)
