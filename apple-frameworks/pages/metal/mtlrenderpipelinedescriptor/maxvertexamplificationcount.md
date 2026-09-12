> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/maxvertexamplificationcount](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/maxvertexamplificationcount)

# maxVertexAmplificationCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The maximum vertex amplification count you can set when encoding render commands.

## Declaration

```swift
var maxVertexAmplificationCount: Int { get set }
```

## Mentioned In

- [Improving rendering performance with vertex amplification](../improving-rendering-performance-with-vertex-amplification.md)

<a id="discussion"></a>

## Discussion

Before setting this property, call the [supportsVertexAmplificationCount(\_:)](../mtldevice/supportsvertexamplificationcount%28__%29.md) method on the device object to determine whether that amplification count is supported.

## See Also

### Related Documentation

- [setVertexAmplificationCount(\_:viewMappings:)](../mtlrendercommandencoder/setvertexamplificationcount%28__viewmappings_%29.md): Configures the number of output vertices the render pipeline produces for each input vertex, optionally with render target and viewport offsets.
- [supportsVertexAmplificationCount(\_:)](../mtldevice/supportsvertexamplificationcount%28__%29.md): Returns a Boolean value that indicates whether the GPU supports an amplification factor.

# maxVertexAmplificationCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The maximum vertex amplification count you can set when encoding render commands.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger maxVertexAmplificationCount;
```

## Mentioned In

- [Improving rendering performance with vertex amplification](../improving-rendering-performance-with-vertex-amplification.md)

<a id="discussion"></a>

## Discussion

Before setting this property, call the [supportsVertexAmplificationCount:](../mtldevice/supportsvertexamplificationcount%28__%29.md) method on the device object to determine whether that amplification count is supported.

## See Also

### Related Documentation

- [setVertexAmplificationCount:viewMappings:](../mtlrendercommandencoder/setvertexamplificationcount%28__viewmappings_%29.md): Configures the number of output vertices the render pipeline produces for each input vertex, optionally with render target and viewport offsets.
- [supportsVertexAmplificationCount:](../mtldevice/supportsvertexamplificationcount%28__%29.md): Returns a Boolean value that indicates whether the GPU supports an amplification factor.
