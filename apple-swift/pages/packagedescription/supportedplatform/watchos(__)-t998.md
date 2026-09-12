> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/supportedplatform/watchos(_:)-t998](https://developer.apple.com/documentation/packagedescription/supportedplatform/watchos(_:)-t998)

# watchOS(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method

Configure the minimum deployment target version for the watchOS platform.

## Declaration

```swift
static func watchOS(_ version: SupportedPlatform.WatchOSVersion) -> SupportedPlatform
```

## Parameters

- `version`: The minimum deployment target that the package supports.

<a id="return-value"></a>

## Return Value

A `SupportedPlatform` instance.

<a id="discussion"></a>

## Discussion

> **Since**

> First available in PackageDescription 5.0

## See Also

### Supporting watchOS

- [watchOS(\_:)](watchos%28__%29-4lrx0.md): Configure the minimum deployment target version for the watchOS platform using a custom version string.
- [watchOS](../platform/watchos.md): The watchOS platform.
- [SupportedPlatform.WatchOSVersion](watchosversion.md): The supported watchOS version.
