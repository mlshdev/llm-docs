> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/supportedplatform/driverkit(_:)-6evdd](https://developer.apple.com/documentation/packagedescription/supportedplatform/driverkit(_:)-6evdd)

# driverKit(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.5+

Configures the minimum deployment target version for the DriverKit platform using a custom version string.

## Declaration

```swift
static func driverKit(_ versionString: String) -> SupportedPlatform
```

## Parameters

- `versionString`: The minimum deployment target as a string representation of two or three dot-separated integers, such as `19.0.1`.

<a id="return-value"></a>

## Return Value

A `SupportedPlatform` instance.

## See Also

### Supporting DriverKit

- [driverKit(\_:)](driverkit%28__%29-jxlz.md): Configures the minimum deployment target version for the DriverKit platform.
- [driverKit](../platform/driverkit.md): The DriverKit platform
- [SupportedPlatform.DriverKitVersion](driverkitversion.md): The supported DriverKit version.
