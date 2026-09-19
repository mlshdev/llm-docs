> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/storedownloaderextension

# StoreDownloaderExtension

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An app extension that uses the system implementation to schedule Apple-hosted asset-pack downloads automatically.

## Declaration

```swift
protocol StoreDownloaderExtension : ManagedDownloaderExtension
```

<a id="overview"></a>

## Overview

You can optionally implement the inherited `ManagedDownloaderExtension` requirements, but don’t implement any of the inherited `BADownloaderExtension` requirements for which this protocol provides a default implementation. For more information, see [Background Assets](../backgroundassets.md).

## Relationships

### Inherits From

- [AppExtension](../extensionfoundation/appextension.md)
- [BADownloaderExtension](../backgroundassets/badownloaderextension-qwaw.md)
- [ManagedDownloaderExtension](../backgroundassets/manageddownloaderextension.md)
