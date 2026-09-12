> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/get-default-message](https://developer.apple.com/documentation/retentionmessaging/get-default-message)

# Get Default Message

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Web Service Endpoint  
**Availability:** Retention Messaging API 1.4+

Gets the default message for a specific product in a specific locale, if it’s configured.

## URL

```http
GET https://api.storekit.apple.com/inApps/v1/messaging/default/{productId}/{locale}
```

## Sandbox URL

```http
GET https://api.storekit-sandbox.apple.com/inApps/v1/messaging/default/{productId}/{locale}
```

## Path Parameters

- `locale` — `locale` (required): The locale of the message.
- `productId` — `productId` (required): The product identifier of the message.

## Response Codes

- `200` OK — `DefaultConfigurationResponse`: Request succeeded.
- `400` Bad Request — `(InvalidProductIdError | InvalidLocaleError)`: The request is invalid and unacceptable.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](../appstoreserverapi/generating-json-web-tokens-for-api-requests.md).
- `404` Not Found — `DefaultMessageNotFoundError`: The default message for the specified product ID and locale wasn’t found.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits](identifying-rate-limits.md).
- `500` Internal Server Error — `GeneralInternalError`: Server error. Try again later.

## Mentioned In

- [Identifying rate limits](identifying-rate-limits.md)
- [Retention Messaging API changelog](retention-messaging-changelog.md)
- [Setting up retention messages](setting-up-retention-messages.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint to retrieve the default message you previously configured for a specific product in a specific locale. If a default message isn’t configured, the endpoint returns an `HTTP 404` error with [DefaultMessageNotFoundError](defaultmessagenotfounderror.md).

For information about setting up default messages, see [Setting up retention messages](setting-up-retention-messages.md).

## See Also

### Default message configuration

- [Configure Default Message](configure-default-message.md): Configures a default message for a specific product in a specific locale.
- [Delete Default Message](delete-default-message.md): Deletes a default message for a product in a locale.
- [DefaultConfigurationRequest](defaultconfigurationrequest.md): The request body that contains the default configuration information.
- [DefaultConfigurationResponse](defaultconfigurationresponse.md): The response body that contains the default configuration information.
