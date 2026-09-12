> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommand/removetarget(_:action:)](https://developer.apple.com/documentation/mediaplayer/mpremotecommand/removetarget(_:action:))

# removeTarget(\_:action:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

Removes a target and action from a remote command object.

## Declaration

```swift
func removeTarget(_ target: Any, action: Selector?)
```

## Parameters

- `target`: The object that currently is a recipient of action messages sent by this object. Specify `nil` to remove all targets.
- `action`: A selector identifying a method on the target. Specify `NULL` to remove all actions.

<a id="Discussion"></a>

## Discussion

Call the [removeTarget(\_:action:)](removetarget%28__action_%29.md) method to remove the specified target-action pair. Passing `nil` for `target` matches all targets and passing `NULL` for `action` matches all actions.

## See Also

### Handling events

- [addTarget(handler:)](addtarget%28handler_%29.md): Adds a block to be called when an event is received.
- [addTarget(\_:action:)](addtarget%28__action_%29.md): Adds a target object to be called when an event is received.
- [removeTarget(\_:)](removetarget%28__%29.md): Removes a target from the remote command object.
- [MPRemoteCommandHandlerStatus](../mpremotecommandhandlerstatus.md): Constants indicating the status of a command.

# removeTarget:action: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

Removes a target and action from a remote command object.

## Declaration

```objectivec
- (void) removeTarget:(id) target action:(SEL) action;
```

## Parameters

- `target`: The object that currently is a recipient of action messages sent by this object. Specify `nil` to remove all targets.
- `action`: A selector identifying a method on the target. Specify `NULL` to remove all actions.

<a id="Discussion"></a>

## Discussion

Call the [removeTarget:action:](removetarget%28__action_%29.md) method to remove the specified target-action pair. Passing `nil` for `target` matches all targets and passing `NULL` for `action` matches all actions.

## See Also

### Handling events

- [addTargetWithHandler:](addtarget%28handler_%29.md): Adds a block to be called when an event is received.
- [addTarget:action:](addtarget%28__action_%29.md): Adds a target object to be called when an event is received.
- [removeTarget:](removetarget%28__%29.md): Removes a target from the remote command object.
- [MPRemoteCommandHandlerStatus](../mpremotecommandhandlerstatus.md): Constants indicating the status of a command.
