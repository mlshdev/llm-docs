> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicdevicestopnoteproc](https://developer.apple.com/documentation/audiotoolbox/musicdevicestopnoteproc)

# MusicDeviceStopNoteProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias MusicDeviceStopNoteProc = (UnsafeMutableRawPointer, MusicDeviceGroupID, NoteInstanceID, UInt32) -> OSStatus
```

## See Also

### Interacting with Music Devices

- [MusicDeviceMIDIEvent(\_:\_:\_:\_:\_:)](musicdevicemidievent%28__________%29.md)
- [MusicDeviceMIDIEventList(\_:\_:\_:)](musicdevicemidieventlist%28______%29.md)
- [MusicDeviceStartNote(\_:\_:\_:\_:\_:\_:)](musicdevicestartnote%28____________%29.md)
- [MusicDeviceStopNote(\_:\_:\_:\_:)](musicdevicestopnote%28________%29.md)
- [MusicDeviceSysEx(\_:\_:\_:)](musicdevicesysex%28______%29.md)
- [MusicDeviceComponent](musicdevicecomponent.md)
- [MusicDeviceGroupID](musicdevicegroupid.md)
- [MusicDeviceInstrumentID](musicdeviceinstrumentid.md)
- [MusicDeviceMIDIEventProc](musicdevicemidieventproc.md)
- [MusicDeviceStartNoteProc](musicdevicestartnoteproc.md)
- [MusicDeviceSysExProc](musicdevicesysexproc.md)

# MusicDeviceStopNoteProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned int, unsigned int, unsigned int) __attribute__((nonblocking)) MusicDeviceStopNoteProc;
```

## See Also

### Interacting with Music Devices

- [MusicDeviceMIDIEvent](musicdevicemidievent%28__________%29.md)
- [MusicDeviceMIDIEventList](musicdevicemidieventlist%28______%29.md)
- [MusicDeviceStartNote](musicdevicestartnote%28____________%29.md)
- [MusicDeviceStopNote](musicdevicestopnote%28________%29.md)
- [MusicDeviceSysEx](musicdevicesysex%28______%29.md)
- [MusicDeviceComponent](musicdevicecomponent.md)
- [MusicDeviceGroupID](musicdevicegroupid.md)
- [MusicDeviceInstrumentID](musicdeviceinstrumentid.md)
- [MusicDeviceMIDIEventProc](musicdevicemidieventproc.md)
- [MusicDeviceStartNoteProc](musicdevicestartnoteproc.md)
- [MusicDeviceSysExProc](musicdevicesysexproc.md)
