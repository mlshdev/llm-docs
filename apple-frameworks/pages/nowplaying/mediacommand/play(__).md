> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacommand/play(_:)](https://developer.apple.com/documentation/nowplaying/mediacommand/play(_:))

# play(\_:)

**Framework:** Now Playing  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a command that starts media playback.

## Declaration

```swift
static func play(_ action: @escaping () async throws -> Void) -> MediaCommand
```

## Parameters

- `action`: The closure the system calls to start playback.

## See Also

### Controlling playback

- [pause(\_:)](pause%28__%29.md): Creates a command that pauses media playback.
- [stop(\_:)](stop%28__%29.md): Creates a command that stops media playback.
- [togglePlayPause(\_:)](toggleplaypause%28__%29.md): Creates a command that toggles between play and pause states.
