> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/resourcesexportingwithoptions/optionstype](https://developer.apple.com/documentation/appmigrationkit/resourcesexportingwithoptions/optionstype)

# OptionsType

**Framework:** AppMigrationKit  
**Kind:** Associated Type  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A type that indicates the options supported by the destination device.

## Declaration

```swift
associatedtype OptionsType : CaseIterable, Hashable, RawRepresentable, Sendable where Self.OptionsType.RawValue == String
```

<a id="discussion"></a>

## Discussion

This type defines the [options](../migrationrequestwithoptions/options.md) of the export’s [MigrationRequestWithOptions](../migrationrequestwithoptions.md). If you don’t need a unique type for export options, your app extension can conform to [ResourcesExporting](../resourcesexporting.md) instead, which uses [MigrationDefaultSupportedOptions](../migrationdefaultsupportedoptions.md).
