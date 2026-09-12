> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionimagesv2response](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionimagesv2response)

# SubscriptionImagesV2Response

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The response body for endpoints that list subscription images configured with the v2 API.

## Declaration

```
object SubscriptionImagesV2Response
```

## Properties

- `data` — `[SubscriptionImageV2]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [SubscriptionImageV2](subscriptionimagev2.md): A promotion image attached to an auto-renewable subscription configured with the v2 API.
- [SubscriptionImageV2CreateRequest](subscriptionimagev2createrequest.md): The request body you use to create a subscription image with the v2 API.
- [SubscriptionImageV2Response](subscriptionimagev2response.md): The response body for endpoints that create, read, or modify a subscription image with the v2 API.
- [SubscriptionImageV2UpdateRequest](subscriptionimagev2updaterequest.md): The request body you use to commit an upload for a subscription image with the v2 API.
