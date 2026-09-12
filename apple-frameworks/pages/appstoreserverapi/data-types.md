> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/data-types](https://developer.apple.com/documentation/appstoreserverapi/data-types)

# Data types

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** API Collection

Refer to these data types for decoded transaction and renewal information payloads.

## Topics

### Environment

- [environment](environment.md): The server environment, either sandbox or production.

### Transaction identifiers

- [originalTransactionId](originaltransactionid.md): The original transaction identifier of a purchase.
- [transactionId](transactionid.md): The unique identifier for a transaction, such as an In-App Purchase, restored In-App Purchase, or subscription renewal.
- [webOrderLineItemId](weborderlineitemid.md): The unique identifier of subscription-purchase events across devices, including renewals.
- [anyTransactionId](anytransactionid.md): A type that represents an original transaction ID, transaction ID, or app transaction ID.

### App transaction identifier

- [appTransactionId](apptransactionid.md): The unique identifier of the app download transaction.

### App information

- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [bundleId](bundleid.md): The bundle identifier of an app.
- [originalApplicationVersion](originalapplicationversion.md): The app version that the customer originally purchased from the App Store.
- [originalPlatform](originalplatform.md): The platform on which a customer originally purchases an app.
- [preorderDate](preorderdate.md): The date a customer places an order for the app before it’s available in the App Store, expressed in UNIX time, in milliseconds.

### Account information

- [appAccountToken](appaccounttoken.md): The UUID that you generate to associate a customer’s In-App Purchase with its resulting App Store transaction.

### Product information

- [productId](productid.md): The unique identifier of the product.
- [type](type.md): The type of In-App Purchase products you can offer in your app.
- [subscriptionGroupIdentifier](subscriptiongroupidentifier.md): The identifier of the subscription group that the subscription belongs to.
- [quantity](quantity.md): The number of purchased consumable products.

### Product price and currency

- [price](price.md): The price, in milliunits, of the In-App Purchase that the system records in the transaction.
- [currency](currency.md): The three-letter ISO 4217 currency code for the price of the product.

### Storefront information

- [storefront](storefront.md): The three-letter code that represents the country or region associated with the App Store storefront of the purchase.
- [storefrontId](storefrontid.md): An Apple-defined value that uniquely identifies an App Store storefront.

### Offers

- [eligibleWinBackOfferIds](eligiblewinbackofferids.md): An array of win-back offer identifiers that a customer is eligible to redeem, which sorts the identifiers with the best offers first.
- [offerIdentifier](offeridentifier.md): The string identifier of a subscription offer that you create in App Store Connect.
- [offerPeriod](offerperiod.md): The duration of the offer.
- [offerType](offertype.md): The type of offer.
- [offerDiscountType](offerdiscounttype.md): The payment mode for a discount offer on an In-App Purchase.

### Product purchase dates

- [originalPurchaseDate](originalpurchasedate.md): The purchase date of the transaction associated with the original transaction identifier.
- [purchaseDate](purchasedate.md): The time that the App Store charged the customer’s account for an In-App Purchase, a restored In-App Purchase, a subscription, or a subscription renewal after a lapse.
- [recentSubscriptionStartDate](recentsubscriptionstartdate.md): The earliest start date of a subscription in a series of auto-renewable subscription purchases that ignores all lapses of paid service shorter than 60 days.

### Billing status

- [isInBillingRetryPeriod](isinbillingretryperiod.md): A Boolean value that indicates whether the App Store is attempting to automatically renew an expired subscription.
- [gracePeriodExpiresDate](graceperiodexpiresdate.md): The time when the Billing Grace Period for subscription renewals expires.

### Subscription renewal and expiration

- [autoRenewStatus](autorenewstatus.md): The renewal status for an auto-renewable subscription.
- [autoRenewProductId](autorenewproductid.md): The identifier of the product that renews at the next billing period.
- [billingPlanType](billingplantype.md)
- [expirationIntent](expirationintent.md): The reason an auto-renewable subscription expired.
- [expiresDate](expiresdate.md): The UNIX time, in milliseconds, an auto-renewable subscription purchase expires or renews.
- [isUpgraded](isupgraded.md): The Boolean value that indicates whether the customer upgraded to another subscription.
- [renewalBillingPlanType](renewalbillingplantype.md)
- [renewalDate](renewaldate.md): The UNIX time, in milliseconds, when the most recent auto-renewable subscription purchase expires.
- [renewalPrice](renewalprice.md): The renewal price, in milliunits, of the auto-renewable subscription that renews at the next billing period.
- [status](status.md): The status of an auto-renewable subscription.

### Monthly subscriptions with 12-month commitments

- [TransactionCommitmentInfo](transactioncommitmentinfo.md)
- [billingPeriodNumber](billingperiodnumber.md)
- [commitmentExpiresDate](commitmentexpiresdate.md)
- [commitmentPrice](commitmentprice.md)
- [totalBillingPeriods](totalbillingperiods.md)
- [RenewalCommitmentInfo](renewalcommitmentinfo.md)
- [commitmentAutoRenewProductId](commitmentautorenewproductid.md)
- [commitmentAutoRenewStatus](commitmentautorenewstatus.md)
- [commitmentRenewalBillingPlanType](commitmentrenewalbillingplantype.md)
- [commitmentRenewalDate](commitmentrenewaldate.md)
- [commitmentRenewalPrice](commitmentrenewalprice.md)

### Family Sharing

- [inAppOwnershipType](inappownershiptype.md): A string that describes whether the transaction was purchased by the customer, or is available to them through Family Sharing.

### Price increase status

- [priceIncreaseStatus](priceincreasestatus.md): The status that indicates whether an auto-renewable subscription is subject to a price increase.

### Revocation

- [revocationDate](revocationdate.md): The UNIX time, in milliseconds, that the App Store refunded the transaction or revoked it from Family Sharing.
- [revocationReason](revocationreason.md): The reason for a refunded transaction.
- [revocationPercentage](revocationpercentage.md): The percentage, in milliunits, of the transaction that the App Store has refunded or revoked.
- [revocationType](revocationtype.md): The type of the refund or revocation that applies to the transaction.

### Transaction reason

- [transactionReason](transactionreason.md): The cause of a purchase transaction, which indicates whether it’s a customer’s purchase or a renewal for an auto-renewable subscription that the system initiates.

### JSON Web Signature (JWS) date

- [signedDate](signeddate.md): The UNIX time, in milliseconds, that the App Store signed the JSON Web Signature data.
- [receiptCreationDate](receiptcreationdate.md): The date that the App Store signs a JSON Web Signature (JWS) app transaction.

### Advanced Commerce API data

- [Data types for Advanced Commerce API](advancedcommerce-datatypes.md): Objects and data types for transactions that use the Advanced Commerce API.

## See Also

### JWS headers and payloads

- [JWSDecodedHeader](jwsdecodedheader.md): A decoded JSON Web Signature (JWS) header containing transaction or renewal information.
- [JWSAppTransaction](jwsapptransaction.md): App transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.
- [JWSAppTransactionDecodedPayload](jwsapptransactiondecodedpayload.md): A decoded payload that contains app transaction information.
- [JWSTransaction](jwstransaction.md): Transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.
- [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md): A decoded payload that contains transaction information.
- [JWSRenewalInfo](jwsrenewalinfo.md): Subscription renewal information, signed by the App Store, in JSON Web Signature (JWS) format.
- [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md): A decoded payload containing subscription renewal information for an auto-renewable subscription.
