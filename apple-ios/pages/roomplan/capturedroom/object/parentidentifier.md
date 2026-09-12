> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/object/parentidentifier](https://developer.apple.com/documentation/roomplan/capturedroom/object/parentidentifier)

# parentIdentifier

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A unique alphanumeric value that identifies the object’s parent object or surface.

## Declaration

```swift
var parentIdentifier: UUID? { get }
```

<a id="discussion"></a>

## Discussion

For example, the parent of a sink is the storage area in which the sink resides.

## See Also

### Identifying an object

- [identifier](identifier.md): A unique alphanumeric value that the framework assigns the object.
- [category](category-swift.property.md): A classification that the captured room assigns the object.
- [CapturedRoom.Object.Category](category-swift.enum.md): Classifications of an object in a captured room.
- [confidence](confidence.md): A level of certainty in the object’s category.
