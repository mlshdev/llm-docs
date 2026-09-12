> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/interpreting-automated-device-enrollment-error-codes](https://developer.apple.com/documentation/devicemanagement/interpreting-automated-device-enrollment-error-codes)

# Interpreting Automated Device Enrollment error codes

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Article

Interpret the error codes you might encounter or that can happen during authentication.

<a id="overview"></a>

## Overview

Authentication errors are either a `400`, `401`, or `403` error code.

An `HTTP 400 Bad Request` error indicates one of the following:

- Unsupported OAuth parameters
- Unsupported signature method
- Missing required authorization parameter
- Duplicated OAuth protocol parameter

An `HTTP 401 Unauthorized` error indicates one of the following:

- Invalid consumer key
- Invalid or expired token
- Invalid signature
- Invalid or already-used anti-replay value

An `HTTP 403 Forbidden` error indicates one of the following:

- Your device management service, or your customer’s key-token doesn’t have access to perform the specific request. In this case, the request body contains `ACCESS_DENIED`.
- The organization hasn’t accepted the latest terms and conditions of the program. In this case, the request body contains `T_C_NOT_SIGNED`.

## See Also

### Examples and error codes

- [Examining server tokens](examining-server-tokens.md): View sample encrypted and unencrypted tokens to verify your server tokens are in the right format.
