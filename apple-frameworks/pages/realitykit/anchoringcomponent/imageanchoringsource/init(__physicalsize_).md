> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/anchoringcomponent/imageanchoringsource/init(_:physicalsize:)

# init(\_:physicalSize:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates the image anchoring source from image file URL.

## Declaration

```swift
init(_ url: URL, physicalSize: SIMD2<Float>)
```

## Parameters

- `url`: The image file URL.
- `physicalSize`: The physical size of tracking image
