> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/musicsequenceloadflags/smf_channelstotracks](https://developer.apple.com/documentation/audiotoolbox/musicsequenceloadflags/smf_channelstotracks)

# smf_ChannelsToTracks (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

If this flag is set the resultant Sequence will contain a tempo track, 1 track for each MIDI Channel that is found in the SMF, 1 track for SysEx or MetaEvents - and this will be the last track in the sequence after the LoadSMFWithFlags calls.

## Declaration

```swift
static var smf_ChannelsToTracks: MusicSequenceLoadFlags { get }
```

# kMusicSequenceLoadSMF_ChannelsToTracks (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

If this flag is set the resultant Sequence will contain a tempo track, 1 track for each MIDI Channel that is found in the SMF, 1 track for SysEx or MetaEvents - and this will be the last track in the sequence after the LoadSMFWithFlags calls.

## Declaration

```objectivec
kMusicSequenceLoadSMF_ChannelsToTracks
```
