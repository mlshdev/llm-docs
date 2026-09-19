> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaintelligence/mediaintelligencevideoasset/init(id:kind:)

# init(id:kind:)

**Framework:** Media Intelligence  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a video asset with the specified identifier and kind.

## Declaration

```swift
init(id: MediaIntelligenceVideoAsset.ID, kind: MediaIntelligenceVideoAsset.Kind)
```

## Parameters

- `id`: A unique identifier for the asset.
- `kind`: A value that describes how the framework accesses the video data.

## See Also

### Creating an asset

- [MediaIntelligenceVideoAsset.ID](id-swift.struct.md): A unique identifier for a video asset.
- [MediaIntelligenceVideoAsset.Kind](kind-swift.enum.md): A value that describes the source of a video asset’s data.
