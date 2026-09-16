> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/gesture/targetedtoanyentity()

# targetedToAnyEntity()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 1.0+

Requires this gesture to target an entity.

## Declaration

```swift
@MainActor @preconcurrency func targetedToAnyEntity() -> some Gesture<EntityTargetValue<Self.Value>>

```

<a id="return-value"></a>

## Return Value

A `RealityCoordinateSpaceConvertible`value containing the original gesture value along with the targeted entity.

## See Also

### Using a gesture with a RealityKit entity

- [targetedToEntity(\_:)](targetedtoentity%28__%29.md): Requires this gesture to target an entity or a descendant of entity.
- [targetedToEntity(where:)](targetedtoentity%28where_%29.md): Requires this gesture to target an entity that can be found in the results of the query.
