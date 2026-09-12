> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterappversions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterappversions-_id_)

# Read app version information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Read the Game Center enablement state and related app version information.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterAppVersions/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[appStoreVersions]` — `[string]`: **Allowed values:** `platform`, `versionString`, `appStoreState`, `appVersionState`, `copyright`, `reviewType`, `releaseType`, `earliestReleaseDate`, `usesIdfa`, `downloadable`, `createdDate`, `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `customerReviews`, `alternativeDistributionPackage`
- `fields[gameCenterAppVersions]` — `[string]`: **Allowed values:** `enabled`, `compatibilityVersions`, `appStoreVersion`
- `include` — `[string]`: **Allowed values:** `compatibilityVersions`, `appStoreVersion`
- `limit[compatibilityVersions]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `GameCenterAppVersionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Other**

```not specified
https://api.appstoreconnect.apple.com/v1/gameCenterAppVersions/1d9b87fb-80c4-44eb-a114-a51aeebd82fc
```

**Other**

```json
{
  “data” : {
    “type” : “gameCenterAppVersions”,
    “id” : “1d9b87fb-80c4-44eb-a114-a51aeebd82fc”,
    “attributes” : {
      “enabled” : false
    },
    “relationships” : {
      “compatibilityVersions” : {
        “links” : {
          “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterAppVersions/1d9b87fb-80c4-44eb-a114-a51aeebd82fc/relationships/compatibilityVersions”,
          “related” : “https://api.appstoreconnect.apple.com/v1/gameCenterAppVersions/1d9b87fb-80c4-44eb-a114-a51aeebd82fc/compatibilityVersions”
        }
      },
      “appStoreVersion” : {
        “links” : {
          “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterAppVersions/1d9b87fb-80c4-44eb-a114-a51aeebd82fc/relationships/appStoreVersion”,
          “related” : “https://api.appstoreconnect.apple.com/v1/gameCenterAppVersions/1d9b87fb-80c4-44eb-a114-a51aeebd82fc/appStoreVersion”
        }
      }
    },
    “links” : {
      “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterAppVersions/1d9b87fb-80c4-44eb-a114-a51aeebd82fc”
    }
  },
  “links” : {
    “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterAppVersions/1d9b87fb-80c4-44eb-a114-a51aeebd82fc”
  }
}
```

## See Also

### Reading Game Center app versions

- [Read app versions for a game center detail](get-v1-gamecenterdetails-_id_-gamecenterappversions.md): Get a list of app versions for a Game Center detail.
- [List Game Center app version IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-gamecenterappversions.md)
- [Read the App Store version for an app version](get-v1-gamecenterappversions-_id_-appstoreversion.md): Read the App Store version and related information for an app version.
- [Get the App Store version ID for a Game Center app version](get-v1-gamecenterappversions-_id_-relationships-appstoreversion.md)
- [Read compatibility version information](get-v1-gamecenterappversions-_id_-compatibilityversions.md): Get compatibility version information for a specific app version.
- [List all compatible app version IDs](get-v1-gamecenterappversions-_id_-relationships-compatibilityversions.md): List all compatible verisons for an app version.
