> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gesture/targetedtoentity(_:)](https://developer.apple.com/documentation/swiftui/gesture/targetedtoentity(_:))

# targetedToEntity(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 1.0+

Requires this gesture to target an entity or a descendant of entity.

## Declaration

```swift
@MainActor @preconcurrency func targetedToEntity(_ entity: Entity) -> some Gesture<EntityTargetValue<Self.Value>>

```

## Parameters

- `entity`: The entity the gesture targets.

<a id="return-value"></a>

## Return Value

A `RealityCoordinateSpaceConverting` value containing the original gesture value along with the targeted entity.

## See Also

### Using a gesture with a RealityKit entity

- [targetedToAnyEntity()](targetedtoanyentity%28%29.md): Requires this gesture to target an entity.
- [targetedToEntity(where:)](targetedtoentity%28where_%29.md): Requires this gesture to target an entity that can be found in the results of the query.
