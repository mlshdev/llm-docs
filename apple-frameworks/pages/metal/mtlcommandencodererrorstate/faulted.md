> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandencodererrorstate/faulted](https://developer.apple.com/documentation/metal/mtlcommandencodererrorstate/faulted)

# MTLCommandEncoderErrorState.faulted (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An error state that indicates the commands in the command buffer are the cause of an error.

## Declaration

```swift
case faulted
```

## See Also

### Getting the error state

- [MTLCommandEncoderErrorState.completed](completed.md): A state that indicates the GPU successfully executed the commands without any errors.
- [MTLCommandEncoderErrorState.pending](pending.md): An error state that indicates the GPU didn’t execute the commands.
- [MTLCommandEncoderErrorState.affected](affected.md): An error state that indicates the GPU failed to fully execute the commands because of an error.
- [MTLCommandEncoderErrorState.unknown](unknown.md): An error state that indicates the command buffer doesn’t know the state of its commands on the GPU.

# MTLCommandEncoderErrorStateFaulted (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An error state that indicates the commands in the command buffer are the cause of an error.

## Declaration

```objectivec
MTLCommandEncoderErrorStateFaulted
```

## See Also

### Getting the error state

- [MTLCommandEncoderErrorStateCompleted](completed.md): A state that indicates the GPU successfully executed the commands without any errors.
- [MTLCommandEncoderErrorStatePending](pending.md): An error state that indicates the GPU didn’t execute the commands.
- [MTLCommandEncoderErrorStateAffected](affected.md): An error state that indicates the GPU failed to fully execute the commands because of an error.
- [MTLCommandEncoderErrorStateUnknown](unknown.md): An error state that indicates the command buffer doesn’t know the state of its commands on the GPU.
