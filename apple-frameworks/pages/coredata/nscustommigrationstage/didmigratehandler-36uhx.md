> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscustommigrationstage/didmigratehandler-36uhx](https://developer.apple.com/documentation/coredata/nscustommigrationstage/didmigratehandler-36uhx)

# didMigrateHandler

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The handler to execute after the stage runs.

## Declaration

```objectivec
@property (copy, nullable) _Bool (^)(NSStagedMigrationManager *, NSCustomMigrationStage *, NSError **) didMigrateHandler;
```

<a id="Discussion"></a>

## Discussion

Use this handler to perform any cleanup tasks on the persistent store’s data after the migration has run. Access the store using the [container](../nsstagedmigrationmanager/container.md) property of the handler’s `migrationManager` parameter.

## See Also

### Assigning event handlers

- [willMigrateHandler](willmigratehandler-72p73.md): The handler to execute before the stage runs.
