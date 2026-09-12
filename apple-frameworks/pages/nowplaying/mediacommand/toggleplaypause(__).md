> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacommand/toggleplaypause(_:)](https://developer.apple.com/documentation/nowplaying/mediacommand/toggleplaypause(_:))

# togglePlayPause(\_:)

**Framework:** Now Playing  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a command that toggles between play and pause states.

## Declaration

```swift
static func togglePlayPause(_ action: @escaping () async throws -> Void) -> MediaCommand
```

## Parameters

- `action`: The closure the system calls to toggle playback.

## See Also

### Controlling playback

- [play(\_:)](play%28__%29.md): Creates a command that starts media playback.
- [pause(\_:)](pause%28__%29.md): Creates a command that pauses media playback.
- [stop(\_:)](stop%28__%29.md): Creates a command that stops media playback.
