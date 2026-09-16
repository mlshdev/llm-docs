> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/supportedplatform/custom(_:versionstring:)

# custom(\_:versionString:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.6+

Configures the minimum deployment target version for custom platforms.

## Declaration

```swift
static func custom(_ platformName: String, versionString: String) -> SupportedPlatform
```

## Parameters

- `platformName`: The name of the platform.
- `versionString`: The minimum deployment target as a string representation of two or three dot-separated integers, such as `19.0.1`.

<a id="return-value"></a>

## Return Value

A `SupportedPlatform` instance.

<a id="discussion"></a>

## Discussion

> **Since**

> First available in PackageDescription 5.6
