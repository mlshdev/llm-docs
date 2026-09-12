> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbufferdescriptor/logstate](https://developer.apple.com/documentation/metal/mtlcommandbufferdescriptor/logstate)

# logState (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The shader logging configuration that the command buffer uses.

## Declaration

```swift
var logState: (any MTLLogState)? { get set }
```

## See Also

### Configuring the command buffer

- [retainedReferences](retainedreferences.md): A Boolean value that indicates whether the command buffer the descriptor creates maintains strong references to the resources it uses.
- [errorOptions](erroroptions.md): The reporting configuration that indicates which information the GPU driver stores in a command buffer’s error property.
- [MTLCommandBufferErrorOption](../mtlcommandbuffererroroption.md): Options for reporting errors from a command buffer.

# logState (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The shader logging configuration that the command buffer uses.

## Declaration

```objectivec
@property (nonatomic, retain, readwrite, nullable) id<MTLLogState> logState;
```

## See Also

### Configuring the command buffer

- [retainedReferences](retainedreferences.md): A Boolean value that indicates whether the command buffer the descriptor creates maintains strong references to the resources it uses.
- [errorOptions](erroroptions.md): The reporting configuration that indicates which information the GPU driver stores in a command buffer’s error property.
- [MTLCommandBufferErrorOption](../mtlcommandbuffererroroption.md): Options for reporting errors from a command buffer.
