> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appcustomproductpagelocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appcustomproductpagelocalizations)

# Create a Custom Product Page Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Add a localization for your app custom product page.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `AppCustomProductPageLocalizationCreateRequest`

## Response Codes

- `201` Created — `AppCustomProductPageLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
POST https://appstoreconnect.apple.com/v1/appCustomProductPageLocalizations
{
    "data": {
        "type": "appCustomProductPageLocalizations",
        "attributes": {
            "locale": "en-CA",
            "promotionalText": "There will be so much fun."
        },
        "relationships": {
            "appCustomProductPageVersion": {
                "data": {
                    "type": "appCustomProductPageVersions",
                    "id": "46e3a412-7248-43f8-a6bf-cf445eafa3ef"
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
    "type" : "appCustomProductPageLocalizations",
    "id" : "0ff34f9c-e2f9-4317-a3e5-44e012c2ffbc",
    "attributes" : {
      "locale" : "en-CA",
      "promotionalText" : "There will be so much fun."
    },
    "relationships" : {
      "appScreenshotSets" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/0ff34f9c-e2f9-4317-a3e5-44e012c2ffbc/relationships/appScreenshotSets",
          "related" : "https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/0ff34f9c-e2f9-4317-a3e5-44e012c2ffbc/appScreenshotSets"
        }
      },
      "appPreviewSets" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/0ff34f9c-e2f9-4317-a3e5-44e012c2ffbc/relationships/appPreviewSets",
          "related" : "https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/0ff34f9c-e2f9-4317-a3e5-44e012c2ffbc/appPreviewSets"
        }
      }
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/0ff34f9c-e2f9-4317-a3e5-44e012c2ffbc"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations"
  }
}
```

## See Also

### Managing localizations

- [List Custom Product Pages Localizations](get-v1-appcustomproductpageversions-_id_-appcustomproductpagelocalizations.md): List all localizations for an app custom product page.
- [Read Custom Product Page Localization Information](get-v1-appcustomproductpagelocalizations-_id_.md): Get information about a specific app custom product page localization.
- [Modify Custom Product Page Localization Information](patch-v1-appcustomproductpagelocalizations-_id_.md): Update the promotional text for an app custom product page localization.
- [Delete an App Custom Product Page Localization](delete-v1-appcustomproductpagelocalizations-_id_.md): Delete localized metadata that you configured for a custom product page.
