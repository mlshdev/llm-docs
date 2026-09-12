> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmakebeatrange(_:_:)](https://developer.apple.com/documentation/avfaudio/avmakebeatrange(_:_:))

# AVMakeBeatRange(\_:\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a beat range with the specified start time and length.

## Declaration

```swift
func AVMakeBeatRange(_ startBeat: AVMusicTimeStamp, _ lengthInBeats: AVMusicTimeStamp) -> AVBeatRange
```

## Parameters

- `startBeat`: The timestamp for the start position.
- `lengthInBeats`: The length of the beat range, in beats.

# AVMakeBeatRange (Objective-C)

**Framework:** AVFAudio  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a beat range with the specified start time and length.

## Declaration

```objectivec
static AVBeatRange AVMakeBeatRange(AVMusicTimeStamp startBeat, AVMusicTimeStamp lengthInBeats);
```

## Parameters

- `startBeat`: The timestamp for the start position.
- `lengthInBeats`: The length of the beat range, in beats.
