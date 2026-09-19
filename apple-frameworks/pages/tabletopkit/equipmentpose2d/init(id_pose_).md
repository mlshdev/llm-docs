> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/equipmentpose2d/init(id:pose:)

# init(id:pose:)

**Framework:** TabletopKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates a position and rotation on the table for a specific piece of equipment.

## Declaration

```swift
init(id: EquipmentIdentifier, pose: TableVisualState.Pose2D)
```

## Parameters

- `id`: A unique identifier for the equipment.
- `pose`: The position and rotation of the equipment on the table.
