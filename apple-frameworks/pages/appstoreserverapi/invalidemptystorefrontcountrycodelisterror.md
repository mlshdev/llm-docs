> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/invalidemptystorefrontcountrycodelisterror](https://developer.apple.com/documentation/appstoreserverapi/invalidemptystorefrontcountrycodelisterror)

# InvalidEmptyStorefrontCountryCodeListError

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.7+

An error that indicates a required storefront country code is empty.

## Declaration

```
object InvalidEmptyStorefrontCountryCodeListError
```

## Properties

- `errorCode` — `int64`: **Allowed values:** `4000027`
- `errorMessage` — `string`: **Allowed values:** `Invalid request. If provided, the list of storefront country codes must not be empty.`

<a id="Discussion"></a>

## Discussion

This error applies to the [Extend Subscription Renewal Dates for All Active Subscribers](extend-subscription-renewal-dates-for-all-active-subscribers.md) endpoint. If your request applies to all storefronts, omit the `storefrontCountryCodes` list from the [MassExtendRenewalDateRequest](massextendrenewaldaterequest.md) object.

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
- [InvalidExtendByDaysError](invalidextendbydayserror.md): An error that indicates an invalid extend-by-days value.
- [InvalidExtendReasonCodeError](invalidextendreasoncodeerror.md): An error that indicates an invalid reason code.
- [InvalidOriginalTransactionIdError](invalidoriginaltransactioniderror.md): An error that indicates an invalid original transaction identifier.
- [InvalidRefundPreferenceError](invalidrefundpreferenceerror.md): An error that indicates an invalid refund preference value.
