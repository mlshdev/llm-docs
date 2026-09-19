> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/skdownloaderextension

# SKDownloaderExtension

**Interface language:** Objective-C

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An application extension that uses the system implementation to schedule Apple-hosted asset-pack downloads automatically.

## Declaration

```objectivec
@protocol SKDownloaderExtension <BAManagedDownloaderExtension>
```

<a id="overview"></a>

## Overview

You can optionally implement the inherited `BAManagedDownloaderExtension` requirements, but don’t implement any of the inherited `BADownloaderExtension` requirements. For more information, see [Background Assets](../backgroundassets.md).

## Relationships

### Inherits From

- [BAManagedDownloaderExtension](../backgroundassets/bamanageddownloaderextension.md)
