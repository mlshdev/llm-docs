> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/maxvertexcallstackdepth](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/maxvertexcallstackdepth)

# maxVertexCallStackDepth (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The maximum function call depth from the top-most vertex shader function.

## Declaration

```swift
var maxVertexCallStackDepth: Int { get set }
```

<a id="discussion"></a>

## Discussion

The default value is 1.

## See Also

### Specifying graphics functions and associated data

- [vertexFunction](vertexfunction.md): The vertex function the pipeline calls to process vertices.
- [fragmentFunction](fragmentfunction.md): The fragment function the pipeline calls to process fragments.
- [maxFragmentCallStackDepth](maxfragmentcallstackdepth.md): The maximum function call depth from the top-most fragment shader function.

# maxVertexCallStackDepth (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The maximum function call depth from the top-most vertex shader function.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger maxVertexCallStackDepth;
```

<a id="discussion"></a>

## Discussion

The default value is 1.

## See Also

### Specifying graphics functions and associated data

- [vertexFunction](vertexfunction.md): The vertex function the pipeline calls to process vertices.
- [fragmentFunction](fragmentfunction.md): The fragment function the pipeline calls to process fragments.
- [maxFragmentCallStackDepth](maxfragmentcallstackdepth.md): The maximum function call depth from the top-most fragment shader function.
