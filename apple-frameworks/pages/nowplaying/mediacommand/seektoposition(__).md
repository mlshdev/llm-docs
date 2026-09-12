> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacommand/seektoposition(_:)](https://developer.apple.com/documentation/nowplaying/mediacommand/seektoposition(_:))

# seekToPosition(\_:)

**Framework:** Now Playing  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a command that seeks to a specific position in the media.

## Declaration

```swift
static func seekToPosition(_ action: @escaping (TimeInterval) async throws -> Void) -> MediaCommand
```

## Parameters

- `action`: The closure the system calls to seek to a position. Receives the target position in seconds.

## See Also

### Seeking

- [seekForward(beginAction:endAction:)](seekforward%28beginaction_endaction_%29.md): Creates a command that fast-forwards through the media.
- [seekBackward(beginAction:endAction:)](seekbackward%28beginaction_endaction_%29.md): Creates a command that rewinds through the media.
