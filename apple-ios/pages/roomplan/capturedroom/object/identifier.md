> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/roomplan/capturedroom/object/identifier

# identifier

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A unique alphanumeric value that the framework assigns the object.

## Declaration

```swift
var identifier: UUID { get }
```

## See Also

### Identifying an object

- [parentIdentifier](parentidentifier.md): A unique alphanumeric value that identifies the object’s parent object or surface.
- [category](category-swift.property.md): A classification that the captured room assigns the object.
- [CapturedRoom.Object.Category](category-swift.enum.md): Classifications of an object in a captured room.
- [confidence](confidence.md): A level of certainty in the object’s category.
