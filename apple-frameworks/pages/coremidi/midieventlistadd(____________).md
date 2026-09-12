> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midieventlistadd(_:_:_:_:_:_:)](https://developer.apple.com/documentation/coremidi/midieventlistadd(_:_:_:_:_:_:))

# MIDIEventListAdd(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds an event to an event list.

## Declaration

```swift
func MIDIEventListAdd(_ evtlist: UnsafeMutablePointer<MIDIEventList>, _ listSize: Int, _ curPacket: UnsafeMutablePointer<MIDIEventPacket>, _ time: MIDITimeStamp, _ wordCount: Int, _ words: UnsafePointer<UInt32>) -> UnsafeMutablePointer<MIDIEventPacket>
```

## Parameters

- `evtlist`: The event list to which to add the event.
- `listSize`: The event list’s capacity, in bytes.
- `curPacket`: A packet pointer returned by a previous call to [MIDIEventListInit(\_:\_:)](midieventlistinit%28____%29.md) or [MIDIEventListAdd(\_:\_:\_:\_:\_:\_:)](midieventlistadd%28____________%29.md) for this packet list.
- `time`: The new event’s time.
- `wordCount`: The number of valid MIDI 32-bit words.
- `words`: The new event, which may be a single MIDI event or a partial SysEx event.

<a id="return-value"></a>

## Return Value

A packet pointer to pass as the `curPacket` argument in a subsequent call to this function, or `NULL` if there wasn’t room in the packet for the event.

<a id="Discussion"></a>

## Discussion

The maximum size of an event list is 65,536 bytes. Send large SysEx messages in smaller event lists.

## See Also

### Event list management

- [MIDIEventListInit(\_:\_:)](midieventlistinit%28____%29.md): Initializes an event list.
- [MIDIEventPacketNext(\_:)](midieventpacketnext%28__%29.md): Advances a packet pointer to the next packet in memory, if the packet is part of an event list.
- [MIDISendEventList(\_:\_:\_:)](midisendeventlist%28______%29.md): Sends MIDI events to a destination.
- [MIDIReceivedEventList(\_:\_:)](midireceivedeventlist%28____%29.md): Distributes incoming MIDI events from a source to its connected client input ports.
- [MIDIEventList](midieventlist.md): A variable-length list of MIDI event packets.
- [MIDIEventPacket](midieventpacket.md): A series of simultaneous MIDI events in Universal MIDI Packets (UMP) format.
- [UnsafeMutableMIDIEventListPointer](unsafemutablemidieventlistpointer.md)
- [UnsafeMutableMIDIEventPacketPointer](unsafemutablemidieventpacketpointer.md)

# MIDIEventListAdd (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds an event to an event list.

## Declaration

```objectivec
extern MIDIEventPacket *MIDIEventListAdd(MIDIEventList *evtlist, ByteCount listSize, MIDIEventPacket *curPacket, MIDITimeStamp time, ByteCount wordCount, const UInt32 *words);
```

## Parameters

- `evtlist`: The event list to which to add the event.
- `listSize`: The event list’s capacity, in bytes.
- `curPacket`: A packet pointer returned by a previous call to [MIDIEventListInit](midieventlistinit%28____%29.md) or [MIDIEventListAdd](midieventlistadd%28____________%29.md) for this packet list.
- `time`: The new event’s time.
- `wordCount`: The number of valid MIDI 32-bit words.
- `words`: The new event, which may be a single MIDI event or a partial SysEx event.

<a id="return-value"></a>

## Return Value

A packet pointer to pass as the `curPacket` argument in a subsequent call to this function, or `NULL` if there wasn’t room in the packet for the event.

<a id="Discussion"></a>

## Discussion

The maximum size of an event list is 65,536 bytes. Send large SysEx messages in smaller event lists.

## See Also

### Event list management

- [MIDIEventListInit](midieventlistinit%28____%29.md): Initializes an event list.
- [MIDIEventPacketNext](midieventpacketnext%28__%29.md): Advances a packet pointer to the next packet in memory, if the packet is part of an event list.
- [MIDISendEventList](midisendeventlist%28______%29.md): Sends MIDI events to a destination.
- [MIDIReceivedEventList](midireceivedeventlist%28____%29.md): Distributes incoming MIDI events from a source to its connected client input ports.
- [MIDIEventList](midieventlist.md): A variable-length list of MIDI event packets.
- [MIDIEventPacket](midieventpacket.md): A series of simultaneous MIDI events in Universal MIDI Packets (UMP) format.
