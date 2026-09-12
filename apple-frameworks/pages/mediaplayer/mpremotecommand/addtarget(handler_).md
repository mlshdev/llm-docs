> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommand/addtarget(handler:)](https://developer.apple.com/documentation/mediaplayer/mpremotecommand/addtarget(handler:))

# addTarget(handler:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

Adds a block to be called when an event is received.

## Declaration

```swift
func addTarget(handler: @escaping (MPRemoteCommandEvent) -> MPRemoteCommandHandlerStatus) -> Any
```

## Parameters

- `handler`: A block object to handle the [MPRemoteCommandEvent](../mpremotecommandevent.md).

<a id="return-value"></a>

## Return Value

An opaque object associated with the designated handler.

<a id="Discussion"></a>

## Discussion

Call the [addTarget(handler:)](addtarget%28handler_%29.md) method to add a block to be called. Remove the handler by calling the [removeTarget(\_:)](removetarget%28__%29.md) method, passing in the object returned by this method.

## See Also

### Handling events

- [addTarget(\_:action:)](addtarget%28__action_%29.md): Adds a target object to be called when an event is received.
- [removeTarget(\_:)](removetarget%28__%29.md): Removes a target from the remote command object.
- [removeTarget(\_:action:)](removetarget%28__action_%29.md): Removes a target and action from a remote command object.
- [MPRemoteCommandHandlerStatus](../mpremotecommandhandlerstatus.md): Constants indicating the status of a command.

# addTargetWithHandler: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

Adds a block to be called when an event is received.

## Declaration

```objectivec
- (id) addTargetWithHandler:(MPRemoteCommandHandlerStatus (^)(MPRemoteCommandEvent *event)) handler;
```

## Parameters

- `handler`: A block object to handle the [MPRemoteCommandEvent](../mpremotecommandevent.md).

<a id="return-value"></a>

## Return Value

An opaque object associated with the designated handler.

<a id="Discussion"></a>

## Discussion

Call the [addTargetWithHandler:](addtarget%28handler_%29.md) method to add a block to be called. Remove the handler by calling the [removeTarget:](removetarget%28__%29.md) method, passing in the object returned by this method.

## See Also

### Handling events

- [addTarget:action:](addtarget%28__action_%29.md): Adds a target object to be called when an event is received.
- [removeTarget:](removetarget%28__%29.md): Removes a target from the remote command object.
- [removeTarget:action:](removetarget%28__action_%29.md): Removes a target and action from a remote command object.
- [MPRemoteCommandHandlerStatus](../mpremotecommandhandlerstatus.md): Constants indicating the status of a command.
