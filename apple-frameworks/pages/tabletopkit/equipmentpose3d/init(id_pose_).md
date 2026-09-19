> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/equipmentpose3d/init(id:pose:)

# init(id:pose:)

**Framework:** TabletopKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates a position and orientation on the table for a specific piece of equipment.

## Declaration

```swift
init(id: EquipmentIdentifier, pose: Pose3D)
```

## Parameters

- `id`: A unique identifier for the equipment.
- `pose`: The position and orientation of the equipment on the table.
