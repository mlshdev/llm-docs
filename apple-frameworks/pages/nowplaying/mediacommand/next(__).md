> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacommand/next(_:)](https://developer.apple.com/documentation/nowplaying/mediacommand/next(_:))

# next(\_:)

**Framework:** Now Playing  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a command that advances to the next track in the playback queue.

## Declaration

```swift
static func next(_ action: @escaping () async throws -> Void) -> MediaCommand
```

## Parameters

- `action`: The closure the system calls to advance to the next track.

## Mentioned In

- [Publishing media sessions](../publishing-media-sessions.md)

## See Also

### Navigating commands

- [previous(\_:)](previous%28__%29.md): Creates a command that returns to the previous track in the playback queue.
- [skipForward(preferredIntervals:\_:)](skipforward%28preferredintervals___%29.md): Creates a command that skips forward in the media by a specified time interval.
- [skipBackward(preferredIntervals:\_:)](skipbackward%28preferredintervals___%29.md): Creates a command that skips backward in the media by a specified time interval.
