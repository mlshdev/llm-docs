> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongroupsubscriptionslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongroupsubscriptionslinkagesresponse)

# SubscriptionGroupSubscriptionsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

A response containing the resource identifiers of subscriptions within a subscription group.

## Declaration

```
object SubscriptionGroupSubscriptionsLinkagesResponse
```

## Properties

- `data` — `[SubscriptionGroupSubscriptionsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [SubscriptionGroupSubscriptionsLinkagesResponse.Data](subscriptiongroupsubscriptionslinkagesresponse/data-data.dictionary.md): The resource linkage data identifying a subscription within a subscription group.

## See Also

### Objects

- [SubscriptionGroupResponse](subscriptiongroupresponse.md): The response body for endpoints that create, read, or modify a single subscription group.
- [SubscriptionGroup](subscriptiongroup.md): A group of related auto-renewable subscriptions that share upgrade, downgrade, and cross-grade eligibility for customers.
- [SubscriptionGroupLocalizationsResponse](subscriptiongrouplocalizationsresponse.md): Deprecated. The response body for endpoints that list localizations for a subscription group.
- [SubscriptionGroupLocalization](subscriptiongrouplocalization.md): Deprecated. The localized display name and optional custom app name for a subscription group, shown to customers on the App Store.
- [SubscriptionGroupCreateRequest](subscriptiongroupcreaterequest.md): The request body you use to create a subscription group.
- [SubscriptionGroupUpdateRequest](subscriptiongroupupdaterequest.md): The request body you use to update a subscription group update request.
- [SubscriptionGroupsResponse](subscriptiongroupsresponse.md): The response body for endpoints that list subscription groups for an app.
- [AppSubscriptionGroupsLinkagesResponse](appsubscriptiongroupslinkagesresponse.md)
- [SubscriptionGroupSubscriptionGroupLocalizationsLinkagesResponse](subscriptiongroupsubscriptiongrouplocalizationslinkagesresponse.md)
- [SubscriptionGroupSubscriptionGroupLocalizationsLinkagesResponse](subscriptiongroupsubscriptiongrouplocalizationslinkagesresponse.md)
