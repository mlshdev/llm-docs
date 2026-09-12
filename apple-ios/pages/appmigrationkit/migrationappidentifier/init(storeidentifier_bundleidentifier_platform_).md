> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/migrationappidentifier/init(storeidentifier:bundleidentifier:platform:)](https://developer.apple.com/documentation/appmigrationkit/migrationappidentifier/init(storeidentifier:bundleidentifier:platform:))

# init(storeIdentifier:bundleIdentifier:platform:)

**Framework:** AppMigrationKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a migration app identifier instance.

## Declaration

```swift
init(storeIdentifier: MigrationAppIdentifier.StoreIdentifier, bundleIdentifier: String, platform: MigrationPlatform)
```

## Parameters

- `storeIdentifier`: An identifier that indicates the store in which the app resides.
- `bundleIdentifier`: The bundle identifier of the app within the store.
- `platform`: The platform in which the app resides.
