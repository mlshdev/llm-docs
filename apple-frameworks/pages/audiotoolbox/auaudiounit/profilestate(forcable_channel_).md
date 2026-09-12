> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/profilestate(forcable:channel:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/profilestate(forcable:channel:))

# profileState(forCable:channel:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

## Declaration

```swift
func profileState(forCable cable: UInt8, channel: MIDIChannelNumber) -> MIDICIProfileState
```

## See Also

### Configuring the Channel Capabilities

- [channelCapabilities](channelcapabilities.md): Expresses valid combinations of input and output channels.
- [channelMap](channelmap.md)
- [enable(\_:cable:onChannel:)](enable%28__cable_onchannel_%29.md)
- [disableProfile(\_:cable:onChannel:)](disableprofile%28__cable_onchannel_%29.md)
- [profileChangedBlock](profilechangedblock.md)

# profileStateForCable:channel: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

## Declaration

```objectivec
- (MIDICIProfileState *) profileStateForCable:(uint8_t) cable channel:(MIDIChannelNumber) channel;
```

## See Also

### Configuring the Channel Capabilities

- [channelCapabilities](channelcapabilities.md): Expresses valid combinations of input and output channels.
- [channelMap](channelmap.md)
- [enableProfile:cable:onChannel:error:](enable%28__cable_onchannel_%29.md)
- [disableProfile:cable:onChannel:error:](disableprofile%28__cable_onchannel_%29.md)
- [profileChangedBlock](profilechangedblock.md)
