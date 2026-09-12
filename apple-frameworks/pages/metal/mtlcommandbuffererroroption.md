> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffererroroption](https://developer.apple.com/documentation/metal/mtlcommandbuffererroroption)

# MTLCommandBufferErrorOption (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Options for reporting errors from a command buffer.

## Declaration

```swift
struct MTLCommandBufferErrorOption
```

## Topics

### Buffer error options

- [encoderExecutionStatus](mtlcommandbuffererroroption/encoderexecutionstatus.md): An option that instructs a command buffer to save additional details about a GPU runtime error.

### Protocol support

- [init(rawValue:)](mtlcommandbuffererroroption/init%28rawvalue_%29.md): Creates a set of error options from a raw integer value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Configuring the command buffer

- [logState](mtlcommandbufferdescriptor/logstate.md): The shader logging configuration that the command buffer uses.
- [retainedReferences](mtlcommandbufferdescriptor/retainedreferences.md): A Boolean value that indicates whether the command buffer the descriptor creates maintains strong references to the resources it uses.
- [errorOptions](mtlcommandbufferdescriptor/erroroptions.md): The reporting configuration that indicates which information the GPU driver stores in a command buffer’s error property.

# MTLCommandBufferErrorOption (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Options for reporting errors from a command buffer.

## Declaration

```objectivec
enum MTLCommandBufferErrorOption : NSUInteger;
```

## Topics

### Buffer error options

- [MTLCommandBufferErrorOptionNone](mtlcommandbuffererroroption/mtlcommandbuffererroroptionnone.md): An option that clears a command buffer’s error options.
- [MTLCommandBufferErrorOptionEncoderExecutionStatus](mtlcommandbuffererroroption/encoderexecutionstatus.md): An option that instructs a command buffer to save additional details about a GPU runtime error.

## See Also

### Configuring the command buffer

- [logState](mtlcommandbufferdescriptor/logstate.md): The shader logging configuration that the command buffer uses.
- [retainedReferences](mtlcommandbufferdescriptor/retainedreferences.md): A Boolean value that indicates whether the command buffer the descriptor creates maintains strong references to the resources it uses.
- [errorOptions](mtlcommandbufferdescriptor/erroroptions.md): The reporting configuration that indicates which information the GPU driver stores in a command buffer’s error property.
