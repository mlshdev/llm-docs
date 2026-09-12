> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/recentsubscriptionstartdate](https://developer.apple.com/documentation/appstoreserverapi/recentsubscriptionstartdate)

# recentSubscriptionStartDate

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.5+

The earliest start date of a subscription in a series of auto-renewable subscription purchases that ignores all lapses of paid service shorter than 60 days.

## Declaration

```
timestamp recentSubscriptionStartDate
```

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

The recent subscription start date is in UNIX time, in milliseconds.

Use the [recentSubscriptionStartDate](../appstoreservernotifications/recentsubscriptionstartdate.md) to identify the earliest start date of a subscription in a series of auto-renewable subscription purchases that the customer maintained continuously, or that has one or more gaps of less than 60 days each.

The App Store calculates the [recentSubscriptionStartDate](../appstoreservernotifications/recentsubscriptionstartdate.md) by finding the start date of the most recent auto-renewable subscription purchase that’s preceded by a gap in paid service of more than 60 days in the production environment, or 10 minutes in the sandbox environment. The start date includes any free trials or promotional purchases. If no such gap exists — for example, if the user has only ever purchased one subscription — the [recentSubscriptionStartDate](../appstoreservernotifications/recentsubscriptionstartdate.md) is the same as the subscription’s [originalPurchaseDate](originalpurchasedate.md).

The [recentSubscriptionStartDate](../appstoreservernotifications/recentsubscriptionstartdate.md) calculation counts a grace period or a billing retry state as a gap in the paid service.

> **Important**

>  Don’t use the [recentSubscriptionStartDate](../appstoreservernotifications/recentsubscriptionstartdate.md) date to calculate days of paid service. For more information about paid days of service, see [Net revenue after a year](https://developer.apple.com/app-store/subscriptions/#revenue-after-one-year).

This date applies to active or expired subscriptions. For example, if a subscriber purchases an auto-renewable subscription on June 1, 2022 and lets it expire on December 31, 2022, the App Store determines the recent subscription start date as follows:

- Initially, the [recentSubscriptionStartDate](../appstoreservernotifications/recentsubscriptionstartdate.md) is the same as the [originalPurchaseDate](originalpurchasedate.md): June 1, 2022.
- If the customer purchases the subscription again on February 1, 2023, less than 60 days after the initial subscription expired, the [recentSubscriptionStartDate](../appstoreservernotifications/recentsubscriptionstartdate.md) remains June 1, 2022.
- If the customer purchases the subscription again on April 1, 2023, more than 60 days after the first subscription expired, the App Store updates the [recentSubscriptionStartDate](../appstoreservernotifications/recentsubscriptionstartdate.md) to April 1, 2023.

## See Also

### Product purchase dates

- [originalPurchaseDate](originalpurchasedate.md): The purchase date of the transaction associated with the original transaction identifier.
- [purchaseDate](purchasedate.md): The time that the App Store charged the customer’s account for an In-App Purchase, a restored In-App Purchase, a subscription, or a subscription renewal after a lapse.
