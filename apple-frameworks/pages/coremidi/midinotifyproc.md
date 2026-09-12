> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinotifyproc](https://developer.apple.com/documentation/coremidi/midinotifyproc)

# MIDINotifyProc (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback function for notifying clients of state changes.

## Declaration

```swift
typealias MIDINotifyProc = (UnsafePointer<MIDINotification>, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `message`: A structure that contains information about what changed.
- `refCon`: The client’s `refCon`, passed to [MIDIClientCreate(\_:\_:\_:\_:)](midiclientcreate%28________%29.md).

<a id="Discussion"></a>

## Discussion

The system invokes this callback when some aspect of the current MIDI setup changes. The system calls it on the same thread that you called [MIDIClientCreate(\_:\_:\_:\_:)](midiclientcreate%28________%29.md) on.

## See Also

### Callbacks

- [MIDINotification](midinotification.md): A message that describes a system state change.

# MIDINotifyProc (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback function for notifying clients of state changes.

## Declaration

```objectivec
typedef void (*)(const struct MIDINotification *, void *) MIDINotifyProc;
```

## Parameters

- `message`: A structure that contains information about what changed.
- `refCon`: The client’s `refCon`, passed to [MIDIClientCreate](midiclientcreate%28________%29.md).

<a id="Discussion"></a>

## Discussion

The system invokes this callback when some aspect of the current MIDI setup changes. The system calls it on the same thread that you called [MIDIClientCreate](midiclientcreate%28________%29.md) on.

## See Also

### Callbacks

- [MIDINotification](midinotification.md): A message that describes a system state change.
