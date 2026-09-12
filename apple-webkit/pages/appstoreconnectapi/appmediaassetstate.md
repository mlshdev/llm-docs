> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appmediaassetstate](https://developer.apple.com/documentation/appstoreconnectapi/appmediaassetstate)

# AppMediaAssetState

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The state of an app or media upload, including any errors and warnings.

## Declaration

```
object AppMediaAssetState
```

## Properties

- `errors` — `[AppMediaStateError]`:
- `state` — `string`: **Allowed values:** `AWAITING_UPLOAD`, `UPLOAD_COMPLETE`, `COMPLETE`, `FAILED`
- `warnings` — `[AppMediaStateError]`:

## See Also

### Objects

- [RoutingAppCoverage](routingappcoverage.md): A GeoJSON file defining the geographic coverage area of a turn-by-turn navigation app, required for App Store submission.
- [RoutingAppCoverageCreateRequest](routingappcoveragecreaterequest.md): The request body you use to create a Routing App Coverage.
- [RoutingAppCoverageResponse](routingappcoverageresponse.md): The response body for endpoints that read or modify the routing app coverage file for an app version.
- [RoutingAppCoverageUpdateRequest](routingappcoverageupdaterequest.md): The request body you use to update a Routing App Coverage.
- [AppMediaStateError](appmediastateerror.md): An error code and description.
