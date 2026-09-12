> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-relationships-gamecentergroup](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-relationships-gamecentergroup)

# Get the Game Center group ID for a Game Center detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterDetails/{id}/relationships/gameCenterGroup
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `GameCenterDetailGameCenterGroupLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading Game Center details

- [Read the state of game center for an app](get-v1-apps-_id_-gamecenterdetail.md): Get Game Center detail information for an app.
- [Read game center details](get-v1-gamecenterdetails-_id_.md): Read a specific Game Center detail and related information.
- [Read app versions for a game center detail](get-v1-gamecenterdetails-_id_-gamecenterappversions.md): Get a list of app versions for a Game Center detail.
- [List Game Center app version IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterappversions.md)
- [Read the groups in a game center detail](get-v1-gamecenterdetails-_id_-gamecentergroup.md): Get a list of groups in a Game Center detail.
- [Read the challenges for a game center detail](get-v1-gamecenterdetails-_id_-gamecenterchallenges.md): Get challenge information for a specific Game Center detail.
- [Read challenge ids for a game center detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterchallenges.md): List all the challenge IDs for a specific Game Center detail.
