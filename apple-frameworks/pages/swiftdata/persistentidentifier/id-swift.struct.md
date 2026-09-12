> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/persistentidentifier/id-swift.struct](https://developer.apple.com/documentation/swiftdata/persistentidentifier/id-swift.struct)

# PersistentIdentifier.ID

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that represents the stable identity of a SwiftData model.

## Declaration

```swift
struct ID
```

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing identity information

- [id](id-swift.property.md): The value that uniquely identifies the associated model within the containing store.
- [storeIdentifier](storeidentifier.md): The identifier of the store that contains the associated model.
- [entityName](entityname.md): The entity name for the associated model.
