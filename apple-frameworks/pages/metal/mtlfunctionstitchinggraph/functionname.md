> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionstitchinggraph/functionname](https://developer.apple.com/documentation/metal/mtlfunctionstitchinggraph/functionname)

# functionName (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The name of the new stitched function.

## Declaration

```swift
var functionName: String { get set }
```

## See Also

### Configuring a function graph

- [nodes](nodes.md): The nodes in the function’s call graph.
- [outputNode](outputnode.md): The node with the output that’s the output of the new stitched function.
- [attributes](attributes.md): A list of attributes to configure how the Metal device object generates the new stitched function.

# functionName (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The name of the new stitched function.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nonnull) NSString * functionName;
```

## See Also

### Configuring a function graph

- [nodes](nodes.md): The nodes in the function’s call graph.
- [outputNode](outputnode.md): The node with the output that’s the output of the new stitched function.
- [attributes](attributes.md): A list of attributes to configure how the Metal device object generates the new stitched function.
