> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanager](https://developer.apple.com/documentation/pushtotalk/ptchannelmanager)

# PTChannelManager (Swift)

**Framework:** Push to Talk  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that represents a push-to-talk channel manager.

## Declaration

```swift
class PTChannelManager
```

## Mentioned In

- [Creating a Push to Talk app](creating-a-push-to-talk-app.md)

<a id="overview"></a>

## Overview

You must create a channel manager upon launching your app, otherwise the system tears down channels and their ability to receive push notifications. By providing a [PTChannelRestorationDelegate](ptchannelrestorationdelegate.md), an app can rejoin or leave a previously active channel the system knows about. Once the channel resoration process completes, the system provides a [PTChannelManager](ptchannelmanager.md) instance.

```swift
// Create a channel manager instance.    
channelManager = try await PTChannelManager.channelManager(delegate: self,
                                                           restorationDelegate: self)
```

Multiple calls to [channelManager(delegate:restorationDelegate:completionHandler:)](ptchannelmanager/channelmanager%28delegate_restorationdelegate_completionhandler_%29.md) result in the system returning the same shared instance, so store the channel manager in an instance variable.

## Topics

### Creating a channel manager

- [channelManager(delegate:restorationDelegate:completionHandler:)](ptchannelmanager/channelmanager%28delegate_restorationdelegate_completionhandler_%29.md): Creates a channel manager with the configuration you specify.

### Inspecting the channel manager

- [activeChannelUUID](ptchannelmanager/activechanneluuid.md): The unique identifier of the active channel for the app.

### Joining and leaving a channel

- [requestJoinChannel(channelUUID:descriptor:)](ptchannelmanager/requestjoinchannel%28channeluuid_descriptor_%29.md): Joins a channel with the identifier and descriptor you specify.
- [leaveChannel(channelUUID:)](ptchannelmanager/leavechannel%28channeluuid_%29.md): Leaves a channel with the identifier.

### Setting the transmission mode

- [setTransmissionMode(\_:channelUUID:completionHandler:)](ptchannelmanager/settransmissionmode%28__channeluuid_completionhandler_%29.md): Sets the audio transmission mode for the channel you specify.

### Starting and stopping transmission

- [requestBeginTransmitting(channelUUID:)](ptchannelmanager/requestbegintransmitting%28channeluuid_%29.md): Begins an audio transmission with the channel identifer you specify.
- [stopTransmitting(channelUUID:)](ptchannelmanager/stoptransmitting%28channeluuid_%29.md): Stops an audio transmission with the channel identifer you specify.
- [setAccessoryButtonEventsEnabled(\_:channelUUID:completionHandler:)](ptchannelmanager/setaccessorybuttoneventsenabled%28__channeluuid_completionhandler_%29.md): Maps supported accessory button events to actions that begin and end transmission.

### Setting participants

- [setActiveRemoteParticipant(\_:channelUUID:completionHandler:)](ptchannelmanager/setactiveremoteparticipant%28__channeluuid_completionhandler_%29.md): Sets the active remote participant with the channel identifier.

### Setting the channel descriptor

- [setChannelDescriptor(\_:channelUUID:completionHandler:)](ptchannelmanager/setchanneldescriptor%28__channeluuid_completionhandler_%29.md): Sets the channel description.

### Setting the service status

- [setServiceStatus(\_:channelUUID:completionHandler:)](ptchannelmanager/setservicestatus%28__channeluuid_completionhandler_%29.md): Sets the service connection status.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Creating a Push to Talk app](creating-a-push-to-talk-app.md): Build a walkie-talkie style app with system user interface controls.

# PTChannelManager (Objective-C)

**Framework:** Push to Talk  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that represents a push-to-talk channel manager.

## Declaration

```objectivec
@interface PTChannelManager : NSObject
```

## Mentioned In

- [Creating a Push to Talk app](creating-a-push-to-talk-app.md)

<a id="overview"></a>

## Overview

You must create a channel manager upon launching your app, otherwise the system tears down channels and their ability to receive push notifications. By providing a [PTChannelRestorationDelegate](ptchannelrestorationdelegate.md), an app can rejoin or leave a previously active channel the system knows about. Once the channel resoration process completes, the system provides a [PTChannelManager](ptchannelmanager.md) instance.

```swift
// Create a channel manager instance.    
channelManager = try await PTChannelManager.channelManager(delegate: self,
                                                           restorationDelegate: self)
```

Multiple calls to [channelManagerWithDelegate:restorationDelegate:completionHandler:](ptchannelmanager/channelmanager%28delegate_restorationdelegate_completionhandler_%29.md) result in the system returning the same shared instance, so store the channel manager in an instance variable.

## Topics

### Creating a channel manager

- [channelManagerWithDelegate:restorationDelegate:completionHandler:](ptchannelmanager/channelmanager%28delegate_restorationdelegate_completionhandler_%29.md): Creates a channel manager with the configuration you specify.

### Inspecting the channel manager

- [activeChannelUUID](ptchannelmanager/activechanneluuid.md): The unique identifier of the active channel for the app.

### Joining and leaving a channel

- [requestJoinChannelWithUUID:descriptor:](ptchannelmanager/requestjoinchannel%28channeluuid_descriptor_%29.md): Joins a channel with the identifier and descriptor you specify.
- [leaveChannelWithUUID:](ptchannelmanager/leavechannel%28channeluuid_%29.md): Leaves a channel with the identifier.

### Setting the transmission mode

- [setTransmissionMode:forChannelUUID:completionHandler:](ptchannelmanager/settransmissionmode%28__channeluuid_completionhandler_%29.md): Sets the audio transmission mode for the channel you specify.

### Starting and stopping transmission

- [requestBeginTransmittingWithChannelUUID:](ptchannelmanager/requestbegintransmitting%28channeluuid_%29.md): Begins an audio transmission with the channel identifer you specify.
- [stopTransmittingWithChannelUUID:](ptchannelmanager/stoptransmitting%28channeluuid_%29.md): Stops an audio transmission with the channel identifer you specify.
- [setAccessoryButtonEventsEnabled:forChannelUUID:completionHandler:](ptchannelmanager/setaccessorybuttoneventsenabled%28__channeluuid_completionhandler_%29.md): Maps supported accessory button events to actions that begin and end transmission.

### Setting participants

- [setActiveRemoteParticipant:forChannelUUID:completionHandler:](ptchannelmanager/setactiveremoteparticipant%28__channeluuid_completionhandler_%29.md): Sets the active remote participant with the channel identifier.

### Setting the channel descriptor

- [setChannelDescriptor:forChannelUUID:completionHandler:](ptchannelmanager/setchanneldescriptor%28__channeluuid_completionhandler_%29.md): Sets the channel description.

### Setting the service status

- [setServiceStatus:forChannelUUID:completionHandler:](ptchannelmanager/setservicestatus%28__channeluuid_completionhandler_%29.md): Sets the service connection status.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Essentials

- [Creating a Push to Talk app](creating-a-push-to-talk-app.md): Build a walkie-talkie style app with system user interface controls.
