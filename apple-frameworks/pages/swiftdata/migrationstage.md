> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/migrationstage](https://developer.apple.com/documentation/swiftdata/migrationstage)

# MigrationStage

**Framework:** SwiftData  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Describes a migration between two versions of the same schema.

## Declaration

```swift
enum MigrationStage
```

## Topics

### Migration stages

- [MigrationStage.lightweight(fromVersion:toVersion:)](migrationstage/lightweight%28fromversion_toversion_%29.md)
- [MigrationStage.custom(fromVersion:toVersion:willMigrate:didMigrate:)](migrationstage/custom%28fromversion_toversion_willmigrate_didmigrate_%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing migration stages

- [stages](schemamigrationplan/stages.md)
