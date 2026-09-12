> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/schema/attribute/option](https://developer.apple.com/documentation/swiftdata/schema/attribute/option)

# Schema.Attribute.Option

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

## Declaration

```swift
struct Option
```

## Topics

### Accessing property options

- [allowsCloudEncryption](option/allowscloudencryption.md): Stores the property’s value in an encrypted form.
- [externalStorage](option/externalstorage.md): Stores the property’s value as binary data adjacent to the model storage.
- [preserveValueOnDeletion](option/preservevalueondeletion.md): Preserves the property’s value in the persistent history when the context deletes the owning model.
- [spotlight](option/spotlight.md): Indexes the property’s value so it can appear in Spotlight search results.
- [unique](option/unique.md): Ensures the property’s value is unique across all models of the same type.
- [transformable(by:)](option/transformable%28by_%29-9d4xh.md): Transforms the property’s value between an in-memory form and a persisted form.
- [transformable(by:)](option/transformable%28by_%29-lunz.md)
- [ephemeral](option/ephemeral.md): Track changes to this property but do not persist
- [codable](option/codable.md): Uses the property’s codable representation to store the property.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
