> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidinoteevent/init(channel:key:velocity:duration:)](https://developer.apple.com/documentation/avfaudio/avmidinoteevent/init(channel:key:velocity:duration:))

# init(channel:key:velocity:duration:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an event with a MIDI channel, key number, velocity, and duration.

## Declaration

```swift
init(channel: UInt32, key keyNum: UInt32, velocity: UInt32, duration: AVMusicTimeStamp)
```

## Parameters

- `channel`: The MIDI channel, between `0` and `15`.
- `keyNum`: The MIDI key number, between `0` and `127`.
- `velocity`: The MIDI velocity, between `0` and `127`.
- `duration`: The duration for this note, in beats.

# initWithChannel:key:velocity:duration: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an event with a MIDI channel, key number, velocity, and duration.

## Declaration

```objectivec
- (instancetype) initWithChannel:(UInt32) channel key:(UInt32) keyNum velocity:(UInt32) velocity duration:(AVMusicTimeStamp) duration;
```

## Parameters

- `channel`: The MIDI channel, between `0` and `15`.
- `keyNum`: The MIDI key number, between `0` and `127`.
- `velocity`: The MIDI velocity, between `0` and `127`.
- `duration`: The duration for this note, in beats.
