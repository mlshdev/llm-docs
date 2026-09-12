> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/vertexfunction](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/vertexfunction)

# vertexFunction (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The vertex function the pipeline calls to process vertices.

## Declaration

```swift
var vertexFunction: (any MTLFunction)? { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `nil`. The vertex function needs to be specified. The vertex function can be either a regular vertex function or a post-tessellation vertex function.

## See Also

### Specifying graphics functions and associated data

- [fragmentFunction](fragmentfunction.md): The fragment function the pipeline calls to process fragments.
- [maxVertexCallStackDepth](maxvertexcallstackdepth.md): The maximum function call depth from the top-most vertex shader function.
- [maxFragmentCallStackDepth](maxfragmentcallstackdepth.md): The maximum function call depth from the top-most fragment shader function.

# vertexFunction (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The vertex function the pipeline calls to process vertices.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) id<MTLFunction> vertexFunction;
```

<a id="discussion"></a>

## Discussion

The default value is `nil`. The vertex function needs to be specified. The vertex function can be either a regular vertex function or a post-tessellation vertex function.

## See Also

### Specifying graphics functions and associated data

- [fragmentFunction](fragmentfunction.md): The fragment function the pipeline calls to process fragments.
- [maxVertexCallStackDepth](maxvertexcallstackdepth.md): The maximum function call depth from the top-most vertex shader function.
- [maxFragmentCallStackDepth](maxfragmentcallstackdepth.md): The maximum function call depth from the top-most fragment shader function.
