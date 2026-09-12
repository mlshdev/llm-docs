> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacommand/seekbackward(beginaction:endaction:)](https://developer.apple.com/documentation/nowplaying/mediacommand/seekbackward(beginaction:endaction:))

# seekBackward(beginAction:endAction:)

**Framework:** Now Playing  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a command that rewinds through the media.

## Declaration

```swift
static func seekBackward(beginAction: @escaping () async throws -> Void, endAction: @escaping () async throws -> Void) -> MediaCommand
```

## Parameters

- `beginAction`: The closure the system calls to begin rewinding.
- `endAction`: The closure the system calls to end rewinding.

<a id="discussion"></a>

## Discussion

The system calls `beginAction` when the user starts rewinding (for example, by pressing and holding a rewind button), and calls `endAction` when the user stops. Use these paired actions to start and stop any rate change or scrubbing behavior.

## See Also

### Seeking

- [seekToPosition(\_:)](seektoposition%28__%29.md): Creates a command that seeks to a specific position in the media.
- [seekForward(beginAction:endAction:)](seekforward%28beginaction_endaction_%29.md): Creates a command that fast-forwards through the media.
