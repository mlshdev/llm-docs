> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecentermatchmakingrulesettestcreaterequest/data-data.dictionary/relationships-data.dictionary/matchmakingrequests-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/gamecentermatchmakingrulesettestcreaterequest/data-data.dictionary/relationships-data.dictionary/matchmakingrequests-data.dictionary/data-data.dictionary)

# GameCenterMatchmakingRuleSetTestCreateRequest.Data.Relationships.MatchmakingRequests.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.1+

The resource object for a match request.

## Declaration

```
object GameCenterMatchmakingRuleSetTestCreateRequest.Data.Relationships.MatchmakingRequests.Data
```

## Properties

- `id` — `string` (required): The identifier for a [GameCenterMatchmakingTestRequestInlineCreate](../../../../gamecentermatchmakingtestrequestinlinecreate.md) resource object that you add to the `included` field of the request body.
- `type` — `string` (required): The type of resource object.
  **Allowed values:** `gameCenterMatchmakingTestRequests`
