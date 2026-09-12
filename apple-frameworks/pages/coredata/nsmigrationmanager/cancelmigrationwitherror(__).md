> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/cancelmigrationwitherror(_:)](https://developer.apple.com/documentation/coredata/nsmigrationmanager/cancelmigrationwitherror(_:))

# cancelMigrationWithError(\_:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Cancels the migration with a given error.

## Declaration

```swift
func cancelMigrationWithError(_ error: any Error)
```

## Parameters

- `error`: An error object that describes the reason why the migration is canceled.

<a id="Discussion"></a>

## Discussion

You can invoke this method from anywhere in the migration process to abort the migration. Calling this method causes [migrateStore(from:sourceType:options:with:toDestinationURL:destinationType:destinationOptions:)](migratestore%28from_sourcetype_options_with_todestinationurl_destinationtype_destinationoptions_%29.md) to abort the migration and return `error`—you should provide an appropriate error to indicate the reason for the cancellation.

## See Also

### Aborting a Migration

- [reset()](reset%28%29.md): Resets the association tables for the migration.

# cancelMigrationWithError: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Cancels the migration with a given error.

## Declaration

```objectivec
- (void) cancelMigrationWithError:(NSError *) error;
```

## Parameters

- `error`: An error object that describes the reason why the migration is canceled.

<a id="Discussion"></a>

## Discussion

You can invoke this method from anywhere in the migration process to abort the migration. Calling this method causes [migrateStoreFromURL:type:options:withMappingModel:toDestinationURL:destinationType:destinationOptions:error:](migratestore%28from_sourcetype_options_with_todestinationurl_destinationtype_destinationoptions_%29.md) to abort the migration and return `error`—you should provide an appropriate error to indicate the reason for the cancellation.

## See Also

### Aborting a Migration

- [reset](reset%28%29.md): Resets the association tables for the migration.
