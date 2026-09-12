> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/object/attribute(of:)](https://developer.apple.com/documentation/roomplan/capturedroom/object/attribute(of:))

# attribute(of:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Checks an object for specific attribute types.

## Declaration

```swift
func attribute<T>(of attributeType: T.Type) -> T? where T : CapturedRoomAttribute
```

<a id="discussion"></a>

## Discussion

This function provides details about an object based on attribute type. For example, the following code checks whether an object the framework observes during a scan resembles a dining table:

```swift
let chairType = object.attribute(of: ChairType.self)
if chairType == .dining { /* ... */ }
```

## See Also

### Describing an object

- [attributes](attributes.md): A collection of details that describe a particular object in the room.
