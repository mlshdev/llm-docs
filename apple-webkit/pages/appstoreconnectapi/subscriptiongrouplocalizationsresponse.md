> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongrouplocalizationsresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongrouplocalizationsresponse)

# SubscriptionGroupLocalizationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

The response body for endpoints that list localizations for a subscription group.

> This object is deprecated. Use [SubscriptionGroupLocalizationsV2Response](subscriptiongrouplocalizationsv2response.md) instead.

## Declaration

```
object SubscriptionGroupLocalizationsResponse
```

## Properties

- `data` — `[SubscriptionGroupLocalization]` (required):
- `included` — `[SubscriptionGroup]`:
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [SubscriptionGroupResponse](subscriptiongroupresponse.md): The response body for endpoints that create, read, or modify a single subscription group.
- [SubscriptionGroup](subscriptiongroup.md): A group of related auto-renewable subscriptions that share upgrade, downgrade, and cross-grade eligibility for customers.
- [SubscriptionGroupLocalization](subscriptiongrouplocalization.md): Deprecated. The localized display name and optional custom app name for a subscription group, shown to customers on the App Store.
- [SubscriptionGroupCreateRequest](subscriptiongroupcreaterequest.md): The request body you use to create a subscription group.
- [SubscriptionGroupUpdateRequest](subscriptiongroupupdaterequest.md): The request body you use to update a subscription group update request.
- [SubscriptionGroupsResponse](subscriptiongroupsresponse.md): The response body for endpoints that list subscription groups for an app.
- [AppSubscriptionGroupsLinkagesResponse](appsubscriptiongroupslinkagesresponse.md)
- [SubscriptionGroupSubscriptionGroupLocalizationsLinkagesResponse](subscriptiongroupsubscriptiongrouplocalizationslinkagesresponse.md)
- [SubscriptionGroupSubscriptionsLinkagesResponse](subscriptiongroupsubscriptionslinkagesresponse.md): A response containing the resource identifiers of subscriptions within a subscription group.
- [SubscriptionGroupSubscriptionGroupLocalizationsLinkagesResponse](subscriptiongroupsubscriptiongrouplocalizationslinkagesresponse.md)
- [SubscriptionGroupSubscriptionsLinkagesResponse](subscriptiongroupsubscriptionslinkagesresponse.md): A response containing the resource identifiers of subscriptions within a subscription group.
