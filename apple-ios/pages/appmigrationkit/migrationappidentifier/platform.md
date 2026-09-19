> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appmigrationkit/migrationappidentifier/platform

# platform

**Framework:** AppMigrationKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The platform in which the app resides.

## Declaration

```swift
let platform: MigrationPlatform
```

## See Also

### Working with identifier properties

- [storeIdentifier](storeidentifier-swift.property.md): An identifier that indicates the store in which the app resides.
- [MigrationAppIdentifier.StoreIdentifier](storeidentifier-swift.struct.md): A type that indicates an app store in which an app resides.
- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app within the store.
- [MigrationPlatform](../migrationplatform.md): A type that identifies the platform used by the other device in a migration.
