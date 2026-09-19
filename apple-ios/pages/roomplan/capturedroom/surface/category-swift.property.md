> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/roomplan/capturedroom/surface/category-swift.property

# category

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A classification that the captured room assigns the surface.

## Declaration

```swift
var category: CapturedRoom.Surface.Category { get }
```

## See Also

### Identifying a surface

- [identifier](identifier.md): A unique alphanumeric value that the framework assigns the surface.
- [parentIdentifier](parentidentifier.md): A unique alphanumeric value that identifies a surface’s parent surface.
- [CapturedRoom.Surface.Category](category-swift.enum.md): Classifications of a surface in a captured room.
- [confidence](confidence.md): A level of certainty in the surface’s category.
