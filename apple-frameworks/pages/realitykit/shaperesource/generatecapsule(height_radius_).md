> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shaperesource/generatecapsule(height:radius:)](https://developer.apple.com/documentation/realitykit/shaperesource/generatecapsule(height:radius:))

# generateCapsule(height:radius:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a capsule shape with the specified height and radius.

## Declaration

```swift
@MainActor @preconcurrency static func generateCapsule(height: Float, radius: Float) -> ShapeResource
```

## Parameters

- `height`: The height of the capsule including the spherical caps in meters, measured along the local y-axis.
- `radius`: The radius of the capsule in meters.

<a id="return-value"></a>

## Return Value

The new capsule.

<a id="discussion"></a>

## Discussion

> **Note**

> Collision shape extents that fall below 2mm are forced to be 2mm in size - this includes, entities with negative scale values.
