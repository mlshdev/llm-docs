> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accountorganizationaldatasharing/tokenresponse](https://developer.apple.com/documentation/accountorganizationaldatasharing/tokenresponse)

# TokenResponse

**Interface language:** Data

**Framework:** Account & Organizational Data Sharing  
**Kind:** Dictionary  
**Availability:** AccountOrganizationalDataSharing 1.0+

The response token object returned on a successful request.

## Declaration

```
object TokenResponse
```

## Properties

- `access_token` — `string`: A token used to access allowed data.
- `expires_in` — `number`: The amount of time, in seconds, before the access token expires.
- `id_token` — `string`: A JWT that contains the user’s identity information.
- `refresh_token` — `string`: The refresh token used to regenerate new access tokens when validating an authorization code. Store this token securely on your server. The refresh token isn’t returned when validating an existing refresh token.
- `token_type` — `string`: The type of access token, which is always `bearer`.

## See Also

### Common objects

- [JWKSet](jwkset.md): A set of JSON web keys.
- [ErrorResponse](errorresponse.md): The error object returned after an unsuccessful request.
