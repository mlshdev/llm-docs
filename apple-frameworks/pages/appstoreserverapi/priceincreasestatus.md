> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/priceincreasestatus](https://developer.apple.com/documentation/appstoreserverapi/priceincreasestatus)

# priceIncreaseStatus

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The status that indicates whether an auto-renewable subscription is subject to a price increase.

## Declaration

```
int32 priceIncreaseStatus
```

## Possible Values

- `0`: The customer hasn’t yet responded to an auto-renewable subscription price increase that requires customer consent.
- `1`: The customer consented to an auto-renewable subscription price increase that requires customer consent, or the App Store has notified the customer of an auto-renewable subscription price increase that doesn’t require consent.
