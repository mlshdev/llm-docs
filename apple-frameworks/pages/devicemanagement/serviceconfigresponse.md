> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/serviceconfigresponse](https://developer.apple.com/documentation/devicemanagement/serviceconfigresponse)

# ServiceConfigResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

The service configuration for the Asset Management API.

## Declaration

```
object ServiceConfigResponse
```

## Properties

- `errorCodes` — `[ResponseErrorCode]`: The set of possible error numbers and their human-readable explanations.
- `limits` — `ServiceConfigResponse.Limits`: The set of current request limits.
- `notificationTypes` — `[string]`: The set of supported notification types.
  **Allowed values:** `ASSET_COUNT`, `ASSET_MANAGEMENT`, `USER_MANAGEMENT`, `USER_ASSOCIATED`, `SUBSCRIPTION_MANAGEMENT`, `SUBSCRIPTION_COUNT`, `UNLIMITED_ASSET`
- `urls` — `ServiceConfigResponse.Urls`: The set of current service URLs.

<a id="Discussion"></a>

## Discussion

The values in `limits` and `urls` are dynamic and can change without notice. Sync them every 5 minutes rather than hard-coding them into your device management service.

## Topics

### Objects and Data Types

- [ServiceConfigResponse.Limits](serviceconfigresponse/limits-data.dictionary.md): The set of current request limits.
- [ServiceConfigResponse.Urls](serviceconfigresponse/urls-data.dictionary.md): The set of current service URLs.
- [ResponseErrorCode](responseerrorcode.md): An error code.

## See Also

### Response

- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.
