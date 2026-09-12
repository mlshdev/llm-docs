> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/statusresponse](https://developer.apple.com/documentation/appstoreserverapi/statusresponse)

# StatusResponse

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.0+

A response that contains status information for all of a customer’s auto-renewable subscriptions in your app.

## Declaration

```
object StatusResponse
```

## Properties

- `data` — `[SubscriptionGroupIdentifierItem]`: An array of information for auto-renewable subscriptions, including App Store-signed transaction information and App Store-signed renewal information.
- `environment` — `environment`: The server environment, sandbox or production, in which the App Store generated the response.
- `appAppleId` — `appAppleId`: Your app’s App Store identifier.
- `bundleId` — `bundleId`: Your app’s bundle identifier.

## Topics

### Response Objects and Data Types

- [SubscriptionGroupIdentifierItem](subscriptiongroupidentifieritem.md): Information for auto-renewable subscriptions, including signed transaction information and signed renewal information, for one subscription group.
- [environment](environment.md): The server environment, either sandbox or production.
- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [bundleId](bundleid.md): The bundle identifier of an app.

## See Also

### Subscription status

- [Get All Subscription Statuses](get-all-subscription-statuses.md): Get the statuses for all of a customer’s auto-renewable subscriptions in your app.
