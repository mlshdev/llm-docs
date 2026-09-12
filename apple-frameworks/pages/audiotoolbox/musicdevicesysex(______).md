> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicdevicesysex(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/musicdevicesysex(_:_:_:))

# MusicDeviceSysEx(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func MusicDeviceSysEx(_ inUnit: MusicDeviceComponent, _ inData: UnsafePointer<UInt8>, _ inLength: UInt32) -> OSStatus
```

## See Also

### Interacting with Music Devices

- [MusicDeviceMIDIEvent(\_:\_:\_:\_:\_:)](musicdevicemidievent%28__________%29.md)
- [MusicDeviceMIDIEventList(\_:\_:\_:)](musicdevicemidieventlist%28______%29.md)
- [MusicDeviceStartNote(\_:\_:\_:\_:\_:\_:)](musicdevicestartnote%28____________%29.md)
- [MusicDeviceStopNote(\_:\_:\_:\_:)](musicdevicestopnote%28________%29.md)
- [MusicDeviceComponent](musicdevicecomponent.md)
- [MusicDeviceGroupID](musicdevicegroupid.md)
- [MusicDeviceInstrumentID](musicdeviceinstrumentid.md)
- [MusicDeviceMIDIEventProc](musicdevicemidieventproc.md)
- [MusicDeviceStartNoteProc](musicdevicestartnoteproc.md)
- [MusicDeviceStopNoteProc](musicdevicestopnoteproc.md)
- [MusicDeviceSysExProc](musicdevicesysexproc.md)

# MusicDeviceSysEx (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus MusicDeviceSysEx(MusicDeviceComponent inUnit, const UInt8 *inData, UInt32 inLength);
```

## See Also

### Interacting with Music Devices

- [MusicDeviceMIDIEvent](musicdevicemidievent%28__________%29.md)
- [MusicDeviceMIDIEventList](musicdevicemidieventlist%28______%29.md)
- [MusicDeviceStartNote](musicdevicestartnote%28____________%29.md)
- [MusicDeviceStopNote](musicdevicestopnote%28________%29.md)
- [MusicDeviceComponent](musicdevicecomponent.md)
- [MusicDeviceGroupID](musicdevicegroupid.md)
- [MusicDeviceInstrumentID](musicdeviceinstrumentid.md)
- [MusicDeviceMIDIEventProc](musicdevicemidieventproc.md)
- [MusicDeviceStartNoteProc](musicdevicestartnoteproc.md)
- [MusicDeviceStopNoteProc](musicdevicestopnoteproc.md)
- [MusicDeviceSysExProc](musicdevicesysexproc.md)
