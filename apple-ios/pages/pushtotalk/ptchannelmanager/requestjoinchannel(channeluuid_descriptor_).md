> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanager/requestjoinchannel(channeluuid:descriptor:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanager/requestjoinchannel(channeluuid:descriptor:))

# requestJoinChannel(channelUUID:descriptor:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Joins a channel with the identifier and descriptor you specify.

## Declaration

```swift
func requestJoinChannel(channelUUID: UUID, descriptor: PTChannelDescriptor)
```

## Parameters

- `channelUUID`: The channel identifier.
- `descriptor`: The channel description.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

If successful, you receive a callback from [channelManager(\_:didJoinChannel:reason:)](../ptchannelmanagerdelegate/channelmanager%28__didjoinchannel_reason_%29.md) with `PTChannelJoinReasonProgrammaticRequest`; otherwise, you receive a failure reason through [channelManager(\_:failedToJoinChannel:error:)](../ptchannelmanagerdelegate/channelmanager%28__failedtojoinchannel_error_%29.md).

> **Note**

>  You can only join a channel in the foreground.

The framework uses shared system resources, so only one PTT channel can be active on the system at a time.

```swift
// Create a descriptor an app uses to join a channel.    
let channelImage = UIImage(named: "ChannelImage")    
channelDescriptor = PTChannelDescriptor(name: "The channel name",                                                                             
                                        image: channelImage)

// Join a channel with a unique identifier and descriptor.
channelManager.requestJoinChannel(channelUUID: channelUUID,
                                  descriptor: channelDescriptor)
```

The system uses the same unique identifier when interacting with the manager throughout the life of the channel, so when joining a channel, store the descriptor and UUID for later use.

## See Also

### Joining and leaving a channel

- [leaveChannel(channelUUID:)](leavechannel%28channeluuid_%29.md): Leaves a channel with the identifier.

# requestJoinChannelWithUUID:descriptor: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Joins a channel with the identifier and descriptor you specify.

## Declaration

```objectivec
- (void) requestJoinChannelWithUUID:(NSUUID *) channelUUID descriptor:(PTChannelDescriptor *) descriptor;
```

## Parameters

- `channelUUID`: The channel identifier.
- `descriptor`: The channel description.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

If successful, you receive a callback from [channelManager:didJoinChannelWithUUID:reason:](../ptchannelmanagerdelegate/channelmanager%28__didjoinchannel_reason_%29.md) with `PTChannelJoinReasonProgrammaticRequest`; otherwise, you receive a failure reason through [channelManager:failedToJoinChannelWithUUID:error:](../ptchannelmanagerdelegate/channelmanager%28__failedtojoinchannel_error_%29.md).

> **Note**

>  You can only join a channel in the foreground.

The framework uses shared system resources, so only one PTT channel can be active on the system at a time.

```swift
// Create a descriptor an app uses to join a channel.    
let channelImage = UIImage(named: "ChannelImage")    
channelDescriptor = PTChannelDescriptor(name: "The channel name",                                                                             
                                        image: channelImage)

// Join a channel with a unique identifier and descriptor.
channelManager.requestJoinChannel(channelUUID: channelUUID,
                                  descriptor: channelDescriptor)
```

The system uses the same unique identifier when interacting with the manager throughout the life of the channel, so when joining a channel, store the descriptor and UUID for later use.

## See Also

### Joining and leaving a channel

- [leaveChannelWithUUID:](leavechannel%28channeluuid_%29.md): Leaves a channel with the identifier.
