> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chart3dcontent/metalness(_:)](https://developer.apple.com/documentation/charts/chart3dcontent/metalness(_:))

# metalness(\_:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A value that controls whether the surface has a metallic look.

## Declaration

```swift
nonisolated func metalness(_ ratio: Double) -> some Chart3DContent

```

## Parameters

- `ratio`: The degree of metalness.

<a id="discussion"></a>

## Discussion

Zero represents a non-metallic (dielectric) surface. One represents a metallic surface. In real life, materials are either metallic or dielectric (0 or 1).
