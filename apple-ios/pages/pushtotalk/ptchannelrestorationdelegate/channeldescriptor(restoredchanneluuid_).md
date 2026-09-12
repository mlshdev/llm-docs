> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelrestorationdelegate/channeldescriptor(restoredchanneluuid:)](https://developer.apple.com/documentation/pushtotalk/ptchannelrestorationdelegate/channeldescriptor(restoredchanneluuid:))

# channelDescriptor(restoredChannelUUID:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells your observer the system restored the channel.

## Declaration

```swift
func channelDescriptor(restoredChannelUUID channelUUID: UUID) -> PTChannelDescriptor
```

## Parameters

- `channelUUID`: The channel identifier.

<a id="return-value"></a>

## Return Value

An object that describes a channel you associate with the unique identifier.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

If the system tracks a channel, but there’s no pending push, the system calls this method when it’s unable to use cached data. If your app launches because of user interaction with the system user interface, the system calls this method as long as there’s no pending push.

# channelDescriptorForRestoredChannelUUID: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells your observer the system restored the channel.

## Declaration

```objectivec
- (PTChannelDescriptor *) channelDescriptorForRestoredChannelUUID:(NSUUID *) channelUUID;
```

## Parameters

- `channelUUID`: The channel identifier.

<a id="return-value"></a>

## Return Value

An object that describes a channel you associate with the unique identifier.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

If the system tracks a channel, but there’s no pending push, the system calls this method when it’s unable to use cached data. If your app launches because of user interaction with the system user interface, the system calls this method as long as there’s no pending push.
