> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/supportedplatform/maccatalyst(_:)-6bh40](https://developer.apple.com/documentation/packagedescription/supportedplatform/maccatalyst(_:)-6bh40)

# macCatalyst(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.5+

Configures the minimum deployment target version for the Mac Catalyst platform.

## Declaration

```swift
static func macCatalyst(_ version: SupportedPlatform.MacCatalystVersion) -> SupportedPlatform
```

## Parameters

- `version`: The minimum deployment target that the package supports.

<a id="return-value"></a>

## Return Value

A `SupportedPlatform` instance.

<a id="discussion"></a>

## Discussion

> **Since**

> First available in PackageDescription 5.5

## See Also

### Supporting MacCatalyst

- [macCatalyst(\_:)](maccatalyst%28__%29-9wbz.md): Configures the minimum deployment target version for the Mac Catalyst platform using a version string.
- [macCatalyst](../platform/maccatalyst.md): The Mac Catalyst platform.
- [SupportedPlatform.MacCatalystVersion](maccatalystversion.md): The supported Mac Catalyst version.
