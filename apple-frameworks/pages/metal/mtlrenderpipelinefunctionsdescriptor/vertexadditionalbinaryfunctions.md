> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlrenderpipelinefunctionsdescriptor/vertexadditionalbinaryfunctions

# vertexAdditionalBinaryFunctions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The vertex functions to add to the render pipeline.

## Declaration

```swift
var vertexAdditionalBinaryFunctions: [any MTLFunction]? { get set }
```

## See Also

### Configuring the descriptor’s functions

- [fragmentAdditionalBinaryFunctions](fragmentadditionalbinaryfunctions.md): The fragment functions to add to the render pipeline.
- [tileAdditionalBinaryFunctions](tileadditionalbinaryfunctions.md): The tile functions to add to the render pipeline.

# vertexAdditionalBinaryFunctions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The vertex functions to add to the render pipeline.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<id<MTLFunction>> * vertexAdditionalBinaryFunctions;
```

## See Also

### Configuring the descriptor’s functions

- [fragmentAdditionalBinaryFunctions](fragmentadditionalbinaryfunctions.md): The fragment functions to add to the render pipeline.
- [tileAdditionalBinaryFunctions](tileadditionalbinaryfunctions.md): The tile functions to add to the render pipeline.
