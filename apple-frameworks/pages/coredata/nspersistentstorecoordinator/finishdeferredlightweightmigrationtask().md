> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/finishdeferredlightweightmigrationtask()](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/finishdeferredlightweightmigrationtask())

# finishDeferredLightweightMigrationTask() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Executes a single pending task of a deferred lightweight migration.

## Declaration

```swift
func finishDeferredLightweightMigrationTask() throws
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Enable deferred lightweight migrations before using this method. For more information, see [NSPersistentStoreDeferredLightweightMigrationOptionKey](../nspersistentstoredeferredlightweightmigrationoptionkey.md).

## See Also

### Deferring a store’s migrations

- [NSPersistentStoreDeferredLightweightMigrationOptionKey](../nspersistentstoredeferredlightweightmigrationoptionkey.md): The key for enabling deferred lightweight migrations.
- [finishDeferredLightweightMigration()](finishdeferredlightweightmigration%28%29.md): Executes all remaining tasks of a deferred lightweight migration.

# finishDeferredLightweightMigrationTask: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Executes a single pending task of a deferred lightweight migration.

## Declaration

```objectivec
- (BOOL) finishDeferredLightweightMigrationTask:(NSError **) error;
```

## Parameters

- `error`: A pointer to an error object. If an error occurs, the pointer provides access to that error. Specify `nil` if you don’t need the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the task executes successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

> **Note**

>  Enable deferred lightweight migrations before using this method. For more information, see [NSPersistentStoreDeferredLightweightMigrationOptionKey](../nspersistentstoredeferredlightweightmigrationoptionkey.md).

## See Also

### Deferring a store’s migrations

- [NSPersistentStoreDeferredLightweightMigrationOptionKey](../nspersistentstoredeferredlightweightmigrationoptionkey.md): The key for enabling deferred lightweight migrations.
- [finishDeferredLightweightMigration:](finishdeferredlightweightmigration%28%29.md): Executes all remaining tasks of a deferred lightweight migration.
