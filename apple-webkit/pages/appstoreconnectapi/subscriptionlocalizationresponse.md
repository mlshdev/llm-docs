> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionlocalizationresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionlocalizationresponse)

# SubscriptionLocalizationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

The response body for endpoints that create, read, or modify a single subscription localization.

> This object is deprecated. Use [SubscriptionLocalizationV2Response](subscriptionlocalizationv2response.md) instead.

## Declaration

```
object SubscriptionLocalizationResponse
```

## Properties

- `data` — `SubscriptionLocalization` (required):
- `included` — `[Subscription]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [SubscriptionLocalizationCreateRequest](subscriptionlocalizationcreaterequest.md): Deprecated. The request body you use to create a subscription localization.
- [SubscriptionLocalizationUpdateRequest](subscriptionlocalizationupdaterequest.md): Deprecated. The request body you use to update a subscription localization update request.
- [SubscriptionLocalization](subscriptionlocalization.md): Deprecated. The localized display name and description for an auto-renewable subscription shown to customers on the App Store.
