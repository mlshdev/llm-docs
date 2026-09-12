> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/supportedplatform/visionos(_:)-3ip0z](https://developer.apple.com/documentation/packagedescription/supportedplatform/visionos(_:)-3ip0z)

# visionOS(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.9+

Configure the minimum deployment target version for the visionOS platform.

## Declaration

```swift
static func visionOS(_ version: SupportedPlatform.VisionOSVersion) -> SupportedPlatform
```

## Parameters

- `version`: The minimum deployment target that the package supports.

<a id="return-value"></a>

## Return Value

A `SupportedPlatform` instance.

<a id="discussion"></a>

## Discussion

> **Since**

> First available in PackageDescription 5.9

## See Also

### Supporting visionOS

- [visionOS(\_:)](visionos%28__%29-6ur2u.md): Configure the minimum deployment target version for the visionOS platform using a custom version string.
- [visionOS](../platform/visionos.md): The visionOS platform.
- [SupportedPlatform.VisionOSVersion](visionosversion.md): The supported visionOS version.
