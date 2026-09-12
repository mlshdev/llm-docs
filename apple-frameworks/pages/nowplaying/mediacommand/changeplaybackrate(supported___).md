> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacommand/changeplaybackrate(supported:_:)](https://developer.apple.com/documentation/nowplaying/mediacommand/changeplaybackrate(supported:_:))

# changePlaybackRate(supported:\_:)

**Framework:** Now Playing  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a command that changes the playback rate of the media.

## Declaration

```swift
static func changePlaybackRate(supported: [Float], _ action: @escaping (Float) async throws -> Void) -> MediaCommand
```

## Parameters

- `supported`: An array of playback rates your app can play at.
- `action`: The closure the system calls to change the playback rate.

## See Also

### Changing playback modes

- [changeRepeatMode(current:supported:\_:)](changerepeatmode%28current_supported___%29.md): Creates a command that changes the repeat mode for media playback.
- [changeShuffleMode(current:supported:\_:)](changeshufflemode%28current_supported___%29.md): Creates a command that changes the shuffle mode for media playback.
- [MediaCommand.RepeatMode](repeatmode.md): The repeat mode for media playback.
- [MediaCommand.ShuffleMode](shufflemode.md): The shuffle mode for media playback.
