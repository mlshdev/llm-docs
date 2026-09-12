> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandencodererrorstate](https://developer.apple.com/documentation/metal/mtlcommandencodererrorstate)

# MTLCommandEncoderErrorState (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Possible error conditions for the command encoder’s commands.

## Declaration

```swift
enum MTLCommandEncoderErrorState
```

## Topics

### Getting the error state

- [MTLCommandEncoderErrorState.completed](mtlcommandencodererrorstate/completed.md): A state that indicates the GPU successfully executed the commands without any errors.
- [MTLCommandEncoderErrorState.pending](mtlcommandencodererrorstate/pending.md): An error state that indicates the GPU didn’t execute the commands.
- [MTLCommandEncoderErrorState.affected](mtlcommandencodererrorstate/affected.md): An error state that indicates the GPU failed to fully execute the commands because of an error.
- [MTLCommandEncoderErrorState.faulted](mtlcommandencodererrorstate/faulted.md): An error state that indicates the commands in the command buffer are the cause of an error.
- [MTLCommandEncoderErrorState.unknown](mtlcommandencodererrorstate/unknown.md): An error state that indicates the command buffer doesn’t know the state of its commands on the GPU.

### Initializers

- [init(rawValue:)](mtlcommandencodererrorstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting execution information

- [label](mtlcommandbufferencoderinfo/label.md): The name of the encoder that generates the error information.
- [debugSignposts](mtlcommandbufferencoderinfo/debugsignposts.md): An array of debug signposts that Metal records as the GPU executes the commands of the encoder’s pass.
- [errorState](mtlcommandbufferencoderinfo/errorstate.md): The execution status of the command encoder.

# MTLCommandEncoderErrorState (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Possible error conditions for the command encoder’s commands.

## Declaration

```objectivec
enum MTLCommandEncoderErrorState : NSInteger;
```

## Topics

### Getting the error state

- [MTLCommandEncoderErrorStateCompleted](mtlcommandencodererrorstate/completed.md): A state that indicates the GPU successfully executed the commands without any errors.
- [MTLCommandEncoderErrorStatePending](mtlcommandencodererrorstate/pending.md): An error state that indicates the GPU didn’t execute the commands.
- [MTLCommandEncoderErrorStateAffected](mtlcommandencodererrorstate/affected.md): An error state that indicates the GPU failed to fully execute the commands because of an error.
- [MTLCommandEncoderErrorStateFaulted](mtlcommandencodererrorstate/faulted.md): An error state that indicates the commands in the command buffer are the cause of an error.
- [MTLCommandEncoderErrorStateUnknown](mtlcommandencodererrorstate/unknown.md): An error state that indicates the command buffer doesn’t know the state of its commands on the GPU.

## See Also

### Inspecting execution information

- [label](mtlcommandbufferencoderinfo/label.md): The name of the encoder that generates the error information.
- [debugSignposts](mtlcommandbufferencoderinfo/debugsignposts.md): An array of debug signposts that Metal records as the GPU executes the commands of the encoder’s pass.
- [errorState](mtlcommandbufferencoderinfo/errorstate.md): The execution status of the command encoder.
