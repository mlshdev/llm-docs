> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/migrationappidentifier](https://developer.apple.com/documentation/appmigrationkit/migrationappidentifier)

# MigrationAppIdentifier

**Framework:** AppMigrationKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A type that identifies an app on a different platform.

## Declaration

```swift
struct MigrationAppIdentifier
```

## Topics

### Creating a migration app identifier

- [init(storeIdentifier:bundleIdentifier:platform:)](migrationappidentifier/init%28storeidentifier_bundleidentifier_platform_%29.md): Creates a migration app identifier instance.

### Working with identifier properties

- [storeIdentifier](migrationappidentifier/storeidentifier-swift.property.md): An identifier that indicates the store in which the app resides.
- [MigrationAppIdentifier.StoreIdentifier](migrationappidentifier/storeidentifier-swift.struct.md): A type that indicates an app store in which an app resides.
- [bundleIdentifier](migrationappidentifier/bundleidentifier.md): The bundle identifier of the app within the store.
- [platform](migrationappidentifier/platform.md): The platform in which the app resides.
- [MigrationPlatform](migrationplatform.md): A type that identifies the platform used by the other device in a migration.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting import request properties

- [sourceAppIdentifier](resourcesimportrequest/sourceappidentifier.md): The application that exported the content.
- [sourceVersion](resourcesimportrequest/sourceversion.md): The data format version provided by the source application.
