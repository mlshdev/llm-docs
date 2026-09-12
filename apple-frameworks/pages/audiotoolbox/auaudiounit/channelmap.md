> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/channelmap](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/channelmap)

# channelMap (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```swift
var channelMap: [NSNumber]? { get set }
```

## See Also

### Configuring the Channel Capabilities

- [channelCapabilities](channelcapabilities.md): Expresses valid combinations of input and output channels.
- [profileState(forCable:channel:)](profilestate%28forcable_channel_%29.md)
- [enable(\_:cable:onChannel:)](enable%28__cable_onchannel_%29.md)
- [disableProfile(\_:cable:onChannel:)](disableprofile%28__cable_onchannel_%29.md)
- [profileChangedBlock](profilechangedblock.md)

# channelMap (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSNumber *> * channelMap;
```

```objectivec
@property (atomic, copy, nullable) NSArray<NSNumber *> * channelMap;
```

## See Also

### Configuring the Channel Capabilities

- [channelCapabilities](channelcapabilities.md): Expresses valid combinations of input and output channels.
- [profileStateForCable:channel:](profilestate%28forcable_channel_%29.md)
- [enableProfile:cable:onChannel:error:](enable%28__cable_onchannel_%29.md)
- [disableProfile:cable:onChannel:error:](disableprofile%28__cable_onchannel_%29.md)
- [profileChangedBlock](profilechangedblock.md)
