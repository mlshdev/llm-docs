> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacommand/changerepeatmode(current:supported:_:)](https://developer.apple.com/documentation/nowplaying/mediacommand/changerepeatmode(current:supported:_:))

# changeRepeatMode(current:supported:\_:)

**Framework:** Now Playing  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a command that changes the repeat mode for media playback.

## Declaration

```swift
static func changeRepeatMode(current: MediaCommand.RepeatMode, supported: [MediaCommand.RepeatMode]? = nil, _ action: @escaping (MediaCommand.RepeatMode) async throws -> Void) -> MediaCommand
```

## Parameters

- `current`: The current repeat mode.
- `supported`: The supported repeat modes. Pass `nil` to support all modes.
- `action`: The closure the system calls to change the repeat mode.

## See Also

### Changing playback modes

- [changePlaybackRate(supported:\_:)](changeplaybackrate%28supported___%29.md): Creates a command that changes the playback rate of the media.
- [changeShuffleMode(current:supported:\_:)](changeshufflemode%28current_supported___%29.md): Creates a command that changes the shuffle mode for media playback.
- [MediaCommand.RepeatMode](repeatmode.md): The repeat mode for media playback.
- [MediaCommand.ShuffleMode](shufflemode.md): The shuffle mode for media playback.
