> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audioqueuebuffer/init(maudiodatabytescapacity:maudiodata:maudiodatabytesize:muserdata:mpacketdescriptioncapacity:mpacketdescriptions:mpacketdescriptioncount:)

# init(mAudioDataBytesCapacity:mAudioData:mAudioDataByteSize:mUserData:mPacketDescriptionCapacity:mPacketDescriptions:mPacketDescriptionCount:)

**Framework:** Audio Toolbox  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
init(mAudioDataBytesCapacity: UInt32, mAudioData: UnsafeMutableRawPointer, mAudioDataByteSize: UInt32, mUserData: UnsafeMutableRawPointer?, mPacketDescriptionCapacity: UInt32, mPacketDescriptions: UnsafeMutablePointer<AudioStreamPacketDescription>?, mPacketDescriptionCount: UInt32)
```
