> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/supportedplatform/driverkit(_:)-jxlz](https://developer.apple.com/documentation/packagedescription/supportedplatform/driverkit(_:)-jxlz)

# driverKit(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.5+

Configures the minimum deployment target version for the DriverKit platform.

## Declaration

```swift
static func driverKit(_ version: SupportedPlatform.DriverKitVersion) -> SupportedPlatform
```

## Parameters

- `version`: The minimum deployment target that the package supports.

## See Also

### Supporting DriverKit

- [driverKit(\_:)](driverkit%28__%29-6evdd.md): Configures the minimum deployment target version for the DriverKit platform using a custom version string.
- [driverKit](../platform/driverkit.md): The DriverKit platform
- [SupportedPlatform.DriverKitVersion](driverkitversion.md): The supported DriverKit version.
