> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/migrationplatform](https://developer.apple.com/documentation/appmigrationkit/migrationplatform)

# MigrationPlatform

**Framework:** AppMigrationKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A type that identifies the platform used by the other device in a migration.

## Declaration

```swift
struct MigrationPlatform
```

## Topics

### Creating a migration platform instance

- [init(\_:)](migrationplatform/init%28__%29.md): Creates a migration platform instance from the given raw value string.

### Identifying migration platforms

- [android](migrationplatform/android.md): The Android platform, as used in a migration.

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

### Inspecting migration request properties

- [destinationPlatform](migrationrequestwithoptions/destinationplatform.md): The destination platform of the migration request.
- [options](migrationrequestwithoptions/options.md): Export options requested by the destination device.
