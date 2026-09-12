> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecenterleaderboardentrysubmissions](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecenterleaderboardentrysubmissions)

# Add a Score to a Leaderbaord

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.2+

Add a new score for a player to a leaderboard.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardEntrySubmissions
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterLeaderboardEntrySubmissionCreateRequest`

## Response Codes

- `201` Created — `GameCenterLeaderboardEntrySubmissionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 3.2 release notes](app-store-connect-api-3-2-release-notes.md)
- [App Store Connect API 4.3 release notes](app-store-connect-api-4-3-release-notes.md)

<a id="Discussion"></a>

## Discussion

Use the `preReleased` attribute to indicate whether the requested change applies to the game’s release version or its prerelease version. Set `preReleased` to `true` to indicate that the change applies to the game’s prerelease version.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
POST https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardEntrySubmissions

{
  “data”: {
    “type”: “gameCenterLeaderboardEntrySubmissions”,
    “attributes”: {
      “score”: “123”,
      “scopedPlayerId”: “A:_5f21e308073d18f9b3afdc37f646e851”,
      “bundleId”: “com.apple.sample.actionship”,
      “vendorIdentifier”: “com.apple.sample.actionship.shipssank”,
      "preReleased": false
    }
  }
}
```

**Response**

```json
{
  “data”: {
    “type”: “gameCenterLeaderboardEntrySubmissions”,
    “id”: “3ef21559-006c-4308-831f-cd6cdd714863”,
    “attributes”: {
      “bundleId”: “com.apple.sample.actionship”,
      “challengeIds”: null,
      “context”: null,
      “scopedPlayerId”: “A:_5f21e308073d18f9b3afdc37f646e851”,
      “score”: “123”,
      “submittedDate”: null,
      “vendorIdentifier”: “com.apple.sample.actionship.shipssank”,
      "preReleased": false
    },
    “links”: {
      “self”: “https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardEntrySubmissions/3ef21559-006c-4308-831f-cd6cdd714863”
    }
  },
  “links”: {
    “self”: “https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardEntrySubmissions”
  }
}
```
