> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/invalidassignedtransactionnotsupportederror

# InvalidAssignedTransactionNotSupportedError

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.22+

An error that indicates the transaction is one that an organization or group assigns to the customer, which the endpoint doesn’t support.

## Declaration

```
object InvalidAssignedTransactionNotSupportedError
```

## Properties

- `errorCode` — `int64`: **Allowed values:** `4000227`
- `errorMessage` — `string`: **Allowed values:** `Invalid request. Assigned transactions aren't supported by this endpoint.`

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

A request returns this error if you call the [Send Consumption Information](send-consumption-information.md), [Send Consumption Information V1](send-consumption-information-v1.md), or [Set App Account Token](set-app-account-token.md) endpoint with a transaction identifier for a transaction that an organization or group assigns to the customer.

To identify assigned transactions before you call these endpoints, check for an [inAppOwnershipType](inappownershiptype.md) of `ASSIGNED`.

## See Also

### Errors

- [AccountNotFoundError](accountnotfounderror.md): An error that indicates the App Store account wasn’t found.
- [AdvancedCommerceTransactionNotSupportedError](advancedcommercetransactionnotsupportederror.md): An error that indicates Advanced Commerce API transactions are not supported by the endpoint.
- [AppNotFoundError](appnotfounderror.md): An error that indicates the app wasn’t found.
- [AppTransactionDoesNotExistError](apptransactiondoesnotexisterror.md): An error response that indicates an app transaction doesn’t exist for the specified customer.
- [AppTransactionIdNotSupportedError](apptransactionidnotsupportederror.md): An error that indicates the endpoint doesn’t support an app transaction ID.
- [AssignedSubscriptionExtensionIneligibleError](assignedsubscriptionextensionineligibleerror.md): An error that indicates a subscription isn’t eligible for a renewal date extension because the customer has access through an organization or group.
- [FamilySharedSubscriptionExtensionIneligibleError](familysharedsubscriptionextensionineligibleerror.md): An error that indicates a subscription isn’t directly eligible for a renewal date extension because the customer obtained it through Family Sharing.
- [FamilyTransactionNotSupportedError](familytransactionnotsupportederror.md): An error that indicates the transaction is for a product the customer obtains through Family Sharing, which the endpoint doesn’t support.
- [GeneralInternalError](generalinternalerror.md): An error that indicates a general internal error.
- [GeneralBadRequestError](generalbadrequesterror.md): An error that indicates an invalid request.
- [InvalidAppAccountTokenUUIDError](invalidappaccounttokenuuiderror.md): An error that indicates the app account token value is not a valid UUID.
- [InvalidAppIdentifierError](invalidappidentifiererror.md): An error that indicates an invalid app identifier.
- [InvalidEmptyStorefrontCountryCodeListError](invalidemptystorefrontcountrycodelisterror.md): An error that indicates a required storefront country code is empty.
- [InvalidExtendByDaysError](invalidextendbydayserror.md): An error that indicates an invalid extend-by-days value.
- [InvalidExtendReasonCodeError](invalidextendreasoncodeerror.md): An error that indicates an invalid reason code.
