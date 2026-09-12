> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appstoreversions](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appstoreversions)

# Create an app store version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Add a new App Store version or platform to an app.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appStoreVersions
```

## HTTP Body

Content type: `application/json`

Type: `AppStoreVersionCreateRequest`

## Response Codes

- `201` Created — `AppStoreVersionResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

Use this endpoint to add a new version of an app. The new version can be an incremental update of an existing app for a particular platform, or it can be the first version on a new platform for the app.

<a id="Add-a-New-Version-of-an-iOS-App"></a>

### Add a New Version of an iOS App

**Request**

```
POST https://api.appstoreconnect.apple.com/v1/appStoreVersions

{
  "data": {
    "type": "appStoreVersions",
    "attributes": {
      "platform": "IOS",
      "versionString": "1.1",
      "copyright": "© 2020 Apple, Inc.",
      "releaseType": "MANUAL"
      "usesIdfa": false
    },
    "relationships": {
      "app": {
        "data": {
          "type": "apps",
          "id": "284993459"
        }
      }
    }
  }
}

```

**Response**

```json
{
  "data": {
    "type": "appStoreVersions",
    "id": "f5b10fc0-afda-4b31-b3e8-cdbcbe945622",
    "attributes": {
      "platform": "IOS",
      "versionString": "1.1",
      "appStoreState": "PREPARE_FOR_SUBMISSION",
      "copyright": "© 2020 Apple, Inc.",
      "releaseType": "MANUAL",
      "earliestReleaseDate": null,
      "usesIdfa": false,
      "downloadable": true
    },
    "relationships": {
      "app": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/relationships/app",
          "related": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/app"
        }
      },
      "ageRatingDeclaration": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/relationships/ageRatingDeclaration",
          "related": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/ageRatingDeclaration"
        }
      },
      "appStoreVersionLocalizations": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/relationships/appStoreVersionLocalizations",
          "related": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/appStoreVersionLocalizations"
        }
      },
      "build": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/relationships/build",
          "related": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/build"
        }
      },
      "appStoreVersionPhasedRelease": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/relationships/appStoreVersionPhasedRelease",
          "related": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/appStoreVersionPhasedRelease"
        }
      },
      "routingAppCoverage": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/relationships/routingAppCoverage",
          "related": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/routingAppCoverage"
        }
      },
      "appStoreReviewDetail": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/relationships/appStoreReviewDetail",
          "related": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/appStoreReviewDetail"
        }
      },
      "appStoreVersionSubmission": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/relationships/appStoreVersionSubmission",
          "related": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/appStoreVersionSubmission"
        }
      },
      "idfaDeclaration": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/relationships/idfaDeclaration",
          "related": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622/idfaDeclaration"
        }
      }
    },
    "links": {
      "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622"
    }
  },
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersions/f5b10fc0-afda-4b31-b3e8-cdbcbe945622"
  }
}

```

## See Also

### Creating and Modifying App Store Versions

- [Modify an app store version](patch-v1-appstoreversions-_id_.md): Update the App Store version for a specific app.
- [Delete an app store version](delete-v1-appstoreversions-_id_.md): Delete an app store version that is associated with an app.
