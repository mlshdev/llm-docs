> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/supportedplatform/macos(_:)-9771f](https://developer.apple.com/documentation/packagedescription/supportedplatform/macos(_:)-9771f)

# macOS(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method

Configures the minimum deployment target version for the macOS platform using a version string.

## Declaration

```swift
static func macOS(_ versionString: String) -> SupportedPlatform
```

## Parameters

- `versionString`: The minimum deployment target as a string representation of two or three dot-separated integers, such as `10.10.1`.

<a id="return-value"></a>

## Return Value

A `SupportedPlatform` instance.

<a id="discussion"></a>

## Discussion

The version string must be a series of two or three dot-separated integers, such as `10.10` or `10.10.1`.

> **Since**

> First available in PackageDescription 5.0.

## See Also

### Supporting macOS

- [macOS(\_:)](macos%28__%29-2wthp.md): Configures the minimum deployment target version for the macOS platform.
- [macOS](../platform/macos.md): The macOS platform.
- [SupportedPlatform.MacOSVersion](macosversion.md): The supported macOS version.
