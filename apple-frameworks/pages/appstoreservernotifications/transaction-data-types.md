> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/transaction-data-types](https://developer.apple.com/documentation/appstoreservernotifications/transaction-data-types)

# Transaction data types

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** API Collection

Refer to these data types for decoded transaction and renewal information payloads.

## Topics

### Environment

- [environment](environment.md): The server environment, either sandbox or production.

### Transaction identifiers

- [originalTransactionId](originaltransactionid.md): The original transaction identifier of a purchase.
- [transactionId](transactionid.md): The unique identifier for a transaction, such as an In-App Purchase, restored purchase, or subscription renewal.
- [webOrderLineItemId](weborderlineitemid.md): The unique identifier of subscription purchase events across devices, including subscription renewals.
- [previousOriginalTransactionId](previousoriginaltransactionid.md): The original transaction identifer of a subscription before migration.

### App transaction identifier

- [appTransactionId](apptransactionid.md): The unique identifier of the app download transaction.

### App information

- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [bundleId](bundleid.md): The bundle identifier of an app.

### Account information

- [appAccountToken](appaccounttoken.md): A UUID that associates the transaction with a customer on your service.

### Product information

- [productId](productid.md): The product identifier of the In-App Purchase.
- [type](type.md): The product type of the In-App Purchase.
- [subscriptionGroupIdentifier](subscriptiongroupidentifier.md): The identifier of the subscription group that the subscription belongs to.
- [quantity](quantity.md): The number of purchased consumable products.

### Product price and currency

- [price](price.md): The price, in milliunits, of the In-App Purchase that the system records in the transaction.
- [currency](currency.md): The three-letter ISO 4217 currency code for the price of the product.

### Storefront information

- [storefront](storefront.md): The three-letter code that represents the country or region associated with the App Store storefront for the purchase.
- [storefrontId](storefrontid.md): An Apple-defined value that uniquely identifies an App Store storefront.

### Offers

- [eligibleWinBackOfferIds](eligiblewinbackofferids.md): An array of win-back offer identifiers that a customer is eligible to redeem, which sorts the identifiers to present the better offers first.
- [offerIdentifier](offeridentifier.md): The string identifier of an offer that you create in App Store Connect.
- [offerPeriod](offerperiod.md): The duration of the offer.
- [offerType](offertype.md): The type of offer.
- [offerDiscountType](offerdiscounttype.md): The payment mode for a discount offer on an In-App Purchase.

### Purchase dates

- [originalPurchaseDate](originalpurchasedate.md): The purchase date of the transaction associated with the original transaction identifier.
- [purchaseDate](purchasedate.md): The time that the App Store charged the customer’s account for a purchase, a restored product, a subscription, or a subscription renewal after a lapse.
- [recentSubscriptionStartDate](recentsubscriptionstartdate.md): The earliest start date of a subscription in a series of auto-renewable subscription purchases that ignores all lapses of paid service shorter than 60 days.

### Billing status

- [isInBillingRetryPeriod](isinbillingretryperiod.md): A Boolean value that indicates whether the App Store is attempting to automatically renew a subscription that expired due to a billing issue.
- [gracePeriodExpiresDate](graceperiodexpiresdate.md): The time when the billing grace period for a subscription renewal expires.

### Subscripton renewal and expiration

- [autoRenewStatus](autorenewstatus.md): The renewal status for an auto-renewable subscription.
- [autoRenewProductId](autorenewproductid.md): The identifier of the product that renews at the next billing period.
- [billingPlanType](billingplantype.md)
- [expirationIntent](expirationintent.md): The reason an auto-renewable subscription expired.
- [expiresDate](expiresdate.md): The UNIX time, in milliseconds, an auto-renewable subscription purchase expires or renews.
- [isUpgraded](isupgraded.md): A Boolean value that indicates whether the customer upgraded to another subscription.
- [renewalBillingPlanType](renewalbillingplantype.md)
- [renewalDate](renewaldate.md): The UNIX time, in milliseconds, when the most recent auto-renewable subscription purchase expires.
- [renewalPrice](renewalprice.md): The renewal price, in milliunits, of the auto-renewable subscription that renews at the next billing period.

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

### Revocations

- [revocationDate](revocationdate.md): The UNIX time, in milliseconds, that the App Store refunded the transaction or revoked it from Family Sharing.
- [revocationPercentage](revocationpercentage.md): The percentage, in milliunits, of the transaction that the App Store has refunded or revoked.
- [revocationReason](revocationreason.md): The reason for a revoked or refunded transaction.
- [revocationType](revocationtype.md): The type of the refund or revocation that applies to the transaction.

### Transaction reason

- [transactionReason](transactionreason.md): The cause of a purchase transaction, which indicates whether it’s a customer’s purchase or a renewal for an auto-renewable subscription that the system initiates.

### JWS signature date

- [signedDate](signeddate.md): The UNIX time, in milliseconds, that the App Store signed the JSON Web Signature data.

### Advanced Commerce API data

- [Data types for Advanced Commerce API](advancedcommerce-datatypes.md): Objects and data types for transaction that use the Advanced Commerce API.

## See Also

### JWS header and payload data types

- [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md): A decoded payload that contains transaction information.
- [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md): A decoded payload containing subscription renewal information for an auto-renewable subscription.
- [JWSDecodedHeader](jwsdecodedheader.md): A decoded JSON Web Signature header containing transaction or renewal information.
