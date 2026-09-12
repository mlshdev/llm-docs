> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/supportedplatform/maccatalyst(_:)-9wbz](https://developer.apple.com/documentation/packagedescription/supportedplatform/maccatalyst(_:)-9wbz)

# macCatalyst(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.5+

Configures the minimum deployment target version for the Mac Catalyst platform using a version string.

## Declaration

```swift
static func macCatalyst(_ versionString: String) -> SupportedPlatform
```

## Parameters

- `versionString`: The minimum deployment target as a string representation of two or three dot-separated integers, such as `13.0.1`.

<a id="return-value"></a>

## Return Value

A `SupportedPlatform` instance.

<a id="discussion"></a>

## Discussion

The version string must be a series of two or three dot-separated integers, such as `13.0` or `13.0.1`.

> **Since**

> First available in PackageDescription 5.5

## See Also

### Supporting MacCatalyst

- [macCatalyst(\_:)](maccatalyst%28__%29-6bh40.md): Configures the minimum deployment target version for the Mac Catalyst platform.
- [macCatalyst](../platform/maccatalyst.md): The Mac Catalyst platform.
- [SupportedPlatform.MacCatalystVersion](maccatalystversion.md): The supported Mac Catalyst version.
