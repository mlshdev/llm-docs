> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/create-a-certificate](https://developer.apple.com/documentation/enterpriseprogramapi/create-a-certificate)

# Create a Certificate

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Create a new certificate using a certificate signing request.

## URL

```http
POST https://api.enterprise.developer.apple.com/v1/certificates
```

## HTTP Body

Content type: `application/json`

Type: `CertificateCreateRequest`

## Response Codes

- `201` Created — `CertificateResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- HTTPBody
