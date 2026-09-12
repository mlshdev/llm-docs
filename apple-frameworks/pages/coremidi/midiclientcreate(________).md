> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiclientcreate(_:_:_:_:)](https://developer.apple.com/documentation/coremidi/midiclientcreate(_:_:_:_:))

# MIDIClientCreate(\_:\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Creates a MIDI client.

## Declaration

```swift
func MIDIClientCreate(_ name: CFString, _ notifyProc: MIDINotifyProc?, _ notifyRefCon: UnsafeMutableRawPointer?, _ outClient: UnsafeMutablePointer<MIDIClientRef>) -> OSStatus
```

## Parameters

- `name`: The client’s name.
- `notifyProc`: An optional callback function through which the client receives notifications of changes to the system.
- `notifyRefCon`: A void pointer.
- `outClient`: On successful return, points to the newly created MIDI client.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

The system invokes the callback function on the same run loop that you created the client on.

## Topics

### Callbacks

- [MIDINotifyProc](midinotifyproc.md): A callback function for notifying clients of state changes.
- [MIDINotification](midinotification.md): A message that describes a system state change.

## See Also

### Client management

- [Incorporating MIDI 2 into your apps](incorporating-midi-2-into-your-apps.md): Add precision and improve musical control for your MIDI apps.
- [MIDIClientCreateWithBlock(\_:\_:\_:)](midiclientcreatewithblock%28______%29.md): Creates a MIDI client with a callback block.
- [MIDIClientDispose(\_:)](midiclientdispose%28__%29.md): Disposes of a MIDI client.
- [MIDIClientRef](midiclientref.md): An object that maintains per-client state.

# MIDIClientCreate (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Creates a MIDI client.

## Declaration

```objectivec
extern OSStatus MIDIClientCreate(CFStringRef name, MIDINotifyProc notifyProc, void *notifyRefCon, MIDIClientRef *outClient);
```

## Parameters

- `name`: The client’s name.
- `notifyProc`: An optional callback function through which the client receives notifications of changes to the system.
- `notifyRefCon`: A void pointer.
- `outClient`: On successful return, points to the newly created MIDI client.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

The system invokes the callback function on the same run loop that you created the client on.

## Topics

### Callbacks

- [MIDINotifyProc](midinotifyproc.md): A callback function for notifying clients of state changes.
- [MIDINotification](midinotification.md): A message that describes a system state change.

## See Also

### Client management

- [Incorporating MIDI 2 into your apps](incorporating-midi-2-into-your-apps.md): Add precision and improve musical control for your MIDI apps.
- [MIDIClientCreateWithBlock](midiclientcreatewithblock%28______%29.md): Creates a MIDI client with a callback block.
- [MIDIClientDispose](midiclientdispose%28__%29.md): Disposes of a MIDI client.
- [MIDIClientRef](midiclientref.md): An object that maintains per-client state.
