> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacommand/changeshufflemode(current:supported:_:)](https://developer.apple.com/documentation/nowplaying/mediacommand/changeshufflemode(current:supported:_:))

# changeShuffleMode(current:supported:\_:)

**Framework:** Now Playing  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a command that changes the shuffle mode for media playback.

## Declaration

```swift
static func changeShuffleMode(current: MediaCommand.ShuffleMode, supported: [MediaCommand.ShuffleMode]? = nil, _ action: @escaping (MediaCommand.ShuffleMode) async throws -> Void) -> MediaCommand
```

## Parameters

- `current`: The current shuffle mode.
- `supported`: The supported shuffle modes. Pass `nil` to support all modes.
- `action`: The closure the system calls to change the shuffle mode.

## See Also

### Changing playback modes

- [changePlaybackRate(supported:\_:)](changeplaybackrate%28supported___%29.md): Creates a command that changes the playback rate of the media.
- [changeRepeatMode(current:supported:\_:)](changerepeatmode%28current_supported___%29.md): Creates a command that changes the repeat mode for media playback.
- [MediaCommand.RepeatMode](repeatmode.md): The repeat mode for media playback.
- [MediaCommand.ShuffleMode](shufflemode.md): The shuffle mode for media playback.
