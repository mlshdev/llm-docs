> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/referencecomponent/releasereference(at:)

# releaseReference(at:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Releases the reference an entity holds.

## Declaration

```swift
static func releaseReference(at entity: Entity) throws
```

## Parameters

- `entity`: The entity that holds the [ReferenceComponent](../referencecomponent.md) to release.
