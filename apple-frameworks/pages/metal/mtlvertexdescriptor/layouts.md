> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexdescriptor/layouts](https://developer.apple.com/documentation/metal/mtlvertexdescriptor/layouts)

# layouts (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An array of state data that describes how data are fetched by a vertex shader function when rendering primitives.

## Declaration

```swift
var layouts: MTLVertexBufferLayoutDescriptorArray { get }
```

## See Also

### Accessing the vertex buffer layouts and vertex attributes

- [attributes](attributes.md): An array of state data that describes how vertex attribute data is stored in memory and is mapped to arguments for a vertex shader function.

# layouts (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An array of state data that describes how data are fetched by a vertex shader function when rendering primitives.

## Declaration

```objectivec
@property (readonly) MTLVertexBufferLayoutDescriptorArray * layouts;
```

## See Also

### Accessing the vertex buffer layouts and vertex attributes

- [attributes](attributes.md): An array of state data that describes how vertex attribute data is stored in memory and is mapped to arguments for a vertex shader function.
