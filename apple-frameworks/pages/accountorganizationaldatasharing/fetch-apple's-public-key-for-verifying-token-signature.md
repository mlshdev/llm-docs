> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accountorganizationaldatasharing/fetch-apple's-public-key-for-verifying-token-signature](https://developer.apple.com/documentation/accountorganizationaldatasharing/fetch-apple's-public-key-for-verifying-token-signature)

# Fetch Apple's public key for verifying token signature

**Interface language:** Data

**Framework:** Account & Organizational Data Sharing  
**Kind:** Web Endpoint  
**Availability:** AccountOrganizationalDataSharing 1.0+

Retrieve the public key associated with the cryptographic identity Apple uses to sign the token.

## URL

```http
GET https://appleid.apple.com/auth/oauth2/v2/keys
```

## Response Codes

- `200` OK — `JWKSet`: The request was successful.

<a id="overview"></a>

## Overview

If successful, the HTTP status code is 200 (OK), and the [JWKSet.Keys](jwkset/jwkset.keys.md) object contains Apple’s public key.

## See Also

### Generating tokens

- [Creating a client secret](creating-a-client-secret.md): Generate a signed token to identify your client application.
- [Generate and validate tokens](generate-and-validate-tokens.md): Validate an authorization grant code delivered to your app to obtain tokens, or validate an existing refresh token.
