> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/appmigrationtester/devicetodeviceexportproperties](https://developer.apple.com/documentation/appmigrationkit/appmigrationtester/devicetodeviceexportproperties)

# AppMigrationTester.DeviceToDeviceExportProperties

**Framework:** AppMigrationKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Properties that describe the result of a device-to-device export.

## Declaration

```swift
struct DeviceToDeviceExportProperties
```

## Topics

### Inspecting data size properties

- [uncompressedBytes](devicetodeviceexportproperties/uncompressedbytes.md): The number of uncompressed bytes written to the exporter.
- [compressedBytes](devicetodeviceexportproperties/compressedbytes.md): The number of compressed bytes written to the migration infrastructure, if the extension uses compression.
- [sizeEstimate](devicetodeviceexportproperties/sizeestimate.md): The size estimate provided by the app extension.

### Inspecting metadata properties

- [version](devicetodeviceexportproperties/version.md): The data version provided by the app extension.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AppMigrationTester.ResourcesExportResult](resourcesexportresult.md): The result of exporting resources to another device.
