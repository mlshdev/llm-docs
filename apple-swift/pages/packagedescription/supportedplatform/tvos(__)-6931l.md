> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/supportedplatform/tvos(_:)-6931l](https://developer.apple.com/documentation/packagedescription/supportedplatform/tvos(_:)-6931l)

# tvOS(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method

Configures the minimum deployment target version for the tvOS platform.

## Declaration

```swift
static func tvOS(_ version: SupportedPlatform.TVOSVersion) -> SupportedPlatform
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

### Supporting tvOS

- [tvOS(\_:)](tvos%28__%29-3k8sy.md): Configures the minimum deployment target version for the tvOS platform using a custom version string.
- [tvOS](../platform/tvos.md): The tvOS platform.
- [SupportedPlatform.TVOSVersion](tvosversion.md): The supported tvOS version.
