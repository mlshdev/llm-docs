> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/profilechangedblock](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/profilechangedblock)

# profileChangedBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

## Declaration

```swift
var profileChangedBlock: AUMIDICIProfileChangedBlock? { get set }
```

## See Also

### Configuring the Channel Capabilities

- [channelCapabilities](channelcapabilities.md): Expresses valid combinations of input and output channels.
- [channelMap](channelmap.md)
- [profileState(forCable:channel:)](profilestate%28forcable_channel_%29.md)
- [enable(\_:cable:onChannel:)](enable%28__cable_onchannel_%29.md)
- [disableProfile(\_:cable:onChannel:)](disableprofile%28__cable_onchannel_%29.md)

# profileChangedBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

## Declaration

```objectivec
@property (nonatomic, nullable) AUMIDICIProfileChangedBlock profileChangedBlock;
```

## See Also

### Configuring the Channel Capabilities

- [channelCapabilities](channelcapabilities.md): Expresses valid combinations of input and output channels.
- [channelMap](channelmap.md)
- [profileStateForCable:channel:](profilestate%28forcable_channel_%29.md)
- [enableProfile:cable:onChannel:error:](enable%28__cable_onchannel_%29.md)
- [disableProfile:cable:onChannel:error:](disableprofile%28__cable_onchannel_%29.md)
