> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/shadergraph/primvarmappings

# primvarMappings

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Maps primvar names used in this graph to texture coordinate channels.

## Declaration

```swift
final var primvarMappings: [String : ShaderGraph.TextureCoordinate]
```

<a id="discussion"></a>

## Discussion

Primvar nodes reference geometry data by name. Use this dictionary to specify which [ShaderGraph.TextureCoordinate](texturecoordinate.md) channel each name resolves to at render time.
