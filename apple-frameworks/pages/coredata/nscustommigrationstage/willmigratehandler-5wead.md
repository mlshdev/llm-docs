> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscustommigrationstage/willmigratehandler-5wead](https://developer.apple.com/documentation/coredata/nscustommigrationstage/willmigratehandler-5wead)

# willMigrateHandler

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+ · Swift 5.8+

The handler to execute before the stage runs.

## Declaration

```swift
var willMigrateHandler: ((NSStagedMigrationManager, NSCustomMigrationStage) throws -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this handler to prepare the persistent store’s data for the pending migration. Access the store using the [container](../nsstagedmigrationmanager/container.md) property of the handler’s `migrationManager` parameter.

## See Also

### Assigning event handlers

- [didMigrateHandler](didmigratehandler-2zbss.md): The handler to execute after the stage runs.
