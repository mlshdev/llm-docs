> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/subscriptionmaxextensionerror](https://developer.apple.com/documentation/appstoreserverapi/subscriptionmaxextensionerror)

# SubscriptionMaxExtensionError

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.1+

An error that indicates the subscription doesn’t qualify for a renewal-date extension because it has already received the maximum extensions.

## Declaration

```
object SubscriptionMaxExtensionError
```

## Properties

- `errorCode` — `int64`: **Allowed values:** `4030005`
- `errorMessage` — `string`: **Allowed values:** `Forbidden - subscription has reached maximum extension count.`

<a id="Discussion"></a>

## Discussion

This error applies to the [Extend a Subscription Renewal Date](extend-a-subscription-renewal-date.md) endpoint.

## See Also

### Errors

- [AccountNotFoundError](accountnotfounderror.md): An error that indicates the App Store account wasn’t found.
- [AdvancedCommerceTransactionNotSupportedError](advancedcommercetransactionnotsupportederror.md): An error that indicates Advanced Commerce API transactions are not supported by the endpoint.
- [AppNotFoundError](appnotfounderror.md): An error that indicates the app wasn’t found.
- [AppTransactionDoesNotExistError](apptransactiondoesnotexisterror.md): An error response that indicates an app transaction doesn’t exist for the specified customer.
- [AppTransactionIdNotSupportedError](apptransactionidnotsupportederror.md): An error that indicates the endpoint doesn’t support an app transaction ID.
- [FamilySharedSubscriptionExtensionIneligibleError](familysharedsubscriptionextensionineligibleerror.md): An error that indicates a subscription isn’t directly eligible for a renewal date extension because the customer obtained it through Family Sharing.
- [FamilyTransactionNotSupportedError](familytransactionnotsupportederror.md): An error that indicates the transaction is for a product the customer obtains through Family Sharing, which the endpoint doesn’t support.
- [GeneralInternalError](generalinternalerror.md): An error that indicates a general internal error.
- [GeneralBadRequestError](generalbadrequesterror.md): An error that indicates an invalid request.
- [InvalidAppAccountTokenUUIDError](invalidappaccounttokenuuiderror.md): An error that indicates the app account token value is not a valid UUID.
- [InvalidAppIdentifierError](invalidappidentifiererror.md): An error that indicates an invalid app identifier.
- [InvalidEmptyStorefrontCountryCodeListError](invalidemptystorefrontcountrycodelisterror.md): An error that indicates a required storefront country code is empty.
- [InvalidExtendByDaysError](invalidextendbydayserror.md): An error that indicates an invalid extend-by-days value.
- [InvalidExtendReasonCodeError](invalidextendreasoncodeerror.md): An error that indicates an invalid reason code.
- [InvalidOriginalTransactionIdError](invalidoriginaltransactioniderror.md): An error that indicates an invalid original transaction identifier.
