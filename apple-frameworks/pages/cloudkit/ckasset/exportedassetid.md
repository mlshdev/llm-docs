> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckasset/exportedassetid

# CKAsset.ExportedAssetID

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An identifier that can be used for creating a server-side copy of a [CKAsset](../ckasset.md) that already exists in iCloud, potentially in a different container.

## Declaration

```swift
struct ExportedAssetID
```

<a id="overview"></a>

## Overview

An [CKAsset.ExportedAssetID](exportedassetid.md) is valid only on the same device where it was created, and it expires after a few days.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
