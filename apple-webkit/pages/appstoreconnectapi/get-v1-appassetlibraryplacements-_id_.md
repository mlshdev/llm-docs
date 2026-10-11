> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appassetlibraryplacements-_id_

# Read an app asset library placement

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

Get information about an app asset library placement.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appAssetLibraryPlacements/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `fields[appAssetLibraryPlacements]` — `[string]`: Additional fields to include for each app asset library placement resource returned by the response.
  **Allowed values:** `mediaType`, `placementType`, `placementGroup`, `createdDate`, `lastModifiedDate`, `state`, `stateDetails`, `image`, `video`, `appEventLocalization`, `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`
- `fields[appAssetLibraryImages]` — `[string]`: Additional fields to include for each app asset library image resource returned by the response.
  **Allowed values:** `category`, `createdDate`, `lastModifiedDate`, `fileName`, `fileSize`, `imageAsset`, `referenceName`, `specId`, `state`, `stateDetails`, `uploadOperations`, `placements`
- `fields[appAssetLibraryVideos]` — `[string]`: Additional fields to include for each app asset library video resource returned by the response.
  **Allowed values:** `category`, `createdDate`, `lastModifiedDate`, `fileName`, `fileSize`, `previewFrameImage`, `previewFrameTimeCode`, `referenceName`, `specId`, `state`, `stateDetails`, `uploadOperations`, `videoAsset`, `placements`
- `fields[appEventLocalizations]` — `[string]`: Additional fields to include for each in-app event localization resource returned by the response.
  **Allowed values:** `locale`, `name`, `shortDescription`, `longDescription`, `appEvent`, `appEventScreenshots`, `appEventVideoClips`, `placements`
- `fields[appStoreVersionLocalizations]` — `[string]`: Additional fields to include for each App Store version localization resource returned by the response.
  **Allowed values:** `description`, `locale`, `keywords`, `marketingUrl`, `promotionalText`, `supportUrl`, `whatsNew`, `appStoreVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`, `placements`
- `fields[appCustomProductPageLocalizations]` — `[string]`: Additional fields to include for each app custom product page localization resource returned by the response.
  **Allowed values:** `locale`, `promotionalText`, `appCustomProductPageVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`, `placements`
- `fields[appStoreVersionExperimentTreatmentLocalizations]` — `[string]`: Additional fields to include for each App Store version experiment treatment localization resource returned by the response.
  **Allowed values:** `locale`, `appStoreVersionExperimentTreatment`, `appScreenshotSets`, `appPreviewSets`, `placements`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `image`, `video`, `appEventLocalization`, `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`

## Response Codes

- `200` OK — `AppAssetLibraryPlacementResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## Mentioned In

- [Placing assets on your App Store surfaces](placing-assets-on-your-app-store-surfaces.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/appAssetLibraryPlacements/2e000005-e036-8f0b-8f25-6dbc2baa784a?include=image&fields[appAssetLibraryImages]=referenceName,state
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
  "included" : [ {
    "type" : "appAssetLibraryImages",
    "id" : "f4000005-e036-8f0b-8018-d259974bee61",
    "attributes" : {
      "referenceName" : "Menu screen",
      "state" : "PREPARE_FOR_SUBMISSION"
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraryImages/f4000005-e036-8f0b-8018-d259974bee61"
    }
  } ],
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraryPlacements/2e000005-e036-8f0b-8f25-6dbc2baa784a"
  }
}
```
