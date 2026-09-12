> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/supportedplatform/watchos(_:)-4lrx0](https://developer.apple.com/documentation/packagedescription/supportedplatform/watchos(_:)-4lrx0)

# watchOS(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method

Configure the minimum deployment target version for the watchOS platform using a custom version string.

## Declaration

```swift
static func watchOS(_ versionString: String) -> SupportedPlatform
```

## Parameters

- `versionString`: The minimum deployment target as a string representation of two or three dot-separated integers, such as `2.0.1`.

<a id="return-value"></a>

## Return Value

A `SupportedPlatform` instance.

<a id="discussion"></a>

## Discussion

The version string must be a series of two or three dot-separated integers, such as `2.0` or `2.0.1`.

> **Since**

> First available in PackageDescription 5.0

## See Also

### Supporting watchOS

- [watchOS(\_:)](watchos%28__%29-t998.md): Configure the minimum deployment target version for the watchOS platform.
- [watchOS](../platform/watchos.md): The watchOS platform.
- [SupportedPlatform.WatchOSVersion](watchosversion.md): The supported watchOS version.
