> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/readpacketsfdf](https://developer.apple.com/documentation/audiotoolbox/readpacketsfdf)

# ReadPacketsFDF (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
typealias ReadPacketsFDF = (UnsafeMutableRawPointer, DarwinBoolean, UnsafeMutablePointer<UInt32>, UnsafeMutablePointer<AudioStreamPacketDescription>?, Int64, UnsafeMutablePointer<UInt32>, UnsafeMutableRawPointer) -> OSStatus
```

## See Also

### Data Types

- [ExtendedControlEvent](extendedcontrolevent.md)
- [MIDIEndpointRef](../coremidi/midiendpointref.md): A MIDI source or destination an entity owns.
- [MagicCookieInfo](magiccookieinfo.md): Deprecated. A structure holding magic cookie information.
- [NoteInstanceID](noteinstanceid.md)
- [ReadBytesFDF](readbytesfdf.md)
- [ReadPacketDataFDF](readpacketdatafdf.md)
- [SetPropertyFDF](setpropertyfdf.md)
- [SetUserDataFDF](setuserdatafdf.md)
- [WriteBytesFDF](writebytesfdf.md)
- [WritePacketsFDF](writepacketsfdf.md)
- [AudioSessionPropertyID](audiosessionpropertyid.md): Deprecated. The data type for an audio session property identifier.

# ReadPacketsFDF (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned char, unsigned int *, struct AudioStreamPacketDescription *, long long, unsigned int *, void *) ReadPacketsFDF;
```

## See Also

### Data Types

- [ExtendedControlEvent](extendedcontrolevent.md)
- [MIDIEndpointRef](../coremidi/midiendpointref.md): A MIDI source or destination an entity owns.
- [MagicCookieInfo](magiccookieinfo.md): Deprecated. A structure holding magic cookie information.
- [NoteInstanceID](noteinstanceid.md)
- [ReadBytesFDF](readbytesfdf.md)
- [ReadPacketDataFDF](readpacketdatafdf.md)
- [SetPropertyFDF](setpropertyfdf.md)
- [SetUserDataFDF](setuserdatafdf.md)
- [WriteBytesFDF](writebytesfdf.md)
- [WritePacketsFDF](writepacketsfdf.md)
- [AudioSessionPropertyID](audiosessionpropertyid.md): Deprecated. The data type for an audio session property identifier.
