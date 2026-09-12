> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/setpropertyfdf](https://developer.apple.com/documentation/audiotoolbox/setpropertyfdf)

# SetPropertyFDF (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
typealias SetPropertyFDF = (UnsafeMutableRawPointer, AudioFilePropertyID, UInt32, UnsafeRawPointer) -> OSStatus
```

## See Also

### Data Types

- [ExtendedControlEvent](extendedcontrolevent.md)
- [MIDIEndpointRef](../coremidi/midiendpointref.md): A MIDI source or destination an entity owns.
- [MagicCookieInfo](magiccookieinfo.md): Deprecated. A structure holding magic cookie information.
- [NoteInstanceID](noteinstanceid.md)
- [ReadBytesFDF](readbytesfdf.md)
- [ReadPacketDataFDF](readpacketdatafdf.md)
- [ReadPacketsFDF](readpacketsfdf.md)
- [SetUserDataFDF](setuserdatafdf.md)
- [WriteBytesFDF](writebytesfdf.md)
- [WritePacketsFDF](writepacketsfdf.md)
- [AudioSessionPropertyID](audiosessionpropertyid.md): Deprecated. The data type for an audio session property identifier.

# SetPropertyFDF (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned int, unsigned int, const void *) SetPropertyFDF;
```

## See Also

### Data Types

- [ExtendedControlEvent](extendedcontrolevent.md)
- [MIDIEndpointRef](../coremidi/midiendpointref.md): A MIDI source or destination an entity owns.
- [MagicCookieInfo](magiccookieinfo.md): Deprecated. A structure holding magic cookie information.
- [NoteInstanceID](noteinstanceid.md)
- [ReadBytesFDF](readbytesfdf.md)
- [ReadPacketDataFDF](readpacketdatafdf.md)
- [ReadPacketsFDF](readpacketsfdf.md)
- [SetUserDataFDF](setuserdatafdf.md)
- [WriteBytesFDF](writebytesfdf.md)
- [WritePacketsFDF](writepacketsfdf.md)
- [AudioSessionPropertyID](audiosessionpropertyid.md): Deprecated. The data type for an audio session property identifier.
