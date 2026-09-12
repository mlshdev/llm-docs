> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemapsserverapi/-v1-token](https://developer.apple.com/documentation/applemapsserverapi/-v1-token)

# Generate a Maps token

**Interface language:** Data

**Framework:** Apple Maps Server API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Maps Server API 1.2+

Returns a JWT maps access token that you use to call the service API.

## URL

```http
GET https://maps-api.apple.com/v1/token
```

## Response Codes

- `200` OK — `TokenResponse`: A response that indicates the authorization request is successful. The dictionary that accompanies the response contains a maps access token and an integer that indicates the time in seconds until the token expires.
- `401` Unauthorized — `ErrorResponse`: An error response that indicates the maps token is missing or invalid. The dictionary that accompanies the error may contain additional details about the error.
- `429` — `ErrorResponse`: An [ErrorResponse](errorresponse.md) object that indicates the call exceeds the daily service call quota for the authorization token presented. The app should try again later. If your app requires a larger daily quota, submit a [quota increase request form](https://developer.apple.com/contact/request/mapkitjs/).
- `500` Internal Server Error — `ErrorResponse`: An error that indicates the server can’t complete the request. The dictionary that accompanies the error may contain additional details about the error.

## Mentioned In

- [Creating and using tokens with Maps Server API](creating-and-using-tokens-with-maps-server-api.md)

<a id="Discussion"></a>

## Discussion

<a id="Example"></a>

### Example

**Request**

```
curl -si -H "Authorization: Bearer <maps_auth_token>" "https://maps-api.apple.com/v1/token"
```

**Response**

```json
{
  "accessToken": "<maps_access_token>",
  "expiresInSeconds": 1800
}
```

## See Also

### Essentials

- [Creating and using tokens with Maps Server API](creating-and-using-tokens-with-maps-server-api.md): Sign JSON Web Tokens to use Maps Server API and debug common signing errors.
- [Creating a Maps identifier and a private key](creating-a-maps-identifier-and-a-private-key.md): Create a Maps identifier and a private key before generating tokens for MapKit JS.
- [Debugging an Invalid token](debugging-an-invalid-token.md): Inspect the JavaScript console logs, the token, and events to determine why a token is invalid.
- [Common objects](common-objects.md): Understand the common JSON objects that API responses contain.
- [Integrating the Apple Maps Server API into Java server applications](integrating-the-apple-maps-server-api-into-java-server-applications.md): Streamline your app’s API by moving georelated searches from inside your app to your server.
