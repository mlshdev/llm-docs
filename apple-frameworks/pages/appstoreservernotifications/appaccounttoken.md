> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/appaccounttoken](https://developer.apple.com/documentation/appstoreservernotifications/appaccounttoken)

# appAccountToken

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

A UUID that associates the transaction with a customer on your service.

## Declaration

```
uuid appAccountToken
```

## Mentioned In

- [App Store Server Notifications changelog](app-store-server-notifications-changelog.md)

<a id="Discussion"></a>

## Discussion

When a customer initiates an in-app purchase, your app may create an [appAccountToken(\_:)](../storekit/product/purchaseoption/appaccounttoken%28__%29.md) and send it to the App Store. The App Store returns the same value in [appAccountToken](appaccounttoken.md) in the transaction information after the customer completes the purchase.

If you’re using the [Original API for In-App Purchase](../storekit/original-api-for-in-app-purchase.md) and provide a UUID in the [applicationUsername](../storekit/skmutablepayment/applicationusername.md) property, then the [appAccountToken](appaccounttoken.md) field contains that value.
