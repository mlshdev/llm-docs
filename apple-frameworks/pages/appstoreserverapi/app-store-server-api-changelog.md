> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/app-store-server-api-changelog](https://developer.apple.com/documentation/appstoreserverapi/app-store-server-api-changelog)

# App Store Server API changelog

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Article

Learn about new features and updates in the App Store Server API.

<a id="overview"></a>

## Overview

Use this changelog to learn about feature updates, deprecations, and removals for the App Store Server API.

<a id="Server-update-20260505"></a>

### Server update  — 2026/05/05

Updated recommended domain from `api.storekit.itunes.apple.com` to `api.storekit.apple.com`, and `api.storekit-sandbox.itunes.apple.com` to `api.storekit-sandbox.apple.com`. The previous domains will continue to be supported.

<a id="121-20260427"></a>

### 1.21 - 2026/04/27

**New features**

- Added the following fields in [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md) to support monthly subscriptions with a 12-month commitment: [TransactionCommitmentInfo](transactioncommitmentinfo.md) and [billingPlanType](billingplantype.md); and the following fields in [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md):   [RenewalCommitmentInfo](renewalcommitmentinfo.md) and [renewalBillingPlanType](renewalbillingplantype.md).

<a id="120-20260413"></a>

### 1.20 - 2026/04/13

**New features**

- Added the [Finish Transaction](finish-transaction.md) endpoint.
- Defined a new type, [anyTransactionId](anytransactionid.md). The endpoints that previously used the [transactionId](transactionid.md) type now use [anyTransactionId](anytransactionid.md), but the functionality is unchanged.

<a id="119-20251210"></a>

### 1.19 - 2025/12/10

**New features**

- Added the [Send Consumption Information](send-consumption-information.md) endpoint.
- Added the [revocationType](revocationtype.md) and [revocationPercentage](revocationpercentage.md) fields to the [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md).
- Added the [advancedCommercePriceIncreaseInfo](advancedcommercepriceincreaseinfo.md) object, and [advancedCommercePriceIncreaseInfoDependentSKU](advancedcommercepriceincreaseinfodependentsku.md), [advancedCommercePriceIncreaseInfoStatus](advancedcommercepriceincreaseinfostatus.md), [advancedCommercePriceIncreaseInfoPrice](advancedcommercepriceincreaseinfoprice.md), fields to the [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md).
- Use the new [Send Consumption Information](send-consumption-information.md) endpoint for App Store In-App Purchases that don’t use the Advanced Commerce API.

<a id="118-20251029"></a>

### 1.18 - 2025/10/29

**New features**

- Added the `ONE_TIME` value to [offerDiscountType](offerdiscounttype.md) to indicate In-App Purchase offer codes.

<a id="117-20251016"></a>

### 1.17 - 2025/10/16

**New features**

- Added the [Get App Transaction Info](get-app-transaction-info.md) endpoint and [AppTransactionInfoResponse](apptransactioninforesponse.md) response object.

<a id="116-20250609"></a>

### 1.16 - 2025/06/09

**New features**

- Added the [Set App Account Token](set-app-account-token.md) endpoint and [UpdateAppAccountTokenRequest](updateappaccounttokenrequest.md) request object, and related error codes:  [TransactionIdIsNotOriginalTransactionIdError](transactionidisnotoriginaltransactioniderror.md), [FamilyTransactionNotSupportedError](familytransactionnotsupportederror.md), and [InvalidAppAccountTokenUUIDError](invalidappaccounttokenuuiderror.md).

<a id="115-20250221"></a>

### 1.15 - 2025/02/21

**New features**

- Updated the [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md) and [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md) to include the new [appTransactionId](apptransactionid.md) and [offerPeriod](offerperiod.md) fields.
- Updated the [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md) to include the [appAccountToken](appaccounttoken.md) field.
- Added the [AppTransactionIdNotSupportedError](apptransactionidnotsupportederror.md) error object.

<a id="114-20250117"></a>

### 1.14 - 2025/01/17

**New features**

- Added support for [Advanced Commerce API](../advancedcommerceapi.md).

<a id="113-20240708"></a>

### 1.13 — 2024/07/08

**New features**

- Updated the [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md) to include the new [eligibleWinBackOfferIds](eligiblewinbackofferids.md) field.
- Added the win-back offer type in [offerType](offertype.md).

<a id="112-20240610"></a>

### 1.12 — 2024/06/10

**New features**

- Added the endpoint [Get Transaction History](get-transaction-history.md), which provides transaction history for all In-App Purchases, including consumable In-App Purchases in a finished state.
- Added the fields [renewalPrice](renewalprice.md), [currency](currency.md) and [offerDiscountType](offerdiscounttype.md) to the [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md).

**Deprecations**

- The [Get Transaction History V1](get-transaction-history-v1.md) endpoint is deprecated. Use the new [Get Transaction History](get-transaction-history.md) endpoint instead.

<a id="111-20240411"></a>

### 1.11  — 2024/04/11

New features

- Added the [refundPreferenceV1](refundpreferencev1.md) field to the  [ConsumptionRequestV1](consumptionrequestv1.md) request body.
- [Send Consumption Information V1](send-consumption-information-v1.md) added  support for receiving information for auto-renewable subscriptions.
- Added the [InvalidTransactionTypeNotSupportedError](invalidtransactiontypenotsupportederror.md) error object.

**Deprecations**

- The system no longer sends the [InvalidTransactionNotConsumableError](invalidtransactionnotconsumableerror.md) error object. It uses [InvalidTransactionTypeNotSupportedError](invalidtransactiontypenotsupportederror.md) instead.

<a id="1101-20240312"></a>

### 1.10.1  — 2024/03/12

- The type of the [price](../appstoreservernotifications/price.md) field changed from `int32` to `int64`.

<a id="Server-update-20240229"></a>

### Server update  — 2024/02/29

**New features**

- The [Get Notification History](get-notification-history.md) endpoint adds support for the new notification type for unreported external purchase tokens.

<a id="110-20231026"></a>

### 1.10 — 2023/10/26

New features

- Added the following new properties in the decoded transaction payload [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md): [price](price.md), [currency](currency.md), and [offerDiscountType](offerdiscounttype.md).

<a id="19-20230927"></a>

### 1.9 — 2023/09/27

New features

- Updated the error format of the [Send Consumption Information V1](send-consumption-information-v1.md) endpoint to match that of other endpoints. The endpoint now returns a JSON body that can contain an error code.
- New error codes for the [Send Consumption Information V1](send-consumption-information-v1.md) endpoint include: [InvalidAccountTenureError](invalidaccounttenureerror.md), [InvalidAppAccountTokenError](invalidappaccounttokenerror.md), [InvalidConsumptionStatusError](invalidconsumptionstatuserror.md), [InvalidCustomerConsentedError](invalidcustomerconsentederror.md), [InvalidDeliveryStatusError](invaliddeliverystatuserror.md), [InvalidLifetimeDollarsPurchasedError](invalidlifetimedollarspurchasederror.md), [InvalidLifetimeDollarsRefundedError](invalidlifetimedollarsrefundederror.md), [InvalidPlatformError](invalidplatformerror.md), [InvalidPlayTimeError](invalidplaytimeerror.md), [InvalidSampleContentProvidedError](invalidsamplecontentprovidederror.md), [InvalidTransactionNotConsumableError](invalidtransactionnotconsumableerror.md), [InvalidUserStatusError](invaliduserstatuserror.md).

<a id="18-20230605"></a>

### 1.8 — 2023/06/05

New features

- Added a new endpoint [Get Transaction Info](get-transaction-info.md) with its response  [TransactionInfoResponse](transactioninforesponse.md), which provides information about a single transaction.
- The [Get Notification History](get-notification-history.md) endpoint adds a new filter parameter, [onlyFailures](onlyfailures.md). When you set it to `true`, the endpoint returns only the notifications that failed to reach the developer’s server.
- The following endpoints changed their path parameters from [originalTransactionId](originaltransactionid.md) to [transactionId](transactionid.md): [Get All Subscription Statuses](get-all-subscription-statuses.md), [Get Transaction History V1](get-transaction-history-v1.md), [Get Refund History](get-refund-history.md), and [Send Consumption Information V1](send-consumption-information-v1.md). These endpoints now accept any transaction identifier, including original transaction identifiers.
- The [Get Notification History](get-notification-history.md) endpoint now accepts a [transactionId](transactionid.md) instead of requiring an original transaction identifier ([originalTransactionId](originaltransactionid.md)) in the [NotificationHistoryRequest](notificationhistoryrequest.md) body.
- The [Get Transaction History V1](get-transaction-history-v1.md) endpoint adds a new filter parameter, `revoked`, that filters the response to return only revoked transactions or only nonrevoked transactions.
- The [Get All Subscription Statuses](get-all-subscription-statuses.md) endpoint adds a new filter parameter, `status`, that enables you to request subscriptions with the status values you specify.
- Added the [storefront](storefront.md), [storefrontId](storefrontid.md), and [transactionReason](transactionreason.md) fields to the [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md) object.
- Added the [renewalDate](renewaldate.md) field to the  [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md) object.
- Added the `sendAttempts` field to the  [CheckTestNotificationResponse](checktestnotificationresponse.md) and the [notificationHistoryResponseItem](notificationhistoryresponseitem.md) of the [NotificationHistoryResponse](notificationhistoryresponse.md) to provide information about all the send attempts for App Store Server Notifications.
- Added the error codes [FamilySharedSubscriptionExtensionIneligibleError](familysharedsubscriptionextensionineligibleerror.md), [StatusRequestNotFoundError](statusrequestnotfounderror.md), [InvalidStatusError](invalidstatuserror.md), [InvalidRevokedError](invalidrevokederror.md), [InvalidTransactionIdError](invalidtransactioniderror.md), [TransactionIdNotFoundError](transactionidnotfounderror.md),  and [RateLimitExceededError](ratelimitexceedederror.md).
- All endpoints are subject to a rate limit and can return a [RateLimitExceededError](ratelimitexceedederror.md) with an HTTP 429 error code. For more information, see [Identifying rate limits](identifying-rate-limits.md).

**Deprecations**

- The `excludeRevoked` filter in [Get Transaction History V1](get-transaction-history-v1.md) is deprecated. Use the new `revoked` filter instead.
- The `firstSendAttemptResult` field is deprecated in the [CheckTestNotificationResponse](checktestnotificationresponse.md) and [notificationHistoryResponseItem](notificationhistoryresponseitem.md) objects. Use the first [sendAttemptItem](sendattemptitem.md) in the `sendAttempts` array instead.

<a id="17-20230130"></a>

### 1.7 — 2023/01/30

New features

- The new endpoint [Extend Subscription Renewal Dates for All Active Subscribers](extend-subscription-renewal-dates-for-all-active-subscribers.md) takes a subscription product identifier and extends the renewal date for all eligible subscribers. It responds with [MassExtendRenewalDateResponse](massextendrenewaldateresponse.md). For more information, see [Extending the renewal date for auto-renewable subscriptions](extending-the-renewal-date-for-auto-renewable-subscriptions.md). For information about new App Store server notifications related to this endpoint, see the [App Store Server Notifications changelog](../appstoreservernotifications/app-store-server-notifications-changelog.md).
- The new endpoint [Get Status of Subscription Renewal Date Extensions](get-status-of-subscription-renewal-date-extensions.md) checks the status of a subscription-renewal-date extension, and responds with the [MassExtendRenewalDateStatusResponse](massextendrenewaldatestatusresponse.md).

<a id="16-20220808"></a>

### 1.6 — 2022/08/08

New features

- The new version 2 endpoint [Get Refund History](get-refund-history.md) returns a paginated list of refunded transactions in the [RefundHistoryResponse](refundhistoryresponse.md).

Deprecations

- The endpoint [Get Refund History V1](get-refund-history-v1.md) and its response [RefundLookupResponse](refundlookupresponse.md) are deprecated.
- In `firstSendAttemptResult`, the `SSL_ISSUE` value is deprecated and replaced with `TLS_ISSUE`.

<a id="15-20220606"></a>

### 1.5 — 2022/06/06

New features

- The API has two new endpoints to support testing how your server receives App Store Server Notifications. The endpoints are: [Request a Test Notification](request-a-test-notification.md) and [Get Test Notification Status](get-test-notification-status.md).
- The API adds the new [Get Notification History](get-notification-history.md) endpoint.
- The [Get Transaction History V1](get-transaction-history-v1.md) endpoint is enhanced with new parameters to support filtering and sorting functionality.
- The [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md) now includes the [recentSubscriptionStartDate](recentsubscriptionstartdate.md) field.

<a id="14"></a>

### 1.4

This version doesn’t contain any public changes.

<a id="13"></a>

### 1.3

This version doesn’t contain any public changes.

<a id="Server-update-20220317"></a>

### Server update — 2022/03/17

Removals

- The [JWSDecodedHeader](jwsdecodedheader.md) object no longer includes the `kid` field.

<a id="12-20220224"></a>

### 1.2 — 2022/02/24

New features

- The [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md) and [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md) objects now include the [environment](environment.md) field.

<a id="Server-update-20220223"></a>

### Server update — 2022/02/23

- The [Get Refund History V1](get-refund-history-v1.md) endpoint now returns a maximum of 50 refunded transactions.

<a id="11-20221021"></a>

### 1.1 — 2022/10/21

New features

- The API adds three endpoints: [Look Up Order ID](look-up-order-id.md), [Get Refund History V1](get-refund-history-v1.md), and [Extend a Subscription Renewal Date](extend-a-subscription-renewal-date.md).

<a id="Server-update-20210920"></a>

### Server update — 2021/09/20

The API is now available in the production environment, using the following base URL:

```other
https://api.storekit.apple.com/inApps/
```

<a id="10b1-20210607"></a>

### 1.0b1 — 2021/06/07

Initial version of the App Store Server API.

New features

- This API has three endpoints, available in the sandbox environment: [Get Transaction History V1](get-transaction-history-v1.md), [Send Consumption Information V1](send-consumption-information-v1.md), and [Get All Subscription Statuses](get-all-subscription-statuses.md).

## See Also

### Essentials

- [Simplifying your implementation by using the App Store Server Library](simplifying-your-implementation-by-using-the-app-store-server-library.md): Use Apple’s open source library to create JSON Web Tokens (JWT) to authorize your calls, verify transactions, extract transaction identifiers from receipts, and more.
- [Creating API keys to authorize API requests](creating-api-keys-to-authorize-api-requests.md): Create API keys you use to sign JSON Web Tokens and authorize API requests.
- [Generating JSON Web Tokens for API requests](generating-json-web-tokens-for-api-requests.md): Create JSON Web Tokens signed with your private key to authorize requests for App Store Server API and External Purchase Server API.
- [Identifying rate limits](identifying-rate-limits.md): Recognize the rate limits that apply to App Store Server API endpoints and handle them in your code.
