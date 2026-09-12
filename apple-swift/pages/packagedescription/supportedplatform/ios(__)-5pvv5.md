> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/supportedplatform/ios(_:)-5pvv5](https://developer.apple.com/documentation/packagedescription/supportedplatform/ios(_:)-5pvv5)

# iOS(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method

Configures the minimum deployment target version for the iOS platform.

## Declaration

```swift
static func iOS(_ version: SupportedPlatform.IOSVersion) -> SupportedPlatform
```

## Parameters

- `version`: The minimum deployment target that the package supports.

<a id="return-value"></a>

## Return Value

A `SupportedPlatform` instance.

<a id="discussion"></a>

## Discussion

> **Since**

> First available in PackageDescription 5.0.

## See Also

### Supporting iOS

- [iOS(\_:)](ios%28__%29-83bbf.md): Configures the minimum deployment target version for the iOS platform using a custom version string.
- [iOS](../platform/ios.md): The iOS platform.
- [SupportedPlatform.IOSVersion](iosversion.md): The supported iOS version.
