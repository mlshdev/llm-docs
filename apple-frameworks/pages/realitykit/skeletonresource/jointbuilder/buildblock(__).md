> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/skeletonresource/jointbuilder/buildblock(_:)

# buildBlock(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Combines all joints declared in the closure body into the parent’s `children`.

## Declaration

```swift
static func buildBlock(_ children: [SkeletonResource.Joint]...) -> [SkeletonResource.Joint]
```
