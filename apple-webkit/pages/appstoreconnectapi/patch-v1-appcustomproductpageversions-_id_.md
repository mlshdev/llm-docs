> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appcustomproductpageversions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appcustomproductpageversions-_id_)

# Modify a Custom Product Page Version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.5+

Update the name and visibility status of an app custom product page.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appCustomProductPageVersions/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app custom product page version resource ID from the [List Custom Product Page Versions](get-v1-appcustomproductpages-_id_-appcustomproductpageversions.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppCustomProductPageVersionUpdateRequest`

## Response Codes

- `200` OK — `AppCustomProductPageVersionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
PATCH https://appstoreconnect.apple.com/v1/appCustomProductPageVersions/372e5398-047b-4793-951b-2935d8578ab2
{
    "data": {
        "type": "appCustomProductPageVersions",
        "id": "372e5398-047b-4793-951b-2935d8578ab2",
        "attributes": {
            "deepLink": "https://example.com/deeplink"
        }
    }
}
```

**Response**

```json
{
  "data" : {
    "type" : "appCustomProductPageVersions",
    "id" : "372e5398-047b-4793-951b-2935d8578ab2",
    "attributes" : {
      "version" : "3",
      "state" : "PREPARE_FOR_SUBMISSION",
      "deepLink" : "https://example.com/deeplink"
    },
    "relationships" : {
      "appCustomProductPageLocalizations" : {
        "links" : {
          "self" : "https://appstoreconnect.apple.com/v1/appCustomProductPageVersions/372e5398-047b-4793-951b-2935d8578ab2/relationships/appCustomProductPageLocalizations",
          "related" : "https://appstoreconnect.apple.com/v1/appCustomProductPageVersions/372e5398-047b-4793-951b-2935d8578ab2/appCustomProductPageLocalizations"
        }
      }
    },
    "links" : {
      "self" : "https://appstoreconnect.apple.com/v1/appCustomProductPageVersions/372e5398-047b-4793-951b-2935d8578ab2"
    }
  },
  "links" : {
    "self" : "https://appstoreconnect.apple.com/v1/appCustomProductPageVersions/372e5398-047b-4793-951b-2935d8578ab2"
  }
}
```

## See Also

### Endpoints

- [Read Custom Product Page Version Information](get-v1-appcustomproductpageversions-_id_.md): Get information about a specific app custom product page version.
- [List Custom Product Page Versions](get-v1-appcustomproductpages-_id_-appcustomproductpageversions.md): List the versions for a custom product page version.
- [List Custom Product Pages Localizations](get-v1-appcustomproductpageversions-_id_-appcustomproductpagelocalizations.md): List all localizations for an app custom product page.
- [List localization IDs for a custom product page version](get-v1-appcustomproductpageversions-_id_-relationships-appcustomproductpagelocalizations.md): Get a list of localization IDs for a specific custom product page version.
- [Create a Custom Product Page Version](post-v1-appcustomproductpageversions.md): Add a version for your app custom product page.
