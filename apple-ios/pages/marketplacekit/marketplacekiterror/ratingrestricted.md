> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/marketplacekiterror/ratingrestricted](https://developer.apple.com/documentation/marketplacekit/marketplacekiterror/ratingrestricted)

# MarketplaceKitError.ratingRestricted

**Framework:** MarketplaceKit  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+

An error that indicates the requested app’s age rating is beyond that allowed for the device.

## Declaration

```swift
case ratingRestricted
```

## Mentioned In

- [Providing age-rating appropriate content](../providing-age-rating-appropriate-content.md)

<a id="discussion"></a>

## Discussion

For more information, see [maximumAllowedAgeRating](../applibrary/maximumallowedagerating.md).

## See Also

### Age-rating errors

- [MarketplaceKitError.ageRatingExceptionNotNeeded](ageratingexceptionnotneeded.md): An error that indicates the app requests an unnecessary age-rating exception.
- [MarketplaceKitError.missingAgeRatingExceptionRequest](missingageratingexceptionrequest.md): An error that indicates the app needs to request an age-rating exception.
