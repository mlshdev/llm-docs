> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/encode(to:)](https://developer.apple.com/documentation/roomplan/capturedroom/encode(to:))

# encode(to:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Serializes a captured room to the specified encoder.

## Declaration

```swift
func encode(to encoder: any Encoder) throws
```

## Parameters

- `encoder`: An object that the captured room serializes to.

## See Also

### Serializing a captured room

- [CapturedRoom.AttributesCodableRepresentation](attributescodablerepresentation.md): A serializable set of details that describe an object in the room.
