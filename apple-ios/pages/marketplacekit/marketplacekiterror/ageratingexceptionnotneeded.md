> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/marketplacekiterror/ageratingexceptionnotneeded](https://developer.apple.com/documentation/marketplacekit/marketplacekiterror/ageratingexceptionnotneeded)

# MarketplaceKitError.ageRatingExceptionNotNeeded

**Framework:** MarketplaceKit  
**Kind:** Case  
**Availability:** iOS 26.1+ · iPadOS 26.1+

An error that indicates the app requests an unnecessary age-rating exception.

## Declaration

```swift
case ageRatingExceptionNotNeeded
```

## Mentioned In

- [Providing age-rating appropriate content](../providing-age-rating-appropriate-content.md)

<a id="discussion"></a>

## Discussion

The framework throws this error if your app sets [requestAgeException](../installmetadata/requestageexception.md) to `true` when it’s not needed — that is, when the app to install has an age rating that’s within the allowed range for the device (as determined by [maximumAllowedAgeRating](../applibrary/maximumallowedagerating.md)).

## See Also

### Age-rating errors

- [MarketplaceKitError.missingAgeRatingExceptionRequest](missingageratingexceptionrequest.md): An error that indicates the app needs to request an age-rating exception.
- [MarketplaceKitError.ratingRestricted](ratingrestricted.md): An error that indicates the requested app’s age rating is beyond that allowed for the device.
