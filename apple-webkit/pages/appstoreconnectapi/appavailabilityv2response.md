> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appavailabilityv2response](https://developer.apple.com/documentation/appstoreconnectapi/appavailabilityv2response)

# AppAvailabilityV2Response

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The response body for endpoints that read or modify the availability settings for an app.

## Declaration

```
object AppAvailabilityV2Response
```

## Properties

- `data` — `AppAvailabilityV2` (required):
- `included` — `[TerritoryAvailability]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [AppAvailabilityV2](appavailabilityv2.md): The territory availability configuration for an app, specifying which App Store territories it’s available in and the release date settings.
- [AppAvailabilityV2CreateRequest](appavailabilityv2createrequest.md): The request body you use to create an app availability.
- [AppAppAvailabilityV2LinkageResponse](appappavailabilityv2linkageresponse.md)
- [TerritoryAvailability](territoryavailability.md): The availability setting for an app or content in a specific App Store territory, including release date configuration.
- [TerritoryAvailabilitiesResponse](territoryavailabilitiesresponse.md): The response body for endpoints that list an app’s availability across territories.
- [TerritoryAvailabilityInlineCreate](territoryavailabilityinlinecreate.md): The request body you use to create a territory availability.
- [TerritoryAvailabilityResponse](territoryavailabilityresponse.md): The response body for endpoints that read or modify an app’s availability in a single territory.
- [TerritoryAvailabilityUpdateRequest](territoryavailabilityupdaterequest.md): The request body for updating the availability settings for an app or content in a specific territory.
- [EndAppAvailabilityPreOrder](endappavailabilitypreorder.md): A request action to end an active pre-order and immediately make an app available for download.
- [EndAppAvailabilityPreOrderCreateRequest](endappavailabilitypreordercreaterequest.md): The request body you use to end an app’s preorder availability.
- [EndAppAvailabilityPreOrderResponse](endappavailabilitypreorderresponse.md): A response confirming that an app’s pre-order period has ended and the app is now available.
