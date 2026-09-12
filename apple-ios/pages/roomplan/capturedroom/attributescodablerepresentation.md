> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/attributescodablerepresentation](https://developer.apple.com/documentation/roomplan/capturedroom/attributescodablerepresentation)

# CapturedRoom.AttributesCodableRepresentation

**Framework:** RoomPlan  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A serializable set of details that describe an object in the room.

## Declaration

```swift
struct AttributesCodableRepresentation
```

<a id="overview"></a>

## Overview

}

## Topics

### Creating an attributes codable representation

- [init(from:)](attributescodablerepresentation/init%28from_%29.md): Deserializes an attributes codable representation from the given decoder.
- [init(attributes:)](attributescodablerepresentation/init%28attributes_%29.md): Creates an attributes codable representation with the given collection of object attributes.

### Accessing room attributes

- [attributes](attributescodablerepresentation/attributes.md): A collection of object attributes.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)

## See Also

### Serializing a captured room

- [encode(to:)](encode%28to_%29.md): Serializes a captured room to the specified encoder.
