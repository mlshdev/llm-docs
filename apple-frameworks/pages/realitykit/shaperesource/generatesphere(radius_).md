> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shaperesource/generatesphere(radius:)](https://developer.apple.com/documentation/realitykit/shaperesource/generatesphere(radius:))

# generateSphere(radius:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a sphere shape with the specified radius.

## Declaration

```swift
@MainActor @preconcurrency static func generateSphere(radius: Float) -> ShapeResource
```

## Parameters

- `radius`: The radius of the sphere in meters.

<a id="return-value"></a>

## Return Value

The new sphere centered at the local origin.

<a id="discussion"></a>

## Discussion

> **Note**

> Collision shape extents that fall below 2mm are forced to be 2mm in size - this includes, entities with negative scale values.
