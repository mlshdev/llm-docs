> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacommand/seekforward(beginaction:endaction:)](https://developer.apple.com/documentation/nowplaying/mediacommand/seekforward(beginaction:endaction:))

# seekForward(beginAction:endAction:)

**Framework:** Now Playing  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a command that fast-forwards through the media.

## Declaration

```swift
static func seekForward(beginAction: @escaping () async throws -> Void, endAction: @escaping () async throws -> Void) -> MediaCommand
```

## Parameters

- `beginAction`: The closure the system calls to begin fast-forwarding.
- `endAction`: The closure the system calls to end fast-forwarding.

<a id="discussion"></a>

## Discussion

The system calls `beginAction` when the user starts fast-forwarding (for example, by pressing and holding a fast-forward button), and calls `endAction` when the user stops. Use these paired actions to start and stop any rate change or scrubbing behavior.

## See Also

### Seeking

- [seekToPosition(\_:)](seektoposition%28__%29.md): Creates a command that seeks to a specific position in the media.
- [seekBackward(beginAction:endAction:)](seekbackward%28beginaction_endaction_%29.md): Creates a command that rewinds through the media.
