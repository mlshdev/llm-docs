> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/vertexlinkedfunctions

# vertexLinkedFunctions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Functions that you can specify as function arguments for the vertex shader when encoding commands that use the pipeline.

## Declaration

```swift
@NSCopying var vertexLinkedFunctions: MTLLinkedFunctions! { get set }
```

## See Also

### Specifying callable functions for the pipeline

- [fragmentLinkedFunctions](fragmentlinkedfunctions.md): Functions that you can specify as function arguments for the fragment shader when encoding commands that use the pipeline.

# vertexLinkedFunctions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Functions that you can specify as function arguments for the vertex shader when encoding commands that use the pipeline.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) MTLLinkedFunctions * vertexLinkedFunctions;
```

## See Also

### Specifying callable functions for the pipeline

- [fragmentLinkedFunctions](fragmentlinkedfunctions.md): Functions that you can specify as function arguments for the fragment shader when encoding commands that use the pipeline.
