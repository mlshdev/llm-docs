> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appstoreversionlocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appstoreversionlocalizations)

# Create an app store version localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Add localized version-level information for a new locale.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `AppStoreVersionLocalizationCreateRequest`

## Response Codes

- `201` Created — `AppStoreVersionLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

Use this endpoint to add localized version information for a new locale. Be sure to use [Create an app info localization](post-v1-appinfolocalizations.md) to add the same locale to the version as well.

> **Important**

>  If the App Store version and the app info don’t have the same set of localizations, you will receive an erorr when you submit the version to the App Store.

<a id="Add-Localized-App-Store-Version-Information-in-US-English"></a>

### Add Localized App Store Version Information in US English

**Request**

```
POST https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations

{
  "data": {
    "type": "appStoreVersionLocalizations",
    "attributes": {
      "locale": "en-US",
      "description": "Go wild and discover trails, parks and off-the-beaten-track terrain with Forest Explorer. Whether you’re bushwalking in the outback or looking for a quick local hike, Forest Explorer has thousands of trails and destinations from around the globe to explore.",
      "keywords": "hiking, trails, backcountry, parks, path, terrain, forest",
      "marketingUrl": "https://www.apple.com/forestexplorer",
      "promotionalText": "Get Forest Explorer free for a limited time.",
      "supportUrl": "https://support.apple.com",
      "whatsNew": "Now includes trails in Europe and South America"
    },
    "relationships": {
      "appStoreVersion": {
        "data": {
          "type": "appStoreVersions",
          "id": "54457681-4b65-4071-a636-ea66cb98c8e9"
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
    "type": "appStoreVersionLocalizations",
    "id": "af806ced-8826-4a9d-8a0f-9f3402ce3629",
    "attributes": {
      "locale": "en-US",
      "description": "Go wild and discover trails, parks and off-the-beaten-track terrain with Forest Explorer. Whether you’re bushwalking in the outback or looking for a quick local hike, Forest Explorer has thousands of trails and destinations from around the globe to explore.",
      "keywords": "hiking, trails, backcountry, parks, path, terrain, forest",
      "marketingUrl": "https://www.apple.com/forestexplorer",
      "promotionalText": "Get Forest Explorer free for a limited time.",
      "supportUrl": "https://support.apple.com",
      "whatsNew": "Now includes trails in Europe and South America"
    },
    "relationships": {
      "appStoreVersion": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/af806ced-8826-4a9d-8a0f-9f3402ce3629/relationships/appStoreVersion",
          "related": "https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/af806ced-8826-4a9d-8a0f-9f3402ce3629/appStoreVersion"
        }
      },
      "appScreenshotSets": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/af806ced-8826-4a9d-8a0f-9f3402ce3629/relationships/appScreenshotSets",
          "related": "https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/af806ced-8826-4a9d-8a0f-9f3402ce3629/appScreenshotSets"
        }
      },
      "appPreviewSets": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/af806ced-8826-4a9d-8a0f-9f3402ce3629/relationships/appPreviewSets",
          "related": "https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/af806ced-8826-4a9d-8a0f-9f3402ce3629/appPreviewSets"
        }
      }
    },
    "links": {
      "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/af806ced-8826-4a9d-8a0f-9f3402ce3629"
    }
  },
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/af806ced-8826-4a9d-8a0f-9f3402ce3629"
  }
}

```

## See Also

### Creating, Modifying, and Deleting Version Localizations

- [Modify an app store version localization](patch-v1-appstoreversionlocalizations-_id_.md): Modify localized version-level information for a particular language.
- [Delete an app store version localization](delete-v1-appstoreversionlocalizations-_id_.md): Delete a language from your version metadata.
