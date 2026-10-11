> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appassetlibraryvideos-_id_-placements

# List related placements

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.5+

List the placements that reuse an app asset library video.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appAssetLibraryVideos/{id}/placements
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `filter[placementType]` — `[string]`: Filter the returned app asset library placements by placement type.
  **Allowed values:** `APP_SCREENSHOT`, `IMESSAGE_APP_SCREENSHOT`, `APP_PREVIEW`, `PRODUCT_PAGE_HEADER_ASSET`, `APP_STORE_SEARCH_RESULTS_ASSET`, `SEARCH_RESULTS_ADS_ASSET`, `TODAY_TAB_ADS_ASSET`, `EVENT_CARD_ASSET`, `EVENT_DETAILS_PAGE_ASSET`, `RETENTION_MESSAGE_ASSET`
- `filter[placementGroup]` — `[string]`: Filter the returned app asset library placements by placement group.
- `filter[state]` — `[string]`: Filter the returned app asset library placements by state.
  **Allowed values:** `ASSET_PROCESSING`, `FAILED`, `PARENT_PREPARE_FOR_SUBMISSION`, `PARENT_READY_FOR_REVIEW`, `PARENT_WAITING_FOR_REVIEW`, `PARENT_IN_REVIEW`, `PARENT_APPROVED`
- `filter[image]` — `[string]`: Filter the returned app asset library placements by image.
- `filter[appEventLocalization]` — `[string]`: Filter the returned app asset library placements by in-app event localization.
- `filter[appStoreVersionLocalization]` — `[string]`: Filter the returned app asset library placements by App Store version localization.
- `filter[appCustomProductPageLocalization]` — `[string]`: Filter the returned app asset library placements by app custom product page localization.
- `filter[appStoreVersionExperimentTreatmentLocalization]` — `[string]`: Filter the returned app asset library placements by App Store version experiment treatment localization.
- `filter[id]` — `[string]`: Filter the returned app asset library placements by resource ID.
- `sort` — `[string]`: Attributes by which to sort.
  **Allowed values:** `createdDate`, `-createdDate`, `lastModifiedDate`, `-lastModifiedDate`, `placementGroupPosition`, `-placementGroupPosition`
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
- `limit` — `integer`: The maximum number of app asset library placement resources to return.
  **Maximum:** `200`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `image`, `video`, `appEventLocalization`, `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`

## Response Codes

- `200` OK — `AppAssetLibraryPlacementsResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## Mentioned In

- [Uploading and managing video assets](uploading-and-managing-video-assets.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/appAssetLibraryVideos/3b100005-e036-8f0b-8021-77aa41c6b502/placements?limit=1
```

**Response**

```json
{
  "data" : [ {
    "type" : "appAssetLibraryPlacements",
    "id" : "2e000005-e036-8f0b-8f25-6dbc2baa784a",
    "attributes" : {
      "mediaType" : "VIDEO",
      "placementType" : "APP_PREVIEW",
      "placementGroup" : "IPHONE_DYNAMIC_ISLAND_LARGE_PROFILE",
      "createdDate" : "2026-08-11T22:45:27Z",
      "lastModifiedDate" : "2026-08-11T22:45:27Z",
      "state" : "PARENT_PREPARE_FOR_SUBMISSION",
      "stateDetails" : null
    },
    "relationships" : {
      "video" : {
        "data" : {
          "type" : "appAssetLibraryVideos",
          "id" : "3b100005-e036-8f0b-8021-77aa41c6b502"
        }
      }
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraryPlacements/2e000005-e036-8f0b-8f25-6dbc2baa784a"
    }
  } ],
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/appAssetLibraryVideos/3b100005-e036-8f0b-8021-77aa41c6b502/placements"
  },
  "meta" : {
    "paging" : {
      "total" : 1,
      "limit" : 1
    }
  }
}
```

## See Also

### Getting videos and reading information

- [Read an app asset library video](get-v1-appassetlibraryvideos-_id_.md): Get information about an app asset library video.
- [List the placement IDs for an app asset library video](get-v1-appassetlibraryvideos-_id_-relationships-placements.md): Get a list of placement resource IDs for a specific app asset library video.
