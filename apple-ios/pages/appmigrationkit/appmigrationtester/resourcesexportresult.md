> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appmigrationkit/appmigrationtester/resourcesexportresult

# AppMigrationTester.ResourcesExportResult

**Framework:** AppMigrationKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The result of exporting resources to another device.

## Declaration

```swift
struct ResourcesExportResult
```

## Topics

### Inspecting result properties

- [extractedResourcesURL](resourcesexportresult/extractedresourcesurl.md): A URL that refers to the directory containing the the exported resources.
- [exportProperties](resourcesexportresult/exportproperties.md): Properties of the device-to-device export.
- [AppMigrationTester.DeviceToDeviceExportProperties](devicetodeviceexportproperties.md): Properties that describe the result of a device-to-device export.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AppMigrationTester.DeviceToDeviceExportProperties](devicetodeviceexportproperties.md): Properties that describe the result of a device-to-device export.
