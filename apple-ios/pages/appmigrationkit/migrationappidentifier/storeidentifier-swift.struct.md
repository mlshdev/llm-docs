> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/migrationappidentifier/storeidentifier-swift.struct](https://developer.apple.com/documentation/appmigrationkit/migrationappidentifier/storeidentifier-swift.struct)

# MigrationAppIdentifier.StoreIdentifier

**Framework:** AppMigrationKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A type that indicates an app store in which an app resides.

## Declaration

```swift
struct StoreIdentifier
```

## Topics

### Creating a store identifier instance

- [init(\_:)](storeidentifier-swift.struct/init%28__%29.md)

### Type Properties

- [googlePlay](storeidentifier-swift.struct/googleplay.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with identifier properties

- [storeIdentifier](storeidentifier-swift.property.md): An identifier that indicates the store in which the app resides.
- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app within the store.
- [platform](platform.md): The platform in which the app resides.
- [MigrationPlatform](../migrationplatform.md): A type that identifies the platform used by the other device in a migration.
