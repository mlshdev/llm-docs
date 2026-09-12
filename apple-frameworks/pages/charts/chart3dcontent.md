> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chart3dcontent](https://developer.apple.com/documentation/charts/chart3dcontent)

# Chart3DContent

**Framework:** Swift Charts  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A type that represents the three-dimensional content that you draw on a chart.

## Declaration

```swift
@MainActor @preconcurrency protocol Chart3DContent
```

## Topics

### Associated Types

- [Body](chart3dcontent/body-swift.associatedtype.md)

### Instance Properties

- [body](chart3dcontent/body-swift.property.md)

### Instance Methods

- [foregroundStyle(\_:)](chart3dcontent/foregroundstyle%28__%29-1pjaq.md)
- [foregroundStyle(\_:)](chart3dcontent/foregroundstyle%28__%29-7skde.md)
- [foregroundStyle(by:)](chart3dcontent/foregroundstyle%28by_%29.md)
- [metalness(\_:)](chart3dcontent/metalness%28__%29.md): A value that controls whether the surface has a metallic look.
- [roughness(\_:)](chart3dcontent/roughness%28__%29.md): A value that controls the degree of surface roughness.
- [symbol(\_:)](chart3dcontent/symbol%28__%29.md)
- [symbolRotation(\_:)](chart3dcontent/symbolrotation%28__%29.md): Set the rotation of a 3D symbol.
- [symbolSize(\_:)](chart3dcontent/symbolsize%28__%29.md)

## Relationships

### Conforming Types

- [BuilderConditional](builderconditional.md)
- [PointMark](pointmark.md)
- [RectangleMark](rectanglemark.md)
- [RuleMark](rulemark.md)
- [SurfacePlot](surfaceplot.md)

## See Also

### 3D charts

- [Chart3D](chart3d.md): A SwiftUI view that displays interactive 3D charts and visualizations.
- [Chart3DContentBuilder](chart3dcontentbuilder.md): A result builder that you use to compose the three-dimensional contents of a chart.
- [SurfacePlot](surfaceplot.md): Chart content that represents a mathematical function of two variables using a 3D surface.
