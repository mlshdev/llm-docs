> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptiongroup](https://developer.apple.com/documentation/appstoreconnectapi/subscriptiongroup)

# SubscriptionGroup

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A group of related auto-renewable subscriptions that share upgrade, downgrade, and cross-grade eligibility for customers.

## Declaration

```
object SubscriptionGroup
```

## Properties

- `attributes` — `SubscriptionGroup.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `SubscriptionGroup.Relationships`:
- `type` — `string` (required): **Allowed values:** `subscriptionGroups`

## Topics

### Objects

- [SubscriptionGroup.Attributes](subscriptiongroup/attributes-data.dictionary.md): Attributes that describe a subscription group resource.
- [SubscriptionGroup.Relationships](subscriptiongroup/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [SubscriptionGroupResponse](subscriptiongroupresponse.md): The response body for endpoints that create, read, or modify a single subscription group.
- [SubscriptionGroupLocalizationsResponse](subscriptiongrouplocalizationsresponse.md): Deprecated. The response body for endpoints that list localizations for a subscription group.
- [SubscriptionGroupLocalization](subscriptiongrouplocalization.md): Deprecated. The localized display name and optional custom app name for a subscription group, shown to customers on the App Store.
- [SubscriptionGroupCreateRequest](subscriptiongroupcreaterequest.md): The request body you use to create a subscription group.
- [SubscriptionGroupUpdateRequest](subscriptiongroupupdaterequest.md): The request body you use to update a subscription group update request.
- [SubscriptionGroupsResponse](subscriptiongroupsresponse.md): The response body for endpoints that list subscription groups for an app.
- [AppSubscriptionGroupsLinkagesResponse](appsubscriptiongroupslinkagesresponse.md)
- [SubscriptionGroupSubscriptionGroupLocalizationsLinkagesResponse](subscriptiongroupsubscriptiongrouplocalizationslinkagesresponse.md)
- [SubscriptionGroupSubscriptionsLinkagesResponse](subscriptiongroupsubscriptionslinkagesresponse.md): A response containing the resource identifiers of subscriptions within a subscription group.
- [SubscriptionGroupSubscriptionGroupLocalizationsLinkagesResponse](subscriptiongroupsubscriptiongrouplocalizationslinkagesresponse.md)
- [SubscriptionGroupSubscriptionsLinkagesResponse](subscriptiongroupsubscriptionslinkagesresponse.md): A response containing the resource identifiers of subscriptions within a subscription group.
