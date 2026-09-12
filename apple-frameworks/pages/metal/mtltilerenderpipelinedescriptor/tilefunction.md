> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltilerenderpipelinedescriptor/tilefunction](https://developer.apple.com/documentation/metal/mtltilerenderpipelinedescriptor/tilefunction)

# tileFunction (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The compute kernel or fragment function the pipeline calls.

## Declaration

```swift
var tileFunction: any MTLFunction { get set }
```

<a id="discussion"></a>

## Discussion

Kernel-based and fragment-based tile pipeline dispatches act as a barrier against previous draw commands and other dispatches. Kernel-based pipelines wait until all prior access to the tile completes. Fragment-based pipelines wait only until all prior access to the fragment’s location completes.

## See Also

### Specifying graphics functions and associated data

- [tileBuffers](tilebuffers.md): An array that contains the buffer mutability options for a render pipeline’s tile function.
- [maxCallStackDepth](maxcallstackdepth.md): The maximum call stack depth for indirect function calls in tile shaders.

# tileFunction (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The compute kernel or fragment function the pipeline calls.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite) id<MTLFunction> tileFunction;
```

<a id="discussion"></a>

## Discussion

Kernel-based and fragment-based tile pipeline dispatches act as a barrier against previous draw commands and other dispatches. Kernel-based pipelines wait until all prior access to the tile completes. Fragment-based pipelines wait only until all prior access to the fragment’s location completes.

## See Also

### Specifying graphics functions and associated data

- [tileBuffers](tilebuffers.md): An array that contains the buffer mutability options for a render pipeline’s tile function.
- [maxCallStackDepth](maxcallstackdepth.md): The maximum call stack depth for indirect function calls in tile shaders.
