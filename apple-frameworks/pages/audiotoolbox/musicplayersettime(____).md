> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicplayersettime(_:_:)](https://developer.apple.com/documentation/audiotoolbox/musicplayersettime(_:_:))

# MusicPlayerSetTime(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Sets the playback point for a music player, in beats.

## Declaration

```swift
func MusicPlayerSetTime(_ inPlayer: MusicPlayer, _ inTime: MusicTimeStamp) -> OSStatus
```

## Parameters

- `inPlayer`: The music player you want to set the playback point on.
- `inTime`: The time, in beats, to set the playback point to.

<a id="return-value"></a>

## Return Value

A result code

<a id="Discussion"></a>

## Discussion

You can call this function while a music player is stopped or playing. If playing at the time of the call, playback continues at the specified point. No range checking on the `inTime` value is performed by this function.

## See Also

### Managing a Music Player

- [NewMusicPlayer(\_:)](newmusicplayer%28__%29.md): Creates a new music player.
- [DisposeMusicPlayer(\_:)](disposemusicplayer%28__%29.md): Disposes of a music player.
- [MusicPlayerGetBeatsForHostTime(\_:\_:\_:)](musicplayergetbeatsforhosttime%28______%29.md): Gets the beat number associated a specified host time.
- [MusicPlayerGetHostTimeForBeats(\_:\_:\_:)](musicplayergethosttimeforbeats%28______%29.md): Gets the host time associated with a specified beat.
- [MusicPlayerGetPlayRateScalar(\_:\_:)](musicplayergetplayratescalar%28____%29.md): Gets the playback rate multiplier for a music player.
- [MusicPlayerGetSequence(\_:\_:)](musicplayergetsequence%28____%29.md): Gets the music sequence associated with a music player.
- [MusicPlayerGetTime(\_:\_:)](musicplayergettime%28____%29.md): Gets the playback point for a music player, in beats.
- [MusicPlayerIsPlaying(\_:\_:)](musicplayerisplaying%28____%29.md): Indicates whether or not a music player is playing.
- [MusicPlayerPreroll(\_:)](musicplayerpreroll%28__%29.md): Prepares a music player to play.
- [MusicPlayerSetPlayRateScalar(\_:\_:)](musicplayersetplayratescalar%28____%29.md): Sets a playback rate multiplier for a music player.
- [MusicPlayerSetSequence(\_:\_:)](musicplayersetsequence%28____%29.md): Sets the music sequence for the music player to play.
- [MusicPlayerStart(\_:)](musicplayerstart%28__%29.md): Starts playback of a music player.
- [MusicPlayerStop(\_:)](musicplayerstop%28__%29.md): Stops playback of a music player.
- [MusicPlayer](musicplayer.md): A music player plays a music sequence (of type `MusicSequence`).
- [MusicTimeStamp](musictimestamp.md): A timestamp for use by a music sequence.

# MusicPlayerSetTime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Sets the playback point for a music player, in beats.

## Declaration

```objectivec
extern OSStatus MusicPlayerSetTime(MusicPlayer inPlayer, MusicTimeStamp inTime);
```

## Parameters

- `inPlayer`: The music player you want to set the playback point on.
- `inTime`: The time, in beats, to set the playback point to.

<a id="return-value"></a>

## Return Value

A result code

<a id="Discussion"></a>

## Discussion

You can call this function while a music player is stopped or playing. If playing at the time of the call, playback continues at the specified point. No range checking on the `inTime` value is performed by this function.

## See Also

### Managing a Music Player

- [NewMusicPlayer](newmusicplayer%28__%29.md): Creates a new music player.
- [DisposeMusicPlayer](disposemusicplayer%28__%29.md): Disposes of a music player.
- [MusicPlayerGetBeatsForHostTime](musicplayergetbeatsforhosttime%28______%29.md): Gets the beat number associated a specified host time.
- [MusicPlayerGetHostTimeForBeats](musicplayergethosttimeforbeats%28______%29.md): Gets the host time associated with a specified beat.
- [MusicPlayerGetPlayRateScalar](musicplayergetplayratescalar%28____%29.md): Gets the playback rate multiplier for a music player.
- [MusicPlayerGetSequence](musicplayergetsequence%28____%29.md): Gets the music sequence associated with a music player.
- [MusicPlayerGetTime](musicplayergettime%28____%29.md): Gets the playback point for a music player, in beats.
- [MusicPlayerIsPlaying](musicplayerisplaying%28____%29.md): Indicates whether or not a music player is playing.
- [MusicPlayerPreroll](musicplayerpreroll%28__%29.md): Prepares a music player to play.
- [MusicPlayerSetPlayRateScalar](musicplayersetplayratescalar%28____%29.md): Sets a playback rate multiplier for a music player.
- [MusicPlayerSetSequence](musicplayersetsequence%28____%29.md): Sets the music sequence for the music player to play.
- [MusicPlayerStart](musicplayerstart%28__%29.md): Starts playback of a music player.
- [MusicPlayerStop](musicplayerstop%28__%29.md): Stops playback of a music player.
- [MusicPlayer](musicplayer.md): A music player plays a music sequence (of type `MusicSequence`).
- [MusicTimeStamp](musictimestamp.md): A timestamp for use by a music sequence.
