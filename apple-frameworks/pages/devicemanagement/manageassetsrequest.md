> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/manageassetsrequest](https://developer.apple.com/documentation/devicemanagement/manageassetsrequest)

# ManageAssetsRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.0+

The request for asset management.

## Declaration

```
object ManageAssetsRequest
```

## Properties

- `assets` — `[Asset]` (required): The set of `adamId` and `pricingParam values`.
- `clientUserIds` — `[string]`: The set of identifiers for users in your organization.
- `serialNumbers` — `[string]`: The set of identifiers for devices in your organization.

## Mentioned In

- [Managing assets](managing-assets.md)

## Topics

### Objects and Data Types

- [Asset](asset.md): A product in the store.

## See Also

### Request and Response

- [EventResponse](eventresponse.md): The response that contains the event identifier.
- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.
