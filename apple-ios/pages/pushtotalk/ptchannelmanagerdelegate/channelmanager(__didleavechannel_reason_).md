> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:didleavechannel:reason:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:didleavechannel:reason:))

# channelManager(\_:didLeaveChannel:reason:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer that the app left a Push to Talk channel.

## Declaration

```swift
func channelManager(_ channelManager: PTChannelManager, didLeaveChannel channelUUID: UUID, reason: PTChannelLeaveReason)
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `reason`: The leave reason.

## See Also

### Joining and leaving a channel

- [channelManager(\_:didJoinChannel:reason:)](channelmanager%28__didjoinchannel_reason_%29.md): Tells the observer that the app successfully joined a Push to Talk channel.
- [channelManager(\_:failedToJoinChannel:error:)](channelmanager%28__failedtojoinchannel_error_%29.md): Tells the observer that the app failed to join a Push to Talk channel.
- [channelManager(\_:failedToLeaveChannel:error:)](channelmanager%28__failedtoleavechannel_error_%29.md): Tells the observer that the app failed to leave a Push to Talk channel.

# channelManager:didLeaveChannelWithUUID:reason: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer that the app left a Push to Talk channel.

## Declaration

```objectivec
- (void) channelManager:(PTChannelManager *) channelManager didLeaveChannelWithUUID:(NSUUID *) channelUUID reason:(PTChannelLeaveReason) reason;
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `reason`: The leave reason.

## See Also

### Joining and leaving a channel

- [channelManager:didJoinChannelWithUUID:reason:](channelmanager%28__didjoinchannel_reason_%29.md): Tells the observer that the app successfully joined a Push to Talk channel.
- [channelManager:failedToJoinChannelWithUUID:error:](channelmanager%28__failedtojoinchannel_error_%29.md): Tells the observer that the app failed to join a Push to Talk channel.
- [channelManager:failedToLeaveChannelWithUUID:error:](channelmanager%28__failedtoleavechannel_error_%29.md): Tells the observer that the app failed to leave a Push to Talk channel.
