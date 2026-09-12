> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/appmigrationextension](https://developer.apple.com/documentation/appmigrationkit/appmigrationextension)

# AppMigrationExtension

**Framework:** AppMigrationKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An app extension you extend to participate in data export and import.

## Declaration

```swift
protocol AppMigrationExtension : AppExtension, Sendable
```

<a id="overview"></a>

## Overview

During migration, the system calls your extension to collect and export its data to the receiving device. On import, the system calls your app extension just after app installation, but before the app is actually launchable.

The protocols specific to import and export operations extend this type, such as [ResourcesExportingWithOptions](resourcesexportingwithoptions.md) and [ResourcesImporting](resourcesimporting.md). For your app extension to successfully export or import data in response to a system call, it needs to conform to one or more of these child protocols.

## Topics

### Accessing migration data

- [appContainer](appmigrationextension/appcontainer.md): The data container of the containing app.
- [MigrationDataContainer](migrationdatacontainer.md): An object describing an app’s data container

## Relationships

### Inherits From

- [AppExtension](https://developer.apple.com/documentation/extensionfoundation/appextension)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [ResourcesExporting](resourcesexporting.md)
- [ResourcesExportingWithOptions](resourcesexportingwithoptions.md)
- [ResourcesImporting](resourcesimporting.md)

## See Also

### App extensions

- [com.apple.developer.app-migration.data-container-access](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.app-migration.data-container-access): An entitlement required for app extensions to perform a one-time transfer of on-device data to or from another platform.
