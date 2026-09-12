> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidipitchbendevent/init(channel:value:)](https://developer.apple.com/documentation/avfaudio/avmidipitchbendevent/init(channel:value:))

# init(channel:value:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an event with a channel and pitch bend value.

## Declaration

```swift
init(channel: UInt32, value: UInt32)
```

## Parameters

- `channel`: The MIDI channel for the message, between `0` and `15`.
- `value`: The pitch bend value, between `0` and `16383`.

# initWithChannel:value: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an event with a channel and pitch bend value.

## Declaration

```objectivec
- (instancetype) initWithChannel:(UInt32) channel value:(UInt32) value;
```

## Parameters

- `channel`: The MIDI channel for the message, between `0` and `15`.
- `value`: The pitch bend value, between `0` and `16383`.
