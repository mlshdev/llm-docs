> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinefunctionsdescriptor/tileadditionalbinaryfunctions](https://developer.apple.com/documentation/metal/mtlrenderpipelinefunctionsdescriptor/tileadditionalbinaryfunctions)

# tileAdditionalBinaryFunctions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The tile functions to add to the render pipeline.

## Declaration

```swift
var tileAdditionalBinaryFunctions: [any MTLFunction]? { get set }
```

## See Also

### Configuring the descriptor’s functions

- [vertexAdditionalBinaryFunctions](vertexadditionalbinaryfunctions.md): The vertex functions to add to the render pipeline.
- [fragmentAdditionalBinaryFunctions](fragmentadditionalbinaryfunctions.md): The fragment functions to add to the render pipeline.

# tileAdditionalBinaryFunctions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The tile functions to add to the render pipeline.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<id<MTLFunction>> * tileAdditionalBinaryFunctions;
```

## See Also

### Configuring the descriptor’s functions

- [vertexAdditionalBinaryFunctions](vertexadditionalbinaryfunctions.md): The vertex functions to add to the render pipeline.
- [fragmentAdditionalBinaryFunctions](fragmentadditionalbinaryfunctions.md): The fragment functions to add to the render pipeline.
