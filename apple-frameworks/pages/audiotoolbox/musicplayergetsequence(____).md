> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicplayergetsequence(_:_:)](https://developer.apple.com/documentation/audiotoolbox/musicplayergetsequence(_:_:))

# MusicPlayerGetSequence(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

Gets the music sequence associated with a music player.

## Declaration

```swift
func MusicPlayerGetSequence(_ inPlayer: MusicPlayer, _ outSequence: UnsafeMutablePointer<MusicSequence?>) -> OSStatus
```

## Parameters

- `inPlayer`: The music player whose music sequence you want to get.
- `outSequence`: On output, the music sequence associated with the music player.

<a id="return-value"></a>

## Return Value

A result code. If the music player does not have a sequence set, this function returns `kAudioToolboxErr_NoSequence`.

## See Also

### Managing a Music Player

- [NewMusicPlayer(\_:)](newmusicplayer%28__%29.md): Creates a new music player.
- [DisposeMusicPlayer(\_:)](disposemusicplayer%28__%29.md): Disposes of a music player.
- [MusicPlayerGetBeatsForHostTime(\_:\_:\_:)](musicplayergetbeatsforhosttime%28______%29.md): Gets the beat number associated a specified host time.
- [MusicPlayerGetHostTimeForBeats(\_:\_:\_:)](musicplayergethosttimeforbeats%28______%29.md): Gets the host time associated with a specified beat.
- [MusicPlayerGetPlayRateScalar(\_:\_:)](musicplayergetplayratescalar%28____%29.md): Gets the playback rate multiplier for a music player.
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

# MusicPlayerGetSequence (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

Gets the music sequence associated with a music player.

## Declaration

```objectivec
extern OSStatus MusicPlayerGetSequence(MusicPlayer inPlayer, MusicSequence*outSequence);
```

## Parameters

- `inPlayer`: The music player whose music sequence you want to get.
- `outSequence`: On output, the music sequence associated with the music player.

<a id="return-value"></a>

## Return Value

A result code. If the music player does not have a sequence set, this function returns `kAudioToolboxErr_NoSequence`.

## See Also

### Managing a Music Player

- [NewMusicPlayer](newmusicplayer%28__%29.md): Creates a new music player.
- [DisposeMusicPlayer](disposemusicplayer%28__%29.md): Disposes of a music player.
- [MusicPlayerGetBeatsForHostTime](musicplayergetbeatsforhosttime%28______%29.md): Gets the beat number associated a specified host time.
- [MusicPlayerGetHostTimeForBeats](musicplayergethosttimeforbeats%28______%29.md): Gets the host time associated with a specified beat.
- [MusicPlayerGetPlayRateScalar](musicplayergetplayratescalar%28____%29.md): Gets the playback rate multiplier for a music player.
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
