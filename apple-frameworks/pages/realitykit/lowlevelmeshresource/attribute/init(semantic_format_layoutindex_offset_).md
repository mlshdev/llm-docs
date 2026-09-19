> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/attribute/init(semantic:format:layoutindex:offset:)

# init(semantic:format:layoutIndex:offset:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an attribute with the given semantic, format, layout index, and byte offset.

## Declaration

```swift
init(semantic: LowLevelMeshResource.VertexSemantic, format: MTLVertexFormat, layoutIndex: Int = 0, offset: Int)
```

## Parameters

- `semantic`: The semantic describing how the renderer interprets this attribute.
- `format`: The Metal vertex format of the attribute.
- `layoutIndex`: The index of the layout that contains this attribute. Defaults to `0`.
- `offset`: The byte offset of this attribute from the start of the vertex data.
