> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/error-codes](https://developer.apple.com/documentation/appstoreserverapi/error-codes)

# Error codes

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** API Collection

Understand the error codes that App Store Server API responses return.

## Topics

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
- [InvalidRefundPreferenceError](invalidrefundpreferenceerror.md): An error that indicates an invalid refund preference value.
- [InvalidRequestIdentifierError](invalidrequestidentifiererror.md): An error that indicates an invalid request identifier.
- [InvalidRequestRevisionError](invalidrequestrevisionerror.md): An error that indicates an invalid request revision.
- [InvalidRevokedError](invalidrevokederror.md): An error that indicates the revoked parameter contains an invalid value.
- [InvalidStatusError](invalidstatuserror.md): An error that indicates the status parameter is invalid.
- [InvalidStorefrontCountryCodeError](invalidstorefrontcountrycodeerror.md): An error that indicates a storefront code is invalid.
- [InvalidTransactionIdError](invalidtransactioniderror.md): An error that indicates an invalid transaction identifier.
- [OriginalTransactionIdNotFoundError](originaltransactionidnotfounderror.md): An error that indicates an original transaction identifier wasn’t found.
- [RateLimitExceededError](ratelimitexceedederror.md): An error that indicates the request exceeded the rate limit.
- [StatusRequestNotFoundError](statusrequestnotfounderror.md): An error that indicates the server didn’t find a subscription-renewal-date extension request for the request identifier and product identifier you provided.
- [SubscriptionExtensionIneligibleError](subscriptionextensionineligibleerror.md): An error that indicates the subscription doesn’t qualify for a renewal-date extension due to its subscription state.
- [SubscriptionMaxExtensionError](subscriptionmaxextensionerror.md): An error that indicates the subscription doesn’t qualify for a renewal-date extension because it has already received the maximum extensions.
- [TransactionIdIsNotOriginalTransactionIdError](transactionidisnotoriginaltransactioniderror.md): An error that indicates the endpoint expects an original transaction identifier.
- [TransactionIdNotFoundError](transactionidnotfounderror.md): An error that indicates a transaction identifier wasn’t found.

### Errors to retry

- [AccountNotFoundRetryableError](accountnotfoundretryableerror.md): An error response that indicates the App Store account wasn’t found, but you can try again.
- [AppNotFoundRetryableError](appnotfoundretryableerror.md): An error response that indicates the app wasn’t found, but you can try again.
- [GeneralInternalRetryableError](generalinternalretryableerror.md): An error response that indicates an unknown error occurred, but you can try again.
- [OriginalTransactionIdNotFoundRetryableError](originaltransactionidnotfoundretryableerror.md): An error response that indicates the original transaction identifier wasn’t found, but you can try again.

### Consumption request errors

- [ConsumptionPercentageAutoRenewableSubscriptionError](consumptionpercentageautorenewablesubscriptionerror.md): An error that indicates the consumption percentage field is unsupported for auto-renewable subscription transactions.
- [ConsumptionPercentageOutOfRangeError](consumptionpercentageoutofrangeerror.md): An error that indicates the consumption percentage is outside the valid range.
- [InvalidAccountTenureError](invalidaccounttenureerror.md): An error that indicates the value of the account tenure field is invalid.
- [InvalidAppAccountTokenError](invalidappaccounttokenerror.md): An error that indicates the value of the app account token field is invalid.
- [InvalidConsumptionStatusError](invalidconsumptionstatuserror.md): An error that indicates the value of the consumption status field is invalid.
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

### Notification test and history errors

- [InvalidEndDateError](invalidenddateerror.md): An error that indicates the end date is invalid.
- [InvalidNotificationTypeError](invalidnotificationtypeerror.md): An error that indicates the notification type or subtype is invalid.
- [InvalidPaginationTokenError](invalidpaginationtokenerror.md): An error that indicates the pagination token is invalid.
- [InvalidStartDateError](invalidstartdateerror.md): An error that indicates the start date is invalid.
- [InvalidTestNotificationTokenError](invalidtestnotificationtokenerror.md): An error that indicates the test notification token is invalid.
- [InvalidInAppOwnershipTypeError](invalidinappownershiptypeerror.md): An error that indicates an invalid in-app ownership type parameter.
- [InvalidProductIdError](invalidproductiderror.md): An error that indicates the product ID parameter is invalid.
- [InvalidProductTypeError](invalidproducttypeerror.md): An error that indicates the product type parameter is invalid.
- [InvalidSortError](invalidsorterror.md): An error that indicates the sort parameter is invalid.
- [InvalidSubscriptionGroupIdentifierError](invalidsubscriptiongroupidentifiererror.md): An error that indicates the subscription group identifier is invalid.
- [MultipleFiltersSuppliedError](multiplefilterssuppliederror.md): An error that indicates the request is invalid because it has too many applied constraints.
- [PaginationTokenExpiredError](paginationtokenexpirederror.md): An error that indicates the pagination token expired.
- [ServerNotificationURLNotFoundError](servernotificationurlnotfounderror.md): An error that indicates the App Store server couldn’t find a notifications URL for your app in the environment.
- [StartDateAfterEndDateError](startdateafterenddateerror.md): An error that indicates the end date precedes the start date, or the two dates are equal.
- [StartDateTooFarInPastError](startdatetoofarinpasterror.md): An error that indicates the start date is earlier than the earliest allowed date.
- [TestNotificationNotFoundError](testnotificationnotfounderror.md): An error that indicates the test notification token is expired or the test notification status isn’t available.
- [InvalidExcludeRevokedError](invalidexcluderevokederror.md): Deprecated. An error that indicates the query parameter exclude-revoked is invalid.
