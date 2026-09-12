> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit](https://developer.apple.com/documentation/appmigrationkit)

# AppMigrationKit

**Framework:** AppMigrationKit  
**Kind:** Framework  
**Availability:** iOS 26.1+ · iPadOS 26.1+

Perform a one-time transfer of your app’s on-device data to or from a device running another platform.

<a id="overview"></a>

## Overview

Use AppMigrationKit to export your app’s on-device data to another device running a non-Apple platform, or to import from another platform, or both.

To participate in a cross-platform migration, your app creates an [app extension](https://developer.apple.com/app-extensions/) that conforms to the [AppMigrationExtension](appmigrationkit/appmigrationextension.md) protocol and at least one of its subprotocols. The protocols you adopt indicate whether your app imports data, exports data, or both.

If your app also stores data in the cloud, have the app on the other platform retrieve that data after after the migration completes. Similarly, when importing from another platform, retrieve any cloud data after migration completes.

> **Note**

> AppMigrationKit only supports migration to and from non-Apple platforms, such as Android. The system doesn’t use the framework for migration between iOS or iPadOS devices. The framework also has no functionality in iOS apps running in visionOS or in macOS on Apple silicon. The framework ignores calls from Mac apps built with Mac Catalyst.

## Topics

### App extensions

- [AppMigrationExtension](appmigrationkit/appmigrationextension.md): An app extension you extend to participate in data export and import.
- [com.apple.developer.app-migration.data-container-access](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.app-migration.data-container-access): An entitlement required for app extensions to perform a one-time transfer of on-device data to or from another platform.

### Export operations

- [ResourcesExportingWithOptions](appmigrationkit/resourcesexportingwithoptions.md): A protocol for exporting transportable resources in an archive format.
- [ResourcesExporting](appmigrationkit/resourcesexporting.md): A protocol for exporting transportable resources in a streaming archive format when the destination platform doesn’t require special migration options.

### Import operations

- [ResourcesImporting](appmigrationkit/resourcesimporting.md): A protocol for exporting transportable resources in a streaming archive format.

### Migration status

- [MigrationStatus](appmigrationkit/migrationstatus.md): A type the containing app uses to determine the status of a completed import.

### Migration code tests

- [AppMigrationTester](appmigrationkit/appmigrationtester.md): A test-only type your app uses to test app migration extensions.
