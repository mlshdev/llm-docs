> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/litlightingmodel/ismultiscatteringenabled](https://developer.apple.com/documentation/realitykit/litlightingmodel/ismultiscatteringenabled)

# isMultiscatteringEnabled

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Whether to account for multiple scattering between microfacets.

## Declaration

```swift
var isMultiscatteringEnabled: Bool
```

<a id="discussion"></a>

## Discussion

Improves accuracy at the cost of performance, particularly for rough surfaces.

## See Also

### Enabling lighting features

- [isSubsurfaceScatteringEnabled](issubsurfacescatteringenabled.md): Whether to include subsurface scattering in the lighting calculation.
- [isClearcoatEnabled](isclearcoatenabled.md): Whether to include a clearcoat layer in the lighting calculation.
- [isBentNormalEnabled](isbentnormalenabled.md): Whether to apply bent normal maps to improve ambient occlusion accuracy.
