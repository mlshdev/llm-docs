> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/fragmentfunction](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/fragmentfunction)

# fragmentFunction (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The fragment function the pipeline calls to process fragments.

## Declaration

```swift
var fragmentFunction: (any MTLFunction)? { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `nil`. If this value is `nil`, then there is no fragment function and therefore no writes to the color render target occur. Depth and stencil writes and visibility result counting can still proceed.

## See Also

### Specifying graphics functions and associated data

- [vertexFunction](vertexfunction.md): The vertex function the pipeline calls to process vertices.
- [maxVertexCallStackDepth](maxvertexcallstackdepth.md): The maximum function call depth from the top-most vertex shader function.
- [maxFragmentCallStackDepth](maxfragmentcallstackdepth.md): The maximum function call depth from the top-most fragment shader function.

# fragmentFunction (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The fragment function the pipeline calls to process fragments.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) id<MTLFunction> fragmentFunction;
```

<a id="discussion"></a>

## Discussion

The default value is `nil`. If this value is `nil`, then there is no fragment function and therefore no writes to the color render target occur. Depth and stencil writes and visibility result counting can still proceed.

## See Also

### Specifying graphics functions and associated data

- [vertexFunction](vertexfunction.md): The vertex function the pipeline calls to process vertices.
- [maxVertexCallStackDepth](maxvertexcallstackdepth.md): The maximum function call depth from the top-most vertex shader function.
- [maxFragmentCallStackDepth](maxfragmentcallstackdepth.md): The maximum function call depth from the top-most fragment shader function.
