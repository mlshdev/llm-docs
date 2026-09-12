> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/migrationstatus](https://developer.apple.com/documentation/appmigrationkit/migrationstatus)

# MigrationStatus

**Framework:** AppMigrationKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A type the containing app uses to determine the status of a completed import.

## Declaration

```swift
enum MigrationStatus
```

<a id="overview"></a>

## Overview

After the first time the app launches, check this type’s static variable [importStatus](migrationstatus/importstatus.md) to determine whether a migration took place and, if so, whether it succeeded. To determine the status, check to see if `importStatus` is non-`nil` and that its value is [MigrationStatus.success](migrationstatus/success.md). After a successful migration, notify the person using the app that migration succeeded, and call the static method [clearImportStatus()](migrationstatus/clearimportstatus%28%29.md).

## Topics

### Accessing the import status

- [importStatus](migrationstatus/importstatus.md): A property to indicate the status of import from another device into the app.
- [clearImportStatus()](migrationstatus/clearimportstatus%28%29.md): Sets the import status to a nil value to prevent further notification.

### Examining migration statuses

- [MigrationStatus.success](migrationstatus/success.md): The migration completed successfully.
- [MigrationStatus.failure(\_:)](migrationstatus/failure%28__%29.md): The migration failed with an error.
