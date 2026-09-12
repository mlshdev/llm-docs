> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardcreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardcreaterequest/data-data.dictionary)

# GameCenterLeaderboardCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The request body you use to create a Game Center leaderboard.

## Declaration

```
object GameCenterLeaderboardCreateRequest.Data
```

## Properties

- `attributes` — `GameCenterLeaderboardCreateRequest.Data.Attributes` (required):
- `relationships` — `GameCenterLeaderboardCreateRequest.Data.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterLeaderboards`

## Topics

### Objects

- [GameCenterLeaderboardCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Deprecated. Attributes that describe a leaderboard resource.
- [GameCenterLeaderboardCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): Deprecated. The relationships you include in the request and those on which you can operate.

### Data Types

- [GameCenterLeaderboardFormatter](../gamecenterleaderboardformatter.md): The values you can select to describe the format of a leaderboard.
