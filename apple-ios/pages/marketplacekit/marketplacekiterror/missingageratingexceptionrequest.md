> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/marketplacekiterror/missingageratingexceptionrequest](https://developer.apple.com/documentation/marketplacekit/marketplacekiterror/missingageratingexceptionrequest)

# MarketplaceKitError.missingAgeRatingExceptionRequest

**Framework:** MarketplaceKit  
**Kind:** Case  
**Availability:** iOS 26.1+ · iPadOS 26.1+

An error that indicates the app needs to request an age-rating exception.

## Declaration

```swift
case missingAgeRatingExceptionRequest
```

## Mentioned In

- [Providing age-rating appropriate content](../providing-age-rating-appropriate-content.md)

<a id="discussion"></a>

## Discussion

The framework throws this error if your app calls [presentAgeExceptionApproveInPersonSheet()](../applibrary/app/presentageexceptionapproveinpersonsheet%28%29.md) when there’s no age-rating exception requests for the app in the [currentAgeExceptionRequests()](../applibrary/currentageexceptionrequests%28%29.md) list.

## See Also

### Age-rating errors

- [MarketplaceKitError.ageRatingExceptionNotNeeded](ageratingexceptionnotneeded.md): An error that indicates the app requests an unnecessary age-rating exception.
- [MarketplaceKitError.ratingRestricted](ratingrestricted.md): An error that indicates the requested app’s age rating is beyond that allowed for the device.
