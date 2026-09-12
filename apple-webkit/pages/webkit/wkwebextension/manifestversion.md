> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/manifestversion](https://developer.apple.com/documentation/webkit/wkwebextension/manifestversion)

# manifestVersion (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The parsed manifest version, or `0` if there is no version specified in the manifest.

## Declaration

```swift
var manifestVersion: Double { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> A [unsupportedManifestVersion](error/unsupportedmanifestversion.md) error will be reported if the manifest version isn’t specified.

# manifestVersion (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The parsed manifest version, or `0` if there is no version specified in the manifest.

## Declaration

```objectivec
@property (nonatomic, readonly) double manifestVersion;
```

<a id="discussion"></a>

## Discussion

> **Note**

> A [unsupportedManifestVersion](error/unsupportedmanifestversion.md) error will be reported if the manifest version isn’t specified.
