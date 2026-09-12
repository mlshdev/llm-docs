> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/supportedplatform/tvos(_:)-3k8sy](https://developer.apple.com/documentation/packagedescription/supportedplatform/tvos(_:)-3k8sy)

# tvOS(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method

Configures the minimum deployment target version for the tvOS platform using a custom version string.

## Declaration

```swift
static func tvOS(_ versionString: String) -> SupportedPlatform
```

## Parameters

- `versionString`: The minimum deployment target as a string representation of two or three dot-separated integers, such as `9.0.1`.

<a id="return-value"></a>

## Return Value

A `SupportedPlatform` instance.

<a id="discussion"></a>

## Discussion

The version string must be a series of two or three dot-separated integers,such as `9.0` or `9.0.1`.

> **Since**

> First available in PackageDescription 5.0

## See Also

### Supporting tvOS

- [tvOS(\_:)](tvos%28__%29-6931l.md): Configures the minimum deployment target version for the tvOS platform.
- [tvOS](../platform/tvos.md): The tvOS platform.
- [SupportedPlatform.TVOSVersion](tvosversion.md): The supported tvOS version.
