> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterchallengeupdaterequest/data-data.dictionary

# GameCenterChallengeUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

The request body you use to update a challenge.

## Declaration

```
object GameCenterChallengeUpdateRequest.Data
```

## Properties

- `attributes` — `GameCenterChallengeUpdateRequest.Data.Attributes`:
- `id` — `string` (required):
- `relationships` — `GameCenterChallengeUpdateRequest.Data.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterChallenges`

## Topics

### Dictionaries

- [GameCenterChallengeUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that describe a challenge resource.
- [GameCenterChallengeUpdateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
