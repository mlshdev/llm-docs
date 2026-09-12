> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/surface/parentidentifier](https://developer.apple.com/documentation/roomplan/capturedroom/surface/parentidentifier)

# parentIdentifier

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A unique alphanumeric value that identifies a surface’s parent surface.

## Declaration

```swift
var parentIdentifier: UUID? { get }
```

<a id="discussion"></a>

## Discussion

For example, the parent of a window is the wall surface on which the window rests.

## See Also

### Identifying a surface

- [identifier](identifier.md): A unique alphanumeric value that the framework assigns the surface.
- [category](category-swift.property.md): A classification that the captured room assigns the surface.
- [CapturedRoom.Surface.Category](category-swift.enum.md): Classifications of a surface in a captured room.
- [confidence](confidence.md): A level of certainty in the surface’s category.
