> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/photogrammetrysession/configuration-swift.struct/customdetailspecification-swift.property

# customDetailSpecification

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

Defines custom detail level specifications for a photogrammetry session with custom detail level.

## Declaration

```swift
var customDetailSpecification: PhotogrammetrySession.Configuration.CustomDetailSpecification
```

<a id="discussion"></a>

## Discussion

This property configures the characteristics of the model’s precision and characteristics, such as texture size and the types of texture maps.

> **Important**

> The system checks this property only when processing a request with the [PhotogrammetrySession.Request.Detail.custom](../request/detail/custom.md) detail set.
