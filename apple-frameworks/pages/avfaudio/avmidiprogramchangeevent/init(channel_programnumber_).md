> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avmidiprogramchangeevent/init(channel:programnumber:)

# init(channel:programNumber:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a program change event with a channel and program number.

## Declaration

```swift
init(channel: UInt32, programNumber: UInt32)
```

## Parameters

- `channel`: The MIDI channel for the message, between `0` and `15`.
- `programNumber`: The program number to send, between `0` and `127`.

<a id="Discussion"></a>

## Discussion

The instrument this chooses depends on [AVMIDIControlChangeEvent.MessageType.bankSelect](../avmidicontrolchangeevent/messagetype-swift.enum/bankselect.md) events sent prior to this event.

# initWithChannel:programNumber: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a program change event with a channel and program number.

## Declaration

```objectivec
- (instancetype) initWithChannel:(UInt32) channel programNumber:(UInt32) programNumber;
```

## Parameters

- `channel`: The MIDI channel for the message, between `0` and `15`.
- `programNumber`: The program number to send, between `0` and `127`.

<a id="Discussion"></a>

## Discussion

The instrument this chooses depends on [AVMIDIControlChangeMessageTypeBankSelect](../avmidicontrolchangeevent/messagetype-swift.enum/bankselect.md) events sent prior to this event.
