> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinotifyblock](https://developer.apple.com/documentation/coremidi/midinotifyblock)

# MIDINotifyBlock (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback block for notifying clients of state changes.

## Declaration

```swift
typealias MIDINotifyBlock = (UnsafePointer<MIDINotification>) -> Void
```

## Parameters

- `message`: A structure that contains information about what changed.

<a id="Discussion"></a>

## Discussion

The system calls this block when some aspect of the current MIDI setup changes. The system calls it on an arbitrary thread chosen by the implementation; thread safety is the responsibility of the block.

## See Also

### Callbacks

- [MIDINotification](midinotification.md): A message that describes a system state change.

# MIDINotifyBlock (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback block for notifying clients of state changes.

## Declaration

```objectivec
typedef void (^)(const struct MIDINotification *) MIDINotifyBlock;
```

## Parameters

- `message`: A structure that contains information about what changed.

<a id="Discussion"></a>

## Discussion

The system calls this block when some aspect of the current MIDI setup changes. The system calls it on an arbitrary thread chosen by the implementation; thread safety is the responsibility of the block.

## See Also

### Callbacks

- [MIDINotification](midinotification.md): A message that describes a system state change.
