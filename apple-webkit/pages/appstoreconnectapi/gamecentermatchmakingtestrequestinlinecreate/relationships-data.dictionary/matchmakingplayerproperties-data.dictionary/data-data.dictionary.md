> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingtestrequestinlinecreate/relationships-data.dictionary/matchmakingplayerproperties-data.dictionary/data-data.dictionary

# GameCenterMatchmakingTestRequestInlineCreate.Relationships.MatchmakingPlayerProperties.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The resource object for the game-specific properties of a match request.

## Declaration

```
object GameCenterMatchmakingTestRequestInlineCreate.Relationships.MatchmakingPlayerProperties.Data
```

## Properties

- `id` — `string` (required): The identifier for a [GameCenterMatchmakingTestPlayerPropertyInlineCreate](../../../gamecentermatchmakingtestplayerpropertyinlinecreate.md) resource object that you add to the `included` field of the request.
- `type` — `string` (required): The type of resource object.
  **Allowed values:** `gameCenterMatchmakingTestPlayerProperties`
