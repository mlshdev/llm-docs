> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandencodererrorstate/completed](https://developer.apple.com/documentation/metal/mtlcommandencodererrorstate/completed)

# MTLCommandEncoderErrorState.completed (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A state that indicates the GPU successfully executed the commands without any errors.

## Declaration

```swift
case completed
```

## See Also

### Getting the error state

- [MTLCommandEncoderErrorState.pending](pending.md): An error state that indicates the GPU didn’t execute the commands.
- [MTLCommandEncoderErrorState.affected](affected.md): An error state that indicates the GPU failed to fully execute the commands because of an error.
- [MTLCommandEncoderErrorState.faulted](faulted.md): An error state that indicates the commands in the command buffer are the cause of an error.
- [MTLCommandEncoderErrorState.unknown](unknown.md): An error state that indicates the command buffer doesn’t know the state of its commands on the GPU.

# MTLCommandEncoderErrorStateCompleted (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A state that indicates the GPU successfully executed the commands without any errors.

## Declaration

```objectivec
MTLCommandEncoderErrorStateCompleted
```

## See Also

### Getting the error state

- [MTLCommandEncoderErrorStatePending](pending.md): An error state that indicates the GPU didn’t execute the commands.
- [MTLCommandEncoderErrorStateAffected](affected.md): An error state that indicates the GPU failed to fully execute the commands because of an error.
- [MTLCommandEncoderErrorStateFaulted](faulted.md): An error state that indicates the commands in the command buffer are the cause of an error.
- [MTLCommandEncoderErrorStateUnknown](unknown.md): An error state that indicates the command buffer doesn’t know the state of its commands on the GPU.
