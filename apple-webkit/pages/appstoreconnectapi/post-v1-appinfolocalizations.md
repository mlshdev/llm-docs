> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appinfolocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appinfolocalizations)

# Create an app info localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Add app-level localized information for a new locale.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appInfoLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `AppInfoLocalizationCreateRequest`

## Response Codes

- `201` Created — `AppInfoLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 3.7 release notes](app-store-connect-api-3-7-release-notes.md)

<a id="Discussion"></a>

## Discussion

Use this endpoint to add localized app information for a new locale. Be sure to use [Create an app store version localization](post-v1-appstoreversionlocalizations.md) to add the same locale to the version as well.

> **Important**

>  If the App Store version and the app info don’t have the same set of localizations, you will receive an erorr when you submit the version to the App Store.

<a id="Add-Localized-App-Information-in-US-English"></a>

### Add Localized App Information in US English

**Request**

```
POST https://api.appstoreconnect.apple.com/v1/appInfoLocalizations

{
  "data": {
    "type": "appInfoLocalizations",
    "attributes": {
      "locale": "en-US",
      "name": "Forest Explorer",
      "subtitle": "Hikes, trails, and maps",
      "privacyPolicyUrl": "https://forestexplorer.apple.com/privacy-simple"
    },
    "relationships": {
      "appInfo": {
        "data": {
          "type": "appInfos",
          "id": "9c8e7e2b-07a8-45d9-8951-948507275bc6"
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
    "type": "appInfoLocalizations",
    "id": "9c8e7e2b-07a8-45d9-8951-948507275bc6",
    "attributes": {
      "locale": "en-GB",
      "name": "Forest Explorer",
      "subtitle": "Hikes, trails, and maps",
      "privacyPolicyUrl": "https://forestexplorer.apple.com/privacy-simple",
      "privacyPolicyText": null
    },
    "relationships": {
      "appInfo": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appInfoLocalizations/74ae3739-d321-4f83-afc3-3b66043ff163/relationships/appInfo",
          "related": "https://api.appstoreconnect.apple.com/v1/appInfoLocalizations/74ae3739-d321-4f83-afc3-3b66043ff163/appInfo"
        }
      }
    },
    "links": {
      "self": "https://api.appstoreconnect.apple.com/v1/appInfoLocalizations/74ae3739-d321-4f83-afc3-3b66043ff163"
    }
  },
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/appInfoLocalizations/74ae3739-d321-4f83-afc3-3b66043ff163"
  }
}
```

## See Also

### Creating, Modifying, and Deleting Localized App Information

- [Modify an app info localization](patch-v1-appinfolocalizations-_id_.md): Modify localized app-level information for a particular language.
- [Delete an app info localization](delete-v1-appinfolocalizations-_id_.md): Delete an app information localization that is associated with an app.
