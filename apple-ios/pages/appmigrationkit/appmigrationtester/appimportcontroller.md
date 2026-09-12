> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/appmigrationtester/appimportcontroller](https://developer.apple.com/documentation/appmigrationkit/appmigrationtester/appimportcontroller)

# AppMigrationTester.AppImportController

**Framework:** AppMigrationKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A class you use to test your extension’s import code.

## Declaration

```swift
final class AppImportController
```

<a id="overview"></a>

## Overview

Use the [importController](importcontroller.md) property to obtain an instance of this class, then use its methods to call the import-related code of your app migration extension.

## Topics

### Testing resource import

- [importResources(from:importRequest:progress:)](appimportcontroller/importresources%28from_importrequest_progress_%29.md): Tells the migration extension to begin importing transportable resources into the app extension.

### Completing an import

- [registerImportCompletion(with:)](appimportcontroller/registerimportcompletion%28with_%29.md): Tells your app that import completed with a given status.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Testing import

- [importController](importcontroller.md): An instance of the controller object you use to test your import code.
