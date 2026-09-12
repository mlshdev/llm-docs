> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisendsysex(_:)](https://developer.apple.com/documentation/coremidi/midisendsysex(_:))

# MIDISendSysex(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Asynchronously sends a single system-exclusive (SysEx) event.

## Declaration

```swift
func MIDISendSysex(_ request: UnsafeMutablePointer<MIDISysexSendRequest>) -> OSStatus
```

## Parameters

- `request`: Contains the destination and a pointer to the MIDI data to send.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

# MIDISendSysex (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Asynchronously sends a single system-exclusive (SysEx) event.

## Declaration

```objectivec
extern OSStatus MIDISendSysex(MIDISysexSendRequest *request);
```

## Parameters

- `request`: Contains the destination and a pointer to the MIDI data to send.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.
