> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/marketplacekit/applibrary/requestappupdate(_:)

# requestAppUpdate(\_:)

**Framework:** MarketplaceKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Requests an app update for the given app distribution package and account information.

## Declaration

```swift
nonisolated final func requestAppUpdate(_ request: AppLibrary.InstallationRequest) async throws
```

## See Also

### Updating apps

- [requestLicenseRenewal(appleItemIDs:)](requestlicenserenewal%28appleitemids_%29.md): Instructs the system to request an updated app license from your marketplace server for the given app identifier.
