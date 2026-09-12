> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/resourcesarchiver](https://developer.apple.com/documentation/appmigrationkit/resourcesarchiver)

# ResourcesArchiver

**Framework:** AppMigrationKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An object your app uses to archive resources during an export operation.

## Declaration

```swift
final class ResourcesArchiver
```

<a id="overview"></a>

## Overview

> **Important**

> This class handles task cancellation automatically by throwing cancellation errors up the stack if the migration system cancels the export. Don’t catch the cancellation errors; doing so causes the system to kill the app extension.

## Topics

### Appending resources

- [appendItem(at:pathInArchive:)](resourcesarchiver/appenditem%28at_pathinarchive_%29.md): Sends a file to the archiver for export.

## See Also

### Exporting resources

- [exportResources(to:request:)](resourcesexportingwithoptions/exportresources%28to_request_%29.md): Exports resources from the app, in response to a request from the migration system.
- [MigrationRequestWithOptions](migrationrequestwithoptions.md): An object that exposes properties of the migration request.
