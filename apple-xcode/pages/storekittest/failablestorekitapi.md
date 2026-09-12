> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/failablestorekitapi](https://developer.apple.com/documentation/storekittest/failablestorekitapi)

# FailableStoreKitAPI

**Framework:** StoreKit Test  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
protocol FailableStoreKitAPI<Failure> : Sendable
```

## Topics

### Associated Types

- [Failure](failablestorekitapi/failure.md)

### Type Properties

- [appStoreSync](failablestorekitapi/appstoresync.md): Conforms when `Self` is `StoreKitAppStoreSyncAPI`.
- [appTransaction](failablestorekitapi/apptransaction.md): Conforms when `Self` is `StoreKitAppTransactionAPI`.
- [loadProducts](failablestorekitapi/loadproducts.md): Conforms when `Self` is `StoreKitLoadProductsAPI`.
- [manageSubscriptions](failablestorekitapi/managesubscriptions.md): Conforms when `Self` is `StoreKitManageSubscriptionsAPI`.
- [offerCodeRedeem](failablestorekitapi/offercoderedeem.md): Conforms when `Self` is `StoreKitOfferCodeRedeemAPI`.
- [purchase](failablestorekitapi/purchase.md): Conforms when `Self` is `StoreKitPurchaseAPI`.
- [refundRequest](failablestorekitapi/refundrequest.md): Conforms when `Self` is `StoreKitRefundRequestAPI`.
- [subscriptionStatus](failablestorekitapi/subscriptionstatus.md): Conforms when `Self` is `StoreKitSubscriptionStatusAPI`.
- [verification](failablestorekitapi/verification.md): Conforms when `Self` is `StoreKitVerificationAPI`.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [StoreKitAppStoreSyncAPI](storekitappstoresyncapi.md)
- [StoreKitAppTransactionAPI](storekitapptransactionapi.md)
- [StoreKitLoadProductsAPI](storekitloadproductsapi.md)
- [StoreKitManageSubscriptionsAPI](storekitmanagesubscriptionsapi.md)
- [StoreKitOfferCodeRedeemAPI](storekitoffercoderedeemapi.md)
- [StoreKitPurchaseAPI](storekitpurchaseapi.md)
- [StoreKitRefundRequestAPI](storekitrefundrequestapi.md)
- [StoreKitSubscriptionStatusAPI](storekitsubscriptionstatusapi.md)
- [StoreKitVerificationAPI](storekitverificationapi.md)

## See Also

### Protocols

- [SKTestFailure](sktestfailure.md)
