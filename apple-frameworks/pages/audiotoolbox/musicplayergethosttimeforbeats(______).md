> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicplayergethosttimeforbeats(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/musicplayergethosttimeforbeats(_:_:_:))

# MusicPlayerGetHostTimeForBeats(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Gets the host time associated with a specified beat.

## Declaration

```swift
func MusicPlayerGetHostTimeForBeats(_ inPlayer: MusicPlayer, _ inBeats: MusicTimeStamp, _ outHostTime: UnsafeMutablePointer<UInt64>) -> OSStatus
```

## Parameters

- `inPlayer`: The music player that you are querying.
- `inBeats`: The beat number that you want the host time for.
- `outHostTime`: On output, the host time associated with the `inBeats` value.

<a id="return-value"></a>

## Return Value

A result code. This function returns an error if the player is not playing.

<a id="Discussion"></a>

## Discussion

This function is valid only if the music player is playing. For converting between beats and seconds, see [MusicSequenceGetSecondsForBeats(\_:\_:\_:)](musicsequencegetsecondsforbeats%28______%29.md) and [MusicSequenceGetBeatsForSeconds(\_:\_:\_:)](musicsequencegetbeatsforseconds%28______%29.md).

## See Also

### Managing a Music Player

- [NewMusicPlayer(\_:)](newmusicplayer%28__%29.md): Creates a new music player.
- [DisposeMusicPlayer(\_:)](disposemusicplayer%28__%29.md): Disposes of a music player.
- [MusicPlayerGetBeatsForHostTime(\_:\_:\_:)](musicplayergetbeatsforhosttime%28______%29.md): Gets the beat number associated a specified host time.
- [MusicPlayerGetPlayRateScalar(\_:\_:)](musicplayergetplayratescalar%28____%29.md): Gets the playback rate multiplier for a music player.
- [MusicPlayerGetSequence(\_:\_:)](musicplayergetsequence%28____%29.md): Gets the music sequence associated with a music player.
- [MusicPlayerGetTime(\_:\_:)](musicplayergettime%28____%29.md): Gets the playback point for a music player, in beats.
- [MusicPlayerIsPlaying(\_:\_:)](musicplayerisplaying%28____%29.md): Indicates whether or not a music player is playing.
- [MusicPlayerPreroll(\_:)](musicplayerpreroll%28__%29.md): Prepares a music player to play.
- [MusicPlayerSetPlayRateScalar(\_:\_:)](musicplayersetplayratescalar%28____%29.md): Sets a playback rate multiplier for a music player.
- [MusicPlayerSetSequence(\_:\_:)](musicplayersetsequence%28____%29.md): Sets the music sequence for the music player to play.
- [MusicPlayerSetTime(\_:\_:)](musicplayersettime%28____%29.md): Sets the playback point for a music player, in beats.
- [MusicPlayerStart(\_:)](musicplayerstart%28__%29.md): Starts playback of a music player.
- [MusicPlayerStop(\_:)](musicplayerstop%28__%29.md): Stops playback of a music player.
- [MusicPlayer](musicplayer.md): A music player plays a music sequence (of type `MusicSequence`).
- [MusicTimeStamp](musictimestamp.md): A timestamp for use by a music sequence.

# MusicPlayerGetHostTimeForBeats (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Gets the host time associated with a specified beat.

## Declaration

```objectivec
extern OSStatus MusicPlayerGetHostTimeForBeats(MusicPlayer inPlayer, MusicTimeStamp inBeats, UInt64 *outHostTime);
```

## Parameters

- `inPlayer`: The music player that you are querying.
- `inBeats`: The beat number that you want the host time for.
- `outHostTime`: On output, the host time associated with the `inBeats` value.

<a id="return-value"></a>

## Return Value

A result code. This function returns an error if the player is not playing.

<a id="Discussion"></a>

## Discussion

This function is valid only if the music player is playing. For converting between beats and seconds, see [MusicSequenceGetSecondsForBeats](musicsequencegetsecondsforbeats%28______%29.md) and [MusicSequenceGetBeatsForSeconds](musicsequencegetbeatsforseconds%28______%29.md).

## See Also

### Managing a Music Player

- [NewMusicPlayer](newmusicplayer%28__%29.md): Creates a new music player.
- [DisposeMusicPlayer](disposemusicplayer%28__%29.md): Disposes of a music player.
- [MusicPlayerGetBeatsForHostTime](musicplayergetbeatsforhosttime%28______%29.md): Gets the beat number associated a specified host time.
- [MusicPlayerGetPlayRateScalar](musicplayergetplayratescalar%28____%29.md): Gets the playback rate multiplier for a music player.
- [MusicPlayerGetSequence](musicplayergetsequence%28____%29.md): Gets the music sequence associated with a music player.
- [MusicPlayerGetTime](musicplayergettime%28____%29.md): Gets the playback point for a music player, in beats.
- [MusicPlayerIsPlaying](musicplayerisplaying%28____%29.md): Indicates whether or not a music player is playing.
- [MusicPlayerPreroll](musicplayerpreroll%28__%29.md): Prepares a music player to play.
- [MusicPlayerSetPlayRateScalar](musicplayersetplayratescalar%28____%29.md): Sets a playback rate multiplier for a music player.
- [MusicPlayerSetSequence](musicplayersetsequence%28____%29.md): Sets the music sequence for the music player to play.
- [MusicPlayerSetTime](musicplayersettime%28____%29.md): Sets the playback point for a music player, in beats.
- [MusicPlayerStart](musicplayerstart%28__%29.md): Starts playback of a music player.
- [MusicPlayerStop](musicplayerstop%28__%29.md): Stops playback of a music player.
- [MusicPlayer](musicplayer.md): A music player plays a music sequence (of type `MusicSequence`).
- [MusicTimeStamp](musictimestamp.md): A timestamp for use by a music sequence.
