> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/roomplan/capturedroom/object/transform

# transform

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A matrix that defines the object’s position and orientation in the room.

## Declaration

```swift
var transform: simd_float4x4 { get }
```

## See Also

### Positioning and sizing an object

- [dimensions](dimensions.md): A bounding box sized to the object’s extremities.
- [story](story.md): The floor number or level on which the object resides.
