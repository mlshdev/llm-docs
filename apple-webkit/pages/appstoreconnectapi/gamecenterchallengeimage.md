> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterchallengeimage](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterchallengeimage)

# GameCenterChallengeImage

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

An image asset used to represent a Game Center challenge in the player interface.

## Declaration

```
object GameCenterChallengeImage
```

## Properties

- `attributes` — `GameCenterChallengeImage.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `gameCenterChallengeImages`

## Topics

### Dictionaries

- [GameCenterChallengeImage.Attributes](gamecenterchallengeimage/attributes-data.dictionary.md): Attributes that describe a challenge resource.

## See Also

### Objects

- [GameCenterChallengeImageCreateRequest](gamecenterchallengeimagecreaterequest.md): The request body for uploading an image asset for a Game Center challenge.
- [GameCenterChallengeImageResponse](gamecenterchallengeimageresponse.md): A response containing a single image asset for a Game Center challenge.
- [GameCenterChallengeImageUpdateRequest](gamecenterchallengeimageupdaterequest.md): The request body you use to update a challenge.
- [GameCenterChallengeLocalizationImageLinkageResponse](gamecenterchallengelocalizationimagelinkageresponse.md)
- [GameCenterChallengeVersionDefaultImageLinkageResponse](gamecenterchallengeversiondefaultimagelinkageresponse.md)
