> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacommand](https://developer.apple.com/documentation/nowplaying/mediacommand)

# MediaCommand

**Framework:** Now Playing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A command that describes a media control action for a Now Playing session.

## Declaration

```swift
struct MediaCommand
```

## Mentioned In

- [Publishing media sessions](publishing-media-sessions.md)

<a id="overview"></a>

## Overview

Use static factory methods to create commands for your session:

```swift
var commands: [MediaCommand] {[
    .play { await self.play() },
    .pause { await self.pause() },
    .next { await self.nextTrack() }.enabled(self.hasNextTrack),
]}
```

## Topics

### Instance Methods

- [enabled(\_:)](mediacommand/enabled%28__%29.md): Sets the enabled state for this command.

### Type Methods

- [changePlaybackRate(supported:\_:)](mediacommand/changeplaybackrate%28supported___%29.md): Creates a command that changes the playback rate of the media.
- [changeRepeatMode(current:supported:\_:)](mediacommand/changerepeatmode%28current_supported___%29.md): Creates a command that changes the repeat mode for media playback.
- [changeShuffleMode(current:supported:\_:)](mediacommand/changeshufflemode%28current_supported___%29.md): Creates a command that changes the shuffle mode for media playback.
- [feedback(title:shortTitle:status:\_:)](mediacommand/feedback%28title_shorttitle_status___%29.md): Creates a command that handles user feedback (positive, neutral, or negative) for the current content.
- [next(\_:)](mediacommand/next%28__%29.md): Creates a command that advances to the next track in the playback queue.
- [pause(\_:)](mediacommand/pause%28__%29.md): Creates a command that pauses media playback.
- [play(\_:)](mediacommand/play%28__%29.md): Creates a command that starts media playback.
- [previous(\_:)](mediacommand/previous%28__%29.md): Creates a command that returns to the previous track in the playback queue.
- [seekBackward(beginAction:endAction:)](mediacommand/seekbackward%28beginaction_endaction_%29.md): Creates a command that rewinds through the media.
- [seekForward(beginAction:endAction:)](mediacommand/seekforward%28beginaction_endaction_%29.md): Creates a command that fast-forwards through the media.
- [seekToPosition(\_:)](mediacommand/seektoposition%28__%29.md): Creates a command that seeks to a specific position in the media.
- [skipBackward(preferredIntervals:\_:)](mediacommand/skipbackward%28preferredintervals___%29.md): Creates a command that skips backward in the media by a specified time interval.
- [skipForward(preferredIntervals:\_:)](mediacommand/skipforward%28preferredintervals___%29.md): Creates a command that skips forward in the media by a specified time interval.
- [stop(\_:)](mediacommand/stop%28__%29.md): Creates a command that stops media playback.
- [togglePlayPause(\_:)](mediacommand/toggleplaypause%28__%29.md): Creates a command that toggles between play and pause states.

### Enumerations

- [MediaCommand.FeedbackStatus](mediacommand/feedbackstatus.md): The feedback status for a media item.
- [MediaCommand.RepeatMode](mediacommand/repeatmode.md): The repeat mode for media playback.
- [MediaCommand.ShuffleMode](mediacommand/shufflemode.md): The shuffle mode for media playback.

## See Also

### Creating commands

- [enabled(\_:)](mediacommand/enabled%28__%29.md): Sets the enabled state for this command.
