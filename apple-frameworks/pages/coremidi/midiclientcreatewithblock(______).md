> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiclientcreatewithblock(_:_:_:)](https://developer.apple.com/documentation/coremidi/midiclientcreatewithblock(_:_:_:))

# MIDIClientCreateWithBlock(\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Creates a MIDI client with a callback block.

## Declaration

```swift
func MIDIClientCreateWithBlock(_ name: CFString, _ outClient: UnsafeMutablePointer<MIDIClientRef>, _ notifyBlock: MIDINotifyBlock?) -> OSStatus
```

## Parameters

- `name`: The client’s name.
- `outClient`: On successful return, points to the newly created MIDI client.
- `notifyBlock`: An optional block on which the client receives notifications of changes to the system. This system calls this block on an arbitrary thread. Thread-safety is the block’s responsibility.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## Topics

### Callbacks

- [MIDINotifyBlock](midinotifyblock.md): A callback block for notifying clients of state changes.
- [MIDINotification](midinotification.md): A message that describes a system state change.

## See Also

### Client management

- [Incorporating MIDI 2 into your apps](incorporating-midi-2-into-your-apps.md): Add precision and improve musical control for your MIDI apps.
- [MIDIClientCreate(\_:\_:\_:\_:)](midiclientcreate%28________%29.md): Creates a MIDI client.
- [MIDIClientDispose(\_:)](midiclientdispose%28__%29.md): Disposes of a MIDI client.
- [MIDIClientRef](midiclientref.md): An object that maintains per-client state.

# MIDIClientCreateWithBlock (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Creates a MIDI client with a callback block.

## Declaration

```objectivec
extern OSStatus MIDIClientCreateWithBlock(CFStringRef name, MIDIClientRef *outClient, MIDINotifyBlock notifyBlock);
```

## Parameters

- `name`: The client’s name.
- `outClient`: On successful return, points to the newly created MIDI client.
- `notifyBlock`: An optional block on which the client receives notifications of changes to the system. This system calls this block on an arbitrary thread. Thread-safety is the block’s responsibility.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## Topics

### Callbacks

- [MIDINotifyBlock](midinotifyblock.md): A callback block for notifying clients of state changes.
- [MIDINotification](midinotification.md): A message that describes a system state change.

## See Also

### Client management

- [Incorporating MIDI 2 into your apps](incorporating-midi-2-into-your-apps.md): Add precision and improve musical control for your MIDI apps.
- [MIDIClientCreate](midiclientcreate%28________%29.md): Creates a MIDI client.
- [MIDIClientDispose](midiclientdispose%28__%29.md): Disposes of a MIDI client.
- [MIDIClientRef](midiclientref.md): An object that maintains per-client state.
