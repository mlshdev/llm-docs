> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommand/removetarget(_:)](https://developer.apple.com/documentation/mediaplayer/mpremotecommand/removetarget(_:))

# removeTarget(\_:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

Removes a target from the remote command object.

## Declaration

```swift
func removeTarget(_ target: Any?)
```

## Parameters

- `target`: The object that currently is a recipient of action messages sent by this object. Specify `nil` to remove all targets.

<a id="Discussion"></a>

## Discussion

Call the [removeTarget(\_:)](removetarget%28__%29.md) method to remove the specified target and all actions associated with the target.

## See Also

### Handling events

- [addTarget(handler:)](addtarget%28handler_%29.md): Adds a block to be called when an event is received.
- [addTarget(\_:action:)](addtarget%28__action_%29.md): Adds a target object to be called when an event is received.
- [removeTarget(\_:action:)](removetarget%28__action_%29.md): Removes a target and action from a remote command object.
- [MPRemoteCommandHandlerStatus](../mpremotecommandhandlerstatus.md): Constants indicating the status of a command.

# removeTarget: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

Removes a target from the remote command object.

## Declaration

```objectivec
- (void) removeTarget:(id) target;
```

## Parameters

- `target`: The object that currently is a recipient of action messages sent by this object. Specify `nil` to remove all targets.

<a id="Discussion"></a>

## Discussion

Call the [removeTarget:](removetarget%28__%29.md) method to remove the specified target and all actions associated with the target.

## See Also

### Handling events

- [addTargetWithHandler:](addtarget%28handler_%29.md): Adds a block to be called when an event is received.
- [addTarget:action:](addtarget%28__action_%29.md): Adds a target object to be called when an event is received.
- [removeTarget:action:](removetarget%28__action_%29.md): Removes a target and action from a remote command object.
- [MPRemoteCommandHandlerStatus](../mpremotecommandhandlerstatus.md): Constants indicating the status of a command.
