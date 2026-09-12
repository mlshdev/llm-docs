> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/vertexdescriptor](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/vertexdescriptor)

# vertexDescriptor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The organization of vertex data in an attribute’s argument table.

## Declaration

```swift
@NSCopying var vertexDescriptor: MTLVertexDescriptor? { get set }
```

<a id="discussion"></a>

## Discussion

An [MTLVertexDescriptor](../mtlvertexdescriptor.md) instance is used to describe the organization of per-vertex input structs passed in an argument of a vertex shader function.

# vertexDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The organization of vertex data in an attribute’s argument table.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MTLVertexDescriptor * vertexDescriptor;
```

<a id="discussion"></a>

## Discussion

An [MTLVertexDescriptor](../mtlvertexdescriptor.md) instance is used to describe the organization of per-vertex input structs passed in an argument of a vertex shader function.
