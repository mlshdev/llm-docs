> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/remotemediasessionrepresentable/commands](https://developer.apple.com/documentation/nowplaying/remotemediasessionrepresentable/commands)

# commands

**Framework:** Now Playing  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The commands supported by this session.

## Declaration

```swift
@MainActor var commands: [MediaCommand] { get }
```

## Mentioned In

- [Publishing remote media sessions](../publishing-remote-media-sessions.md)

<a id="discussion"></a>

## Discussion

Compose commands using [MediaCommand](../mediacommand.md) static factory methods like [play(\_:)](../mediacommand/play%28__%29.md), [pause(\_:)](../mediacommand/pause%28__%29.md), [next(\_:)](../mediacommand/next%28__%29.md), [previous(\_:)](../mediacommand/previous%28__%29.md), [seekToPosition(\_:)](../mediacommand/seektoposition%28__%29.md) and other playback and content commands.
