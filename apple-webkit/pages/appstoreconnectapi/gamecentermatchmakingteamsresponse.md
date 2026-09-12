> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingteamsresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingteamsresponse)

# GameCenterMatchmakingTeamsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The response body for endpoints that get multiple teams.

## Declaration

```
object GameCenterMatchmakingTeamsResponse
```

## Properties

- `data` — `[GameCenterMatchmakingTeam]` (required): The teams that the endpoint fetches.
- `links` — `PagedDocumentLinks` (required): The link representations of the object.
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterMatchmakingTeamCreateRequest](gamecentermatchmakingteamcreaterequest.md): The request body you use to create a team.
- [GameCenterMatchmakingTeamUpdateRequest](gamecentermatchmakingteamupdaterequest.md): The request body you use to modify a team.
- [GameCenterMatchmakingTeamResponse](gamecentermatchmakingteamresponse.md): The response body for endpoints that create or modify a team.
- [GameCenterMatchmakingTeam](gamecentermatchmakingteam.md): A team configuration within a Game Center matchmaking rule set, defining team size and composition rules.
