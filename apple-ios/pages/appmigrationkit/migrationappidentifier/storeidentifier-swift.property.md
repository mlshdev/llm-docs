> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appmigrationkit/migrationappidentifier/storeidentifier-swift.property

# storeIdentifier

**Framework:** AppMigrationKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An identifier that indicates the store in which the app resides.

## Declaration

```swift
let storeIdentifier: MigrationAppIdentifier.StoreIdentifier
```

## See Also

### Working with identifier properties

- [MigrationAppIdentifier.StoreIdentifier](storeidentifier-swift.struct.md): A type that indicates an app store in which an app resides.
- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app within the store.
- [platform](platform.md): The platform in which the app resides.
- [MigrationPlatform](../migrationplatform.md): A type that identifies the platform used by the other device in a migration.
