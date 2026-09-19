> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appmigrationkit/appmigrationtester/init(platform:)

# init(platform:)

**Framework:** AppMigrationKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a tester instance for migrating to or from the specified platform.

## Declaration

```swift
init(platform: MigrationPlatform) async throws
```

## Parameters

- `platform`: The platform to test migration to or from.
