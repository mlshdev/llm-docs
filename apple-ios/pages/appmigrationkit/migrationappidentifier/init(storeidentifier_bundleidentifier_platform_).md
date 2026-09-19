> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appmigrationkit/migrationappidentifier/init(storeidentifier:bundleidentifier:platform:)

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
