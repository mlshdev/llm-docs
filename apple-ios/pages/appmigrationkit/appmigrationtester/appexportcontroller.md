> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/appmigrationtester/appexportcontroller](https://developer.apple.com/documentation/appmigrationkit/appmigrationtester/appexportcontroller)

# AppMigrationTester.AppExportController

**Framework:** AppMigrationKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A class you use to test your extension’s export code.

## Declaration

```swift
final class AppExportController
```

<a id="overview"></a>

## Overview

Use the [exportController](exportcontroller.md) property to obtain an instance of this class, then use its methods to call the export-related code of your app migration extension.

## Topics

### Testing resource export

- [exportResources(request:progress:)](appexportcontroller/exportresources%28request_progress_%29-15m4v.md): Tells the migration extension to begin exporting its resources, using options defined by the destination platform.
- [exportResources(request:progress:)](appexportcontroller/exportresources%28request_progress_%29-5mw8u.md): Tells the migration extension to begin exporting its resources.
- [AppMigrationTester.ResourcesExportResult](resourcesexportresult.md): The result of exporting resources to another device.

### Supporting types

- [MigrationRequestWithOptions](../migrationrequestwithoptions.md): An object that exposes properties of the migration request.
- [MigrationRequest](../migrationrequest.md): A migration request that uses the default supported options.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Testing export

- [exportController](exportcontroller.md): An instance of the controller object you use to test your export code.
