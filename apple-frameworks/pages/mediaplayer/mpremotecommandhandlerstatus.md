> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandhandlerstatus](https://developer.apple.com/documentation/mediaplayer/mpremotecommandhandlerstatus)

# MPRemoteCommandHandlerStatus (Swift)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS · visionOS 1.0+ · watchOS 5.0+

Constants indicating the status of a command.

## Declaration

```swift
enum MPRemoteCommandHandlerStatus
```

## Topics

### Constants

- [MPRemoteCommandHandlerStatus.success](mpremotecommandhandlerstatus/success.md): The requested command executed successfully.
- [MPRemoteCommandHandlerStatus.noSuchContent](mpremotecommandhandlerstatus/nosuchcontent.md): The requested command couldn’t execute because its required content isn’t available.
- [MPRemoteCommandHandlerStatus.noActionableNowPlayingItem](mpremotecommandhandlerstatus/noactionablenowplayingitem.md): The requested command couldn’t execute because no Now Playing item is available.
- [MPRemoteCommandHandlerStatus.deviceNotFound](mpremotecommandhandlerstatus/devicenotfound.md): The requested command couldn’t execute because a required device isn’t available.
- [MPRemoteCommandHandlerStatus.commandFailed](mpremotecommandhandlerstatus/commandfailed.md): The requested command failed to execute.

### Initializers

- [init(rawValue:)](mpremotecommandhandlerstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling events

- [addTarget(handler:)](mpremotecommand/addtarget%28handler_%29.md): Adds a block to be called when an event is received.
- [addTarget(\_:action:)](mpremotecommand/addtarget%28__action_%29.md): Adds a target object to be called when an event is received.
- [removeTarget(\_:)](mpremotecommand/removetarget%28__%29.md): Removes a target from the remote command object.
- [removeTarget(\_:action:)](mpremotecommand/removetarget%28__action_%29.md): Removes a target and action from a remote command object.

# MPRemoteCommandHandlerStatus (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS · visionOS 1.0+ · watchOS 5.0+

Constants indicating the status of a command.

## Declaration

```objectivec
enum MPRemoteCommandHandlerStatus : NSInteger;
```

## Topics

### Constants

- [MPRemoteCommandHandlerStatusSuccess](mpremotecommandhandlerstatus/success.md): The requested command executed successfully.
- [MPRemoteCommandHandlerStatusNoSuchContent](mpremotecommandhandlerstatus/nosuchcontent.md): The requested command couldn’t execute because its required content isn’t available.
- [MPRemoteCommandHandlerStatusNoActionableNowPlayingItem](mpremotecommandhandlerstatus/noactionablenowplayingitem.md): The requested command couldn’t execute because no Now Playing item is available.
- [MPRemoteCommandHandlerStatusDeviceNotFound](mpremotecommandhandlerstatus/devicenotfound.md): The requested command couldn’t execute because a required device isn’t available.
- [MPRemoteCommandHandlerStatusCommandFailed](mpremotecommandhandlerstatus/commandfailed.md): The requested command failed to execute.

## See Also

### Handling events

- [addTargetWithHandler:](mpremotecommand/addtarget%28handler_%29.md): Adds a block to be called when an event is received.
- [addTarget:action:](mpremotecommand/addtarget%28__action_%29.md): Adds a target object to be called when an event is received.
- [removeTarget:](mpremotecommand/removetarget%28__%29.md): Removes a target from the remote command object.
- [removeTarget:action:](mpremotecommand/removetarget%28__action_%29.md): Removes a target and action from a remote command object.
