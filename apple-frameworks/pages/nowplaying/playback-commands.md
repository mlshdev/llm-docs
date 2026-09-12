> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/playback-commands](https://developer.apple.com/documentation/nowplaying/playback-commands)

# Playback commands

**Framework:** Now Playing  
**Kind:** API Collection

Declare the playback controls your app supports.

<a id="Overview"></a>

## Overview

Use [MediaCommand](mediacommand.md) to define the controls available for your Now Playing session. The system displays these controls on the Lock Screen, Control Center, and connected accessories. Each command takes an action closure that the system invokes when someone interacts with a control.

Return an array of commands from your [commands](mediasessionrepresentable/commands.md) property. Create each command with a static factory method on [MediaCommand](mediacommand.md):

```swift
var commands: [MediaCommand] {
    [
        .play { self.play() },
        .pause { self.pause() },
        .next { self.next() }.enabled(hasNextTrack),
        .previous { self.previous() }.enabled(hasPreviousTrack),
        .seekToPosition { time in
            self.seek(to: time)
        },
    ]
}
```

Use [enabled(\_:)](mediacommand/enabled%28__%29.md) to make a command available or unavailable based on your app’s state. Unavailable commands still appear in the interface, but the system doesn’t invoke their handler.

## Topics

### Creating commands

- [MediaCommand](mediacommand.md): A command that describes a media control action for a Now Playing session.
- [enabled(\_:)](mediacommand/enabled%28__%29.md): Sets the enabled state for this command.

### Controlling playback

- [play(\_:)](mediacommand/play%28__%29.md): Creates a command that starts media playback.
- [pause(\_:)](mediacommand/pause%28__%29.md): Creates a command that pauses media playback.
- [stop(\_:)](mediacommand/stop%28__%29.md): Creates a command that stops media playback.
- [togglePlayPause(\_:)](mediacommand/toggleplaypause%28__%29.md): Creates a command that toggles between play and pause states.

### Navigating commands

- [next(\_:)](mediacommand/next%28__%29.md): Creates a command that advances to the next track in the playback queue.
- [previous(\_:)](mediacommand/previous%28__%29.md): Creates a command that returns to the previous track in the playback queue.
- [skipForward(preferredIntervals:\_:)](mediacommand/skipforward%28preferredintervals___%29.md): Creates a command that skips forward in the media by a specified time interval.
- [skipBackward(preferredIntervals:\_:)](mediacommand/skipbackward%28preferredintervals___%29.md): Creates a command that skips backward in the media by a specified time interval.

### Seeking

- [seekToPosition(\_:)](mediacommand/seektoposition%28__%29.md): Creates a command that seeks to a specific position in the media.
- [seekForward(beginAction:endAction:)](mediacommand/seekforward%28beginaction_endaction_%29.md): Creates a command that fast-forwards through the media.
- [seekBackward(beginAction:endAction:)](mediacommand/seekbackward%28beginaction_endaction_%29.md): Creates a command that rewinds through the media.

### Changing playback modes

- [changePlaybackRate(supported:\_:)](mediacommand/changeplaybackrate%28supported___%29.md): Creates a command that changes the playback rate of the media.
- [changeRepeatMode(current:supported:\_:)](mediacommand/changerepeatmode%28current_supported___%29.md): Creates a command that changes the repeat mode for media playback.
- [changeShuffleMode(current:supported:\_:)](mediacommand/changeshufflemode%28current_supported___%29.md): Creates a command that changes the shuffle mode for media playback.
- [MediaCommand.RepeatMode](mediacommand/repeatmode.md): The repeat mode for media playback.
- [MediaCommand.ShuffleMode](mediacommand/shufflemode.md): The shuffle mode for media playback.

### Providing feedback

- [feedback(title:shortTitle:status:\_:)](mediacommand/feedback%28title_shorttitle_status___%29.md): Creates a command that handles user feedback (positive, neutral, or negative) for the current content.
- [MediaCommand.FeedbackStatus](mediacommand/feedbackstatus.md): The feedback status for a media item.

## See Also

### Playback

- [MediaPlaybackSnapshot](mediaplaybacksnapshot.md): A snapshot of playback state and timing for a Now Playing session.
- [Content types and metadata](content-types-and-metadata.md): Describe the media your app is playing.
