> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/updateappaccounttokenrequest](https://developer.apple.com/documentation/appstoreserverapi/updateappaccounttokenrequest)

# UpdateAppAccountTokenRequest

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.16+

The request body that contains an app account token value.

## Declaration

```
object UpdateAppAccountTokenRequest
```

## Properties

- `appAccountToken` — `appAccountToken`: **Required**. A UUID value to associate with the transaction you indicate in the endpoint parameter.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

This is the request body for the [Set App Account Token](set-app-account-token.md) endpoint.

## See Also

### App Account Token

- [Set App Account Token](set-app-account-token.md): Sets the app account token value for a purchase the customer makes outside of your app, or updates its value in an existing transaction.
