> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/resourcesexportingwithoptions](https://developer.apple.com/documentation/appmigrationkit/resourcesexportingwithoptions)

# ResourcesExportingWithOptions

**Framework:** AppMigrationKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A protocol for exporting transportable resources in an archive format.

## Declaration

```swift
protocol ResourcesExportingWithOptions : AppMigrationExtension
```

<a id="overview"></a>

## Overview

Conform to this protocol in your app extension to export transportable resources: files on disk that can you can copy as-is to the destination device without converting to an intermediate transport format.

Only use this approach when your app’s files require no changes before exporting. If you convert files locally to an intermediate transport format, export might fail if there’s not enough free space on the file system.

During export, the system prevents launching your app and any of its extensions. This ensures the migration system has exclusive access to the app contents. The export process may also archive, compress, or de-duplicate the files during transport.

Make continuous progress while exporting by repeatedly calling the archiver’s [appendItem(at:pathInArchive:)](resourcesarchiver/appenditem%28at_pathinarchive_%29.md) method as each resource is ready. If the framework determines that your extension is hung, it may terminate the extension without migrating the app’s data to the destination.

## Topics

### Exporting resources

- [exportResources(to:request:)](resourcesexportingwithoptions/exportresources%28to_request_%29.md): Exports resources from the app, in response to a request from the migration system.
- [ResourcesArchiver](resourcesarchiver.md): An object your app uses to archive resources during an export operation.
- [MigrationRequestWithOptions](migrationrequestwithoptions.md): An object that exposes properties of the migration request.

### Declaring resource properties

- [resourcesSizeEstimate](resourcesexportingwithoptions/resourcessizeestimate.md): The estimated size of all resources to export, in bytes.
- [resourcesVersion](resourcesexportingwithoptions/resourcesversion.md): A property that identifies the version of the format the export uses.
- [resourcesCompressible](resourcesexportingwithoptions/resourcescompressible.md): A property that indicates whether the archiver attempts to compress the resources passed to it.

### Declaring export options

- [OptionsType](resourcesexportingwithoptions/optionstype.md): A type that indicates the options supported by the destination device.

## Relationships

### Inherits From

- [AppExtension](https://developer.apple.com/documentation/extensionfoundation/appextension)
- [AppMigrationExtension](appmigrationextension.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [ResourcesExporting](resourcesexporting.md)

## See Also

### Export operations

- [ResourcesExporting](resourcesexporting.md): A protocol for exporting transportable resources in a streaming archive format when the destination platform doesn’t require special migration options.
