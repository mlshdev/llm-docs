> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/migrate-subscription-to-advanced-commerce-api](https://developer.apple.com/documentation/advancedcommerceapi/migrate-subscription-to-advanced-commerce-api)

# Migrate a Subscription to Advanced Commerce API

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Web Service Endpoint  
**Availability:** Advanced Commerce API 1.0+

Migrate a subscription that a customer purchased through In-App Purchase to a subscription you manage using the Advanced Commerce API.

## URL

```http
POST https://api.storekit.itunes.apple.com/advancedCommerce/v1/subscription/migrate/{transactionId}
```

## Sandbox URL

```http
POST https://api.storekit-sandbox.itunes.apple.com/advancedCommerce/v1/subscription/migrate/{transactionId}
```

## Path Parameters

- `transactionId` — `string` (required): The transaction identifier of the auto-renewable subscription to migrate. Use the subscription’s original transaction ID or any subsequent transaction ID of a transaction related to the subscription.

## HTTP Body

Content type: `application/json`

Type: `SubscriptionMigrateRequest`

The request body that contains the details for the migration.

## Response Codes

- `200` OK — `SubscriptionMigrateResponse`: Request succeeded.
- `400` Bad Request — `(RepeatedRequestReferenceIdError | NullRequestInfoError | NullTaxCodeError | NullItemsError | NullDescriptorsError | NullSKUError | NullDisplayNameError | NullDescriptionError | InvalidAppAccountTokenError | NullRequestReferenceIDError | InvalidRequestReferenceIDError | InvalidConsistencyTokenError | InvalidStorefrontError | SKULengthExceededError | DescriptionLengthExceededError | DisplayNameLengthExceededError | InvalidDisplayNameError | InvalidDescriptionError | InvalidProductError | InvalidSKUError | InvalidTaxProductCodeError | MismatchedStorefrontError | MissingPricingConfigForStorefrontError | OperationNotAllowedError | MalformedPayloadError | AtLeastOneItemError | NullTargetProductIDError | InvalidTargetProductIDError | SubscriptionAlreadyMigratedError | ItemLimitExceededError | PendingChangesMismatchError)`:
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Authorizing API requests from your server](authorizing-server-calls.md).
- `403` Forbidden — `(SubscriptionDoesNotExistError | SubscriptionAlreadyExistsError | SubscriptionNotEligibleError | ProductNotOwnedError | InactiveACASubError | ProductNotEligibleError | StorefrontChangeError | MigrationNotAllowedWhenPriceIncreaseCommunicatedError)`:
- `404` Not Found — `(TransactionIdNotFoundError | ProductNotFoundError)`:
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits for Advanced Commerce APIs](ratelimits.md).
- `500` Internal Server Error — `(GeneralInternalError | GeneralInternalRetryableError)`: Server error. Try again later.

## Mentioned In

- [Authorizing API requests from your server](authorizing-server-calls.md)
- [Advanced Commerce API changelog](changelog.md)
- [Identifying rate limits for Advanced Commerce APIs](ratelimits.md)

<a id="Discussion"></a>

## Discussion

> **Note**

> You can use the Advanced Commerce API and the StoreKit [In-App Purchase](../storekit/in-app-purchase.md) APIs in the same app. Both APIs use the App Store commerce system, including the same signed JWS transactions and JWS renewal info. For products that you offer using the In-App Purchase API, you set up product identifiers in App Store Connect. For products that you offer using the Advanced Commerce API, you host and manage your own catalog of SKUs and add product details dynamically at runtime.

## See Also

### Migration from the server

- [SubscriptionMigrateRequest](subscriptionmigraterequest.md): The subscription details you provide to migrate a subscription from In-App Purchase to the Advanced Commerce API, such as descriptors, items, storefront, and more.
- [SubscriptionMigrateResponse](subscriptionmigrateresponse.md): A response that contains signed renewal and transaction information after a subscription successfully migrates to the Advanced Commerce API.
- [SubscriptionMigrateItem](subscriptionmigrateitem.md): The SKU, description, and display name to use for a migrated subscription item.
- [SubscriptionMigrateRenewalItem](subscriptionmigraterenewalitem.md): The item information that replaces a migrated subscription item when the subscription renews.
- [SubscriptionMigrateDescriptors](subscriptionmigratedescriptors.md): The description and display name of the subscription to migrate to that you manage.
