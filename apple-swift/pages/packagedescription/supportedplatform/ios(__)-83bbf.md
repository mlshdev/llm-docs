> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/supportedplatform/ios(_:)-83bbf](https://developer.apple.com/documentation/packagedescription/supportedplatform/ios(_:)-83bbf)

# iOS(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method

Configures the minimum deployment target version for the iOS platform using a custom version string.

## Declaration

```swift
static func iOS(_ versionString: String) -> SupportedPlatform
```

## Parameters

- `versionString`: The minimum deployment target as a string representation of two or three dot-separated integers, such as `8.0.1`.

<a id="return-value"></a>

## Return Value

A `SupportedPlatform` instance.

<a id="discussion"></a>

## Discussion

The version string must be a series of two or three dot-separated integers, such as `8.0` or `8.0.1`.

> **Since**

> First available in PackageDescription 5.0

## See Also

### Supporting iOS

- [iOS(\_:)](ios%28__%29-5pvv5.md): Configures the minimum deployment target version for the iOS platform.
- [iOS](../platform/ios.md): The iOS platform.
- [SupportedPlatform.IOSVersion](iosversion.md): The supported iOS version.
