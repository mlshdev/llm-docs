> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbufferencoderinfo/debugsignposts](https://developer.apple.com/documentation/metal/mtlcommandbufferencoderinfo/debugsignposts)

# debugSignposts (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array of debug signposts that Metal records as the GPU executes the commands of the encoder’s pass.

## Declaration

```swift
var debugSignposts: [String] { get }
```

## See Also

### Inspecting execution information

- [label](label.md): The name of the encoder that generates the error information.
- [errorState](errorstate.md): The execution status of the command encoder.
- [MTLCommandEncoderErrorState](../mtlcommandencodererrorstate.md): Possible error conditions for the command encoder’s commands.

# debugSignposts (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array of debug signposts that Metal records as the GPU executes the commands of the encoder’s pass.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * debugSignposts;
```

## See Also

### Inspecting execution information

- [label](label.md): The name of the encoder that generates the error information.
- [errorState](errorstate.md): The execution status of the command encoder.
- [MTLCommandEncoderErrorState](../mtlcommandencodererrorstate.md): Possible error conditions for the command encoder’s commands.
