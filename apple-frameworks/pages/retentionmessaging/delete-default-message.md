> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/delete-default-message](https://developer.apple.com/documentation/retentionmessaging/delete-default-message)

# Delete Default Message

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Web Service Endpoint  
**Availability:** Retention Messaging API 1.0+

Deletes a default message for a product in a locale.

## URL

```http
DELETE https://api.storekit.apple.com/inApps/v1/messaging/default/{productId}/{locale}
```

## Sandbox URL

```http
DELETE https://api.storekit-sandbox.apple.com/inApps/v1/messaging/default/{productId}/{locale}
```

## Path Parameters

- `locale` — `locale` (required): The locale of the default message configuration.
- `productId` — `productId` (required): The product ID of the default message configuration.

## Response Codes

- `200` OK: Request succeeded.
- `400` Bad Request — `(InvalidProductIdError | InvalidLocaleError)`: The request is invalid and unacceptable.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](../appstoreserverapi/generating-json-web-tokens-for-api-requests.md).
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits](identifying-rate-limits.md).
- `500` Internal Server Error — `GeneralInternalError`: Server error. Try again later.

## Mentioned In

- [Identifying rate limits](identifying-rate-limits.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint to delete a default message configuration. After a successful deletion, `productId` in `locale` has no default message.

This endpoint is idempotent. If the product has no configured default message for the locale, the endpoint still responds with a `200` status code.

## See Also

### Default message configuration

- [Configure Default Message](configure-default-message.md): Configures a default message for a specific product in a specific locale.
- [Get Default Message](get-default-message.md): Gets the default message for a specific product in a specific locale, if it’s configured.
- [DefaultConfigurationRequest](defaultconfigurationrequest.md): The request body that contains the default configuration information.
- [DefaultConfigurationResponse](defaultconfigurationresponse.md): The response body that contains the default configuration information.
