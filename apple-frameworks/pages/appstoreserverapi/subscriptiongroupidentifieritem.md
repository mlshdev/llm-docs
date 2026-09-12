> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/subscriptiongroupidentifieritem](https://developer.apple.com/documentation/appstoreserverapi/subscriptiongroupidentifieritem)

# SubscriptionGroupIdentifierItem

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.0+

Information for auto-renewable subscriptions, including signed transaction information and signed renewal information, for one subscription group.

## Declaration

```
object SubscriptionGroupIdentifierItem
```

## Properties

- `subscriptionGroupIdentifier` — `subscriptionGroupIdentifier`: The subscription group identifier of the auto-renewable subscriptions in the `lastTransactions` array.
- `lastTransactions` — `[lastTransactionsItem]`: An array of the most recent App Store-signed transaction information and App Store-signed renewal information for all auto-renewable subscriptions in the subscription group.

## Topics

### Object and Data Types

- [subscriptionGroupIdentifier](https://developer.apple.com/documentation/appstoreserverapi/subscriptiongroupidentifieritem/subscriptiongroupidentifier)
- [lastTransactionsItem](lasttransactionsitem.md): The most recent App Store-signed transaction information and App Store-signed renewal information for an auto-renewable subscription.

## See Also

### Response Objects and Data Types

- [environment](environment.md): The server environment, either sandbox or production.
- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [bundleId](bundleid.md): The bundle identifier of an app.
