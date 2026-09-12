> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenteractivityversionsresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenteractivityversionsresponse)

# GameCenterActivityVersionsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response containing a list of versions for a Game Center activity.

## Declaration

```
object GameCenterActivityVersionsResponse
```

## Properties

- `data` — `[GameCenterActivityVersion]` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterActivity`, `GameCenterActivityImage`, `GameCenterActivityLocalization`, `GameCenterActivityVersionRelease`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterActivityVersion](gamecenteractivityversion.md): A versioned configuration of a Game Center activity, containing its localizations and release status.
- [GameCenterActivityVersionCreateRequest](gamecenteractivityversioncreaterequest.md): The request body for creating a version of a Game Center activity.
- [GameCenterActivityVersionResponse](gamecenteractivityversionresponse.md): A response containing a single version of a Game Center activity.
- [GameCenterActivityVersionUpdateRequest](gamecenteractivityversionupdaterequest.md): The request body you use to update an activity version version.
- [GameCenterActivityVersionDefaultImageLinkageResponse](gamecenteractivityversiondefaultimagelinkageresponse.md)
- [GameCenterActivityVersionLocalizationsLinkagesResponse](gamecenteractivityversionlocalizationslinkagesresponse.md)
- [GameCenterActivityVersionUpdateRequest](gamecenteractivityversionupdaterequest.md): The request body you use to update an activity version version.
- [GameCenterActivityVersionsLinkagesResponse](gamecenteractivityversionslinkagesresponse.md): A response containing the resource identifiers of versions for a Game Center activity.
