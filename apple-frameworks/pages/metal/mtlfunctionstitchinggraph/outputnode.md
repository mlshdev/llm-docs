> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionstitchinggraph/outputnode](https://developer.apple.com/documentation/metal/mtlfunctionstitchinggraph/outputnode)

# outputNode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The node with the output that’s the output of the new stitched function.

## Declaration

```swift
var outputNode: MTLFunctionStitchingFunctionNode? { get set }
```

<a id="discussion"></a>

## Discussion

The output type of the node needs to match the result type in the stitched function’s declaration.

## See Also

### Configuring a function graph

- [functionName](functionname.md): The name of the new stitched function.
- [nodes](nodes.md): The nodes in the function’s call graph.
- [attributes](attributes.md): A list of attributes to configure how the Metal device object generates the new stitched function.

# outputNode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The node with the output that’s the output of the new stitched function.

## Declaration

```objectivec
@property (nonatomic, retain, readwrite, nullable) MTLFunctionStitchingFunctionNode * outputNode;
```

<a id="discussion"></a>

## Discussion

The output type of the node needs to match the result type in the stitched function’s declaration.

## See Also

### Configuring a function graph

- [functionName](functionname.md): The name of the new stitched function.
- [nodes](nodes.md): The nodes in the function’s call graph.
- [attributes](attributes.md): A list of attributes to configure how the Metal device object generates the new stitched function.
