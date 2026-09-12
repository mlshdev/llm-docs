> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/supportsmanifestversion(_:)](https://developer.apple.com/documentation/webkit/wkwebextension/supportsmanifestversion(_:))

# supportsManifestVersion(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks if a manifest version is supported by the extension.

## Declaration

```swift
func supportsManifestVersion(_ manifestVersion: Double) -> Bool
```

## Parameters

- `manifestVersion`: The version number to check.

<a id="return-value"></a>

## Return Value

Returns `YES` if the extension specified a manifest version that is greater than or equal to `manifestVersion`.

# supportsManifestVersion: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Checks if a manifest version is supported by the extension.

## Declaration

```objectivec
- (BOOL) supportsManifestVersion:(double) manifestVersion;
```

## Parameters

- `manifestVersion`: The version number to check.

<a id="return-value"></a>

## Return Value

Returns `YES` if the extension specified a manifest version that is greater than or equal to `manifestVersion`.
