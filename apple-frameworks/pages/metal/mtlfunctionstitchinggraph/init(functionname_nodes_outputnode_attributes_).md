> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionstitchinggraph/init(functionname:nodes:outputnode:attributes:)](https://developer.apple.com/documentation/metal/mtlfunctionstitchinggraph/init(functionname:nodes:outputnode:attributes:))

# init(functionName:nodes:outputNode:attributes:) (Swift)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a description of a new function call graph.

## Declaration

```swift
init(functionName: String, nodes: [MTLFunctionStitchingFunctionNode], outputNode: MTLFunctionStitchingFunctionNode?, attributes: [any MTLFunctionStitchingAttribute])
```

## Parameters

- `functionName`: The name of the new function.
- `nodes`: The nodes in the function’s call graph.
- `outputNode`: The node whose output is the output of the new stitched function.
- `attributes`: A list of attributes used to generate the new stitched function.

# initWithFunctionName:nodes:outputNode:attributes: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a description of a new function call graph.

## Declaration

```objectivec
- (instancetype) initWithFunctionName:(NSString *) functionName nodes:(NSArray<MTLFunctionStitchingFunctionNode *> *) nodes outputNode:(MTLFunctionStitchingFunctionNode *) outputNode attributes:(NSArray<id<MTLFunctionStitchingAttribute>> *) attributes;
```

## Parameters

- `functionName`: The name of the new function.
- `nodes`: The nodes in the function’s call graph.
- `outputNode`: The node whose output is the output of the new stitched function.
- `attributes`: A list of attributes used to generate the new stitched function.
