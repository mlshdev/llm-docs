> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/routingappcoverage](https://developer.apple.com/documentation/appstoreconnectapi/routingappcoverage)

# RoutingAppCoverage

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

A GeoJSON file defining the geographic coverage area of a turn-by-turn navigation app, required for App Store submission.

## Declaration

```
object RoutingAppCoverage
```

## Properties

- `attributes` — `RoutingAppCoverage.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `RoutingAppCoverage.Relationships`:
- `type` — `string` (required): **Allowed values:** `routingAppCoverages`

## Topics

### Objects

- [RoutingAppCoverage.Attributes](routingappcoverage/attributes-data.dictionary.md): Attributes that describe a Routing App Coverages resource.
- [RoutingAppCoverage.Relationships](routingappcoverage/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [RoutingAppCoverageCreateRequest](routingappcoveragecreaterequest.md): The request body you use to create a Routing App Coverage.
- [RoutingAppCoverageResponse](routingappcoverageresponse.md): The response body for endpoints that read or modify the routing app coverage file for an app version.
- [RoutingAppCoverageUpdateRequest](routingappcoverageupdaterequest.md): The request body you use to update a Routing App Coverage.
- [AppMediaStateError](appmediastateerror.md): An error code and description.
- [AppMediaAssetState](appmediaassetstate.md): The state of an app or media upload, including any errors and warnings.
