> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftdata/migrationstage/custom(fromversion:toversion:willmigrate:didmigrate:)

# MigrationStage.custom(fromVersion:toVersion:willMigrate:didMigrate:)

**Framework:** SwiftData  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

## Declaration

```swift
@preconcurrency case custom(fromVersion: any VersionedSchema.Type, toVersion: any VersionedSchema.Type, willMigrate: (@Sendable (ModelContext) throws -> Void)?, didMigrate: (@Sendable (ModelContext) throws -> Void)?)
```

## See Also

### Migration stages

- [MigrationStage.lightweight(fromVersion:toVersion:)](lightweight%28fromversion_toversion_%29.md)
