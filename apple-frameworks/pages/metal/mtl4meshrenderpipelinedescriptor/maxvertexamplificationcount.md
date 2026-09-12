> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4meshrenderpipelinedescriptor/maxvertexamplificationcount](https://developer.apple.com/documentation/metal/mtl4meshrenderpipelinedescriptor/maxvertexamplificationcount)

# maxVertexAmplificationCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines the maximum value that can you can pass as the pipeline’s amplification count.

## Declaration

```swift
var maxVertexAmplificationCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

This property controls the maximum count you pass to [setVertexAmplificationCount:viewMappings:](../mtl4rendercommandencoder/setvertexamplificationcount_viewmappings_.md) when using vertex amplification with this pipeline.

# maxVertexAmplificationCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines the maximum value that can you can pass as the pipeline’s amplification count.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger maxVertexAmplificationCount;
```

<a id="discussion"></a>

## Discussion

This property controls the maximum count you pass to [setVertexAmplificationCount:viewMappings:](../mtl4rendercommandencoder/setvertexamplificationcount_viewmappings_.md) when using vertex amplification with this pipeline.
