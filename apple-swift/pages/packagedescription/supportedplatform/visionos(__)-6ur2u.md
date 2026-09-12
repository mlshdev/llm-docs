> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/supportedplatform/visionos(_:)-6ur2u](https://developer.apple.com/documentation/packagedescription/supportedplatform/visionos(_:)-6ur2u)

# visionOS(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.9+

Configure the minimum deployment target version for the visionOS platform using a custom version string.

## Declaration

```swift
static func visionOS(_ versionString: String) -> SupportedPlatform
```

## Parameters

- `versionString`: The minimum deployment target as a string representation of two or three dot-separated integers, such as `1.0.0`.

<a id="return-value"></a>

## Return Value

A `SupportedPlatform` instance.

<a id="discussion"></a>

## Discussion

The version string must be a series of two or three dot-separated integers, such as `1.0` or `1.0.0`.

> **Since**

> First available in PackageDescription 5.9

## See Also

### Supporting visionOS

- [visionOS(\_:)](visionos%28__%29-3ip0z.md): Configure the minimum deployment target version for the visionOS platform.
- [visionOS](../platform/visionos.md): The visionOS platform.
- [SupportedPlatform.VisionOSVersion](visionosversion.md): The supported visionOS version.
