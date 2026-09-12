> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/uuid](https://developer.apple.com/documentation/foundation/uuid)

# UUID

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A universally unique value to identify types, interfaces, and other items.

## Declaration

```swift
struct UUID
```

## Topics

### Creating UUIDs

- [init()](uuid/init%28%29.md): Creates a UUID with RFC 4122 version 4 random bytes.
- [init(uuid:)](uuid/init%28uuid_%29.md): Creates a UUID from the uuid C-language structure.
- [init(uuidString:)](uuid/init%28uuidstring_%29.md): Creates a UUID from a string representation.

### Getting UUID Values

- [uuid](uuid/uuid.md): Returns the UUID as bytes.
- [uuidString](uuid/uuidstring.md): Returns a string created from the UUID, such as “E621E1F8-C36C-495A-93FC-0C247A3E6E5F”

### Using Reference Types

- [NSUUID](nsuuid.md): A universally unique value that can be used to identify types, interfaces, and other items.

### Type Methods

- [random(using:)](uuid/random%28using_%29.md): Generates a new random UUID.

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](../corevideo/cvattachmentvaluerepresentable.md)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [EntityIdentifierConvertible](../appintents/entityidentifierconvertible.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ReferenceConvertible](referenceconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
