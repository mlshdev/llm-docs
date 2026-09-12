> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenteractivitylocalization](https://developer.apple.com/documentation/appstoreconnectapi/gamecenteractivitylocalization)

# GameCenterActivityLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

The localized name, description, and image for a Game Center activity in a specific language.

## Declaration

```
object GameCenterActivityLocalization
```

## Properties

- `attributes` — `GameCenterActivityLocalization.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `GameCenterActivityLocalization.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterActivityLocalizations`

## Topics

### Dictionaries

- [GameCenterActivityLocalization.Attributes](gamecenteractivitylocalization/attributes-data.dictionary.md): Attributes that describe an activity resource.
- [GameCenterActivityLocalization.Relationships](gamecenteractivitylocalization/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [GameCenterActivityLocalizationCreateRequest](gamecenteractivitylocalizationcreaterequest.md): The request body for creating a localization for a Game Center activity.
- [GameCenterActivityLocalizationResponse](gamecenteractivitylocalizationresponse.md): A response containing a single localization for a Game Center activity.
- [GameCenterActivityLocalizationUpdateRequest](gamecenteractivitylocalizationupdaterequest.md): The request body you use to update an activity localization.
- [GameCenterActivityLocalizationsResponse](gamecenteractivitylocalizationsresponse.md): A response containing a list of localizations for a Game Center activity.
- [GameCenterActivityLocalizationImageLinkageResponse](gamecenteractivitylocalizationimagelinkageresponse.md)
