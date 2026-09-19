> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/get-.well-known-com.apple.remotemanagement

# Discover Authentication Servers

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint

Get a list of available authentication servers.

## URL

```http
GET https://yourmdmhost.example.com/.well-known/com.apple.remotemanagement
```

## Query Parameters

- `model-family` — `string`: **Allowed values:** `Mac`, `iPhone`, `iPad`, `AppleTV`, `Watch`, `RealityDevice`
- `user-identifier` — `string`:

## Response Codes

- `200` OK — `WellKnown`: A list of servers the client device can use for authentication.

<a id="Discussion"></a>

## Discussion

Each server entry corresponds to a server that supports a different version of the protocol. The client selects the server with the most recent version that matches its own most recent supported version.

## Topics

### Supporting Objects

- [WellKnown](wellknown.md): A list of available servers used for authentication.

## See Also

### Objects

- [EnrollmentSSODocument](enrollmentssodocument.md): Enrollment SSO streamlines the MDM enrollment process, reduces sign-ins, and improves security.
