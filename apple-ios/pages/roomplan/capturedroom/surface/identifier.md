> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/surface/identifier](https://developer.apple.com/documentation/roomplan/capturedroom/surface/identifier)

# identifier

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A unique alphanumeric value that the framework assigns the surface.

## Declaration

```swift
var identifier: UUID { get }
```

## See Also

### Identifying a surface

- [parentIdentifier](parentidentifier.md): A unique alphanumeric value that identifies a surface’s parent surface.
- [category](category-swift.property.md): A classification that the captured room assigns the surface.
- [CapturedRoom.Surface.Category](category-swift.enum.md): Classifications of a surface in a captured room.
- [confidence](confidence.md): A level of certainty in the surface’s category.
