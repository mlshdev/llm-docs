> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accountorganizationaldatasharing](https://developer.apple.com/documentation/accountorganizationaldatasharing)

# Account & Organizational Data Sharing

**Interface language:** Data

**Framework:** Account & Organizational Data Sharing  
**Kind:** Framework  
**Availability:** AccountOrganizationalDataSharing 1.0+

Provide people with the ability to authorize your apps and websites that access information about them on Apple REST services, like Roster API.

<a id="Overview"></a>

## Overview

With [OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749), Account & Organizational Data Sharing gives your users a safe way to authorize your apps and websites to access information about them on Apple services, for example [Roster API](rosterapi.md).

## Topics

### Generating tokens

- [Creating a client secret](accountorganizationaldatasharing/creating-a-client-secret.md): Generate a signed token to identify your client application.
- [Fetch Apple's public key for verifying token signature](accountorganizationaldatasharing/fetch-apple's-public-key-for-verifying-token-signature.md): Retrieve the public key associated with the cryptographic identity Apple uses to sign the token.
- [Generate and validate tokens](accountorganizationaldatasharing/generate-and-validate-tokens.md): Validate an authorization grant code delivered to your app to obtain tokens, or validate an existing refresh token.

### Using and revoking tokens

- [Request an authorization](accountorganizationaldatasharing/request-an-authorization.md): Request a user authorization to Account & Organizational Data Sharing apps and web services.
- [Token revocation](accountorganizationaldatasharing/revoke-tokens.md): Invalidate the tokens and associated user authorizations for someone when they are no longer associated with your app.

### Common objects

- [JWKSet](accountorganizationaldatasharing/jwkset.md): A set of JSON web keys.
- [TokenResponse](accountorganizationaldatasharing/tokenresponse.md): The response token object returned on a successful request.
- [ErrorResponse](accountorganizationaldatasharing/errorresponse.md): The error object returned after an unsuccessful request.
