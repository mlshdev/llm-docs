> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/marketplacekit/applibrary/app(forappleitemid:)

# app(forAppleItemID:)

**Framework:** MarketplaceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Provides the app for the given app identifier.

## Declaration

```swift
@MainActor final func app(forAppleItemID appleItemID: AppleItemID) -> AppLibrary.App
```

## See Also

### Accessing installed apps

- [installedApps](installedapps.md): The set of apps installed by the alternative app marketplace.
