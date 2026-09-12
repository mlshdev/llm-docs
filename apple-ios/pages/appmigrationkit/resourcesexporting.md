> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/resourcesexporting](https://developer.apple.com/documentation/appmigrationkit/resourcesexporting)

# ResourcesExporting

**Framework:** AppMigrationKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A protocol for exporting transportable resources in a streaming archive format when the destination platform doesn’t require special migration options.

## Declaration

```swift
protocol ResourcesExporting : ResourcesExportingWithOptions where Self.OptionsType == MigrationDefaultSupportedOptions
```

<a id="overview"></a>

## Overview

This protocol extends [ResourcesExportingWithOptions](resourcesexportingwithoptions.md) and sets its [OptionsType](resourcesexportingwithoptions/optionstype.md) to [MigrationDefaultSupportedOptions](migrationdefaultsupportedoptions.md), which indicates the destination platform doesn’t require any special options. If you know your export to the other platform doesn’t need these options, conform to this protocol in your app exension and implement the methods and properties defined by [ResourcesExportingWithOptions](resourcesexportingwithoptions.md).

As with [ResourcesExportingWithOptions](resourcesexportingwithoptions.md), this protocol is only appropriate for transportable resources, those that you can copy as-is from the current file system to the destination device.

## Relationships

### Inherits From

- [AppExtension](https://developer.apple.com/documentation/extensionfoundation/appextension)
- [AppMigrationExtension](appmigrationextension.md)
- [ResourcesExportingWithOptions](resourcesexportingwithoptions.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Export operations

- [ResourcesExportingWithOptions](resourcesexportingwithoptions.md): A protocol for exporting transportable resources in an archive format.
