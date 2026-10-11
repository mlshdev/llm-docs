> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appassetlibraryplacements

# Create an app asset library placement

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

Create an app asset library placement.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appAssetLibraryPlacements
```

## HTTP Body

Content type: `application/json`

Type: `AppAssetLibraryPlacementCreateRequest`

The request body you use to create an app asset library placement.

## Response Codes

- `201` Created — `AppAssetLibraryPlacementResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.5.1 release notes](app-store-connect-api-4-5-1-release-notes.md)
- [Migrating to the App Asset Library](migrating-to-the-app-asset-library.md)
- [Placing assets on your App Store surfaces](placing-assets-on-your-app-store-surfaces.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
POST https://api.appstoreconnect.apple.com/v1/appAssetLibraryPlacements

{
  "data": {
    "type": "appAssetLibraryPlacements",
    "attributes": {
      "placementType": "APP_SCREENSHOT",
      "placementGroup": "IPHONE_DYNAMIC_ISLAND_LARGE_PROFILE"
    },
    "relationships": {
      "image": {
        "data": {
          "type": "appAssetLibraryImages",
          "id": "f4000005-e036-8f0b-8018-d259974bee61"
        }
      },
      "appStoreVersionLocalization": {
        "data": {
          "type": "appStoreVersionLocalizations",
          "id": "b3a9b4c2-d2de-43f4-ad8c-71c5ebe301d1"
        }
      }
    }
  }
}
```

**Response**

```json
{
  "data" : {
    "type" : "appAssetLibraryPlacements",
    "id" : "2e000005-e036-8f0b-8f25-6dbc2baa784a",
    "attributes" : {
      "mediaType" : "IMAGE",
      "placementType" : "APP_SCREENSHOT",
      "placementGroup" : "IPHONE_DYNAMIC_ISLAND_LARGE_PROFILE",
      "createdDate" : "2026-08-11T22:45:27Z",
      "lastModifiedDate" : "2026-08-11T22:45:27Z",
      "state" : "PARENT_PREPARE_FOR_SUBMISSION",
      "stateDetails" : null
    },
    "relationships" : {
      "image" : {
        "data" : {
          "type" : "appAssetLibraryImages",
          "id" : "f4000005-e036-8f0b-8018-d259974bee61"
        }
      }
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraryPlacements/2e000005-e036-8f0b-8f25-6dbc2baa784a"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraryPlacements"
  }
}
```

## See Also

### Managing placements

- [Delete an app asset library placement](delete-v1-appassetlibraryplacements-_id_.md): Delete an app asset library placement.
