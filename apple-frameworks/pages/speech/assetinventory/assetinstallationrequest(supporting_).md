> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/assetinventory/assetinstallationrequest(supporting:)

# assetInstallationRequest(supporting:)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns an installation request object, which is used to initiate the asset download and monitor its progress.

## Declaration

```swift
static func assetInstallationRequest(supporting modules: [any SpeechModule]) async throws -> AssetInstallationRequest?
```

<a id="discussion"></a>

## Discussion

If the current status is `.installed`, returns nil, indicating that nothing further needs to be done.

If some of the assets require locales that aren’t reserved, it automatically reserves those locales. If that would exceed [maximumReservedLocales](maximumreservedlocales.md), then it throws an error.

> **Throws**

> An error if the assets are not supported or no reservations are available.
