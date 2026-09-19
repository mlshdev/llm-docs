> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/modelio/mdlsubmeshtopology/holes

# holes (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An index buffer identifying faces to be treated as holes in the mesh during surface subdivision.

## Declaration

```swift
var holes: (any MDLMeshBuffer)? { get set }
```

<a id="Discussion"></a>

## Discussion

This buffer contains integer values where each integer is the index of a face to be treated as a hole. For example, if there are two holes in a mesh, then this buffer has two entries.

Because the number of entries in this buffer is likely to be different than the number of entries in any other vertex buffer, it shouldn’t be interleaved with other data in the mesh.

## See Also

### Identifying Holes

- [holeCount](holecount.md): The number of entries in the holes buffer.

# holes (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An index buffer identifying faces to be treated as holes in the mesh during surface subdivision.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MDLMeshBuffer> holes;
```

<a id="Discussion"></a>

## Discussion

This buffer contains integer values where each integer is the index of a face to be treated as a hole. For example, if there are two holes in a mesh, then this buffer has two entries.

Because the number of entries in this buffer is likely to be different than the number of entries in any other vertex buffer, it shouldn’t be interleaved with other data in the mesh.

## See Also

### Identifying Holes

- [holeCount](holecount.md): The number of entries in the holes buffer.
