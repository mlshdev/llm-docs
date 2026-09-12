> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusicsequenceloadoptions/smf_channelstotracks](https://developer.apple.com/documentation/avfaudio/avmusicsequenceloadoptions/smf_channelstotracks)

# smf_ChannelsToTracks (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option that represents data on different MIDI channels mapped to multiple tracks.

## Declaration

```swift
static var smf_ChannelsToTracks: AVMusicSequenceLoadOptions { get }
```

<a id="Discussion"></a>

## Discussion

The MIDI sequence contains a tempo track, one track for each MIDI channel in the SMF, and one track (the last track) for `SysEx` and `MetaEvents`.

# AVMusicSequenceLoadSMF_ChannelsToTracks (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option that represents data on different MIDI channels mapped to multiple tracks.

## Declaration

```objectivec
AVMusicSequenceLoadSMF_ChannelsToTracks
```

<a id="Discussion"></a>

## Discussion

The MIDI sequence contains a tempo track, one track for each MIDI channel in the SMF, and one track (the last track) for `SysEx` and `MetaEvents`.
