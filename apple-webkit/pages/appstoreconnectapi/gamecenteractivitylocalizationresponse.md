> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenteractivitylocalizationresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenteractivitylocalizationresponse)

# GameCenterActivityLocalizationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response containing a single localization for a Game Center activity.

## Declaration

```
object GameCenterActivityLocalizationResponse
```

## Properties

- `data` — `GameCenterActivityLocalization` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterActivityImage`, `GameCenterActivityVersion`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [GameCenterActivityLocalization](gamecenteractivitylocalization.md): The localized name, description, and image for a Game Center activity in a specific language.
- [GameCenterActivityLocalizationCreateRequest](gamecenteractivitylocalizationcreaterequest.md): The request body for creating a localization for a Game Center activity.
- [GameCenterActivityLocalizationUpdateRequest](gamecenteractivitylocalizationupdaterequest.md): The request body you use to update an activity localization.
- [GameCenterActivityLocalizationsResponse](gamecenteractivitylocalizationsresponse.md): A response containing a list of localizations for a Game Center activity.
- [GameCenterActivityLocalizationImageLinkageResponse](gamecenteractivitylocalizationimagelinkageresponse.md)
