> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:didjoinchannel:reason:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:didjoinchannel:reason:))

# channelManager(\_:didJoinChannel:reason:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer that the app successfully joined a Push to Talk channel.

## Declaration

```swift
func channelManager(_ channelManager: PTChannelManager, didJoinChannel channelUUID: UUID, reason: PTChannelJoinReason)
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `reason`: The join reason.

## See Also

### Joining and leaving a channel

- [channelManager(\_:didLeaveChannel:reason:)](channelmanager%28__didleavechannel_reason_%29.md): Tells the observer that the app left a Push to Talk channel.
- [channelManager(\_:failedToJoinChannel:error:)](channelmanager%28__failedtojoinchannel_error_%29.md): Tells the observer that the app failed to join a Push to Talk channel.
- [channelManager(\_:failedToLeaveChannel:error:)](channelmanager%28__failedtoleavechannel_error_%29.md): Tells the observer that the app failed to leave a Push to Talk channel.

# channelManager:didJoinChannelWithUUID:reason: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer that the app successfully joined a Push to Talk channel.

## Declaration

```objectivec
- (void) channelManager:(PTChannelManager *) channelManager didJoinChannelWithUUID:(NSUUID *) channelUUID reason:(PTChannelJoinReason) reason;
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `reason`: The join reason.

## See Also

### Joining and leaving a channel

- [channelManager:didLeaveChannelWithUUID:reason:](channelmanager%28__didleavechannel_reason_%29.md): Tells the observer that the app left a Push to Talk channel.
- [channelManager:failedToJoinChannelWithUUID:error:](channelmanager%28__failedtojoinchannel_error_%29.md): Tells the observer that the app failed to join a Push to Talk channel.
- [channelManager:failedToLeaveChannelWithUUID:error:](channelmanager%28__failedtoleavechannel_error_%29.md): Tells the observer that the app failed to leave a Push to Talk channel.
