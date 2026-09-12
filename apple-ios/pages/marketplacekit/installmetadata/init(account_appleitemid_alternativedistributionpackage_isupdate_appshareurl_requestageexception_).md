> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/installmetadata/init(account:appleitemid:alternativedistributionpackage:isupdate:appshareurl:requestageexception:)](https://developer.apple.com/documentation/marketplacekit/installmetadata/init(account:appleitemid:alternativedistributionpackage:isupdate:appshareurl:requestageexception:))

# init(account:appleItemID:alternativeDistributionPackage:isUpdate:appShareURL:requestAgeException:)

**Framework:** MarketplaceKit  
**Kind:** Initializer  
**Availability:** iOS 26.1+ · iPadOS 26.1+

Initializes an install metadata object with the given app information and exception request indicator.

## Declaration

```swift
init(account: String, appleItemID: AppleItemID, alternativeDistributionPackage: URL, isUpdate: Bool, appShareURL: URL?, requestAgeException: Bool = false)
```

## Mentioned In

- [Providing age-rating appropriate content](../providing-age-rating-appropriate-content.md)

<a id="discussion"></a>

## Discussion

If the identifier refers to an app that has an age rating beyond the maximum allowed for the device (see [maximumAllowedAgeRating](../applibrary/maximumallowedagerating.md)), pass `true` for the `requestAgeException` argument.

If your app sets the `requestAgeException` argument to `true` when it’s not needed, the framework throws [MarketplaceKitError.ageRatingExceptionNotNeeded](../marketplacekiterror/ageratingexceptionnotneeded.md). Alternatively, if your app fails to set the `requestAgeException` argument to `true` when it is needed, the framework throws  [MarketplaceKitError.cancelled](../marketplacekiterror/cancelled.md).

## See Also

### Initializing an install metadata instance

- [init(account:appleItemID:alternativeDistributionPackage:isUpdate:)](init%28account_appleitemid_alternativedistributionpackage_isupdate_%29.md): Initializes an install metadata object with the given app information.
