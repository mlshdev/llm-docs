> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/enable(_:cable:onchannel:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/enable(_:cable:onchannel:))

# enable(\_:cable:onChannel:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

## Declaration

```swift
func enable(_ profile: MIDICIProfile, cable: UInt8, onChannel channel: MIDIChannelNumber) throws
```

## See Also

### Configuring the Channel Capabilities

- [channelCapabilities](channelcapabilities.md): Expresses valid combinations of input and output channels.
- [channelMap](channelmap.md)
- [profileState(forCable:channel:)](profilestate%28forcable_channel_%29.md)
- [disableProfile(\_:cable:onChannel:)](disableprofile%28__cable_onchannel_%29.md)
- [profileChangedBlock](profilechangedblock.md)

# enableProfile:cable:onChannel:error: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

## Declaration

```objectivec
- (BOOL) enableProfile:(MIDICIProfile *) profile cable:(uint8_t) cable onChannel:(MIDIChannelNumber) channel error:(NSError **) outError;
```

## See Also

### Configuring the Channel Capabilities

- [channelCapabilities](channelcapabilities.md): Expresses valid combinations of input and output channels.
- [channelMap](channelmap.md)
- [profileStateForCable:channel:](profilestate%28forcable_channel_%29.md)
- [disableProfile:cable:onChannel:error:](disableprofile%28__cable_onchannel_%29.md)
- [profileChangedBlock](profilechangedblock.md)
