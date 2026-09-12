> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingteamresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingteamresponse)

# GameCenterMatchmakingTeamResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The response body for endpoints that create or modify a team.

## Declaration

```
object GameCenterMatchmakingTeamResponse
```

## Properties

- `data` — `GameCenterMatchmakingTeam` (required): The team that you create or modify.
- `links` — `DocumentLinks` (required): The link representations of the object.

## See Also

### Objects

- [GameCenterMatchmakingTeamCreateRequest](gamecentermatchmakingteamcreaterequest.md): The request body you use to create a team.
- [GameCenterMatchmakingTeamUpdateRequest](gamecentermatchmakingteamupdaterequest.md): The request body you use to modify a team.
- [GameCenterMatchmakingTeamsResponse](gamecentermatchmakingteamsresponse.md): The response body for endpoints that get multiple teams.
- [GameCenterMatchmakingTeam](gamecentermatchmakingteam.md): A team configuration within a Game Center matchmaking rule set, defining team size and composition rules.
