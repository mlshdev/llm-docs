> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionstitchingfunctionnode/arguments](https://developer.apple.com/documentation/metal/mtlfunctionstitchingfunctionnode/arguments)

# arguments (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An ordered list of the nodes that provide the function’s arguments.

## Declaration

```swift
var arguments: [any MTLFunctionStitchingNode] { get set }
```

<a id="discussion"></a>

## Discussion

Each node’s output data types needs to match the input data type of the matching argument.

## See Also

### Configuring a function node

- [name](name.md): The name of the function to call.
- [controlDependencies](controldependencies.md): The list of nodes that need to execute before executing the node.

# arguments (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An ordered list of the nodes that provide the function’s arguments.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nonnull) NSArray<id<MTLFunctionStitchingNode>> * arguments;
```

<a id="discussion"></a>

## Discussion

Each node’s output data types needs to match the input data type of the matching argument.

## See Also

### Configuring a function node

- [name](name.md): The name of the function to call.
- [controlDependencies](controldependencies.md): The list of nodes that need to execute before executing the node.
