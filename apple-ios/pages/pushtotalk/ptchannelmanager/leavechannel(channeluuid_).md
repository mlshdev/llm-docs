> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanager/leavechannel(channeluuid:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanager/leavechannel(channeluuid:))

# leaveChannel(channelUUID:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Leaves a channel with the identifier.

## Declaration

```swift
func leaveChannel(channelUUID: UUID)
```

## Parameters

- `channelUUID`: The channel identifier.

<a id="Discussion"></a>

## Discussion

If successful, you receive a callback from [channelManager(\_:didLeaveChannel:reason:)](../ptchannelmanagerdelegate/channelmanager%28__didleavechannel_reason_%29.md) with `PTChannelLeaveReason.programmaticRequest`; otherwise, you receive a failure reason through [channelManager(\_:failedToLeaveChannel:error:)](../ptchannelmanagerdelegate/channelmanager%28__failedtoleavechannel_error_%29.md).

## See Also

### Joining and leaving a channel

- [requestJoinChannel(channelUUID:descriptor:)](requestjoinchannel%28channeluuid_descriptor_%29.md): Joins a channel with the identifier and descriptor you specify.

# leaveChannelWithUUID: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Leaves a channel with the identifier.

## Declaration

```objectivec
- (void) leaveChannelWithUUID:(NSUUID *) channelUUID;
```

## Parameters

- `channelUUID`: The channel identifier.

<a id="Discussion"></a>

## Discussion

If successful, you receive a callback from [channelManager:didLeaveChannelWithUUID:reason:](../ptchannelmanagerdelegate/channelmanager%28__didleavechannel_reason_%29.md) with `PTChannelLeaveReason.programmaticRequest`; otherwise, you receive a failure reason through [channelManager:failedToLeaveChannelWithUUID:error:](../ptchannelmanagerdelegate/channelmanager%28__failedtoleavechannel_error_%29.md).

## See Also

### Joining and leaving a channel

- [requestJoinChannelWithUUID:descriptor:](requestjoinchannel%28channeluuid_descriptor_%29.md): Joins a channel with the identifier and descriptor you specify.
