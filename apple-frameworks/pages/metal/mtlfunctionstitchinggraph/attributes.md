> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionstitchinggraph/attributes](https://developer.apple.com/documentation/metal/mtlfunctionstitchinggraph/attributes)

# attributes (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A list of attributes to configure how the Metal device object generates the new stitched function.

## Declaration

```swift
var attributes: [any MTLFunctionStitchingAttribute] { get set }
```

## See Also

### Configuring a function graph

- [functionName](functionname.md): The name of the new stitched function.
- [nodes](nodes.md): The nodes in the function’s call graph.
- [outputNode](outputnode.md): The node with the output that’s the output of the new stitched function.

# attributes (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A list of attributes to configure how the Metal device object generates the new stitched function.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nonnull) NSArray<id<MTLFunctionStitchingAttribute>> * attributes;
```

## See Also

### Configuring a function graph

- [functionName](functionname.md): The name of the new stitched function.
- [nodes](nodes.md): The nodes in the function’s call graph.
- [outputNode](outputnode.md): The node with the output that’s the output of the new stitched function.
