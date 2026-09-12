> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscription-groups](https://developer.apple.com/documentation/appstoreconnectapi/subscription-groups)

# Subscription Groups

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Create, modify, and delete subscription groups for your app.

## Topics

### Endpoints

- [Create a subscription group](post-v1-subscriptiongroups.md): Create a subscription group for an app.
- [List all subscription groups for an app](get-v1-apps-_id_-subscriptiongroups.md): Get a list of subscription groups for a specific app.
- [List subscription group IDs for an app](get-v1-apps-_id_-relationships-subscriptiongroups.md)
- [Read subscription group information](get-v1-subscriptiongroups-_id_.md): Get the details of a specific subscription group.
- [Modify a subscription group](patch-v1-subscriptiongroups-_id_.md): Update the reference name for a specific subscription group.
- [Delete a subscription group](delete-v1-subscriptiongroups-_id_.md): Delete a specific empty subscription group.
- [List all subscription group localizations](get-v1-subscriptiongroups-_id_-subscriptiongrouplocalizations.md): Deprecated. Get a list of all localized metadata for a specific subscription group.
- [List localization IDs for a subscription group](get-v1-subscriptiongroups-_id_-relationships-subscriptiongrouplocalizations.md): Deprecated.
- [List all subscriptions for a subscription group](get-v1-subscriptiongroups-_id_-subscriptions.md): Get a list of all auto-renewable subscriptions in a subscription group.
- [List subscription IDs for a subscription group](get-v1-subscriptiongroups-_id_-relationships-subscriptions.md)

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
- [SubscriptionGroupSubscriptionsLinkagesResponse](subscriptiongroupsubscriptionslinkagesresponse.md): A response containing the resource identifiers of subscriptions within a subscription group.
- [SubscriptionGroupSubscriptionGroupLocalizationsLinkagesResponse](subscriptiongroupsubscriptiongrouplocalizationslinkagesresponse.md)
- [SubscriptionGroupSubscriptionsLinkagesResponse](subscriptiongroupsubscriptionslinkagesresponse.md): A response containing the resource identifiers of subscriptions within a subscription group.

## See Also

### Managing Subscription Groups

- [Creating auto-renewable subscription groups](creating-auto-renewable-subscription-groups.md): Configure subscription groups with the App Store Connect API.
- [Working with subscription group versions](working-with-subscription-group-versions.md): Manage draft versions of a subscription group’s localized metadata before submitting for App Review.
- [Subscription Group Versions](subscription-group-versions.md): Create and read draft versions of a subscription group with their localized metadata.
- [Subscription Group Localizations](subscription-group-localizations.md): Create, modify, and delete localized metadata for subscription groups.
- [Subscription group localizations (v1)](subscription-group-localizations-v1.md): Deprecated. Create, modify, and delete localized metadata for subscription groups.
