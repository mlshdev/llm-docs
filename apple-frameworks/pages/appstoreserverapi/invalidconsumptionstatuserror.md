> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/invalidconsumptionstatuserror](https://developer.apple.com/documentation/appstoreserverapi/invalidconsumptionstatuserror)

# InvalidConsumptionStatusError

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.9+

An error that indicates the value of the consumption status field is invalid.

## Declaration

```
object InvalidConsumptionStatusError
```

## Properties

- `errorCode` — `int64`: **Allowed values:** `4000034`
- `errorMessage` — `string`: **Allowed values:** `Invalid request. The consumption status field is invalid.`

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

For more information about the `consumptionStatus` field in a [ConsumptionRequestV1](consumptionrequestv1.md), see [consumptionStatus](consumptionstatus.md).

## See Also

### Consumption request errors

- [ConsumptionPercentageAutoRenewableSubscriptionError](consumptionpercentageautorenewablesubscriptionerror.md): An error that indicates the consumption percentage field is unsupported for auto-renewable subscription transactions.
- [ConsumptionPercentageOutOfRangeError](consumptionpercentageoutofrangeerror.md): An error that indicates the consumption percentage is outside the valid range.
- [InvalidAccountTenureError](invalidaccounttenureerror.md): An error that indicates the value of the account tenure field is invalid.
- [InvalidAppAccountTokenError](invalidappaccounttokenerror.md): An error that indicates the value of the app account token field is invalid.
- [InvalidCustomerConsentedError](invalidcustomerconsentederror.md): An error that indicates the customer consented field is invalid or doesn’t indicate that the customer consented.
- [InvalidDeliveryStatusError](invaliddeliverystatuserror.md): An error that indicates the value in the delivery status field is invalid.
- [InvalidLifetimeDollarsPurchasedError](invalidlifetimedollarspurchasederror.md): An error that indicates the value in the lifetime dollars purchased field is invalid.
- [InvalidLifetimeDollarsRefundedError](invalidlifetimedollarsrefundederror.md): An error that indicates the value in the lifetime dollars refunded field is invalid.
- [InvalidPlatformError](invalidplatformerror.md): An error that indicates the value in the platform field is invalid.
- [InvalidPlayTimeError](invalidplaytimeerror.md): An error that indicates the value in the playtime field is invalid.
- [InvalidSampleContentProvidedError](invalidsamplecontentprovidederror.md): An error that indicates the value in the sample content provided field is invalid.
- [InvalidTransactionTypeNotSupportedError](invalidtransactiontypenotsupportederror.md): An error that indicates the transaction identifier represents an unsupported In-App Purchase type.
- [InvalidUserStatusError](invaliduserstatuserror.md): An error that indicates the value in the user status field is invalid.
- [InvalidTransactionNotConsumableError](invalidtransactionnotconsumableerror.md): Deprecated. An error that indicates the transaction identifier doesn’t represent a consumable In-App Purchase.
- [UndeliveredConsumptionPercentageNonZeroError](undeliveredconsumptionpercentagenonzeroerror.md): An error that indicates the consumption percentage must be zero for the provided delivery status.
