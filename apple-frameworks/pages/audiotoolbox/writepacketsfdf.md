> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/writepacketsfdf](https://developer.apple.com/documentation/audiotoolbox/writepacketsfdf)

# WritePacketsFDF (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
typealias WritePacketsFDF = (UnsafeMutableRawPointer, DarwinBoolean, UInt32, UnsafePointer<AudioStreamPacketDescription>?, Int64, UnsafeMutablePointer<UInt32>, UnsafeRawPointer) -> OSStatus
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
- [SetPropertyFDF](setpropertyfdf.md)
- [SetUserDataFDF](setuserdatafdf.md)
- [WriteBytesFDF](writebytesfdf.md)
- [AudioSessionPropertyID](audiosessionpropertyid.md): Deprecated. The data type for an audio session property identifier.

# WritePacketsFDF (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned char, unsigned int, const struct AudioStreamPacketDescription *, long long, unsigned int *, const void *) WritePacketsFDF;
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
- [SetPropertyFDF](setpropertyfdf.md)
- [SetUserDataFDF](setuserdatafdf.md)
- [WriteBytesFDF](writebytesfdf.md)
- [AudioSessionPropertyID](audiosessionpropertyid.md): Deprecated. The data type for an audio session property identifier.
