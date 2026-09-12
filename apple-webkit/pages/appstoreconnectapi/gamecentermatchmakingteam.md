> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingteam](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingteam)

# GameCenterMatchmakingTeam

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

A team configuration within a Game Center matchmaking rule set, defining team size and composition rules.

## Declaration

```
object GameCenterMatchmakingTeam
```

## Properties

- `attributes` — `GameCenterMatchmakingTeam.Attributes`: The attributes of the team.
- `id` — `string` (required): The unique identifier for the team.
- `links` — `ResourceLinks`: The link representations of the object.
- `type` — `string` (required): The type of resource object.
  **Allowed values:** `gameCenterMatchmakingTeams`

## Topics

### Objects

- [GameCenterMatchmakingTeam.Attributes](gamecentermatchmakingteam/attributes-data.dictionary.md): The attributes of a game-specific team.

## See Also

### Objects

- [GameCenterMatchmakingTeamCreateRequest](gamecentermatchmakingteamcreaterequest.md): The request body you use to create a team.
- [GameCenterMatchmakingTeamUpdateRequest](gamecentermatchmakingteamupdaterequest.md): The request body you use to modify a team.
- [GameCenterMatchmakingTeamResponse](gamecentermatchmakingteamresponse.md): The response body for endpoints that create or modify a team.
- [GameCenterMatchmakingTeamsResponse](gamecentermatchmakingteamsresponse.md): The response body for endpoints that get multiple teams.
