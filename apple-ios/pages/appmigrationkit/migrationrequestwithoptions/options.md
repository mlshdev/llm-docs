> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/migrationrequestwithoptions/options](https://developer.apple.com/documentation/appmigrationkit/migrationrequestwithoptions/options)

# options

**Framework:** AppMigrationKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Export options requested by the destination device.

## Declaration

```swift
let options: [OptionsType : Data]
```

<a id="discussion"></a>

## Discussion

The target operating system of the migration defines the options supported for a migration, if any. Refer to the target operating system documentation to determine the options it supports.

> **Tip**

> The use of migration options is uncommon. If you don’t need migration options, use [ResourcesExporting](../resourcesexporting.md), which uses the no-op [MigrationDefaultSupportedOptions](../migrationdefaultsupportedoptions.md) type, rather than [ResourcesExportingWithOptions](../resourcesexportingwithoptions.md).

## See Also

### Inspecting migration request properties

- [destinationPlatform](destinationplatform.md): The destination platform of the migration request.
- [MigrationPlatform](../migrationplatform.md): A type that identifies the platform used by the other device in a migration.
