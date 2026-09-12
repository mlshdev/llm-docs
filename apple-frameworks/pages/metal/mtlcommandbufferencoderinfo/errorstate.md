> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbufferencoderinfo/errorstate](https://developer.apple.com/documentation/metal/mtlcommandbufferencoderinfo/errorstate)

# errorState (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The execution status of the command encoder.

## Declaration

```swift
var errorState: MTLCommandEncoderErrorState { get }
```

## See Also

### Inspecting execution information

- [label](label.md): The name of the encoder that generates the error information.
- [debugSignposts](debugsignposts.md): An array of debug signposts that Metal records as the GPU executes the commands of the encoder’s pass.
- [MTLCommandEncoderErrorState](../mtlcommandencodererrorstate.md): Possible error conditions for the command encoder’s commands.

# errorState (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The execution status of the command encoder.

## Declaration

```objectivec
@property (nonatomic, readonly) MTLCommandEncoderErrorState errorState;
```

## See Also

### Inspecting execution information

- [label](label.md): The name of the encoder that generates the error information.
- [debugSignposts](debugsignposts.md): An array of debug signposts that Metal records as the GPU executes the commands of the encoder’s pass.
- [MTLCommandEncoderErrorState](../mtlcommandencodererrorstate.md): Possible error conditions for the command encoder’s commands.
