> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionstitchingfunctionnode/controldependencies](https://developer.apple.com/documentation/metal/mtlfunctionstitchingfunctionnode/controldependencies)

# controlDependencies (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The list of nodes that need to execute before executing the node.

## Declaration

```swift
var controlDependencies: [MTLFunctionStitchingFunctionNode] { get set }
```

<a id="discussion"></a>

## Discussion

When a stitched function calls functions that have side effects on their input data, you often need the GPU to execute functions in a specific order. In such cases, use the [controlDependencies](controldependencies.md) property to specify which nodes need to run before executing this node.

## See Also

### Configuring a function node

- [name](name.md): The name of the function to call.
- [arguments](arguments.md): An ordered list of the nodes that provide the function’s arguments.

# controlDependencies (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The list of nodes that need to execute before executing the node.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nonnull) NSArray<MTLFunctionStitchingFunctionNode *> * controlDependencies;
```

<a id="discussion"></a>

## Discussion

When a stitched function calls functions that have side effects on their input data, you often need the GPU to execute functions in a specific order. In such cases, use the [controlDependencies](controldependencies.md) property to specify which nodes need to run before executing this node.

## See Also

### Configuring a function node

- [name](name.md): The name of the function to call.
- [arguments](arguments.md): An ordered list of the nodes that provide the function’s arguments.
