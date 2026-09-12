> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/supporting-subscription-offer-codes-in-your-app](https://developer.apple.com/documentation/storekit/supporting-subscription-offer-codes-in-your-app)

# Supporting subscription offer codes in your app (Swift)

**Framework:** StoreKit  
**Kind:** Article

Provide subscription service for customers who redeem offer codes through the App Store or within your app.

<a id="overview"></a>

## Overview

To help you acquire, retain, and win back subscribers, you can use offer codes. Offer codes are alphanumeric codes that provide subscriptions at a discount or for free for a specific duration. Configure the offers and create offer codes in App Store Connect, and distribute them to your customers. Customers can redeem offer codes in the App Store, using offer code redemption URLs, or in your app if it implements one of the following APIs:

- [offerCodeRedemption(isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28ispresented:oncompletion:%29) on iOS, iPadOS, macOS, and visionOS
- [presentOfferCodeRedeemSheet(in:)](appstore/presentoffercoderedeemsheet%28in_%29.md) on iOS, iPadOS, and visionOS
- [presentOfferCodeRedeemSheet(from:)](appstore/presentoffercoderedeemsheet%28from_%29.md) on macOS

When customers redeem a valid offer code, your app receives a successful transaction. If customers redeem offer codes in the App Store and don’t have your app installed, they’re prompted to download it as part of the redemption flow. Successfully redeeming an offer code entitles the customer to the auto-renewable subscription, the same as a purchase does. Your app needs to provide service for the product.

<a id="Set-up-offer-codes-in-App-Store-Connect"></a>

### Set up offer codes in App Store Connect

Configure offers and manage your offer codes in App Store Connect. You can have up to 10 active offers per subscription, and create codes for a maximum of 1,000,000 redemptions per app, per quarter. There are two types of offer codes: one-time use codes, and custom codes. The offer code redemption APIs support both.

To distribute offer codes to your customers, download them from App Store Connect. For more information on creating and distributing offer codes, and to learn which type of offer code may work for your campaign, see [Set up offer codes](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-offer-codes).

<a id="Redeem-offer-codes-in-your-app"></a>

### Redeem offer codes in your app

To display the system sheet for customers to redeem offer codes within your app, call one of the redemption APIs, depending on your app’s UI implementation:

- Call [offerCodeRedemption(isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28ispresented:oncompletion:%29) if your app uses SwiftUI.
- Call [presentOfferCodeRedeemSheet(in:)](appstore/presentoffercoderedeemsheet%28in_%29.md) if your app uses UIKit.
- Call [presentOfferCodeRedeemSheet(from:)](appstore/presentoffercoderedeemsheet%28from_%29.md) if your app uses AppKit for macOS.

The redemption sheet takes care of the redemption flow, including alerting users about invalid entries, as appropriate. Invalid entries may include, for example, expired offer codes, invalid codes, or codes that would result in a subscription downgrade.

When customers redeem an offer code, StoreKit emits the resulting transaction in [updates](transaction/updates.md). Set up a transaction listener as soon as your app launches to receive new transactions while the app is running.

Including the redemption sheet in your app is recommended, but optional. For more guidance on supporting offer code redemption within your app, see Human Interface Guidelines \> [In-app purchase](https://developer.apple.com/design/human-interface-guidelines/in-app-purchase).

<a id="Support-offer-codes-redeemed-outside-of-your-app"></a>

### Support offer codes redeemed outside of your app

Customers may redeem offer codes outside your app, by entering the offer code in the App Store, or by using a redemption URL. To handle offer codes — and other transactions that can occur outside of your app — your app needs to use [updates](transaction/updates.md) on [Transaction](transaction.md) to receive new transactions while the app is running. Create a [Task](https://developer.apple.com/documentation/swift/task) to iterate through the transactions from the listener as soon as your app launches. For more information and sample code, see [updates](transaction/updates.md).

When the app launches, it needs to check [all](transaction/all.md) or [currentEntitlements](transaction/currententitlements.md) on [Transaction](transaction.md) to get any transactions that may have occurred while the app wasn’t running. Process the transactions to ensure your app provides service for all products it’s entitled to.

<a id="Identify-subscriptions-purchased-with-offer-codes"></a>

### Identify subscriptions purchased with offer codes

When customers successfully redeem subscription offer codes, the transaction or subscription renewal information contain fields that identify the offer and its offer type. Find the offer code details in the transaction information, in your app and on your server, as follows.

In your app, use the following StoreKit APIs to locate the offer code information:

- See the [Transaction](transaction.md) properties [offerID](transaction/offerid.md) and [offerType](transaction/offertype-swift.property.md). An offer type value of [code](transaction/offertype-swift.struct/code.md) indicates the customer redeemed an offer code.
- Some offer code redemptions may apply to an auto-renewable subscription’s next renewal period, for example, if the customer is already subscribed. In this case, see the [Product.SubscriptionInfo.RenewalInfo](product/subscriptioninfo/renewalinfo.md) properties [offerID](product/subscriptioninfo/renewalinfo/offerid.md) and [offerType](transaction/offertype-swift.property.md). An offer type value of [code](transaction/offertype-swift.struct/code.md) indicates the customer redeemed an offer code.

On your server, use the following server-side APIs to locate offer code information:

- In the [App Store Server API](../appstoreserverapi.md), when you call endpoints such as [Get Transaction History](../appstoreserverapi/get-transaction-history.md), [Get All Subscription Statuses](../appstoreserverapi/get-all-subscription-statuses.md), and others, the response contains the signed transaction, [JWSTransaction](../appstoreserverapi/jwstransaction.md). In its decoded payload, [JWSTransactionDecodedPayload](../appstoreserverapi/jwstransactiondecodedpayload.md), look for the fields [offerIdentifier](../appstoreserverapi/offeridentifier.md) and [offerType](../appstoreserverapi/offertype.md). An [offerType](../appstoreserverapi/offertype.md) value of `3` indicates the customer redeemed an offer code.
- The [App Store Server Notifications V2](../appstoreservernotifications/app-store-server-notifications-v2.md) sends a notification with an `OFFER_REDEEMED` [notificationType](../appstoreservernotifications/notificationtype.md) when someone redeems an offer code for an active subscription. It sends a `SUBSCRIBED` notification type if someone redeems the offer code as an initial purchase or to resubscribe. The decoded payloads [JWSTransactionDecodedPayload](../appstoreservernotifications/jwstransactiondecodedpayload.md) and [JWSRenewalInfoDecodedPayload](../appstoreservernotifications/jwsrenewalinfodecodedpayload.md) contain the fields [offerIdentifier](../appstoreservernotifications/offeridentifier.md) and [offerType](../appstoreservernotifications/offertype.md). An [offerType](../appstoreservernotifications/offertype.md) value of `3` indicates the customer redeemed an offer code.

<a id="Provide-subscription-service-to-new-and-existing-customers"></a>

### Provide subscription service to new and existing customers

When you acquire new customers with an offer code, they already have an auto-renewable subscription when they open your app for the first time. In addition to providing subscription service, you may need to update your backend system’s records. Your app follows these steps:

1. When the app launches, check [all](transaction/all.md) or [currentEntitlements](transaction/currententitlements.md) on [Transaction](transaction.md) to get all transactions or current entitlements, respectively. StoreKit automatically validates the transactions, and returns verified results in [VerificationResult.verified(\_:)](verificationresult/verified%28__%29.md). To perform your own validation, use the [jwsRepresentation](verificationresult/jwsrepresentation-21vgo.md) property.
2. To determine if a subscription results from an offer code redemption, check the [offerID](transaction/offerid.md) and [offerType](transaction/offertype-swift.property.md) properties on the subscription’s [Transaction](transaction.md).
3. Provide the subscription service based on the offer and call [finish()](transaction/finish%28%29.md) on [Transaction](transaction.md).
4. Guide new customers through your new-user experience, as needed. Update your backend system’s records.

When an existing customer redeems an offer code within your app, the transaction comes in through the [updates](transaction/updates.md) sequence on [Transaction](transaction.md). Process the transaction as usual, providing service based on the offer, and call [finish()](transaction/finish%28%29.md).

<a id="Supporting-systems-earlier-than-iOS-16-and-iPadOS-16"></a>

### Supporting systems earlier than iOS 16 and iPadOS 16

If your app runs on iOS 16 or earlier, and iPadOS 16 or earlier, use [presentCodeRedemptionSheet()](skpaymentqueue/presentcoderedemptionsheet%28%29.md) to display the offer code redemption UI. Otherwise, use the APIs referred to in this article. For more information about supporting earlier systems, see [Implementing offer codes in your app](implementing-offer-codes-in-your-app.md).

# Supporting subscription offer codes in your app (Objective-C)

**Framework:** StoreKit  
**Kind:** Article

Provide subscription service for customers who redeem offer codes through the App Store or within your app.

<a id="overview"></a>

## Overview

To help you acquire, retain, and win back subscribers, you can use offer codes. Offer codes are alphanumeric codes that provide subscriptions at a discount or for free for a specific duration. Configure the offers and create offer codes in App Store Connect, and distribute them to your customers. Customers can redeem offer codes in the App Store, using offer code redemption URLs, or in your app if it implements one of the following APIs:

- [offerCodeRedemption(isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28ispresented:oncompletion:%29) on iOS, iPadOS, macOS, and visionOS
- [presentOfferCodeRedeemSheet(in:)](appstore/presentoffercoderedeemsheet%28in_%29.md) on iOS, iPadOS, and visionOS
- [presentOfferCodeRedeemSheet(from:)](appstore/presentoffercoderedeemsheet%28from_%29.md) on macOS

When customers redeem a valid offer code, your app receives a successful transaction. If customers redeem offer codes in the App Store and don’t have your app installed, they’re prompted to download it as part of the redemption flow. Successfully redeeming an offer code entitles the customer to the auto-renewable subscription, the same as a purchase does. Your app needs to provide service for the product.

<a id="Set-up-offer-codes-in-App-Store-Connect"></a>

### Set up offer codes in App Store Connect

Configure offers and manage your offer codes in App Store Connect. You can have up to 10 active offers per subscription, and create codes for a maximum of 1,000,000 redemptions per app, per quarter. There are two types of offer codes: one-time use codes, and custom codes. The offer code redemption APIs support both.

To distribute offer codes to your customers, download them from App Store Connect. For more information on creating and distributing offer codes, and to learn which type of offer code may work for your campaign, see [Set up offer codes](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-offer-codes).

<a id="Redeem-offer-codes-in-your-app"></a>

### Redeem offer codes in your app

To display the system sheet for customers to redeem offer codes within your app, call one of the redemption APIs, depending on your app’s UI implementation:

- Call [offerCodeRedemption(isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28ispresented:oncompletion:%29) if your app uses SwiftUI.
- Call [presentOfferCodeRedeemSheet(in:)](appstore/presentoffercoderedeemsheet%28in_%29.md) if your app uses UIKit.
- Call [presentOfferCodeRedeemSheet(from:)](appstore/presentoffercoderedeemsheet%28from_%29.md) if your app uses AppKit for macOS.

The redemption sheet takes care of the redemption flow, including alerting users about invalid entries, as appropriate. Invalid entries may include, for example, expired offer codes, invalid codes, or codes that would result in a subscription downgrade.

When customers redeem an offer code, StoreKit emits the resulting transaction in [updates](transaction/updates.md). Set up a transaction listener as soon as your app launches to receive new transactions while the app is running.

Including the redemption sheet in your app is recommended, but optional. For more guidance on supporting offer code redemption within your app, see Human Interface Guidelines \> [In-app purchase](https://developer.apple.com/design/human-interface-guidelines/in-app-purchase).

<a id="Support-offer-codes-redeemed-outside-of-your-app"></a>

### Support offer codes redeemed outside of your app

Customers may redeem offer codes outside your app, by entering the offer code in the App Store, or by using a redemption URL. To handle offer codes — and other transactions that can occur outside of your app — your app needs to use [updates](transaction/updates.md) on [Transaction](transaction.md) to receive new transactions while the app is running. Create a [Task](https://developer.apple.com/documentation/swift/task) to iterate through the transactions from the listener as soon as your app launches. For more information and sample code, see [updates](transaction/updates.md).

When the app launches, it needs to check [all](transaction/all.md) or [currentEntitlements](transaction/currententitlements.md) on [Transaction](transaction.md) to get any transactions that may have occurred while the app wasn’t running. Process the transactions to ensure your app provides service for all products it’s entitled to.

<a id="Identify-subscriptions-purchased-with-offer-codes"></a>

### Identify subscriptions purchased with offer codes

When customers successfully redeem subscription offer codes, the transaction or subscription renewal information contain fields that identify the offer and its offer type. Find the offer code details in the transaction information, in your app and on your server, as follows.

In your app, use the following StoreKit APIs to locate the offer code information:

- See the [Transaction](transaction.md) properties [offerID](transaction/offerid.md) and [offerType](transaction/offertype-swift.property.md). An offer type value of [code](transaction/offertype-swift.struct/code.md) indicates the customer redeemed an offer code.
- Some offer code redemptions may apply to an auto-renewable subscription’s next renewal period, for example, if the customer is already subscribed. In this case, see the [Product.SubscriptionInfo.RenewalInfo](product/subscriptioninfo/renewalinfo.md) properties [offerID](product/subscriptioninfo/renewalinfo/offerid.md) and [offerType](transaction/offertype-swift.property.md). An offer type value of [code](transaction/offertype-swift.struct/code.md) indicates the customer redeemed an offer code.

On your server, use the following server-side APIs to locate offer code information:

- In the [App Store Server API](../appstoreserverapi.md), when you call endpoints such as [Get Transaction History](../appstoreserverapi/get-transaction-history.md), [Get All Subscription Statuses](../appstoreserverapi/get-all-subscription-statuses.md), and others, the response contains the signed transaction, [JWSTransaction](../appstoreserverapi/jwstransaction.md). In its decoded payload, [JWSTransactionDecodedPayload](../appstoreserverapi/jwstransactiondecodedpayload.md), look for the fields [offerIdentifier](../appstoreserverapi/offeridentifier.md) and [offerType](../appstoreserverapi/offertype.md). An [offerType](../appstoreserverapi/offertype.md) value of `3` indicates the customer redeemed an offer code.
- The [App Store Server Notifications V2](../appstoreservernotifications/app-store-server-notifications-v2.md) sends a notification with an `OFFER_REDEEMED` [notificationType](../appstoreservernotifications/notificationtype.md) when someone redeems an offer code for an active subscription. It sends a `SUBSCRIBED` notification type if someone redeems the offer code as an initial purchase or to resubscribe. The decoded payloads [JWSTransactionDecodedPayload](../appstoreservernotifications/jwstransactiondecodedpayload.md) and [JWSRenewalInfoDecodedPayload](../appstoreservernotifications/jwsrenewalinfodecodedpayload.md) contain the fields [offerIdentifier](../appstoreservernotifications/offeridentifier.md) and [offerType](../appstoreservernotifications/offertype.md). An [offerType](../appstoreservernotifications/offertype.md) value of `3` indicates the customer redeemed an offer code.

<a id="Provide-subscription-service-to-new-and-existing-customers"></a>

### Provide subscription service to new and existing customers

When you acquire new customers with an offer code, they already have an auto-renewable subscription when they open your app for the first time. In addition to providing subscription service, you may need to update your backend system’s records. Your app follows these steps:

1. When the app launches, check [all](transaction/all.md) or [currentEntitlements](transaction/currententitlements.md) on [Transaction](transaction.md) to get all transactions or current entitlements, respectively. StoreKit automatically validates the transactions, and returns verified results in [VerificationResult.verified(\_:)](verificationresult/verified%28__%29.md). To perform your own validation, use the [jwsRepresentation](verificationresult/jwsrepresentation-21vgo.md) property.
2. To determine if a subscription results from an offer code redemption, check the [offerID](transaction/offerid.md) and [offerType](transaction/offertype-swift.property.md) properties on the subscription’s [Transaction](transaction.md).
3. Provide the subscription service based on the offer and call [finish()](transaction/finish%28%29.md) on [Transaction](transaction.md).
4. Guide new customers through your new-user experience, as needed. Update your backend system’s records.

When an existing customer redeems an offer code within your app, the transaction comes in through the [updates](transaction/updates.md) sequence on [Transaction](transaction.md). Process the transaction as usual, providing service based on the offer, and call [finish()](transaction/finish%28%29.md).

<a id="Supporting-systems-earlier-than-iOS-16-and-iPadOS-16"></a>

### Supporting systems earlier than iOS 16 and iPadOS 16

If your app runs on iOS 16 or earlier, and iPadOS 16 or earlier, use [presentCodeRedemptionSheet](skpaymentqueue/presentcoderedemptionsheet%28%29.md) to display the offer code redemption UI. Otherwise, use the APIs referred to in this article. For more information about supporting earlier systems, see [Implementing offer codes in your app](implementing-offer-codes-in-your-app.md).
