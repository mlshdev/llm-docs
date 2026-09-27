> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterscoremoderationupdaterequest/data-data.dictionary

# GameCenterScoreModerationUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The resource data for the Game Center score moderation you update.

## Declaration

```
object GameCenterScoreModerationUpdateRequest.Data
```

## Properties

- `attributes` — `GameCenterScoreModerationUpdateRequest.Data.Attributes`: The attributes that describe the Game Center score moderation.
- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.

  - gameCenterScoreModerations:  
  **Allowed values:** `gameCenterScoreModerations`

## Topics

### Objects

- [GameCenterScoreModerationUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes that describe a Game Center score moderation you update.
