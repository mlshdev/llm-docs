> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/revokeassetsrequest](https://developer.apple.com/documentation/devicemanagement/revokeassetsrequest)

# RevokeAssetsRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.0+

The request for asset revocation.

## Declaration

```
object RevokeAssetsRequest
```

## Properties

- `clientUserIds` — `[string]`: The set of identifiers for users in your organization.
- `serialNumbers` — `[string]`: The set of identifiers for devices in your organization.

## Mentioned In

- [Managing assets](managing-assets.md)

## See Also

### Request and Response

- [EventResponse](eventresponse.md): The response that contains the event identifier.
- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.
