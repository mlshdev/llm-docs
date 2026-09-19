> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/marketplacekit/applibrary/requestlicenserenewal(appleitemids:)

# requestLicenseRenewal(appleItemIDs:)

**Framework:** MarketplaceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Instructs the system to request an updated app license from your marketplace server for the given app identifier.

## Declaration

```swift
nonisolated final func requestLicenseRenewal(appleItemIDs: [UInt64]) async throws
```

## See Also

### Updating apps

- [requestAppUpdate(\_:)](requestappupdate%28__%29.md): Requests an app update for the given app distribution package and account information.
