> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivevideomask/isinequirectangularprojection](https://developer.apple.com/documentation/immersivemediasupport/immersivevideomask/isinequirectangularprojection)

# isInEquirectangularProjection

**Framework:** Immersive Media Support  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A Boolean value that indicates whether the generated mask texture is in equirectangular projection space. If `true`, the app renderer needs to transform vertices of the mesh to equirectangular projection space to generate UVs to access the mask texture.

## Declaration

```swift
var isInEquirectangularProjection: Bool { get }
```
