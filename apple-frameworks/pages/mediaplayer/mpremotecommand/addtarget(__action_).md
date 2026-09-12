> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommand/addtarget(_:action:)](https://developer.apple.com/documentation/mediaplayer/mpremotecommand/addtarget(_:action:))

# addTarget(\_:action:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

Adds a target object to be called when an event is received.

## Declaration

```swift
func addTarget(_ target: Any, action: Selector)
```

## Parameters

- `target`: The object to receive action messages sent by the receiver when the represented remote command is triggered. The value must not be `nil`.
- `action`: A selector identifying the method on the target to be called. The value must not be `NULL`.

  The method to be called must have the following signature:

  ```objc
  - (MPRemoteCommandHandlerStatus) handleCommand: (MPRemoteCommandEvent*) event;
  ```

<a id="Discussion"></a>

## Discussion

Call the [addTarget(\_:action:)](addtarget%28__action_%29.md) method multiple times to specify multiple target-action pairs. If a specific target-action pair has already been added, the request is ignored. You can add multiple actions for a single target by calling this method multiple times using the same target, but different actions.

The command object does not keep a strong reference to the target; you should remove the target before the target is deallocated.

## See Also

### Handling events

- [addTarget(handler:)](addtarget%28handler_%29.md): Adds a block to be called when an event is received.
- [removeTarget(\_:)](removetarget%28__%29.md): Removes a target from the remote command object.
- [removeTarget(\_:action:)](removetarget%28__action_%29.md): Removes a target and action from a remote command object.
- [MPRemoteCommandHandlerStatus](../mpremotecommandhandlerstatus.md): Constants indicating the status of a command.

# addTarget:action: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

Adds a target object to be called when an event is received.

## Declaration

```objectivec
- (void) addTarget:(id) target action:(SEL) action;
```

## Parameters

- `target`: The object to receive action messages sent by the receiver when the represented remote command is triggered. The value must not be `nil`.
- `action`: A selector identifying the method on the target to be called. The value must not be `NULL`.

  The method to be called must have the following signature:

  ```objc
  - (MPRemoteCommandHandlerStatus) handleCommand: (MPRemoteCommandEvent*) event;
  ```

<a id="Discussion"></a>

## Discussion

Call the [addTarget:action:](addtarget%28__action_%29.md) method multiple times to specify multiple target-action pairs. If a specific target-action pair has already been added, the request is ignored. You can add multiple actions for a single target by calling this method multiple times using the same target, but different actions.

The command object does not keep a strong reference to the target; you should remove the target before the target is deallocated.

## See Also

### Handling events

- [addTargetWithHandler:](addtarget%28handler_%29.md): Adds a block to be called when an event is received.
- [removeTarget:](removetarget%28__%29.md): Removes a target from the remote command object.
- [removeTarget:action:](removetarget%28__action_%29.md): Removes a target and action from a remote command object.
- [MPRemoteCommandHandlerStatus](../mpremotecommandhandlerstatus.md): Constants indicating the status of a command.
